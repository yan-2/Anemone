<template>
  <div class="w-full max-w-7xl mx-auto px-4 text-primary">
    <div class="flex items-center justify-center py-4 mb-8 space-y-2">
      <div class="text-center">
        <!-- Title -->
        <div class="font-rosamila md:text-5xl text-4xl">
          Projects
        </div>
        <!-- Subtitle -->
        <div class="text-secondary-dark">
          How We Make A Difference
        </div>
      </div>
    </div>
    <Carousel v-show="projects.length != 0 && !loading" v-bind="settings" :breakpoints="breakpoints" class="md:max-w-6xl mx-auto" :autoplay="2000" :wrap-around="true">
      <Slide v-for="item in projects" :key="item.id">
        <div class="carousel__item p-2 sm:p-0">
          <div class="border border-primary lg:p-3 sm:p-0 pb-2 bg-white lg:ml-2 mr-2 relative box-equal-size">
            <div class="text-left p-4">
              <h2 class="text-lg font-semibold">{{ item.name }}</h2>
              <p class="text-base">{{ getFirstSentence(item.description) }}</p>
            </div>
            <div class="flex justify-center p-4">
              <NuxtImg
              :src="item.pic"
              class="carousel-image"
              :alt=" 'This image represents the ' + item.name + ' project'"

              />
            </div>
            <div>
              <NuxtLink :to="`/projects/${item.id}`" class="bg-accent text-white px-4 py-2 mt-4 inline-block">
                Discover
              </NuxtLink>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
useHead({
  title: 'Projects',
})

interface Project {
  id: number
  name: string
  description: string
  pic: string
}

let settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}
let breakpoints = {
  200: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}
const loading = ref<boolean>(true);

onMounted(() => {
  loading.value = false;
});

let projects = ref<Project[]>([]);

let { data } = await useFetch('/api/project')
projects.value = data.value.data;
console.log(projects.value)

const getFirstSentence = (text: string): string => {
  const match = text.match(/([^.!?]+[.!?]+)/);
  return match ? match[0] : text;
}
</script>

<style>
.carousel__pagination {
  margin:0 auto;
  margin-top:10px;
}

.carousel__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.box-equal-size {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.carousel-image {
  max-width: 100%;
  height: auto;
}

@media (min-width: 1024px) {
  .carousel__prev {
    position: absolute;
    transform: translateX(-100%);
  }

  .carousel__next {
    position: absolute;
    transform: translateX(100%);
  }
}

@media (max-width: 700px) {
  .carousel__pagination {
    display: none;
  }
}
</style>

