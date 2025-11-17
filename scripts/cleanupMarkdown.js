import { exec } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'

const execPromise = promisify(exec)

console.log('╔══════════════════════════════════════════════════════════╗')
console.log('║     Markdown Cleanup: Convert to GFM                    ║')
console.log('╚══════════════════════════════════════════════════════════╝')

async function cleanupMarkdown() {
  const pdfDir = './tmp/pdfs'
  const outputDir = './src/entitlement-schedules'
  
  if (!fs.existsSync(pdfDir)) {
    console.error('❌ Error: PDF directory not found:', pdfDir)
    console.log('   Please run "npm run getEntitlementSchedules" first.')
    process.exit(1)
  }
  
  if (!fs.existsSync(outputDir)) {
    console.error('❌ Error: Output directory not found:', outputDir)
    process.exit(1)
  }
  
  console.log('\n📂 Scanning for PDFs...')
  const pdfFiles = fs.readdirSync(pdfDir)
    .filter(f => f.endsWith('.pdf'))
    .sort()
  
  console.log(`   Found ${pdfFiles.length} PDFs\n`)
  
  let stats = { converted: 0, skipped: 0, errors: 0 }
  
  console.log('🔄 Converting PDFs to clean GFM markdown...')
  console.log('─'.repeat(60))
  
  for (let i = 0; i < pdfFiles.length; i++) {
    const pdfFile = pdfFiles[i]
    const pdfPath = path.join(pdfDir, pdfFile)
    const baseName = pdfFile.replace('.pdf', '')
    const outputPath = path.join(outputDir, `${baseName}.md`)
    
    // Generate title from filename
    const title = baseName
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    // Determine PDF URL (try to get it from existing file if it exists)
    let pdfUrl = `https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/${pdfFile}`
    
    if (fs.existsSync(outputPath)) {
      try {
        const existingContent = fs.readFileSync(outputPath, 'utf-8')
        const urlMatch = existingContent.match(/pdfUrl:\s*(.+)/)
        if (urlMatch) {
          pdfUrl = urlMatch[1].trim()
        }
      } catch (e) {
        // Ignore errors reading existing file
      }
    }
    
    try {
      // Convert PDF to text (no layout preservation - cleaner output)
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
      
      // Add frontmatter and header
      const frontmatter = `---
title: ${title}
pdfUrl: ${pdfUrl}
---

# ${title}

[📥 Download Original PDF](${pdfUrl})

---

`
      
      content = frontmatter + content
      
      // Write the cleaned markdown
      fs.writeFileSync(outputPath, content, 'utf-8')
      
      const mdStats = fs.statSync(outputPath)
      console.log(`[${i + 1}/${pdfFiles.length}] ✓ ${baseName}.md (${(mdStats.size / 1024).toFixed(1)} KB)`)
      stats.converted++
      
    } catch (error) {
      console.log(`[${i + 1}/${pdfFiles.length}] ✗ Error: ${baseName} - ${error.message}`)
      stats.errors++
    }
  }
  
  console.log('─'.repeat(60))
  console.log('\n✅ Cleanup Complete!')
  console.log(`   Converted: ${stats.converted}`)
  console.log(`   Errors: ${stats.errors}`)
  console.log(`   Total: ${pdfFiles.length}`)
  console.log(`\n📁 Output: ${outputDir}/`)
  console.log('─'.repeat(60) + '\n')
}

cleanupMarkdown().catch(error => {
  console.error('\n❌ Fatal error:', error.message)
  process.exit(1)
})
