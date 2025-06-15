import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-05',
  runtimeConfig: {
    serviceRootUri: 'https://istsos.org/v4/v1.1'
  },
  devtools: { enabled: true },
  extends: ['core'],
  future: {
    compatibilityVersion: 4,
  },
  imports: {
    autoImport: true
  },
  nitro: {
    preset: "deno",
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
    optimizeDeps: {
      exclude: ['@mswjs/interceptors']
    },
    ssr: {
      noExternal: ['@mswjs/interceptors']
    }
  },
  hooks: {
    'nitro:build:before': (nitro) => {
      nitro.options.moduleSideEffects.push('@mswjs/interceptors')
    }
  },
  modules: [
    'nuxt-llms',
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@artmizu/nuxt-prometheus'
  ],
  llms: {
    domain: 'https://istsos4-admin-v1.deno.dev/', // Update this to your production domain
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
