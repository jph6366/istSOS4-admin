import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-01',
  runtimeConfig: {
    // serviceRootUri: 'http://127.0.0.1:8018/istsos4/v1.1/' // dev
    // serviceRootUri: 'https://iot.hamburg.de/v1.1/' // Smart City
    // serviceRootUri: 'https://ogc-demo.k8s.ilt-dmz.iosb.fraunhofer.de/v1.1/'
    // serviceRootUri: 'https://airquality-frost.k8s.ilt-dmz.iosb.fraunhofer.de/v1.1' // Europe Air Quality
    // serviceRootUri: 'https://lubw.k8s.ilt-dmz.iosb.fraunhofer.de/v1.1/' // River & Measuring points in Bade-Wurttemberg
    // serviceRootUri: 'http://api:5000/istsos4/v1.1' // istSOS docker-compose net addr see istSOS4 docker-compose.yml
    // serviceRootUri: 'https://istsos.org/v4/v1.1'
    // serviceRootUri: 'https://labs.waterdata.usgs.gov/sta/v1.1/
    
    // Public runtime config (available client-side)
    public: {
      serviceRootUri: process.env.NUXT_SERVICE_ROOT_URI, 

    }
  },
  devtools: { enabled: true },
  extends: ['core', 'layers'],
  future: {
    compatibilityVersion: 4,
  },
  imports: {
    autoImport: true
  },
  nitro: {
    preset: "deno-deploy",
    routeRules: {
      '/**': { cors: true }
    },
    experimental: {
      asyncContext: true
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'esnext'
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/devtools',
  ],

  typescript: {
    typeCheck: false
  },
  serverDir: 'server'
})
