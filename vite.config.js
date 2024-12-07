import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,  // Set the port to Render's default port
    host: '0.0.0.0',  // Make sure the server is accessible externally
  },
})
