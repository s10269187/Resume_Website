import ffmpegPath from 'ffmpeg-static'
import { spawnSync, spawn } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const FFMPEG = ffmpegPath.default ?? ffmpegPath

const videosDir  = path.join(__dirname, 'public', 'videos')
const outputDir  = path.join(__dirname, 'public', 'videos-compressed')
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

const MAX_BYTES  = 95 * 1024 * 1024   // 95 MB safety margin

const toCompress = [
  { input: 'Recycling app.mp4',                output: 'recycling-app.mp4'      },
  { input: 'Fireboy Watergirl.mp4',             output: 'fireboy-watergirl.mp4'  },
  { input: 'AprilSonata.mp4',                   output: 'april-sonata.mp4'       },
  { input: 'STLD_ACursedWish_Walkthrough.mp4',  output: 'a-cursed-wish.mp4'      },
  { input: 'PatternOfThought_Playtest_VR.mkv',  output: 'pattern-of-thought.mp4' },
]

// Parse duration from ffmpeg stderr: "Duration: HH:MM:SS.ss"
function getDuration(filePath) {
  const r = spawnSync(FFMPEG, ['-i', filePath], { encoding: 'utf8' })
  const m = (r.stderr || '').match(/Duration:\s*(\d+):(\d+):([\d.]+)/)
  if (!m) return null
  return parseInt(m[1]) * 3600 + parseInt(m[2]) * 60 + parseFloat(m[3])
}

function runFFmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(FFMPEG, args)
    let stderr = ''
    proc.stderr.on('data', d => {
      stderr += d.toString()
      // Show progress (time=HH:MM:SS)
      const t = stderr.match(/time=(\d+:\d+:[\d.]+)/)
      if (t) process.stdout.write(`\r   progress: ${t[t.length - 1]}    `)
    })
    proc.on('close', code => {
      process.stdout.write('\n')
      if (code === 0) resolve()
      else reject(new Error(`ffmpeg exited with code ${code}\n${stderr.slice(-500)}`))
    })
  })
}

for (const { input, output } of toCompress) {
  const inputPath  = path.join(videosDir, input)
  const outputPath = path.join(outputDir, output)

  if (fs.existsSync(outputPath) && fs.statSync(outputPath).size < MAX_BYTES) {
    console.log(`⏭  Already done: ${output} (${(fs.statSync(outputPath).size/1024/1024).toFixed(1)} MB)`)
    continue
  }

  const inputMB = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(1)
  console.log(`\n🎬 Compressing: ${input} (${inputMB} MB)...`)

  const duration = getDuration(inputPath)
  if (!duration) { console.error('❌ Could not read duration, skipping.'); continue }

  // Target bitrate = (95 MB in bits) / duration  minus 96 kbps audio
  const totalKbps = Math.floor((MAX_BYTES * 8) / duration / 1000)
  const videoKbps = Math.max(totalKbps - 96, 200)
  console.log(`   Duration: ${Math.round(duration)}s  |  video bitrate: ${videoKbps} kbps`)

  try {
    await runFFmpeg([
      '-y', '-i', inputPath,
      '-c:v', 'libx264',
      '-b:v', `${videoKbps}k`,
      '-c:a', 'aac', '-b:a', '96k',
      '-preset', 'fast',
      '-movflags', '+faststart',
      '-pix_fmt', 'yuv420p',
      outputPath,
    ])

    const outMB = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(1)
    console.log(`✅ ${output}: ${outMB} MB`)
  } catch (e) {
    console.error(`❌ Failed: ${e.message.split('\n')[0]}`)
  }
}

console.log('\nAll done! Compressed files saved to public/videos-compressed/')
