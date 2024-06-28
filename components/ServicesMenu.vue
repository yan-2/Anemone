<template>
  <div class="relative group">
    <NuxtLink
        to="/services"
        class="hover:text-primary dark:hover:text-primary-dark"
        @mouseenter="openMenu"
        @mouseleave="startCloseTimer"
    >
      Services
    </NuxtLink>
    <div
        v-if="isOpen"
        class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
        @mouseenter="cancelCloseTimer"
        @mouseleave="closeMenu"
    >
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <NuxtLink
            v-for="service in services"
            :key="service.id"
            :to="`/services/${service.id}`"
            class="block px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            role="menuitem"
        >
          {{ service.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Service {
  id: number;
  name: string;
  description: string;
  availability: string;
  testimonial: string;
}

const isOpen = ref(false)
const services = ref<Service[]>([])
let closeTimer: number | null = null

const openMenu = () => {
  isOpen.value = true
}

const startCloseTimer = () => {
  closeTimer = setTimeout(() => {
    isOpen.value = false
  }, 100) // 100ms delay before closing
}

const cancelCloseTimer = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

const closeMenu = () => {
  isOpen.value = false
}

const fetchServices = async () => {
  try {
    const { data } = await useFetch<{ data: Service[] }>('/api/service')
    if (data.value) {
      services.value = data.value.data
    }
  } catch (error) {
    console.error('Error fetching services:', error)
  }
}

onMounted(fetchServices)

onBeforeUnmount(() => {
  if (closeTimer) {
    clearTimeout(closeTimer)
  }
})
</script>
