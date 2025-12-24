import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import packageJson from './package.json'

const getGitHash = () => {
  try {
    return JSON.stringify(execSync('git rev-parse --short HEAD').toString().trim())
  } catch (error) {
    console.warn('Failed to retrieve commit hash:', error)
    return '"unknown"'
  }
}

const getAppVersion = () => {
  try {
    return JSON.stringify(packageJson.version)
  } catch (error) {
    console.warn('Failed to retrieve app version:', error)
    return '"unknown"'
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/mbits/', // <--- I ADDED THIS LINE HERE (Line 28)

  define: {
    'import.meta.env.GIT_COMMIT': getGitHash(),
    'import.meta.env.APP_VERSION': getAppVersion()
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
        globDirectory: 'dist/',
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        cleanupOutdatedCaches: true
      },
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'mBITs', // Changed from Fevela
        short_name: 'mBITs', // Changed from Fevela
        icons: [
          {
            src: '/mbits/pwa-512x512.png', // Added /mbits/ prefix
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/mbits/pwa-192x192.png', // Added /mbits/ prefix
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/mbits/pwa-512x512.png', // Added /mbits/ prefix
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/mbits/pwa-192x192.png', // Added /mbits/ prefix
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/mbits/pwa-monochrome.svg', // Added /mbits/ prefix
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'monochrome'
          }
        ],
        start_url: '/mbits/', // <--- CHANGED FROM '/' TO '/mbits/'
        display: 'standalone',
        background_color: '#000000', // Changed to Black for your theme
        theme_color: '#000000',      // Changed to Black for your theme
        description: packageJson.description
      }
    })
  ]
})
