import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Ensures proper path resolution
  server: {
    historyApiFallback: true, // Enables routing fallback for React Router
  },
  build: {
    outDir: "dist", // required by Vercel if not default
  }
});
