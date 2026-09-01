import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const CARD_WIDTH = 800;
const PHOTO_MAX_WIDTH = 1600;
const LOGO_MAX_WIDTH = 640;
const AVATAR_SIZE = 128;
const SCHEMA_AVATAR_SIZE = 512;
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const logoNames = new Set([
  'boston-university-terrier-secondary-logo.png',
  'mit-world-peace-university-logo.png',
  'ecs-logo.jpg',
]);

async function writeWebp(image, dest, quality = 82) {
  await mkdir(path.dirname(dest), { recursive: true });
  await image.webp({ quality, effort: 6 }).toFile(dest);
  return sharp(dest).metadata();
}

async function optimizePhoto(source, destDir, baseName) {
  const meta = await sharp(source).metadata();
  const width = meta.width ?? PHOTO_MAX_WIDTH;
  const fullWidth = Math.min(width, PHOTO_MAX_WIDTH);
  const fullPath = path.join(destDir, `${baseName}.webp`);
  const fullMeta = await writeWebp(
    sharp(source).resize({ width: fullWidth, withoutEnlargement: true }),
    fullPath,
  );

  if ((fullMeta.width ?? fullWidth) > CARD_WIDTH + 40) {
    const cardPath = path.join(destDir, `${baseName}-800.webp`);
    await writeWebp(
      sharp(source).resize({ width: CARD_WIDTH, withoutEnlargement: true }),
      cardPath,
    );
  }
}

async function optimizeLogo(source, dest) {
  await writeWebp(
    sharp(source).resize({ width: LOGO_MAX_WIDTH, withoutEnlargement: true }),
    dest,
    90,
  );
}

async function copyExperienceSources() {
  const fromDir = path.join(root, 'public/images/experience');

  try {
    await readdir(fromDir);
  } catch {
    return;
  }
  const toDir = path.join(root, 'src/images/experience');
  await mkdir(toDir, { recursive: true });

  const files = await readdir(fromDir);
  const pngs = files.filter((name) => name.endsWith('.png'));

  for (const name of pngs) {
    const source = path.join(fromDir, name);
    const baseName = name.replace(/\.png$/i, '');
    await optimizePhoto(source, toDir, baseName);
  }
}

async function optimizeContentRasters() {
  const dir = path.join(root, 'src/images');
  const files = await readdir(dir);

  for (const name of files) {
    if (!/\.(jpg|jpeg|png)$/i.test(name)) {
      continue;
    }

    if (name.startsWith('profile-avatar')) {
      continue;
    }

    const source = path.join(dir, name);
    const baseName = name.replace(/\.(jpg|jpeg|png)$/i, '');

    if (logoNames.has(name)) {
      await optimizeLogo(source, path.join(dir, `${baseName}.webp`));
      continue;
    }

    await optimizePhoto(source, dir, baseName);
  }
}

async function optimizeAvatars() {
  const source = path.join(root, 'src/images/profile-avatar.png');
  await writeWebp(
    sharp(source).resize({ width: AVATAR_SIZE, height: AVATAR_SIZE, fit: 'cover' }),
    path.join(root, 'src/images/profile-avatar.webp'),
    84,
  );

  await sharp(source)
    .resize({ width: SCHEMA_AVATAR_SIZE, height: SCHEMA_AVATAR_SIZE, fit: 'cover' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(root, 'public/profile-avatar.jpg'));
}

async function optimizeOgImage() {
  await sharp(path.join(root, 'public/og-image.png'))
    .resize({ width: OG_WIDTH, height: OG_HEIGHT, fit: 'cover' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(root, 'public/og-image.jpg'));
}

await copyExperienceSources();
await optimizeContentRasters();
await optimizeAvatars();
await optimizeOgImage();

console.log('Optimized WebP/JPEG assets written.');
