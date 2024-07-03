<template>
  <div class="flex justify-center items-center px-4 text-center">
    <div class="bg-neutral border border-primary max-w-3xl py-8 px-12 rounded-xl shadow-md z-10">
      <div v-if="project">
        <h2 class="font-rosamila text-5xl text-primary">
          {{ project.name }}
        </h2>
        <p class="text-secondary mb-6">
          {{ project.tag }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-between items-center">
          <div class="text-left">
            <h3 class="font-bold mb-2">
              Description
            </h3>
            <p class="text-primary">
              {{ project.description }}
            </p>
          </div>
          <div class="w-full flex justify-center">
            <img
              :src="project.pic"
              :alt="project.name + ' logo'"
              class="max-w-2xl h-auto object-cover"
            >
          </div>
        </div>
      </div>
      <p v-else>
        Loading...
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const id = parseInt(route.params.id as string, 10)

interface Project {
  id: number
  name: string
  description: string
  tag: string
  pic: string
}

const projects = ref<Project[]>([])

const fetchProjects = async () => {
  const { data } = await useFetch<{ data: Project[] }>('/api/project')
  if (data.value) {
    projects.value = data.value.data
  }
}
fetchProjects()

const project = computed(() => {
  const foundProject = projects.value.find(e => e.id === id)
  if (foundProject) {
    useHead({ title: foundProject.name })
  }
  return foundProject
})
</script>
