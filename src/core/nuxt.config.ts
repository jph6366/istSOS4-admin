import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))
// debug
console.log('Adding layer: core')
// site feels like a nice bucket here for non-specific concerns
export default defineNuxtConfig({
  css: [ join(currentDir, './assets/app.css') ],
  dir: {
    assets: 'assets',
    plugins: 'plugins',
  },
  modules: [ '@pinia/nuxt' ],
  pinia: {
    storesDirs: ['stores/**']
  },
})