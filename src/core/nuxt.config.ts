import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))
// debug
console.log('Adding layer: core')
// site feels like a nice bucket here for non-specific concerns
export default defineNuxtConfig({
  components: [
    {
      // can be relative, alias or absolute
      path: 'components',

      // components organised in sub-folders should not be prefixed
      pathPrefix: false,

      // ensure contact form is accessible in Nuxt content
      // the alternative would be to rename it ContactForm.global.vue
    //   global: true
    },
  ],
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