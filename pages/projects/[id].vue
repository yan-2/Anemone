<template>
  <div>
    <AnemoneNavbar />
    <!-- Loading -->
    <div
      class="w-full h-full tw-flex tw-justify-center tw-items-center"
      v-if="Loading"
    >
      <img src="/img/Loading.svg" alt="" />
    </div>

    <div v-else class="tw-flex tw-justify-center tw-mt-5">
      <div
        class="tw-flex tw-flex-col tw-items-center tw-w-5/6 tw-p-12 tw-border tw-border-solid tw-border-stone-900"
      >
        <!-- project Title -->
        <div class="tw-text-center tw-mb-4">
          <h1 class="Font-titr tw-font-semibold tw-text-5xl">
            {{ project.name }}
          </h1>
          <h2 class="tw-text-gray-400">{{ project.tag }}</h2>
        </div>


<!-- project Description -->
        <div class="tw-flex tw-flex-col tw-items-center lg:tw-flex-row">
          <div class="tw-w-3/4">
            <h1 class="tw-font-bold tw-mb-2">Description</h1>
            <p>{{ project.description }}</p>
          </div>


          <!-- project image -->
          <img
            class="tw-w-2/3 tw-mt-7 lg:tw-w-1/3"
            src="/img/Hero.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <AnemoneFooter />
  </div>
</template>

<script setup>
import { PRIMARY_COLOR, SECONDARY_COLOR, BACKGROUND_COLOR } from '~/assets/js/constants.js'
import AnemoneFooter from "~/components/anemoneFooter.vue";
import AnemoneNavbar from "~/components/anemoneNavbar.vue";
// Page title 
useHead({
  title: "project",
});

// Variables
let Loading = ref(true);
const route = useRoute();
let project = " ";

// data fetching
const fatchData = async () => {
  const projects = await useFetch("/api/project");
  project = projects.data.value.data[route.params.id - 1];
  Loading.value = false;
};

// call data fetch function
fatchData();

onMounted(() => {
  document.body.style.backgroundColor = BACKGROUND_COLOR
});

</script>
<style scoped>
/* Fonts */
* {
  font-family: "Roboto";
}
.Font-titr {
  font-family: "Rosamila";
}
</style>
