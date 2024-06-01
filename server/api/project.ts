import {DB} from '../utility'

export default defineEventHandler
(async (event) => {
    const {id} = getQuery(event)
    const query = DB.from('project').select('*')

    if (id) {
        query.eq('id', id)
    }
    const resp = await query
    return {data: resp.data}
})
