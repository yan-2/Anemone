<template>
  <div>
    <AnemoneNavbar />

    <div
      class="tw-flex  tw-my-5 lg:tw-my-0 lg:tw-h-[100vh] tw-flex-col tw-items-center tw-justify-center"
    >
      <!-- title -->
      <h1 class="tw-text-5xl tw-font-black Font-titr">Center</h1>
      <h2 class="tw-text-gray-400">Let us introduce ourselves</h2>

      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-mt-16 tw-gap-10 tw-px-10 tw-justify-center"
      >
        <!-- Cards -->
        <div
          class="tw-flex tw-flex-col tw-p-6 tw-pb-28 tw-w-full tw-border tw-border-solid tw-border-stone-900 lg:tw-w-1/3 tw-h-full"
        >
          <h1 class="tw-font-semibold">History and Mission</h1>
          <h2>
            At Anemone, our mission is clear: empower women facing adversity,
            including violence and family maltreatment. Since 1998, we've been a
            trusted ally for women in the metropolitan area of Milan, offering
            support, education, and advocacy. With over 25 years of service,
            we're committed to creating a safe, nurturing community where every
            woman feels valued and supported on her path to healing and
            independence.
          </h2>
        </div>

        <div
          class="tw-flex tw-flex-col tw-p-6 tw-pb-28 tw-w-full tw-border tw-border-solid tw-border-stone-900 lg:tw-w-1/3 tw-h-full"
        >
          <div>
            <h1 class="tw-font-semibold">Opening Hours</h1>
            <h2>
              Our doors are open every day to ensure you have support whenever
              you need it
            </h2>
          </div>

          <div>
            <h1 class="tw-font-semibold">Monday to Friday</h1>
            <h2 class="tw-text-sky-600">
              8:00 AM <span class="tw-text-black">to</span> 9:00 PM
            </h2>
          </div>

          <div>
            <h1 class="tw-font-semibold">Saturday and Sunday</h1>
            <h2 class="tw-text-sky-600">
              10:00 AM <span class="tw-text-black">to</span> 7:00 PM
            </h2>
          </div>

          <div>
            <h1 class="tw-font-semibold">Address</h1>
            <h2 class="tw-text-sky-600">Via Vittime della Violenza 24, MI</h2>
          </div>
        </div>

        <!-- Map -->
        <div
          class="tw-flex tw-flex-col tw-w-full tw-border tw-border-solid lg:tw-w-1/3 lg:tw-h-full sm:tw-h-[30vh]"
        >
          <map />
        </div>
      </div>
    </div>

    <AnemoneFooter />
  </div>
</template>

<script setup lang="ts">
import AnemoneFooter from "~/components/anemoneFooter.vue";
import AnemoneNavbar from "~/components/anemoneNavbar.vue";
import map from "~/components/map.vue";

useHead({
  title: "Center",
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
