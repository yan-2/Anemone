<!-- HTML structure -->
<template>
  <div class="flex justify-center items-center px-6 py-3">
    <!-- Card -->
    <div class="max-w-3xl rounded-2xl bg-neutral border border-primary shadow-md text-center">
      <div
        v-if="project"
        class="p-12"
      >
        <!-- Title -->
        <h1 class="font-rosamila text-5xl text-primary mb-2">
          {{ project.name }}
        </h1>
        <!-- Subtitle -->
        <h2 class="text-secondary mb-8">
          {{ project.tag }}
        </h2>
        <!-- Project -->
        <div class="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 w-full items-center">
          <!-- Description -->
          <div class="text-left self-start h-full">
            <h3 class="font-bold mb-1">
              Description
            </h3>
            <p class="text-primary">
              {{ project.description }}
            </p>
          </div>
          <!-- Image -->
          <div class="flex justify-center">
            <img
              :src="project.pic"
              :alt=" 'This image represents the ' + project.name + ' project'"
            >
          </div>
        </div>
      </div>
      <!-- Loading -->
      <p
        v-else
        class="p-6"
      >
        Loading...
      </p>
    </div>
  </div>
</template>

<!-- Typescript code -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

interface Project {
  id: number
  name: string
  description: string
  tag: string
  pic: string
}

const route = useRoute()
const id = parseInt(route.params.id as string, 10)
const projects = ref<Project[]>([])

// Fetches project data
const fetchProjects = async () => {
  const { data } = await useFetch<{ data: Project[] }>('/api/project')
  if (data.value) {
    projects.value = data.value.data
  }
}
fetchProjects()

// Sets page title
const project = computed(() => {
  const foundProject = projects.value.find(e => e.id === id)
  if (foundProject) {
    useHead({ title: foundProject.name })
  }
  return foundProject
})
</script>
