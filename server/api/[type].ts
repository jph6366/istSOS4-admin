import { getAllEntityType } from "../utils/sta"

export default defineEventHandler(async (event) => {
    const type = getRouterParam(event, 'type')
    if(!type) {
        throw createError({
            statusCode: 400,
            message: 'Error parsing uri: invalid entity type'
        })
    }
    
    const result = await getAllEntityType(event, type)

    return result
})