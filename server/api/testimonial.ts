import { DB } from '../utility'

export default defineEventHandler(async (event) => {
  const { serviceID } = getQuery(event)
  const query = DB.from('testimonial_service').select('*')

  if (serviceID) {
    query.eq('serviceID', serviceID)
  }

  const resp = await query

  return { data: resp.data }
})
