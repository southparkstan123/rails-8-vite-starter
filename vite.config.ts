import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    RubyPlugin()
  ],
  server: {
    hmr: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('app/javascript', import.meta.url))
    },
  },
})
