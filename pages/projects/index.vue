<template>
  <div class="flex justify-center px-6 py-3">
    <div class="text-center">
      <!-- Title -->
      <h1 class="font-rosamila text-5xl text-primary mb-1">
        Projects
      </h1>
      <!-- Subtitle -->
      <h2 class="text-secondary mb-4">
        How we make the difference
      </h2>
      <Carousel
        v-show="projects.length!=0 && !loading"
        v-bind="settings"
        :breakpoints="breakpoints"
        class="md:max-w-6xl mx-auto"
        :wrap-around="true"
      >
        <Slide
          v-for="item in projects"
          :key="item.id"
          class="py-8 text-left"
        >
          <NuxtLink
            :to="`/projects/${item.id}`"
            class="block h-full sm:hover:animate-expand hover:cursor-pointer"
          >
            <div class="border border-primary bg-neutral rounded-xl mx-4 overflow-hidden shadow-md flex flex-col h-full p-4">
              <div class="flex-grow">
                <h2 class="font-bold mb-1">
                  {{ item.name }}
                </h2>
                <p class="text-secondary mb-4">
                  {{ getFirstSentence(item.description) }}
                </p>
              </div>
              <!-- Image -->
              <div class="relative w-full mb-4">
                <div class="max-w-[200px] m-auto">
                  <img
                    :src="item.pic"
                    :alt="`This image represents the ${item.name} project`"
                    class="w-full h-full object-cover"
                  >
                </div>
              </div>
              <DiscoverButton class="mt-auto" />
            </div>
          </NuxtLink>
        </Slide>
        <template #addons>
          <!-- Arrows -->
          <Navigation>
            <template #next>
              <div class="bg-neutral border border-primary rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md">
                <PhosphorIconCaretRight
                  :size="24"
                  weight="bold"
                  class="text-primary"
                />
              </div>
            </template>
            <template #prev>
              <div class="bg-neutral border border-primary rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md">
                <PhosphorIconCaretLeft
                  :size="24"
                  weight="bold"
                  class="text-primary"
                />
              </div>
            </template>
          </Navigation>
          <!-- Dots -->
          <div class="flex w-full justify-center items-center">
            <Pagination />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DiscoverButton from '~/components/DiscoverButton.vue'

useHead({
  title: 'Projects',
})

interface Project {
  id: number
  name: string
  description: string
  pic: string
}

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}
const breakpoints = {
  620: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  830: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}
const loading = ref<boolean>(true)

onMounted(() => {
  loading.value = false
})

const projects = ref<Project[]>([])

const { data } = await useFetch('/api/project')
projects.value = data.value.data
console.log(projects.value)

const getFirstSentence = (text: string): string => {
  const match = text.match(/([^.!?]+[.!?]+)/)
  return match ? match[0] : text
}
</script>
