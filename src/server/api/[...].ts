import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  // Get the runtimeconfig proxy url
  const proxyUrl = useRuntimeConfig().myProxyUrl
  // check the path
  const path = event.path.replace(/^\/api\//, '')
  const target = joinURL(proxyUrl, path)
  const opts = {
    headers: {
      'x-forwarded-for': '',
      'x-forwarded-port': '',
      'x-forwarded-proto': '',
    },
  }
  // proxy it!
  return proxyRequest(event, target, opts)
})