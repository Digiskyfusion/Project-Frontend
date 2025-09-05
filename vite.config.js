import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], //remove tailwind css and used as postcss import
  base: "/", // Ensures proper path resolution
  server: {
    historyApiFallback: true, // Enables routing fallback for React Router
  },
  build: {
    outDir: "dist", // required by Vercel if not default
  }
});
