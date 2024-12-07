import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,  // Set the port to Render's default port
    host: '0.0.0.0',  // Make sure the server is accessible externally
    proxy: {
      '/forms': {
        target: 'https://getform.io',  // The target API endpoint
        changeOrigin: true,            // Allows for cross-origin requests
        rewrite: (path) => path.replace(/^\/forms/, ''), // Rewrites the path for the proxy to match the API endpoint
      },
    },
  },
});




//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
  //plugins: [react()],
//}) 