<!-- HTML structure -->
<template>
  <div class="flex justify-center px-6 py-3">
    <!-- Card -->
    <div class="max-w-6xl rounded-2xl bg-neutral border border-primary shadow-md text-center">
      <div
        v-if="service"
        class="p-12"
      >
        <!-- Title -->
        <h1 class="font-rosamila text-5xl text-primary mb-2">
          {{ service.name }}
        </h1>
        <!-- Subtitle -->
        <h2 class="text-secondary mb-8">
          {{ service.tag }}
        </h2>
        <!-- Service -->
        <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_1.5fr_1.25fr] gap-12 w-full items-center mb-8">
          <!-- Description -->
          <div class="text-left self-start h-full">
            <h3 class="font-bold mb-1">
              Description & Benefits
            </h3>
            <p class="text-primary">
              {{ service.description }}
            </p>
          </div>
          <!-- Availability -->
          <div class="text-left self-start h-full">
            <h3 class="font-bold mb-1">
              Availability
            </h3>
            <p class="text-primary">
              {{ service.availability }}
            </p>
          </div>
          <!-- Image -->
          <div class="flex justify-center">
            <img
              :src="service.pic"
              :alt="service.name + ' image'"
            >
          </div>
        </div>
        <!-- Testimonial -->
        <div class="text-center">
          <!-- Comment -->
          <p class="text-secondary">
            Testimonial message
          </p>
          <!-- Author -->
          <p class="font-bold text-secondary">
            <span>Maria</span>.<span>37</span>
          </p>
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

interface Service {
  id: number
  name: string
  description: string
  tag: string
  benefits: string
  availability: string
  testimonial: string
  pic: string
}

const route = useRoute()
const id = parseInt(route.params.id as string, 10)
const services = ref<Service[]>([])

// Fetches service data
const fetchServices = async () => {
  const { data } = await useFetch<{ data: Service[] }>('/api/service')
  if (data.value) {
    services.value = data.value.data
  }
}
fetchServices()

// Sets page title
const service = computed(() => {
  const foundService = services.value.find(e => e.id === id)
  if (foundService) {
    useHead({ title: foundService.name })
  }
  return foundService
})
</script>
