
import sharp from 'sharp'
import fs from 'node:fs/promises'

const input = 'src/assets/images/profile.jpg'
const output = 'public/icons'

// Create the icons folder if it doesn't exist
await fs.mkdir(output, { recursive: true })

// Generate standard PWA icons
for (const size of [192, 512]) {
  await sharp(input)
    .resize(size, size, {
      fit: 'cover',
      position: 'attention',
    })
    .png()
    .toFile(`${output}/icon-${size}.png`)
}

// Generate maskable icon
const photo = await sharp(input)
  .resize(400, 400, {
    fit: 'cover',
    position: 'attention',
  })
  .png()
  .toBuffer()

await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: '#101A16',
  },
})
  .composite([
    {
      input: photo,
      gravity: 'centre',
    },
  ])
  .png()
  .toFile(`${output}/icon-512-maskable.png`)

console.log('PWA icons generated successfully!')
