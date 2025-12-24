import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { execSync } from 'child_process'
import packageJson from './package.json'

// --- HELPER FUNCTIONS (REQUIRED FOR BUILD) ---
const getGitHash = () => {
  try {
    return JSON.stringify(execSync('git rev-parse --short HEAD').toString().trim())
  } catch (error) {
    return '"unknown"'
  }
}

const getAppVersion = () => {
  try {
    return JSON.stringify(packageJson.version)
  } catch (error) {
    return '"unknown"'
  }
}

// --- CONFIGURATION ---
export default defineConfig({
  base: '/mbits/', 
  
  // These definitions are required by the app code
  define: {
    'import.meta.env.GIT_COMMIT': getGitHash(),
    'import.meta.env.APP_VERSION': getAppVersion()
  },

  plugins: [
    vue(),
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
