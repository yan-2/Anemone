import { DB } from '../utility'

export default defineEventHandler
(async (
) => {
  const resp = await DB.from('employee').select('*')
  let data =await Promise.all(resp.data.map(async (item: any)=>{
    // Search the related services and projects
    const relatedService = await DB.from('employee_services').select('*').eq('employee_id', item.id)
    const relatedProj = await DB.from('employee_proj').select('*').eq('employee_id', item.id)
    const serviceIDs = relatedService.data.map((item: any)=>{
      return item.service_id
    })
    const projIDs = relatedProj.data.map((item: any)=>{
      return item.proj_id
    })
    // Fetch detailed info for services and projects
    let service = []
    let project = []
    if(serviceIDs.length){
      let serviceResp = await DB.from('service').select('*').in('id', serviceIDs)
      service = serviceResp.data
    }
    if(projIDs.length){
      let projResp = await DB.from('project').select('*').in('id', projIDs)
      project = projResp.data
    }
    return {
      ...item,
      service,
      project
    }
  }))
  return {
    data,
  }
})
