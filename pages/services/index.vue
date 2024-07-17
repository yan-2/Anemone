<!-- HTML structure -->
<template>
  <div class="flex justify-center px-6 py-3">
    <div class="text-center">
      <!-- Title -->
      <h1 class="font-rosamila text-5xl text-primary mb-1">
        Services
      </h1>
      <!-- Subtitle -->
      <h2 class="text-secondary mb-8">
        Here at your service
      </h2>
      <!-- Loading -->
      <div
        v-if="loading"
        class=""
      >
        <LoadingPlaceholder />
      </div>
      <!-- Services -->
      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 gap-8 xl:max-w-6xl">
          <div
            v-for="service in services"
            :key="service.id"
          >
            <div class="bg-neutral border border-primary rounded-2xl overflow-hidden p-6 text-left shadow-md hover:animate-expand flex flex-col h-full">
              <NuxtLink
                :to="`/services/${service.id}`"
                class="flex flex-col h-full"
              >
                <!-- Text content at the top -->
                <div class="mb-4">
                  <h2 class="text-primary font-bold mb-1">
                    {{ service.name }}
                  </h2>
                  <p>
                    {{ getFirstSentence(service.description) }}
                  </p>
                </div>

                <!-- Image -->
                <div class="flex-grow flex items-center justify-center mb-8">
                  <div class="w-full max-w-xs flex items-center justify-center">
                    <img
                      :src="service.pic"
                      :alt="service.name + ' picture'"
                      class="max-w-full max-h-full object-contain"
                    >
                  </div>
                </div>

                <!-- Button -->
                <div class="mt-auto">
                  <DiscoverButton />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Typescript code -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadingPlaceholder from '~/components/LoadingPlaceholder.vue'
import DiscoverButton from '~/components/DiscoverButton.vue'

useHead({
  title: 'Services',
})

interface Service {
  id: number
  name: string
  description: string
  pic: string
}

const loading = ref<boolean>(true)
const services = ref<Service[]>([])
const { data } = await useFetch('/api/service')
services.value = data.value.data
console.log(services.value)

const getFirstSentence = (text: string): string => {
  const match = text.match(/([^.!?]+[.!?]+)/)
  return match ? match[0] : text
}

onMounted(() => {
  loading.value = false
})
</script>
