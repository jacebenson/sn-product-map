import fs from 'fs'
import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec)
const progressPath = './tmp/entitlement-schedule-progress.json'

console.log('╔══════════════════════════════════════════════════════════╗')
console.log('║       Abort Entitlement Schedule Download               ║')
console.log('╚══════════════════════════════════════════════════════════╝\n')

// Check if download is running
let downloadProcessFound = false
let progressData = null

if (fs.existsSync(progressPath)) {
  progressData = JSON.parse(fs.readFileSync(progressPath, 'utf-8'))
}

try {
  const { stdout } = await execPromise('ps aux | grep "getEntitlementSchedules.js" | grep -v grep')
  if (stdout.trim()) {
    downloadProcessFound = true
    const lines = stdout.trim().split('\n')
    
    console.log('🛑 Found running download process:\n')
    
    lines.forEach(line => {
      const parts = line.split(/\s+/)
      const pid = parts[1]
      
      console.log(`   PID: ${pid}`)
      
      if (progressData) {
        console.log(`   Progress: ${progressData.currentIndex}/${progressData.total} (${progressData.percentComplete}% complete)`)
        console.log(`   Created: ${progressData.stats.success}`)
        console.log(`   Skipped: ${progressData.stats.skipped}`)
        console.log(`   Errors: ${progressData.stats.errors}`)
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
      const { stdout: verifyStdout } = await execPromise('ps aux | grep "getEntitlementSchedules.js" | grep -v grep')
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
        
        console.log('\n💾 Entitlement schedules processed so far are saved in:')
        console.log('   src/entitlement-schedules/')
        console.log('\n💡 You can resume by running:')
        console.log('   npm run getEntitlementSchedules')
        console.log('   (Already processed files will be skipped)')
      }
    } catch (e) {
      console.log('\n✅ Download process successfully stopped!')
      
      // Clean up progress file
      if (fs.existsSync(progressPath)) {
        fs.unlinkSync(progressPath)
        console.log('✓ Progress file cleaned up')
      }
      
      console.log('\n💾 Entitlement schedules processed so far are saved in:')
      console.log('   src/entitlement-schedules/')
      console.log('\n💡 You can resume by running:')
      console.log('   npm run getEntitlementSchedules')
      console.log('   (Already processed files will be skipped)')
    }
    
  } else {
    console.log('⏸️  No download process currently running')
    
    // Check for stale progress file
    if (progressData) {
      console.log('\n⚠️  Found stale progress file from previous run:')
      console.log(`   PID: ${progressData.pid} (no longer running)`)
      console.log(`   Progress: ${progressData.currentIndex}/${progressData.total} (${progressData.percentComplete}% complete)`)
      console.log(`   Created: ${progressData.stats.success}`)
      
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
    console.log(`   Progress: ${progressData.currentIndex}/${progressData.total} (${progressData.percentComplete}% complete)`)
    console.log(`   Created: ${progressData.stats.success}`)
    
    console.log('\n🧹 Cleaning up stale progress file...')
    fs.unlinkSync(progressPath)
    console.log('✓ Progress file cleaned up')
  }
}

console.log('\n' + '─'.repeat(60) + '\n')
