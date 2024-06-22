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

    <div
      v-else
      class="tw-flex tw-my-5 lg:tw-my-0 lg:tw-h-[100vh] tw-flex-col tw-items-center tw-justify-center"
    >
      <!-- title -->
      <h1 class="tw-text-5xl tw-font-black Font-titr">{{ person.name }}</h1>
      <h2 class="tw-text-gray-400">{{ person.role }}</h2>

      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-mt-16 tw-gap-10 tw-px-10 tw-justify-center"
      >
        <!-- Cards -->

        <!-- person image -->
        <div
          class="tw-flex tw-flex-col tw-h-full tw-w-full lg:tw-w-1/3 lg:tw-h-full"
        >
          <img
            class="tw-h-full tw-w-full tw-object-cover"
            src="/img/people.png"
            alt=""
          />
        </div>

        <!-- person cv -->
        <div
          class="tw-flex tw-flex-col tw-p-6 tw-w-full tw-border tw-border-solid tw-border-stone-900 lg:tw-w-1/3 tw-h-full"
        >
          <h1 class="tw-font-semibold tw-mb-3">Curriculum</h1>
          <h2 class="tw-text-ellipsis tw-line-clamp-[14]">
            {{ person.cv }}
          </h2>
        </div>

        <!-- person Role -->
        <div
          class="tw-flex tw-flex-col tw tw-p-6 tw-gap-10 tw-w-full tw-border tw-border-solid tw-border-stone-900 lg:tw-w-1/3 tw-h-full"
        >
          <div>
            <h1 class="tw-font-semibold">Role</h1>
            <h2>
              {{ person.name }} at Anemone serves as the {{ person.role }}.
            </h2>
          </div>

          <div>
            <h1 class="tw-font-semibold">Project and Services</h1>
            <h2>Oliver is involved in the following projects and services</h2>
          </div>

          <div>
            <div
              v-for="project in person.project"
              :key="project.id"
              class="tw-text-sky-600 tw-flex tw-flex-col tw-gap-1"
            >
              <div class="tw-flex tw-justify-between">
                <h2>{{ project.name }}</h2>
                <nuxt-link :to="`/project/${project.id}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="tw-size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
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
  title: "person",
});
// Variables
const route = useRoute();
let Loading = ref(true);

// Fetch Data
const people = await useFetch("/api/employee");
const person = people.data.value.data[route.params.id - 1];
Loading.value = false;

// assign person project
const personProject = person.project;

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
