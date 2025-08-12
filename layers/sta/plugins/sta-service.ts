import { useStApi } from "../composables/useStApi"


export default defineNuxtPlugin({
    name: 'sta-service',
    async setup() {
        const staService = useStApi()
        const usgs_water = $fetch.create({
            baseURL: 'https://labs.waterdata.usgs.gov/sta/v1.1/'
        })
        if(import.meta.server){
            const event = useRequestEvent()!
            staService.setServerData(event.context.staService!)
        }

        return {
            provide: {
                usgs_water
            }
        }
    }
})