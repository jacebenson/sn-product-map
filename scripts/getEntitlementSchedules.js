import { exec } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'
import readline from 'readline'

const execPromise = promisify(exec)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (query) => new Promise((resolve) => rl.question(query, resolve))

console.log('╔══════════════════════════════════════════════════════════╗')
console.log('║     ServiceNow Entitlement Schedules Downloader         ║')
console.log('╚══════════════════════════════════════════════════════════╝')

async function downloadAndProcess() {
  const startTime = Date.now()
  const tmpDir = './tmp'
  const pdfDir = `${tmpDir}/pdfs`
  const outputDir = './src/entitlement-schedules'
  const htmlFile = `${tmpDir}/entitlements-packages.html`
  const mdFile = `${tmpDir}/entitlements-packages.md`
  const pdfLinksFile = `${tmpDir}/pdf-links.txt`
  
  // Create directories
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true })
  }
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true })
  }
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  
  try {
    // Step 1: Download with wget
    console.log('\n📥 Step 1/5: Downloading page with wget...')
    console.log('   URL: https://www.servicenow.com/products/entitlements-packages.html')
    
    const wgetCmd = `wget --quiet --user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" -O ${htmlFile} https://www.servicenow.com/products/entitlements-packages.html`
    
    await execPromise(wgetCmd)
    const htmlStats = fs.statSync(htmlFile)
    console.log(`   ✓ Downloaded: ${(htmlStats.size / 1024).toFixed(1)} KB`)
    
    // Step 2: Convert to markdown with pandoc
    console.log('\n📝 Step 2/5: Converting HTML to Markdown with pandoc...')
    
    await execPromise(`pandoc ${htmlFile} -f html -t markdown -o ${mdFile}`)
    const mdStats = fs.statSync(mdFile)
    console.log(`   ✓ Converted: ${(mdStats.size / 1024).toFixed(1)} KB`)
    
    // Step 3: Extract PDF links (both absolute and relative)
    console.log('\n🔗 Step 3/5: Extracting PDF links...')
    
    // Get absolute URLs (starting with http)
    const { stdout: absoluteUrls } = await execPromise(`grep -i "\\.pdf" ${mdFile} | grep -o 'http[^)]*\\.pdf' | sort -u`)
    const absoluteLinks = absoluteUrls.trim().split('\n').filter(link => link.length > 0)
    
    // Get relative URLs (starting with /content/dam)
    const { stdout: relativeUrls } = await execPromise(`grep -o '/content/dam/[^)]*\\.pdf' ${mdFile} | sort -u`)
    const relativeLinks = relativeUrls.trim().split('\n').filter(link => link.length > 0)
    
    // Convert relative URLs to absolute
    const baseUrl = 'https://www.servicenow.com'
    const allLinks = [
      ...absoluteLinks,
      ...relativeLinks.map(link => baseUrl + link)
    ]
    
    // Remove duplicates
    const uniqueLinks = [...new Set(allLinks)].sort()
    
    fs.writeFileSync(pdfLinksFile, uniqueLinks.join('\n'))
    console.log(`   ✓ Found ${uniqueLinks.length} PDF links`)
    
    // Step 4: Check which PDFs need to be downloaded manually
    console.log('\n📄 Step 4/5: Checking for PDFs...')
    console.log('─'.repeat(60))
    
    const missingPdfs = []
    const existingPdfs = []
    
    for (const pdfUrl of uniqueLinks) {
      const fileName = pdfUrl.split('/').pop()
      const pdfPath = `${pdfDir}/${fileName}`
      
      if (fs.existsSync(pdfPath)) {
        const stats = fs.statSync(pdfPath)
        if (stats.size > 0) {
          existingPdfs.push(fileName)
        } else {
          missingPdfs.push({ url: pdfUrl, fileName })
        }
      } else {
        missingPdfs.push({ url: pdfUrl, fileName })
      }
    }
    
    console.log(`✓ Found ${existingPdfs.length} existing PDFs`)
    console.log(`⚠️  Missing ${missingPdfs.length} PDFs`)
    
    // If there are missing PDFs, ask user to download them
    if (missingPdfs.length > 0) {
      console.log('\n' + '─'.repeat(60))
      console.log('\n📥 MANUAL DOWNLOAD REQUIRED')
      console.log('\nPlease download the following PDFs to: ' + pdfDir + '/\n')
      
      missingPdfs.forEach((pdf, i) => {
        console.log(`${i + 1}. ${pdf.fileName}`)
        console.log(`   ${pdf.url}\n`)
      })
      
      console.log('─'.repeat(60))
      console.log('\n💡 TIP: You can use a browser or wget to download these files.')
      console.log('   Example: wget -O ' + pdfDir + '/FILENAME.pdf "URL"\n')
      
      const answer = await question('Press ENTER when all PDFs are downloaded (or type "skip" to continue without them): ')
      
      if (answer.toLowerCase() === 'skip') {
        console.log('\n⏭️  Skipping PDF downloads. Will create placeholder pages.')
      } else {
        // Re-check which PDFs are now available
        console.log('\n🔍 Re-checking for PDFs...')
        const stillMissing = []
        
        for (const pdf of missingPdfs) {
          const pdfPath = `${pdfDir}/${pdf.fileName}`
          if (!fs.existsSync(pdfPath) || fs.statSync(pdfPath).size === 0) {
            stillMissing.push(pdf)
          } else {
            existingPdfs.push(pdf.fileName)
          }
        }
        
        if (stillMissing.length > 0) {
          console.log(`   ⚠️  Still missing ${stillMissing.length} PDFs. Will create placeholders for these.`)
        } else {
          console.log(`   ✓ All PDFs found!`)
        }
      }
    }
    
    // Step 5: Convert PDFs to clean markdown
    console.log('\n📝 Step 5/5: Converting PDFs to clean markdown...')
    console.log('─'.repeat(60))
    
    let convertStats = { created: 0, skipped: 0, errors: 0, placeholders: 0 }
    
    for (let i = 0; i < uniqueLinks.length; i++) {
      const pdfUrl = uniqueLinks[i]
      const fileName = pdfUrl.split('/').pop()
      const pdfPath = `${pdfDir}/${fileName}`
      const baseName = fileName.replace('.pdf', '')
      const outputPath = `${outputDir}/${baseName}.md`
      
      const title = baseName
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      // Skip if markdown already exists
      if (fs.existsSync(outputPath)) {
        console.log(`[${i + 1}/${uniqueLinks.length}] ⏭️  Skipped: ${baseName}.md (already exists)`)
        convertStats.skipped++
        continue
      }
      
      // Check if PDF exists and has content
      const pdfExists = fs.existsSync(pdfPath) && fs.statSync(pdfPath).size > 0
      
      if (!pdfExists) {
        // Create placeholder
        const placeholder = `---
title: ${title}
pdfUrl: ${pdfUrl}
---

# ${title}

[📥 Download Original PDF](${pdfUrl})

**Note:** This PDF needs to be downloaded manually and converted. The PDF contains detailed entitlement schedule information.

To view the complete entitlement schedule, please download the PDF using the link above.
`
        fs.writeFileSync(outputPath, placeholder, 'utf-8')
        console.log(`[${i + 1}/${uniqueLinks.length}] 📄 Placeholder: ${baseName}.md (PDF not available)`)
        convertStats.placeholders++
        continue
      }
      
      try {
        // Convert PDF to text using pdftotext (clean output without layout preservation)
        const textPath = `${pdfPath}.txt`
        await execPromise(`pdftotext "${pdfPath}" "${textPath}"`)
        
        // Read the extracted text
        let content = fs.readFileSync(textPath, 'utf-8')
        
        // Clean up temp file
        fs.unlinkSync(textPath)
        
        // Basic cleanup: remove excessive blank lines
        content = content
          .split('\n')
          .reduce((acc, line) => {
            // Don't add more than 2 consecutive blank lines
            if (line.trim() === '') {
              if (acc.length === 0 || acc[acc.length - 1] !== '') {
                acc.push('')
              }
            } else {
              acc.push(line)
            }
            return acc
          }, [])
          .join('\n')
        
        // Prepend frontmatter
        const frontmatter = `---
title: ${title}
pdfUrl: ${pdfUrl}
---

# ${title}

[📥 Download Original PDF](${pdfUrl})

---

`
        
        content = frontmatter + content
        fs.writeFileSync(outputPath, content, 'utf-8')
        
        const mdStats = fs.statSync(outputPath)
        console.log(`[${i + 1}/${uniqueLinks.length}] ✓ Converted: ${baseName}.md (${(mdStats.size / 1024).toFixed(1)} KB)`)
        convertStats.created++
      } catch (error) {
        console.log(`[${i + 1}/${uniqueLinks.length}] ✗ Error: ${baseName} - ${error.message}`)
        convertStats.errors++
        
        // Create a fallback placeholder if conversion fails
        const fallback = `---
title: ${title}
pdfUrl: ${pdfUrl}
---

# ${title}

[📥 Download Original PDF](${pdfUrl})

**Note:** PDF conversion failed. Please download the PDF to view the content.
`
        fs.writeFileSync(outputPath, fallback, 'utf-8')
      }
    }
    
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1)
    
    console.log('─'.repeat(60))
    console.log('\n✅ Processing Complete!')
    console.log(`   Total time: ${totalTime}s`)
    console.log(`   Converted: ${convertStats.created}`)
    console.log(`   Placeholders: ${convertStats.placeholders}`)
    console.log(`   Skipped: ${convertStats.skipped}`)
    console.log(`   Errors: ${convertStats.errors}`)
    console.log(`   Total: ${uniqueLinks.length}`)
    
    console.log('\n📁 Output:')
    console.log(`   HTML: ${htmlFile}`)
    console.log(`   Source markdown: ${mdFile}`)
    console.log(`   PDF links: ${pdfLinksFile}`)
    console.log(`   PDFs: ${pdfDir}/`)
    console.log(`   Markdown pages: ${outputDir}/`)
    
    console.log('\n💡 Next steps:')
    console.log('   - Run "npm run build" to generate the site')
    console.log('   - Check markdown files in src/entitlement-schedules/')
    console.log('   - Run "npm run cleanupMarkdown" to regenerate from PDFs')
    console.log('─'.repeat(60) + '\n')
    
    rl.close()
    
  } catch (error) {
    console.error('\n❌ Error:', error.message)
    console.log('\n💡 Troubleshooting:')
    console.log('   - Make sure wget is installed: sudo apt-get install wget')
    console.log('   - Make sure pandoc is installed: sudo apt-get install pandoc')
    console.log('   - Make sure pdftotext is installed: sudo apt-get install poppler-utils')
    rl.close()
    process.exit(1)
  }
}

// Run the script
downloadAndProcess()
