import { DB } from '../utility'

export default defineEventHandler
(async (
) => {
  const resp = await DB.from('service').select('*')
  return {
    data: resp.data,
  }
})
