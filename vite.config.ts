import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({registerType : 'autoUpdate', injectRegister: 'auto',
  manifest: {
    name: '스도쿠',
    short_name: '스도쿠',
    description: 'My Awesome App description',
    theme_color: '#ffffff',
    icons: [
      {
        src: './images/android-512-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
})]
})
