<template>
  <div class="sm:hidden">
    <!-- Mobile menu button -->
    <button
        class="text-secondary dark:text-secondary-dark focus:outline-none z-50 relative"
        @click="toggleMenu"
    >
      <div class="w-6 h-6 flex flex-col justify-center items-center">
        <span
            class="w-6 h-0.5 bg-current transition-all duration-300 ease-in-out absolute"
            :class="isOpen ? 'rotate-45' : '-translate-y-1'"
        />
        <span
            class="w-6 h-0.5 bg-current transition-all duration-300 ease-in-out absolute"
            :class="isOpen ? '-rotate-45' : 'translate-y-1'"
        />
      </div>
    </button>

    <!-- Mobile menu overlay -->
    <transition
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="isOpen"
          class="fixed inset-0 bg-white dark:bg-gray-900 z-40 overflow-hidden"
      >
        <nav class="h-full flex flex-col">
          <transition name="slide">
            <ul
                v-if="!activeSubmenu"
                class="space-y-4 px-8 py-12 overflow-y-auto"
            >
              <li
                  v-for="(item, index) in menuItems"
                  :key="index"
              >
                <button
                    class="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200 flex justify-between items-center w-full"
                    :class="{ 'text-primary dark:text-primary-dark': isActive(item.href) }"
                    @click="item.submenu && item.submenu.length > 0 ? openSubmenu(item) : navigateTo(item.href)"
                >
                  {{ item.text }}
                  <svg
                      v-if="item.submenu && item.submenu.length > 0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </transition>

          <transition name="slide">
            <div
                v-if="activeSubmenu"
                class="absolute inset-0 bg-white dark:bg-gray-900"
            >
              <button
                  class="text-xl font-semibold text-gray-900 dark:text-gray-100 px-8 py-4 flex items-center"
                  @click="closeSubmenu"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 mr-2"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>
              <ul class="space-y-4 px-8 py-4 overflow-y-auto">
                <li
                    v-for="(subItem, subIndex) in activeSubmenu.submenu"
                    :key="subIndex"
                >
                  <a
                      :href="subItem.href"
                      class="text-lg text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200 block"
                      :class="{ 'text-primary dark:text-primary-dark': isActive(subItem.href) }"
                      @click.prevent="navigateTo(subItem.href)"
                  >
                    {{ subItem.text }}
                  </a>
                </li>
              </ul>
            </div>
          </transition>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface MenuItem {
  text: string;
  href: string;
  submenu?: MenuItem[];
}

interface Project {
  id: string | number;
  name: string;
}

interface Service {
  id: string | number;
  name: string;
}

const isOpen = ref(false)
const route = useRoute()
const router = useRouter()
const activeSubmenu = ref<MenuItem | null>(null)

const projects = ref<Project[]>([])
const services = ref<Service[]>([])

const menuItems = ref<MenuItem[]>([
  { text: 'Assistant', href: '/assistant' },
  { text: 'Center', href: '/center' },
  {
    text: 'Projects',
    href: '/projects',
    submenu: [],
  },
  {
    text: 'Services',
    href: '/services',
    submenu: [],
  },
  { text: 'People', href: '/people' },
])

const isActive = (href: string) => route.path === href

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
  if (!isOpen.value) {
    closeSubmenu()
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
  closeSubmenu()
}

const openSubmenu = (item: MenuItem) => {
  activeSubmenu.value = item
}

const closeSubmenu = () => {
  activeSubmenu.value = null
}

const navigateTo = (href: string) => {
  router.push(href)
  closeMenu()
}

const fetchProjects = async () => {
  try {
    console.log('Fetching projects...')
    const response = await fetch('/api/project')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Projects data:', data)
    if (data && data.data) {
      projects.value = data.data
      updateProjectsSubmenu()
    } else {
      console.error('Invalid projects data structure received')
    }
  }
  catch (error) {
    console.error('Error fetching projects:', error)
  }
}

const fetchServices = async () => {
  try {
    console.log('Fetching services...')
    const response = await fetch('/api/service')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Services data:', data)
    if (data && data.data) {
      services.value = data.data
      updateServicesSubmenu()
    } else {
      console.error('Invalid services data structure received')
    }
  }
  catch (error) {
    console.error('Error fetching services:', error)
  }
}

const updateProjectsSubmenu = () => {
  console.log('Updating projects submenu')
  const projectsMenuItem = menuItems.value.find(item => item.text === 'Projects')
  if (projectsMenuItem) {
    projectsMenuItem.submenu = [
      { text: 'Overview', href: '/projects/overview' },
      ...projects.value.map(project => ({
        text: project.name,
        href: `/projects/${project.id}`
      }))
    ]
    console.log('Updated projects submenu:', projectsMenuItem.submenu)
  } else {
    console.error('Projects menu item not found')
  }
}

const updateServicesSubmenu = () => {
  console.log('Updating services submenu')
  const servicesMenuItem = menuItems.value.find(item => item.text === 'Services')
  if (servicesMenuItem) {
    servicesMenuItem.submenu = services.value.map(service => ({
      text: service.name,
      href: `/services/${service.id}`
    }))
    console.log('Updated services submenu:', servicesMenuItem.submenu)
  } else {
    console.error('Services menu item not found')
  }
}

onMounted(() => {
  console.log('Component mounted')
  fetchProjects()
  fetchServices()
})

watch(menuItems, (newMenuItems) => {
  console.log('Menu items updated:', newMenuItems)
}, { deep: true })

</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>