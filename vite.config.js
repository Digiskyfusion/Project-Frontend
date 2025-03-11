import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Ensures assets load correctly in deployment
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Move dependencies to vendor.js
          }
        },
      },
    },
    chunkSizeWarningLimit: 500, // Reduce bundle size warning limit
  },
});
