import fetch from 'node-fetch'
import fs from 'fs'

const batchSize = 100
const delayBetweenBatches = 50 // 1 second
const delayBetweenRequests = (200 + Math.random() * 300) * .5 // 200-500ms

// This script will download entitlement PDFs and build the JSON mapping
// No markdown conversion needed - just build the JSON

let getLastEntitlementNumberFound = () => {
  // read the existing entitlements file to find the last PROD number mapped
  const outputPath = './src/_data/entitlements.json'
  const tmpPath = './tmp/download-progress.json'
  if(fs.existsSync(outputPath)) {
    try {
      const existingData = JSON.parse(fs.readFileSync(outputPath, 'utf-8'))
      let maxProdNum = -1
      existingData.forEach(ent => {
        ent.productCodes.forEach(code => {
          const match = code.match(/PROD(\d{5})/)
          if(match) {
            const num = parseInt(match[1])
            if(num > maxProdNum) {
              maxProdNum = num
            }
          }
        })
      })
      if(fs.existsSync(tmpPath)) {
        try {
          const progressData = JSON.parse(fs.readFileSync(tmpPath, 'utf-8'))
          if(progressData.currentProdNum && progressData.currentProdNum > maxProdNum) {
            maxProdNum = progressData.currentProdNum
          }
        } catch(e) {
          // ignore
        }
      }
      return maxProdNum
    } catch(e) {
      console.log('   Could not read existing entitlements file')
      return -1
    }
  }
  return -1
}
console.log('Last entitlement number found:', getLastEntitlementNumberFound())

// Process URLs sequentially with delays to avoid rate limiting
let batchProcess = async (urls, skus, batchIteration, total) => {
  console.log(`Processing batch ${batchIteration + 1}/${total}...`)
  let results = []
  
  for(let url of urls) {
    try {
      // Add random delay between requests (200-500ms)
      //const delay = 200 + Math.random() * 300
      const delay = delayBetweenRequests
      await new Promise(resolve => setTimeout(resolve, delay))
      
      let response = await fetch(url, {
        redirect: 'follow',
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
          'accept-language': 'en-US,en;q=0.9',
          'accept-encoding': 'gzip, deflate, br',
          'referer': 'https://www.servicenow.com/',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'same-origin',
          'upgrade-insecure-requests': '1'
        }
      })
      
      if(response.status === 404) { 
        results.push({ status: "404", url })
        continue
      }
      
      if(response.status === 200) {
        // Use buffer() for better compatibility with ServiceNow
        let data = await response.buffer()
        let finalFileName = response.url.split('/').pop()
        
        // Skip page-not-found and non-PDF files
        if(finalFileName.includes('page-not-found') || !finalFileName.endsWith('.pdf')) {
          results.push({ status: "skipped", url })
          continue
        }
        
        // Track SKU mapping
        let prodCode = url.split('/').pop().replace('.pdf', '')
        if(skus[finalFileName]) {
          if(!skus[finalFileName].includes(prodCode)) {
            skus[finalFileName].push(prodCode)
          }
        } else {
          skus[finalFileName] = [prodCode]
        }
        
        results.push({ status: "mapped", url, file: finalFileName })
        continue
      }
      
      results.push({ status: response.status, url })
    } catch(error) {
      results.push({ status: `error: ${error.message}`, url })
    }
  }
  
  return results
}

// Get command line arguments
const args = process.argv.slice(2)
const start = parseInt(args[0]) || 0
const end = parseInt(args[1]) || 30000

console.log('╔══════════════════════════════════════════════════════════╗')
console.log('║     ServiceNow Entitlements Mapper (Fast Mode)          ║')
console.log('╚══════════════════════════════════════════════════════════╝')
console.log(`Range: PROD${start.toString().padStart(5, '0')} → PROD${end.toString().padStart(5, '0')}`)

if(args[0] && !args[1]) {
  console.log('❌ Error: You must provide both start and end range')
  console.log('Usage: npm run download-entitlements <start> <end>')
  console.log('Example: npm run download-entitlements 0 30000')
  process.exit(1)
}

