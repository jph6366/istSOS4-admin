// plugins/myPiniaPlugin.ts
import { createPiniaOrmAxios } from '@pinia-orm/axios'
import { setActivePinia, type PiniaPluginContext } from 'pinia'
import { createORM } from 'pinia-orm'
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
  // const baseUrl = useBaseUrl()
  $pinia.use(createORM({
    pinia: { storeType: 'setupStore'},
    plugins: [
      // createPiniaOrmAxios({
      //   axios,
      //   headers: { 
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      //    },
      //   //  baseURL: baseUrl.value
      // }),
    ],
  }))
  // axios.interceptors.request.use((config) => {
  //   if (config.url && !config.url.startsWith('http')) {
  //     config.baseURL = baseUrl.value
  //   }
  //   return config
  // }, (error) => {
  //   return Promise.reject(error)
  // })
  $pinia.use(ProperPiniaPlugin)
  setActivePinia($pinia)
})