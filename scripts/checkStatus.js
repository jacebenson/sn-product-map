import fs from 'fs'
import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec)

const outputPath = './src/_data/entitlements.json'
const progressPath = './tmp/download-progress.json'

console.log('╔══════════════════════════════════════════════════════════╗')
console.log('║          Entitlements Download Status Check             ║')
console.log('╚══════════════════════════════════════════════════════════╝\n')

// Check if download is running and show detailed progress
const progressData = fs.existsSync(progressPath) 
  ? JSON.parse(fs.readFileSync(progressPath, 'utf-8')) 
  : null

try {
  const { stdout } = await execPromise('ps aux | grep "getEntitlements.js" | grep -v grep')
  if (stdout.trim()) {
    console.log('✅ Download process is RUNNING\n')
    
    if (progressData) {
      console.log('📈 Progress Details:')
      console.log(`   PID: ${progressData.pid}`)
      console.log(`   Range: PROD${progressData.rangeStart.toString().padStart(5, '0')} → PROD${progressData.rangeEnd.toString().padStart(5, '0')}`)
      console.log(`   Current position: PROD${progressData.currentProdNum.toString().padStart(5, '0')}`)
      console.log(`   Batches: ${progressData.currentBatch}/${progressData.totalBatches} (${progressData.percentComplete}% complete)`)
      console.log(`   Last update: ${new Date(progressData.lastUpdate).toLocaleString()}`)
      console.log('\n   Statistics:')
      console.log(`   - Mapped: ${progressData.stats.mapped}`)
      console.log(`   - Not Found: ${progressData.stats.notFound}`)
      console.log(`   - Skipped: ${progressData.stats.skipped}`)
      console.log(`   - Errors: ${progressData.stats.errors}`)
      console.log(`   - Entitlements found: ${progressData.entitlementsFound}`)
      
      // Calculate estimated time remaining
      const totalUrls = progressData.rangeEnd - progressData.rangeStart + 1
      const urlsProcessed = (progressData.currentBatch - 1) * progressData.batchSize
      const urlsRemaining = totalUrls - urlsProcessed
      const batchesRemaining = Math.ceil(urlsRemaining / progressData.batchSize)
      const estimatedMinutes = Math.ceil(batchesRemaining * 5 / 60)
      console.log(`\n   ⏱️  Estimated time remaining: ~${estimatedMinutes} minutes`)
    } else {
      const lines = stdout.trim().split('\n')
      lines.forEach(line => {
        const parts = line.split(/\s+/)
        const pid = parts[1]
        const args = line.match(/getEntitlements\.js\s+(\d+)\s+(\d+)/)
        if (args) {
          console.log(`   PID: ${pid}`)
          console.log(`   Range: PROD${args[1].padStart(5, '0')} → PROD${args[2].padStart(5, '0')}`)
          console.log(`   (Progress file not yet available)`)
        }
      })
    }
  } else {
    console.log('⏸️  No download process currently running')
    if (progressData) {
      console.log('   ⚠️  Stale progress file found (process may have crashed)')
    }
  }
} catch (error) {
  console.log('⏸️  No download process currently running')
  if (progressData) {
    console.log('   ⚠️  Stale progress file found (process may have crashed)')
  }
}

console.log('\n' + '─'.repeat(60) + '\n')

// Check current entitlements data
if (fs.existsSync(outputPath)) {
  try {
    const data = JSON.parse(fs.readFileSync(outputPath, 'utf-8'))
    const fileStats = fs.statSync(outputPath)
    const lastModified = fileStats.mtime.toLocaleString()
    
    console.log('📊 Current Entitlements Data:')
    console.log(`   Total entitlements: ${data.length}`)
    console.log(`   Last updated: ${lastModified}`)
    console.log(`   File location: ${outputPath}`)
    
    // Calculate total product codes
    const totalProductCodes = data.reduce((sum, ent) => sum + ent.productCodes.length, 0)
    console.log(`   Total product codes mapped: ${totalProductCodes}`)
    
    // Show sample of recent entitlements
    if (data.length > 0) {
      console.log('\n   Recent entitlements:')
      const samples = data.slice(-5)
      samples.forEach(ent => {
        console.log(`   - ${ent.name} (${ent.productCodes.length} codes)`)
      })
    }
  } catch (e) {
    console.log('⚠️  Error reading entitlements file:', e.message)
  }
} else {
  console.log('❌ No entitlements data found')
  console.log(`   Expected location: ${outputPath}`)
}

console.log('\n' + '─'.repeat(60))
console.log('\n💡 Usage:')
console.log('   Start download: npm run getEntitlements <start> <end>')
console.log('   Example:        npm run getEntitlements 0 30000')
console.log('   Check status:   npm run checkStatus')
console.log('   Abort download: npm run abort')
console.log('─'.repeat(60) + '\n')
