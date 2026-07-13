import sharp from 'sharp';
import { mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'new content/Tattoo Studio Bilder';
const OUT = 'public/images/studio';
mkdirSync(OUT, { recursive: true });

const mapping = [
  {
    srcFile: 'WhatsApp Image 2026-07-07 at 22.34.35.jpeg',
    destFile: 'tattoo-studio-amorsnadel-kamenz-dresden-atelier-1.webp'
  },
  {
    srcFile: 'WhatsApp Image 2026-07-07 at 22.34.58.jpeg',
    destFile: 'tattoo-studio-amorsnadel-kamenz-dresden-atelier-2.webp'
  }
];

for (const item of mapping) {
  const srcPath = join(SRC, item.srcFile);
  const destPath = join(OUT, item.destFile);
  
  const meta = await sharp(srcPath).metadata();
  await sharp(srcPath)
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(destPath);

  const origSize = (statSync(srcPath).size / 1024).toFixed(1);
  const newSize = (statSync(destPath).size / 1024).toFixed(1);
  console.log(`${item.srcFile} [${meta.width}x${meta.height}] (${origSize} KB) -> ${item.destFile} (${newSize} KB)`);
}

console.log('Studio images converted and compressed successfully.');
