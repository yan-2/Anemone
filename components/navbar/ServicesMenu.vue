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

    <!-- Menu with subtopics -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <!-- Menu -->
      <div
        v-if="isOpen"
        class="absolute left-1/2
        mt-3.5 rounded-lg
        border border-secondary-dark/30 dark:border-primary
        shadow-md bg-ternary dark:bg-neutral
        transform -translate-x-1/2
        z-50"
        @mouseenter="toggleOpen(true)"
        @mouseleave="toggleOpen(false)"
      >
        <!-- Menu items -->
        <div
          class="py-2 px-6"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <NuxtLink
            v-for="service in services"
            :key="service.id"
            :to="`/services/${service.id}`"
            :class="[
              'block py-2 hover:text-primary-dark hover:dark:text-primary',
              route.path === `/services/${service.id}`
                ? 'font-bold text-primary-dark dark:text-primary'
                : 'text-secondary-dark dark:text-secondary',
            ]"
            role="menuitem"
          >
            {{ service.name }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

// Service object
interface Service {
  name: string
}

// Functional support elements
const isOpen = ref(false)
const services = ref<Service[]>([])
let timer: ReturnType<typeof setTimeout> | null = null
const route = useRoute()

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
  catch (error) {
    console.error('Error fetching services:', error)
  }
}
fetchServices()

// Cleans up the timer when the component is unmounted
onBeforeUnmount(() => clearTimeout(timer!))
</script>
