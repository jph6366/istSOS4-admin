import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-05',
  runtimeConfig: {
    // serviceRootUri: 'http://127.0.0.1:8018/istsos4/v1.1' // dev
    // serviceRootUri: 'http://api:5000/istsos4/v1.1' // docker-composed network address see istSOS4 docker-compose.yml
    serviceRootUri: 'https://istsos.org/v4/v1.1',
    // API keys that should remain private (server-side only)
    // These will be available in Deno via Deno.env.get() on the server
    maptilerApiKey: '',  // Will be overridden by MAPTILER_API_KEY in Deno Deploy
    // Keys that can be exposed to the client
    public: {
      // If you need to expose any keys to the client side
      deployEnvironment: process.env.NODE_ENV || 'development'
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
  },
  modules: [
    'nuxt-llms',
    '@pinia/nuxt',
    '@nuxt/devtools',
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
      'Built with TypeScript and Nuxt.js (v4 compatible) for type safety and modern development.',
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
