import fs from 'fs'
import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec)
const progressPath = './tmp/download-progress.json'

console.log('╔══════════════════════════════════════════════════════════╗')
console.log('║          Abort Entitlements Download                    ║')
console.log('╚══════════════════════════════════════════════════════════╝\n')

// Check if download is running
let downloadProcessFound = false
let progressData = null

if (fs.existsSync(progressPath)) {
  progressData = JSON.parse(fs.readFileSync(progressPath, 'utf-8'))
}

try {
  const { stdout } = await execPromise('ps aux | grep "getEntitlements.js" | grep -v grep')
  if (stdout.trim()) {
    downloadProcessFound = true
    const lines = stdout.trim().split('\n')
    
    console.log('🛑 Found running download process:\n')
    
    lines.forEach(line => {
      const parts = line.split(/\s+/)
      const pid = parts[1]
      const args = line.match(/getEntitlements\.js\s+(\d+)\s+(\d+)/)
      
      if (args) {
        console.log(`   PID: ${pid}`)
        console.log(`   Range: PROD${args[1].padStart(5, '0')} → PROD${args[2].padStart(5, '0')}`)
        
        if (progressData) {
          console.log(`   Current position: PROD${progressData.currentProdNum.toString().padStart(5, '0')}`)
          console.log(`   Progress: ${progressData.percentComplete}% complete`)
          console.log(`   Entitlements found: ${progressData.entitlementsFound}`)
        }
      }
    })
    
    console.log('\n' + '─'.repeat(60))
    console.log('\n⚠️  Attempting to stop the process...\n')
    
    // Kill the process
    const pids = lines.map(line => line.split(/\s+/)[1])
    for (const pid of pids) {
      try {
        await execPromise(`kill ${pid}`)
        console.log(`✓ Sent termination signal to PID ${pid}`)
      } catch (e) {
        console.log(`✗ Failed to stop PID ${pid}: ${e.message}`)
      }
    }
    
    // Wait a moment for the process to terminate
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Verify it stopped
    try {
      const { stdout: verifyStdout } = await execPromise('ps aux | grep "getEntitlements.js" | grep -v grep')
      if (verifyStdout.trim()) {
        console.log('\n⚠️  Process may still be running. Try force kill with:')
        console.log(`   kill -9 ${pids.join(' ')}`)
      } else {
        console.log('\n✅ Download process successfully stopped!')
        
        // Clean up progress file
        if (fs.existsSync(progressPath)) {
          fs.unlinkSync(progressPath)
          console.log('✓ Progress file cleaned up')
        }
        
        console.log('\n💾 Your data has been saved to:')
        console.log('   src/_data/entitlements.json')
        console.log('\n💡 You can resume from where you left off by running:')
        if (progressData) {
          console.log(`   npm run getEntitlements ${progressData.rangeStart} ${progressData.rangeEnd}`)
        } else {
          console.log(`   npm run getEntitlements <start> <end>`)
        }
      }
    } catch (e) {
      console.log('\n✅ Download process successfully stopped!')
      
      // Clean up progress file
      if (fs.existsSync(progressPath)) {
        fs.unlinkSync(progressPath)
        console.log('✓ Progress file cleaned up')
      }
      
      console.log('\n💾 Your data has been saved to:')
      console.log('   src/_data/entitlements.json')
      console.log('\n💡 You can resume from where you left off by running:')
      if (progressData) {
        console.log(`   npm run getEntitlements ${progressData.rangeStart} ${progressData.rangeEnd}`)
      } else {
        console.log(`   npm run getEntitlements <start> <end>`)
      }
    }
    
  } else {
    console.log('⏸️  No download process currently running')
    
    // Check for stale progress file
    if (progressData) {
      console.log('\n⚠️  Found stale progress file from previous run:')
      console.log(`   PID: ${progressData.pid} (no longer running)`)
      console.log(`   Range: PROD${progressData.rangeStart.toString().padStart(5, '0')} → PROD${progressData.rangeEnd.toString().padStart(5, '0')}`)
      console.log(`   Last position: PROD${progressData.currentProdNum.toString().padStart(5, '0')}`)
      console.log(`   Progress: ${progressData.percentComplete}% complete`)
      
      console.log('\n🧹 Cleaning up stale progress file...')
      fs.unlinkSync(progressPath)
      console.log('✓ Progress file cleaned up')
    }
  }
} catch (error) {
  console.log('⏸️  No download process currently running')
  
  // Check for stale progress file
  if (progressData) {
    console.log('\n⚠️  Found stale progress file from previous run:')
    console.log(`   PID: ${progressData.pid} (no longer running)`)
    console.log(`   Range: PROD${progressData.rangeStart.toString().padStart(5, '0')} → PROD${progressData.rangeEnd.toString().padStart(5, '0')}`)
    console.log(`   Last position: PROD${progressData.currentProdNum.toString().padStart(5, '0')}`)
    console.log(`   Progress: ${progressData.percentComplete}% complete`)
    
    console.log('\n🧹 Cleaning up stale progress file...')
    fs.unlinkSync(progressPath)
    console.log('✓ Progress file cleaned up')
  }
}

console.log('\n' + '─'.repeat(60) + '\n')
