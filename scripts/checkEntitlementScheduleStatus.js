import fs from 'fs'
import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec)

const outputDir = './src/entitlement-schedules'
const progressPath = './tmp/entitlement-schedule-progress.json'

console.log('╔══════════════════════════════════════════════════════════╗')
console.log('║   Entitlement Schedule Download Status Check            ║')
console.log('╚══════════════════════════════════════════════════════════╝\n')

// Check if download is running and show detailed progress
const progressData = fs.existsSync(progressPath) 
  ? JSON.parse(fs.readFileSync(progressPath, 'utf-8')) 
  : null

try {
  const { stdout } = await execPromise('ps aux | grep "getEntitlementSchedules.js" | grep -v grep')
  if (stdout.trim()) {
    console.log('✅ Download process is RUNNING\n')
    
    if (progressData) {
      console.log('📈 Progress Details:')
      console.log(`   PID: ${progressData.pid}`)
      console.log(`   Processing: ${progressData.currentIndex}/${progressData.total} (${progressData.percentComplete}% complete)`)
      console.log(`   Last update: ${new Date(progressData.lastUpdate).toLocaleString()}`)
      console.log('\n   Statistics:')
      console.log(`   - Created: ${progressData.stats.success}`)
      console.log(`   - Skipped: ${progressData.stats.skipped}`)
      console.log(`   - Errors: ${progressData.stats.errors}`)
      
      if (progressData.processedSchedules && progressData.processedSchedules.length > 0) {
        console.log('\n   Recent schedules:')
        const recent = progressData.processedSchedules.slice(-3)
        recent.forEach(sched => {
          const status = sched.processed ? '✓' : '✗'
          console.log(`   ${status} ${sched.fileName}`)
        })
      }
    } else {
      const lines = stdout.trim().split('\n')
      lines.forEach(line => {
        const parts = line.split(/\s+/)
        const pid = parts[1]
        console.log(`   PID: ${pid}`)
        console.log(`   (Progress file not yet available)`)
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

// Check current entitlement schedules
if (fs.existsSync(outputDir)) {
  try {
    const files = fs.readdirSync(outputDir).filter(f => f.endsWith('.md'))
    
    console.log('📊 Current Entitlement Schedules:')
    console.log(`   Total markdown files: ${files.length}`)
    console.log(`   Location: ${outputDir}`)
    
    if (files.length > 0) {
      console.log('\n   Available schedules:')
      files.slice(0, 10).forEach(file => {
        const filePath = `${outputDir}/${file}`
        const stats = fs.statSync(filePath)
        const lastModified = stats.mtime.toLocaleDateString()
        console.log(`   - ${file.replace('.md', '')} (updated: ${lastModified})`)
      })
      
      if (files.length > 10) {
        console.log(`   ... and ${files.length - 10} more`)
      }
    }
  } catch (e) {
    console.log('⚠️  Error reading entitlement schedules directory:', e.message)
  }
} else {
  console.log('❌ No entitlement schedules directory found')
  console.log(`   Expected location: ${outputDir}`)
  console.log('   Run "npm run getEntitlementSchedules" to download schedules')
}

console.log('\n' + '─'.repeat(60))
console.log('\n💡 Usage:')
console.log('   Download schedules:  npm run getEntitlementSchedules')
console.log('   Check status:        npm run checkEntitlementScheduleStatus')
console.log('   Abort download:      npm run abortEntitlementSchedule')
console.log('─'.repeat(60) + '\n')
