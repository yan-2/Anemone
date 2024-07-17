<template>
  <div class="flex justify-center px-6 py-3">
    <div class="text-center">
      <!-- Title -->
      <h1 class="font-rosamila text-5xl text-primary mb-1">
        People
      </h1>
      <!-- Subtitle -->
      <h2 class="text-secondary mb-4">
        Meet our stunning team
      </h2>
      <Carousel
        v-show="employees.length!=0 && !loading"
        v-bind="settings"
        :breakpoints="breakpoints"
        class="md:max-w-6xl mx-auto"
        :wrap-around="true"
      >
          <Slide
              v-for="item in employees"
              :key="item.id"
              class="md:py-8"
          >
              <NuxtLink
                  :to="`/people/${item.id}`"
                  class="sm:hover:animate-expand hover:cursor-pointer carousel__item"
              >
                  <div class="border border-primary bg-neutral rounded-xl  overflow-hidden shadow-md md:mx-4">
                      <!-- Image -->
                      <div class="relative md:w-full overflow-hidden">
                          <img
                              :src="item.pic"
                              :alt="`This is a picture of the employee called ${item.name}`"
                              class="w-full h-auto object-cover"
                          >
                      </div>
                      <div class="info-container p-4">
                          <h2 class="font-bold md:mb-1">
                              {{ item.name }}
                          </h2>
                          <p class="text-secondary md:mb-4">
                              {{ item.role }}
                          </p>
                          <DiscoverButton />
                      </div>
                  </div>
              </NuxtLink>
          </Slide>
        <template #addons>
          <!-- Arrows -->
          <Navigation>
            <template #next>
              <div class="bg-neutral border border-primary rounded-full p-2 w-8 h-8 flex items-center justify-center shadow-md">
                <PhosphorIconCaretRight
                  :size="24"
                  weight="bold"
                  class="text-primary"
                />
              </div>
            </template>
            <template #prev>
              <div class="bg-neutral border border-primary rounded-full p-2 w-8 h-8 flex items-center justify-center shadow-md">
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
  title: 'People',
})

interface Employee {
  id: number
  pic: string
  name: string
  role: string
  cv: string
  service: any[]
  project: any[]
}
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}
const breakpoints = {
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
const loading = ref<boolean>(true)

onMounted(() => {
  loading.value = false
})

const employees = ref<Employee[]>([])

const { data } = await useFetch('/api/employee')
employees.value = data.value.data
console.log(employees.value)
</script>

<style>
.carousel__pagination {
  display: flex;
  width: fit-content;
}

.carousel__pagination-button {
  display: block;
  border: 0;
  margin: 1px;
  cursor: pointer;
  padding: var(--vc-pgn-margin);
  background: transparent;
}

.carousel__pagination-button::after {
  display: block;
  content: '';
  width: var(--vc-pgn-size, 10px);
  height: var(--vc-pgn-size, 10px);
  border-radius: 2px; /* Rounded corners for squares */
  background-color: rgb(161, 159, 185, 0.30);
  transition: transform 0.3s ease; /* Smooth transition for rotation */
}

.carousel__pagination-button--active::after {
  background-color: #2F2E41; /* Choose your desired active color */
  transform: rotate(45deg); /* Rotate active square by 45 degrees */
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
    .info-container{
        background: white;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        /*display: none;*/
    }
}
.carousel__item {
    /*min-height: 200px;*/
    /*width: 150px;*/
    /*width: 10vw;*/
    /*width: 50%;*/
    /*background-color: var(--vc-clr-primary);*/
    /*color: var(--vc-clr-white);*/
    /*font-size: 20px;*/
    /*border-radius: 8px;*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
}
</style>
