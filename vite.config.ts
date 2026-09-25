import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves this repo from /publication-search-concept-1/,
  // not the domain root — every built asset URL needs that prefix or
  // they 404 once deployed. Local dev is unaffected since the dev server
  // itself is still just served at localhost:5194/.
  base: '/publication-search-concept-1/',
  plugins: [react(), tailwindcss()],
  server: { port: 5194, strictPort: true },
})
