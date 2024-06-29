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
    <ClientOnly>
      <div
        v-if="isOpen"
        class="absolute left-1/2 transform -translate-x-1/2 mt-4 w-sm rounded-md border border-primary bg-neutral"
        @mouseenter="cancelCloseTimer"
        @mouseleave="closeMenu"
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <NuxtLink
            v-for="service in services"
            :key="service.id"
            :to="`/services/${service.id}`"
            class="block px-4 py-2 text-left text-secondary hover:text-primary"
            role="menuitem"
          >
            {{ service.name }}
          </NuxtLink>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Service {
  id: number
  name: string
  description: string
  availability: string
  testimonial: string
}

const isOpen = ref(false)
const services = ref<Service[]>([])
let closeTimer: number | null = null

const openMenu = () => {
  isOpen.value = true
}

const startCloseTimer = () => {
  closeTimer = window.setTimeout(() => {
    isOpen.value = false
  }, 100) // 100ms delay before closing
}

const cancelCloseTimer = () => {
  if (closeTimer) {
    window.clearTimeout(closeTimer)
    closeTimer = null
  }
}

const closeMenu = () => {
  isOpen.value = false
}

const { data: servicesData } = await useFetch<{ data: Service[] }>('/api/service')

onMounted(() => {
  if (servicesData.value) {
    services.value = servicesData.value.data
  }
})

onBeforeUnmount(() => {
  if (closeTimer) {
    window.clearTimeout(closeTimer)
  }
})
</script>
