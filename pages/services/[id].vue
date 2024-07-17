<!-- HTML structure -->
<template>
  <div class="flex justify-center px-6 py-3">
    <!-- Card -->
    <div class="max-w-6xl rounded-2xl bg-neutral border border-primary shadow-md text-center">
      <div
        v-if="service"
        class="p-8"
      >
        <!-- Title -->
        <h1 class="font-rosamila text-5xl text-primary mb-1">
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
          <div class="flex justify-center max-w-sm mx-auto">
            <img
              :src="service.pic"
              :alt=" 'This image represents the ' + service.name + ' service'"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
        <!-- Testimonial -->
        <div class="text-center">
          <!-- Comment -->
          <p class="text-secondary">
            {{comment.comment}}
          </p>
          <!-- Author -->
          <p class="font-bold text-secondary">
            <span>{{comment.name}}</span>.<span>{{comment.age}}</span>
          </p>
        </div>
      </div>
      <!-- Loading -->
      <div v-else>
        <LoadingPlaceholder />
      </div>
    </div>
  </div>
</template>

<!-- Typescript code -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import LoadingPlaceholder from '~/components/LoadingPlaceholder.vue'

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
interface Comment {
  id: number
  name: string
  age: number,
  comment: string,
}
// Function to get a random element from the array
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
const route = useRoute()
const id = parseInt(route.params.id as string, 10)
const services = ref<Service[]>([])
const comment = ref<{ [key: string]: Comment }>({});
const service = ref<{ [key: string]: Service }>({});

// Fetches service data
const fetchServices = async () => {
  const { data } = await useFetch<{ data: Service[] }>(`/api/service?id=${id}`)
  if (data.value) {
    service.value = data.value.data[0]
    useHead({ title: service.value.name })
  }
}
const fetchComment = async () => {
  const { data } = await useFetch<{ data: Comment[] }>(`/api/testimonial?serviceID=${id}`)
  if (data.value) {
    comment.value = getRandomElement(data.value.data)
  }
}
fetchServices()
fetchComment()

</script>
