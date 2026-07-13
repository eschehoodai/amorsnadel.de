import sharp from 'sharp';
import { mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'new content/Tattoo Kurs AmorsNadel';
const OUT = 'public/images/kurse';
mkdirSync(OUT, { recursive: true });

const mapping = [
  {
    srcFile: 'WhatsApp Image 2026-07-07 at 20.34.26 (1).jpeg',
    destFile: 'tattoo-ausbildung-praxis-uebung-dresden-1.webp'
  },
  {
    srcFile: 'WhatsApp Image 2026-07-07 at 20.34.26 (2).jpeg',
    destFile: 'tattoo-kurs-schulung-arbeitsplatz-dresden-2.webp'
  },
  {
    srcFile: 'WhatsApp Image 2026-07-07 at 20.34.26.jpeg',
    destFile: 'tattoo-academy-kunsthaut-ausbildung-dresden-3.webp'
  },
  {
    srcFile: 'WhatsApp Image 2026-07-12 at 18.26.19.jpeg',
    destFile: 'tattoo-studio-ausbildung-amorsnadel-dresden-4.webp'
  }
];

for (const item of mapping) {
  const srcPath = join(SRC, item.srcFile);
  const destPath = join(OUT, item.destFile);
  await sharp(srcPath)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(destPath);

  const origSize = (statSync(srcPath).size / 1024).toFixed(1);
  const newSize = (statSync(destPath).size / 1024).toFixed(1);
  console.log(`${item.srcFile} (${origSize} KB) -> ${item.destFile} (${newSize} KB)`);
}

console.log('Conversion completed successfully.');
