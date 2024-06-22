<template>
  <div>
    <AnemoneNavbar />
    <!-- Loading -->
    <div class="w-full h-full tw-flex tw-justify-center tw-items-center" v-if="Loading">
      <img src="/img/Loading.svg" alt="">
    </div>


    <div v-else class="tw-flex tw-justify-center tw-mt-5">
      <div
        class="tw-flex tw-flex-col tw-items-center tw-w-5/6 tw-p-12 tw-border tw-border-solid tw-border-stone-900"
      >
      <!-- service name -->
        <div class="tw-text-center tw-mb-4">
          <h1 class="Font-titr tw-font-semibold tw-text-5xl">
            {{ service.name }}
          </h1>
        </div>

        <div
          class="tw-flex tw-flex-col tw-gap-10 tw-mt-10 tw-items-center lg:tw-flex-row lg:tw-items-start "
        >
        <!-- service Description -->
          <div class="lg:tw-w-1/3">
            <h1 class="tw-font-bold tw-mb-2">Description & Benefits</h1>
            <p>{{ service.description }}</p>
          </div>

          <!-- service Availability -->
          <div class="lg:tw-w-1/3">
            <h1 class="tw-font-bold tw-mb-2">Availability</h1>
            <p>{{ service.availability }}</p>
          </div>

          <!-- service image -->
          <img class="lg:tw-w-1/4 tw-mt-3" src="/img/Hero.png" alt="" />
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

useHead({
  title: "project",
});
// Variables
let Loading = ref(true);
const route = useRoute();
let service = " ";

// Fetch Data
const fatchData = async () => {
  const Data = await useFetch("/api/service");
  service = Data.data.value.data[route.params.id - 1];
  Loading.value = false;
  console.log(service);
};
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
