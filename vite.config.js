import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Configuration pour Vercel
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    
    // Optimisation des assets
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react']
        }
      }
    }
  },
  
  // Configuration serveur de développement
  server: {
    port: 5173,
    open: true
  },
  
  // Optimisation des dépendances
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
})