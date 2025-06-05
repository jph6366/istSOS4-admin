import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-05',
  components: [
    // override defaults: no path prefix
    { path: '~/src/layers/site/components', pathPrefix: false },
  ],
  devtools: { enabled: false },
  nitro: {
    preset: "deno",
  },

  dir: {
    // site
    layouts: 'src/layers/site/layout',
    pages: 'src/layers/site/pages',
    public: 'src/layers/site/public',
  },
  vite: {
    plugins: [tailwindcss()]
  },
  modules: [// ...
  '@pinia/nuxt', '@nuxt/devtools' ],
  css: ["~/assets/app.css"],
})