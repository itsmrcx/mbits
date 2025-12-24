import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/mbits/',
  
  define: {
    'import.meta.env.GIT_COMMIT': JSON.stringify('master'),
    'import.meta.env.APP_VERSION': JSON.stringify('1.0.0')
  },

  plugins: [
    react(), /* <--- SWITCHED BACK TO REACT */
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
        cleanupOutdatedCaches: true
      },
      manifest: {
        name: 'mBITs',
        short_name: 'mBITs',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        start_url: '/mbits/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
