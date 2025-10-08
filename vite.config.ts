import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [svelte(), viteSingleFile()],
  base: './',
  build: {
    target: 'es2019',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: { output: { manualChunks: undefined } },
  },
});
