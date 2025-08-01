// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/remate-insumo-manicure/',
  // Optimizaciones de compilación
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  // Optimizaciones de vite
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // Separar vendor chunks para mejor caching
            vendor: ['astro/dist/client/client.js'],
          },
        },
      },
    },
  },
  // Preload crítico
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
