const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function writeIcon(size, outPath) {
  const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#08090B"/>
  <rect x="2.5" y="2.5" width="59" height="59" rx="12" fill="none" stroke="#4F8CFF" stroke-width="2.5"/>
  <text x="32" y="42" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#F4F6F8">AR</text>
</svg>`;

  await sharp(Buffer.from(svg)).png().toFile(outPath);
}

(async () => {
  await writeIcon(32, path.join("src", "app", "icon.png"));
  await writeIcon(32, path.join("public", "favicon.png"));
  await writeIcon(180, path.join("src", "app", "apple-icon.png"));
  await writeIcon(180, path.join("public", "apple-icon.png"));

  // cache-busting versioned copy
  await writeIcon(32, path.join("public", "favicon-ar.png"));

  console.log("Professional AR favicons written");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
