import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-05', // must be 2025-01-30 or later
  // components: [
  //   // override defaults: no path prefix
  //   { path: '~/src/layers/site/components', pathPrefix: false },
  // ],
  runtimeConfig: {
    // serviceRootUri: 'http://127.0.0.1:8018/istsos4/v1.1' // dev
    // serviceRootUri: 'http://api:5000/istsos4/v1.1' // docker-composed network address see istSOS4 docker-compose.yml
    serviceRootUri: 'https://istsos.org/v4/v1.1' // prod
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
    'nuxt-llms', // automatically generates llms.txt markdown documentation for your Nuxt app
  '@pinia/nuxt', '@nuxt/devtools', '@artmizu/nuxt-prometheus' ],
  llms: {
    domain: 'http://127.0.0.1:3000', // Update this to your production domain
    title: 'istSOS4 Admin Application',
    description: 'A modern Nuxt.js application for managing istSOS4 - an IoT sensor observation service implementing the OGC SensorThings API standard.',
    sections: [
      {
        title: 'Architecture',
        description: 'The application is built using a layered architecture pattern with Nuxt layers for modularity and maintainability.',
        links: [
          {
            title: 'Core Layer',
            description: 'Core functionality including assets, plugins, and shared components',
            href: '/core'
          },
          {
            title: 'Site Layer',
            description: 'General site components, layouts, and pages for non-specific concerns',
            href: '/site'
          },
          {
            title: 'STA Layer',
            description: 'SensorThings API implementation with models, repositories, and components',
            href: '/sta'
          }
        ]
      }
    ],
    notes: [
      'This application uses Deno as the server runtime preset.',
      'Built with TypeScript and Vue 3 for type safety and modern development.',
      'Uses Pinia for state management and TailwindCSS with DaisyUI for styling.'
    ],
    full: {
      title: 'istSOS4 Admin - Complete Documentation',
      description: 'Comprehensive documentation for the istSOS4 Admin application including API references, component documentation, and development guides.'
    }
  },
  typescript: {
    typeCheck: false
  },
  serverDir: 'server'
})