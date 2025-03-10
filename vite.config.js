import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Move all node_modules to vendor.js
          }
        },
      },
    },
    chunkSizeWarningLimit: 500, // Set a lower warning limit
  },
});
