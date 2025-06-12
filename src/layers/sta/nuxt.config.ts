import { fileURLToPath } from 'url'
import { resolve } from 'path'

// debug
console.log('Adding layer: sta')
// STA layer for SensorThings API implementation
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
  dir: {
    modules: 'modules',
    public: 'public',
    shared: 'shared',
  },
  nitro: {
    plugins: [
      '~/layers/sta/modules/istsos/runtime/server/plugins/llms-sta.ts'
    ]
  }
  // imports: {
  //   dirs: [
  //     'composables/**'
  //   ]
  // },
  // pinia: {
  //   storesDirs: ['stores/**']
  // },
})