(async () => {
  const startTime = Date.now()
  let skus = {}
  
  // Load existing data if available (for resume capability)
  const outputPath = './src/_data/entitlements.json'
  const progressPath = './tmp/download-progress.json'
  
  // Create tmp directory if it doesn't exist
  if(!fs.existsSync('./tmp')) {
    fs.mkdirSync('./tmp')
  }
  
  if(fs.existsSync(outputPath)) {
    try {
      const existingData = JSON.parse(fs.readFileSync(outputPath, 'utf-8'))
      // Rebuild skus map from existing data
      existingData.forEach(ent => {
        const fileName = ent.name + '.pdf'
        skus[fileName] = ent.productCodes
      })
      console.log(`\n⚡ Loaded existing data: ${existingData.length} entitlements`)
      console.log('   (Will update with any new discoveries)')
      console.log('─'.repeat(60))
    } catch(e) {
      console.log('   Could not load existing data, starting fresh')
    }
  }
  
  // Build URL list
  let urls = []
  for(let i = start; i <= end; i++) {
    urls.push(`https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/other-document/entitlements/PROD${i.toString().padStart(5, '0')}.pdf`)
  }
  
  // Process in batches (smaller batches with longer delays)
  let batchCount = Math.ceil(urls.length / batchSize)
  let stats = { mapped: 0, notFound: 0, skipped: 0, errors: 0 }
  
  console.log(`\nProcessing ${urls.length.toLocaleString()} URLs in ${batchCount} batches of ${batchSize}`)
  // Processing 30,001 URLs in 301 batches of 100
  // Estimated time: ~26 minutes (with delays to avoid rate limiting)
  // lets check that math... 30,001 / 100 = 300.01 batches
  // each batch takes ~5 seconds (100 requests * ~50ms + 1 second delay)
  // 300 batches * 5 seconds = 1500 seconds = 25 minutes
  // add some buffer time for network variability
  // so ~26 minutes seems accurate
  console.log('Estimated time: ~' + Math.ceil(batchCount * 5 / 60) + ' minutes (with delays to avoid rate limiting)')
  console.log('─'.repeat(60))
  
  for(let i = 0; i < batchCount; i++) {
    let batchStart = i * batchSize
    let batchEnd = batchStart + batchSize
    let batchUrls = urls.slice(batchStart, batchEnd)
    
    // Calculate current PROD number being processed
    const currentProdNum = start + batchStart
    
    let results = await batchProcess(batchUrls, skus, i, batchCount)
    
    // Collect statistics
    results.forEach(r => {
      if(r.status === 'mapped') stats.mapped++
      else if(r.status === '404') stats.notFound++
      else if(r.status === 'skipped') stats.skipped++
      else {
        stats.errors++
        // Log first few errors for debugging
        if(stats.errors <= 3) {
          console.log(`  ⚠️  Error: ${r.status}`)
        }
      }
    })
    
    // Save progress after every batch to avoid data loss
    let skuArray = Object.keys(skus)
      .filter(key => !key.includes('page-not-found') && key.endsWith('.pdf'))
      .map(key => ({
        name: key.replace('.pdf', ''),
        source: `https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/other-document/entitlements/${key}`,
        productCodes: skus[key]
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
    
    fs.writeFileSync(outputPath, JSON.stringify(skuArray, null, 2))
    
    // Write progress tracking file
    const progressData = {
      pid: process.pid,
      rangeStart: start,
      rangeEnd: end,
      currentBatch: i + 1,
      totalBatches: batchCount,
      currentProdNum: currentProdNum,
      batchSize: batchSize,
      stats: stats,
      entitlementsFound: skuArray.length,
      lastUpdate: new Date().toISOString(),
      percentComplete: ((i + 1) / batchCount * 100).toFixed(1)
    }
    fs.writeFileSync(progressPath, JSON.stringify(progressData, null, 2))
    
    // Show progress
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
    const rate = (stats.mapped / (Date.now() - startTime) * 1000).toFixed(1)
    console.log(`[${i+1}/${batchCount}] Mapped: ${stats.mapped} | Saved: ${skuArray.length} | Time: ${elapsed}s | Rate: ${rate}/sec`)
    
    // Delay between batches (longer to avoid rate limiting)
    if(i < batchCount - 1) {
      await new Promise(resolve => setTimeout(resolve, delayBetweenBatches))
    }
  }
  
  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1)
  
  console.log('─'.repeat(60))
  console.log('✓ Discovery Complete!')
  console.log(`  Total time: ${totalTime}s`)
  console.log(`  Entitlements mapped: ${stats.mapped}`)
  console.log(`  Not found (404): ${stats.notFound}`)
  console.log(`  Skipped/Invalid: ${stats.skipped}`)
  console.log(`  Errors: ${stats.errors}`)
  
  // Final count from the saved file
  const finalData = JSON.parse(fs.readFileSync(outputPath, 'utf-8'))
  
  console.log(`\n✓ Final entitlements saved: ${finalData.length}`)
  console.log(`  Location: ${outputPath}`)
  console.log(`  Note: Progress saved after each batch to prevent data loss`)
  console.log('─'.repeat(60))
  
  // Clean up progress file when done
  if(fs.existsSync(progressPath)) {
    fs.unlinkSync(progressPath)
  }
})()
