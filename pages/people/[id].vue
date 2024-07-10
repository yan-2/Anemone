<template>
  <div class="w-full max-w-7xl mx-auto px-4 text-primary">
    <div v-if="employee">
      <div class="flex items-center justify-center py-4 mb-8 space-y-2">
        <div class="text-center">
          <!-- Title -->
          <div class="font-rosamila text-5xl">
            {{ employee.name }}
          </div>
          <!-- role -->
          <div class="text-secondary-dark">
            {{ employee.role }}
          </div>
        </div>
      </div>
      <!-- First box -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
        <div class="bg-neutral p-6 border border-primary rounded-lg w-full max-w-[425px] h-[400px] min-w-[325px] aspect-[5/6] overflow-hidden relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              :src="employee.pic"
              :alt="`${employee.name}'s profile picture`"
              class="w-full h-full object-cover"
            >
          </div>
        </div>
        <div class="bg-neutral p-6 border border-primary rounded-lg w-full max-w-[425px] h-[400px] min-w-[325px] aspect-[5/6] overflow-auto">
          <h2 class="font-bold text-base mb-4">
            Curriculum Vitae
          </h2>
          <p class="mb-4">
            {{ employee.cv }}
          </p>
        </div>
        <div class="bg-neutral p-6 border border-primary rounded-lg w-full max-w-[425px] h-[400px] min-w-[325px] aspect-[5/6] overflow-auto">
          <h2 class="font-bold text-base mb-4">
            Role
          </h2>
          <p class="mb-4">
            {{ employeeFirstName }} is a {{ employee.role }} at Anemone
          </p>
          <h2 class="font-bold text-base mb-4">
            Activities
          </h2>
          <p class="mb-4">
            {{ employeeFirstName }} is involved in the following projects and services
          </p>
          <div v-if="employee.service && employee.service.length">
            <h3 class="font-semibold text-sm mb-2">Services</h3>
            <ul>
              <li v-for="service in employee.service" :key="service.id">
                <NuxtLink :to="`/services/${service.id}`" class = "text-hyperlinks">{{ service.name }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div v-if="employee.project && employee.project.length">
            <h3 class="font-semibold text-sm mb-2">Projects</h3>
            <ul>
              <li v-for="project in employee.project" :key="project.id">
                <NuxtLink :to="`/projects/${project.id}`" class = "text-hyperlinks">{{ project.name }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const id = parseInt(route.params.id as string, 10)

interface Activities {
  id: number
  name: string
  description: string
}

interface Employee {
  id: number
  name: string
  pic: string
  role: string
  cv: string
  service: Activities[]
  project: Activities[]
}

const employees = ref<Employee[]>([])

const fetchEmployees = async () => {
  const { data } = await useFetch<{ data: Employee[] }>('/api/employee')
  if (data.value) {
    employees.value = data.value.data.map(employee => ({
      ...employee,
      pic: employee.pic.startsWith('/') ? employee.pic : `/${employee.pic}`, // Ensure correct path
    }))
  }
}

onMounted(fetchEmployees)

const employee = computed(() => employees.value.find(e => e.id === id))

const employeeFirstName = computed(() => {
  return employee.value ? employee.value.name.split(' ')[0] : ''
})

watch(employee, (newPerson) => {
  if (newPerson) {
    useHead({
      title: newPerson.name,
    })
  }
})
</script>
