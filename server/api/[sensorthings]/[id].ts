import { getOneEntityType } from "../../utils/sta"

export default defineEventHandler(async (event) => {
    const type = getRouterParam(event, 'sensorthings')
    const id = getRouterParam(event, 'id')

    if(!type || !id){
        throw createError({
            statusCode: 400,
            message: `Error parsing uri components ,${type}, & ${id}`
        })
    }
    
    const result = await getOneEntityType(event, type, Number(id))

    return result
})