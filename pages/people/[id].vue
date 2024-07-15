<!-- HTML structure -->
<template>
  <div class="flex justify-center px-6 py-3">
    <div
      v-if="employee"
      class="w-full max-w-6xl"
    >
      <div class="text-center">
        <!-- Title -->
        <h1 class="font-rosamila text-5xl text-primary mb-2">
          {{ employee.name }}
        </h1>
        <!-- Subtitle -->
        <h2 class="text-secondary mb-8">
          {{ employee.role }}
        </h2>
        <!-- Boxes -->
        <div class="grid grid-cols-1 max-w-xl xl:grid-cols-3 xl:max-w-full gap-8 w-full">
          <!-- Curriculum -->
          <div class="text-left rounded-2xl bg-neutral border border-primary shadow-md p-6">
            <h3 class="font-bold mb-1">
              Curriculum
            </h3>
            <p class="text-primary">
              {{ employee.cv }}
            </p>
          </div>
          <!-- Image -->
          <div class="flex justify-center items-center">
            <div class="relative w-full aspect-[5/6] rounded-2xl overflow-hidden shadow-md">
              <img
                :src="employee.pic"
                :alt="`This is a picture of the employee called ${employee.name}`"
                class="object-cover w-full h-full"
              >
            </div>
          </div>
          <!-- Activities -->
          <div class="text-left rounded-2xl bg-neutral border border-primary shadow-md p-6">
            <h3 class="font-bold mb-1">
              Role
            </h3>
            <p class="text-primary mb-4">
              {{ employeeFirstName }} is a {{ employee.role.toLowerCase() }} at Anemone
            </p>
            <h3 class="font-bold mb-1">
              Activities
            </h3>
            <p class="text-primary mb-4">
              {{ employeeFirstName }} is involved in the following projects and services:
            </p>
            <!-- Services list -->
            <ul class="space-y-2">
              <li
                v-for="service in employee.service"
                :key="service.id"
              >
                <NuxtLink :to="`/services/${service.id}`">
                  <div class="flex justify-between items-center">
                    <p class="font-bold text-hyperlinks">
                      {{ service.name }}
                    </p>
                    <PhosphorIconCaretRight
                      :size="19"
                      weight="bold"
                      class="text-hyperlinks"
                    />
                  </div>
                </NuxtLink>
              </li>
            </ul>
            <!-- Separator -->
            <hr
              v-if="employee.project.length > 0"
              class="solid my-2 border-secondary/25"
            >
            <!-- Projects list -->
            <ul class="space-y-2">
              <li
                v-for="project in employee.project"
                :key="project.id"
              >
                <NuxtLink :to="`/projects/${project.id}`">
                  <div class="flex justify-between items-center">
                    <p class="font-bold text-hyperlinks">
                      {{ project.name }}
                    </p>
                    <PhosphorIconCaretRight
                      :size="19"
                      weight="bold"
                      class="text-hyperlinks"
                    />
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Loading -->
    <LoadingPlaceholder v-else />
  </div>
</template>

<!-- Typescript code -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import LoadingPlaceholder from '~/components/LoadingPlaceholder.vue'

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
const route = useRoute()
const id = parseInt(route.params.id as string, 10)

const fetchEmployees = async () => {
  const { data } = await useFetch<{ data: Employee[] }>('/api/employee')
  if (data.value) {
    employees.value = data.value.data.map(employee => ({
      ...employee,
      pic: employee.pic.startsWith('/') ? employee.pic : `/${employee.pic}`, // Ensure correct path
    }))
  }
}

fetchEmployees()

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
