import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    terserOptions: {
      compress: {
        drop_console: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'babylon-core': ['@babylonjs/core'],
          'babylon-loaders': ['@babylonjs/loaders']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
