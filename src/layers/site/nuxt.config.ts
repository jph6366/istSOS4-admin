// debug
console.log('Adding layer: site')
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
  dir: {
    layouts: 'layouts',
    modules: 'modules',
    pages: 'pages',
    public: 'public',
    shared: 'shared',
    plugins: 'plugins'
  },
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  pinia: {
    storesDirs: ['stores/**']
  },
})