<!-- HTML structure -->
<template>
  <div class="relative group">
    <!-- Services -->
    <NuxtLink
      to="/services"
      :class="[
        'hover:text-primary dark:hover:text-primary-dark',
        route.path.startsWith('/services')
          ? 'font-bold text-primary dark:text-primary-dark'
          : 'text-secondary dark:text-secondary-dark',
      ]"
      @mouseenter="toggleOpen(true)"
      @mouseleave="toggleOpen(false)"
    >
      Services
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
          aria-labelledby="services-menu"
        >
          <!-- Column -->
          <div
            v-for="(column, columnIndex) in sortedServicesCols"
            :key="columnIndex"
            class="flex flex-col mr-8 last:mr-0"
          >
            <!-- Item -->
            <NuxtLink
              v-for="service in column"
              :key="service.id"
              :to="`/services/${service.id}`"
              :class="[
                'block py-2 hover:text-primary hover:dark:text-primary-dark',
                route.path === `/services/${service.id}`
                  ? 'font-bold text-primary dark:text-primary-dark'
                  : 'text-secondary dark:text-secondary-dark',
              ]"
              role="menuitem"
            >
              {{ service.name }}
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

// Service object
interface Service {
  id: number
  name: string
}

// Functional support elements
const isOpen = ref(false)
const services = ref<Service[]>([])
const route = useRoute()
let timer: ReturnType<typeof setTimeout> | null = null

// Sort services by name length and organize them into two cols
const sortedServicesCols = computed(() => {
  const sortedServices = [...services.value].sort((a, b) => a.name.length - b.name.length)
  return sortedServices.slice(0, 6).reduce((columns: Service[][], service, index) => {
    columns[index % 2].push(service)
    return columns
  }, [[], []])
})

// Toggles the menu open state
const toggleOpen = (open: boolean) => {
  clearTimeout(timer!)
  timer = setTimeout(() => {
    isOpen.value = open
  }, 100)
}

// Retrieves the list of services from the DB
const fetchServices = async () => {
  try {
    const { data } = await useFetch<{ data: Service[] }>('/api/service')
    if (data.value) {
      services.value = data.value.data
    }
  }
  catch (error) { console.error('Services fetching failed with', error) }
}
fetchServices()

// Cleans up the timer when the component is unmounted
onBeforeUnmount(() => clearTimeout(timer!))
</script>
