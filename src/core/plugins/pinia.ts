// plugins/myPiniaPlugin.ts
import { createPiniaOrmAxios } from '@pinia-orm/axios'
import type { PiniaPluginContext } from 'pinia'
import { createORM } from 'pinia-orm'
import axios from 'axios'
import { defineNuxtPlugin } from '#app'

function ProperPiniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation) => {
    // react to store changes
    console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`)
  })

  // Note this has to be typed
  return { creationTime: new Date() }
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(createORM({
    plugins: [
      createPiniaOrmAxios({
        axios,
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
         },
         baseURL: useRuntimeConfig().myProxyUrl,
      }),
    ],
  }))
  $pinia.use(ProperPiniaPlugin)
})