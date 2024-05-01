import {DB} from '../utility'

export default defineEventHandler
(async (event
) => {
    const resp = await DB.from('personalinfo').select('*')
    return {
        hello: resp.data
    }
})