import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (id.includes('react-dom') || id.includes('/react/')) {
            return 'react-vendor'
          }

          if (id.includes('framer-motion')) {
            return 'animation'
          }

          if (id.includes('lucide-react') || id.includes('react-icons')) {
            return 'icons'
          }

          return undefined
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
