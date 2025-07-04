import { fileURLToPath } from 'url'
import { resolve } from 'path'

// debug
console.log('Adding layer: maplibre')
export default defineNuxtConfig({
   runtimeConfig: {
      maptilerApiKey: process.env.NUXT_MAPTILER_API_KEY || '',  // Server-side only key
      public: {
         // Make sure it's available on both server and client
         // You can set a default development key here, but for production use environment variables
         maptilerApiKey: process.env.NUXT_PUBLIC_MAPTILER_API_KEY || process.env.NUXT_MAPTILER_API_KEY || '',
      }
  }, 
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
  dir: {
    layouts: 'layouts',
    modules: 'modules',
    pages: 'pages',
    public: 'public',
    shared: 'shared',
  },
  modules: [
    'nuxt-maplibre'
  ],

  // imports: {
  //   dirs: [
  //     'composables/**'
  //   ]
  // },
  // pinia: {
  //   storesDirs: ['stores/**']
  // },
})