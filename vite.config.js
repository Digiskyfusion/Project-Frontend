import { defineConfig } from 'vite';

export default defineConfig({
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
