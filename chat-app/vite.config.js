import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3001,
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Fix the typo here!
        changeOrigin: true,
        secure: false, // Add this if using HTTP (disable SSL verification)
      },
    },
    
    
  }
})
