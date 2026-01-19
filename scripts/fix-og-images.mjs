#!/usr/bin/env node

import { readdir, readFile, rename, stat, writeFile } from "fs/promises";
import { join } from "path";

const OUT_DIR = "out";

const IMAGE_FILES = ["opengraph-image", "twitter-image"];

async function findHtmlFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(fullPath)));
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function fileExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function renameImageFiles() {
  for (const name of IMAGE_FILES) {
    const srcPath = join(OUT_DIR, name);
    const destPath = join(OUT_DIR, `${name}.png`);

    // Skip if already has .png extension
    if (await fileExists(destPath)) {
      console.log(`✓ ${name}.png already exists`);
      continue;
    }

    // Rename if extensionless file exists
    if (await fileExists(srcPath)) {
      await rename(srcPath, destPath);
      console.log(`✓ Renamed ${name} → ${name}.png`);
    } else {
      console.log(`⚠ ${name} not found, skipping`);
    }
  }
}

async function patchHtmlFiles() {
  const htmlFiles = await findHtmlFiles(OUT_DIR);
  console.log(`\nPatching ${htmlFiles.length} HTML file(s)...`);

  for (const file of htmlFiles) {
    let content = await readFile(file, "utf-8");
    let modified = false;

    for (const name of IMAGE_FILES) {
      // Match patterns like: /cv/opengraph-image?hash or /opengraph-image?hash
      // Replace with: /cv/opengraph-image.png?hash or /opengraph-image.png?hash
      // Also skip if already has .png extension
      const regex = new RegExp(`(/${name})(\\.png)?(\\?|"|')`, "g");
      const newContent = content.replace(regex, `/${name}.png$3`);

      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      await writeFile(file, content, "utf-8");
      console.log(`✓ Patched ${file}`);
    }
  }
}

async function main() {
  console.log("Fixing OG image extensions for GitHub Pages...\n");

  try {
    await renameImageFiles();
    await patchHtmlFiles();
    console.log("\n✓ Done!");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
