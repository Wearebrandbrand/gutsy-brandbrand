import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import cleanup from '@by-association-only/vite-plugin-shopify-clean';
import fs from 'fs';
import path from 'path';

// Function to get all files recursively
const getFilesRecursively = (dir, extensions) => {
  let results = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath, extensions));
    } else if (extensions.some(ext => file.name.endsWith(ext))) {
      results.push(fullPath);
    }
  });
  return results;
};

// Get all JS and SCSS files
const jsFiles = getFilesRecursively(path.resolve(__dirname, 'theming/js'), ['.js']);
const scssFiles = getFilesRecursively(path.resolve(__dirname, 'theming/scss'), ['.scss']);

// Convert file paths into Rollup input format (separate files)
const inputFiles = {
  ...Object.fromEntries(
    jsFiles.map(file => [
      path.relative(path.resolve(__dirname, 'theming/js'), file).replace(/\//g, '--').replace('.js', ''),
      file
    ])
  ),
  ...Object.fromEntries(
    scssFiles.map(file => [
      path.relative(path.resolve(__dirname, 'theming/scss'), file).replace(/\//g, '--').replace('.scss', '.css'),
      file
    ])
  )
};

export default defineConfig({
  plugins: [
    cleanup(),
    shopify({
      tunnel: false,
      additionalEntrypoints: [
        'theming/js/**/*.js',
        'theming/scss/**/*.scss'
      ]
    })
  ],
  publicDir: false,
  build: {
    emptyOutDir: false,
    manifest: "manifest.json",
    sourcemap: true,
    rollupOptions: {
      input: inputFiles,
      preserveEntrySignatures: 'strict',
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        dir: 'assets' // Ensures files go directly to /assets
      },
      plugins: [
        {
          name: 'debug-rollup',
          buildStart() {
            console.log("✅ Rollup is processing these input files:", Object.keys(inputFiles).length);
          }
        }
      ]
    }
  },
  resolve: {
    alias: {
      '@js': path.resolve(__dirname, 'theming/js'),
      '@scss': path.resolve(__dirname, 'theming/scss')
    }
  },
  server: {
    cors: {
      origin: [
        /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/,
        'https://gutsy-bonfire-dev.myshopify.com'
      ]
    }
  }
});
