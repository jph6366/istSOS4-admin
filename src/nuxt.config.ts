import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-05', // must be 2025-01-30 or later
  // components: [
  //   // override defaults: no path prefix
  //   { path: '~/src/layers/site/components', pathPrefix: false },
  // ],
  runtimeConfig: {
    myProxyUrl: 'http://127.0.0.1:8018/istsos4/v1.1'
  },
  devtools: { enabled: true },
  extends: [
    'core',
  ],
  future: {
    compatibilityVersion: 4,  // To use these auto-imported shared/utils and shared/types
  },
  imports: {
    autoImport: true
  },
  nitro: {
    preset: "deno",
  },
  vite: {
    plugins: [tailwindcss()]
  },
  modules: [// ...
  '@pinia/nuxt', '@nuxt/devtools', '@artmizu/nuxt-prometheus' ],
  typescript: {
    typeCheck: false
  },
  serverDir: 'server'
})