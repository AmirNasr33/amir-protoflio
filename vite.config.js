import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/amir-protoflio/',  // ✅ match your GitHub repo name
  plugins: [react()],        // ✅ only react plugin needed
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
