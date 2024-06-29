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
          Answer to your questions
        </div>
      </div>
    </div>
    <Carousel v-if="employees.length!=0" v-bind="settings" :breakpoints="breakpoints" class="md:max-w-6xl mx-auto">
      <Slide v-for="item in employees" :key="item.id">
        <div class="carousel__item p-2 sm:p-0">
          <div class="border border-primary lg:p-3 sm:p-0 bg-white lg:ml-2 mr-2 relative">
            <!--            avatar-->
            <NuxtImg :src="item.pic"/>
            <div class="">
              <h2 class="text-lg font-semibold">{{item.name}}</h2>
              <p class="text-base">{{item.role}}</p>
              <button class="bg-accent text-white px-4 py-2 mt-4">
                Details
              </button>
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

const employees = ref<Employee[]>([]);

const fetchEmployees = async () => {
  console.log('data')
  const {data} = await useFetch<{ data: Employee[] }>('/api/employee');
  if (data.value) {

    employees.value = data.value.data;
  }
};

fetchEmployees();

let settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
let breakpoints = {
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