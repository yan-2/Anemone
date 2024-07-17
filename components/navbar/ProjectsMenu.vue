<!-- HTML structure -->
<template>
  <div class="relative group">
    <!-- Projects -->
    <NuxtLink
      to="/projects"
      :class="[
        'hover:text-primary dark:hover:text-primary-dark',
        route.path.startsWith('/projects')
          ? 'font-bold text-primary dark:text-primary-dark'
          : 'text-secondary dark:text-secondary-dark',
      ]"
      @mouseenter="toggleOpen(true)"
      @mouseleave="toggleOpen(false)"
    >
      Projects
    </NuxtLink>

    <!-- Submenu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <!-- Box -->
      <div
        v-if="isOpen"
        class="absolute left-1/2
        mt-2 rounded-xl
        border border-primary dark:border-secondary-dark/30
        shadow-md bg-neutral dark:bg-ternary
        transform -translate-x-1/2
        z-50"
        @mouseenter="toggleOpen(true)"
        @mouseleave="toggleOpen(false)"
      >
        <div
          class="py-2 px-6 flex"
          role="menu"
          aria-orientation="horizontal"
          aria-labelledby="projects-menu"
        >
          <!-- Column -->
          <div
            v-for="(column, columnIndex) in projectsCols"
            :key="columnIndex"
            class="flex flex-col mr-8 last:mr-0"
          >
            <!-- Item -->
            <NuxtLink
              v-for="project in column"
              :key="project.id"
              :to="`/projects/${project.id}`"
              :class="[
                'block py-2 hover:text-primary hover:dark:text-primary-dark',
                route.path === `/projects/${project.id}`
                  ? 'font-bold text-primary dark:text-primary-dark'
                  : 'text-secondary dark:text-secondary-dark',
              ]"
              role="menuitem"
            >
              {{ project.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<!-- Typescript code -->
<script setup lang="ts">
import { ref, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'

// Project object
interface Project {
  id: number
  name: string
}

// Functional support elements
const isOpen = ref(false)
const projects = ref<Project[]>([])
const route = useRoute()
let timer: ReturnType<typeof setTimeout> | null = null

// Organizes the retrieved projects in three cols
const projectsCols = computed(() => {
  return projects.value.slice(0, 9).reduce((columns: Project[][], project, index) => {
    columns[index % 3].push(project)
    return columns
  }, [[], [], []])
})

// Toggles the menu open state
const toggleOpen = (open: boolean) => {
  clearTimeout(timer!)
  timer = setTimeout(() => {
    isOpen.value = open
  }, 100)
}

// Retrieves the list of projects from the DB
const fetchProjects = async () => {
  try {
    const { data } = await useFetch<{ data: Project[] }>('/api/project')
    if (data.value) {
      projects.value = data.value.data
    }
  }
  catch (error) { console.error('Projects fetching failed with', error) }
}
fetchProjects()

// Cleans up the timer when the component is unmounted
onBeforeUnmount(() => clearTimeout(timer!))
</script>
