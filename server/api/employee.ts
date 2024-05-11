import { DB } from '../utility'

export default defineEventHandler
(async (
) => {
  const resp = await DB.from('employee').select('*')
  // let data = resp.data.map(async (item: { id: any })=>{
  //   // search the related projs
  //   // console.log(item.id)
  //   let serviceIDs = await DB.from('employee_services').select('*').eq('employee_id', item.id)
  //   console.log(serviceIDs)
  // })
  return {
    data: resp.data,
  }
})
