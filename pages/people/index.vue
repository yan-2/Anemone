<template>
  <div class="w-full max-w-7xl mx-auto px-4 text-primary">
    <div class="flex items-center justify-center py-4 mb-8 space-y-2">
      <div class="text-center">
        <!-- Title -->
        <div class="font-rosamila md:text-5xl text-4xl">
          Meet our amazing team
        </div>
        <!-- Subtitle -->
        <div class="text-secondary-dark">
          The Answer To Your Questions
        </div>
      </div>
    </div>
    <Carousel  v-show="employees.length!=0 && !loading" v-bind="settings" :breakpoints="breakpoints" class="md:max-w-6xl mx-auto" :autoplay="2000" :wrap-around="true">
      <Slide v-for="item in employees" :key="item.id">
        <div class="carousel__item p-2 sm:p-0">
          <div class="border border-primary lg:p-3 sm:p-0 bg-white lg:ml-2 mr-2 relative">
            <!-- avatar -->
            <NuxtImg :src="item.pic"/>
            <div class="">
              <h2 class="text-lg font-semibold">{{item.name}}</h2>
              <p class="text-base">{{item.role}}</p>
              <NuxtLink :to="`/people/${item.id}`" class="bg-accent text-white px-4 py-2 mt-4 inline-block">
                Details
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
  title: 'People',
})

interface Employee {
  id: number;
  pic: string;
  name: string;
  role: string;
  cv: string;
  service: any[];
  project: any[];
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

let employees = ref<Employee[]>([]);

let {data} = await useFetch('/api/employee')
employees.value = data.value.data;
console.log(employees.value )
</script>

<style>
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
