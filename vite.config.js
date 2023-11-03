import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dns from 'dns'

dns.setDefaultResultOrder('verbatim')


// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: true
  },
  plugins: [react()],
  resolve:{
    alias:{
      '@/' : '/src/'
    }
  }
})
