import type { H3Event } from "h3"
import { getSensorThingsService } from "../utils/sta"

export default defineEventHandler(async (event: H3Event) => {

    const runtimeConfig = useRuntimeConfig()
    const serviceRootUri = runtimeConfig.public.serviceRootUri

    if(!serviceRootUri){
        throw createError({
            statusCode: 400,
            message: 'No service root URI provided'
        })
    }

    if(!event.context.staService){
        const result = await getSensorThingsService(serviceRootUri)
        event.context.staService = result
    }
})