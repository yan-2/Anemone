<template>
  <div class="relative group">
    <NuxtLink
      to="/projects"
      class="hover:text-primary dark:hover:text-primary-dark"
      @mouseenter="startOpenTimer"
      @mouseleave="startCloseTimer"
    >
      Projects
    </NuxtLink>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute left-1/2 transform -translate-x-1/2 mt-4 w-sm rounded-md border border-primary bg-neutral"
        @mouseenter="cancelCloseTimer"
        @mouseleave="startCloseTimer"
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <NuxtLink
            v-for="project in projects"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="block px-4 py-2 text-left text-secondary hover:text-primary"
            role="menuitem"
          >
            {{ project.name }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Project {
  id: number
  name: string
  // Add other project properties as needed
}

const isOpen = ref(false)
const projects = ref<Project[]>([])
let openTimer: number | null = null
let closeTimer: number | null = null

const startOpenTimer = () => {
  cancelCloseTimer()
  openTimer = setTimeout(() => {
    isOpen.value = true
  }, 100) // 100ms delay before opening
}

const startCloseTimer = () => {
  cancelOpenTimer()
  closeTimer = setTimeout(() => {
    isOpen.value = false
  }, 150) // 150ms delay before closing
}

const cancelOpenTimer = () => {
  if (openTimer) {
    clearTimeout(openTimer)
    openTimer = null
  }
}

const cancelCloseTimer = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

const fetchProjects = async () => {
  try {
    const { data } = await useFetch<{ data: Project[] }>('/api/project')
    if (data.value) {
      projects.value = data.value.data
    }
  }
  catch (error) {
    console.error('Error fetching projects:', error)
  }
}

onMounted(fetchProjects)

onBeforeUnmount(() => {
  cancelOpenTimer()
  cancelCloseTimer()
})
</script>
