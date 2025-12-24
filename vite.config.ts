import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mbits/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
        globDirectory: 'dist/',
        cleanupOutdatedCaches: true
      },
      manifest: {
        name: 'mBITs',
        short_name: 'mBITs',
        description: 'Cyberpunk Nostr Client',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        start_url: '/mbits/',
        icons: [
          {
            src: '/mbits/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/mbits/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
