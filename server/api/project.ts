import { DB } from '../utility'

export default defineEventHandler
(async (
) => {
  const resp = await DB.from('project').select('*')
  return {
    data: resp.data,
  }
})
