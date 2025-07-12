import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-05',
  runtimeConfig: {
    // serviceRootUri: 'http://127.0.0.1:8018/istsos4/v1.1' // dev
    // serviceRootUri: 'https://iot.hamburg.de/v1.1/' // Smart City
    // serviceRootUri: 'https://ogc-demo.k8s.ilt-dmz.iosb.fraunhofer.de/v1.1/'
    // serviceRootUri: 'https://airquality-frost.k8s.ilt-dmz.iosb.fraunhofer.de/v1.1' // Europe Air Quality
    // serviceRootUri: 'https://lubw.k8s.ilt-dmz.iosb.fraunhofer.de/v1.1/' // River & Measuring points in Bade-Wurttemberg
    // serviceRootUri: 'http://api:5000/istsos4/v1.1' // istSOS docker-compose net addr see istSOS4 docker-compose.yml
    // serviceRootUri: 'https://istsos.org/v4/v1.1'
    serviceRootUri: 'https://labs.waterdata.usgs.gov/sta/v1.1/'
    ,maptilerApiKey: process.env.NUXT_MAPTILER_API_KEY || '',
    // OpenTelemetry server-side config
    otel: {
      exporterOtlpEndpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
      exporterOtlpHeaders: process.env.OTEL_EXPORTER_OTLP_HEADERS,
      resourceAttributes: process.env.OTEL_RESOURCE_ATTRIBUTES,
      serviceName: process.env.OTEL_SERVICE_NAME,
    },
    
    // Public runtime config (available client-side)
    public: {
      // Public MapTiler key
      maptilerApiKey: process.env.NUXT_PUBLIC_MAPTILER_API_KEY || '',
      // OpenTelemetry public config
      otel: {
        exporterOtlpEndpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
        exporterOtlpHeaders: process.env.OTEL_EXPORTER_OTLP_HEADERS,
        resourceAttributes: process.env.OTEL_RESOURCE_ATTRIBUTES,
        serviceName: process.env.OTEL_SERVICE_NAME,
      }
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
