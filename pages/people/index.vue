<template>
  <div v-loading="true">
    <h1 class="title">Meet our amazing team</h1>
    <p class="subtitle">Answer to your questions</p>
    <Carousel v-bind="settings" :breakpoints="breakpoints" class="md:max-w-5xl mx-auto">
      <Slide v-for="slide in 20" :key="slide">
        <div class="carousel__item p-2 sm:p-0">
          <div class="border border-primary lg:p-6 sm:p-0 bg-white lg:ml-2 mr-2 relative">
            <!--            avatar-->
            <NuxtImg src="img/people/chiara_moretti.png"/>
            <div class="">
              <h2 class="text-lg font-semibold">chiara moretti</h2>
              <p class="text-lg">Legal</p>
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
  name: string;
  role: string;
  cv: string;
  service: any[];
  project: any[];
}

const employees = ref<Employee[]>([]);

const fetchEmployees = async () => {
  const {data} = await useFetch<{ data: Employee[] }>('/api/employee');
  if (data.value) {
    employees.value = data.value.data;
  }
};

onMounted(fetchEmployees);

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
  .carousel__prev{
  position: absolute;
  transform: translateX(-100%);
}
.carousel__next{
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