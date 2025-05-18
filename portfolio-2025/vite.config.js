import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://stevendindl.github.io/portfolio-2025/', 
  plugins: [react()],
})
