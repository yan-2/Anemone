import { DB } from '../utility'

export default defineEventHandler(async (event) => {
  // Fetch employees
  const { id } = getQuery(event)
  const query = DB.from('employee').select('*').order('id', { ascending: true })

  if (id) {
    query.eq('id', id)
  }
  const resp = await query

  // Process each employee to fetch related services and projects
  const data = await Promise.all(resp.data.map(async (employee) => {
    // Fetch related services and projects for the current employee
    const [relatedService, relatedProj] = await Promise.all([
      DB.from('employee_services').select('*').eq('employee_id', employee.id),
      DB.from('employee_proj').select('*').eq('employee_id', employee.id)
    ])

    // Extract service IDs and project IDs
    const serviceIDs = relatedService.data.map(service => service.service_id)
    const projIDs = relatedProj.data.map(project => project.proj_id)

    // Fetch detailed info for services and projects based on the extracted IDs
    const [serviceResp, projResp] = await Promise.all([
      serviceIDs.length ? DB.from('service').select('*').in('id', serviceIDs) : Promise.resolve({ data: [] }),
      projIDs.length ? DB.from('project').select('*').in('id', projIDs) : Promise.resolve({ data: [] })
    ])

    // Return the employee data along with the related services and projects
    return {
      ...employee,
      service: serviceResp.data,
      project: projResp.data
    }
  }))

  // Return the final data
  return { data }
})
