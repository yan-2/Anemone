<template>
  <div>
    <AnemoneNavbar />
    <div
      class="tw-flex tw-my-5 lg:tw-my-0 lg:tw-h-[100vh] tw-flex-col tw-items-center tw-justify-center"
    >
    <!-- Title -->
      <h1 class="tw-text-5xl tw-font-black Font-titr">Contacts</h1>
      <h2 class="tw-text-gray-400">Useful information to get in touch</h2>

      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-mt-16 tw-gap-10 tw-px-10 tw-justify-center"
      >
        <div
          class="tw-flex tw-flex-col tw-px-10 tw-pt-6 tw-justify-around tw-w-full tw-border tw-border-solid tw-border-stone-900 lg:tw-w-1/3 tw-h-full"
        >
        <!-- Contact card -->
          <div>
            <h1 class="tw-font-semibold">Phone</h1>
            <h2>
              In case of emergency contact us at the phone number
              <span class="tw-text-sky-600">+393382358478</span>
            </h2>
          </div>

          <div>
            <h1 class="tw-font-semibold">Mail</h1>
            <h2>
              An email address is available too
              <span class="tw-text-sky-600"> anemergency@anemone.it </span>
            </h2>
          </div>

          <div>
            <h1 class="tw-font-semibold">Headquarters</h1>
            <h2>
              Feel free to come visit us in person at the address
              <span class="tw-text-sky-600"
                >Via Vittime della Violenza 24, MI</span
              >
            </h2>
          </div>

          <div
            class="tw-self-center tw-flex tw-flex-col tw-items-center tw-w-full tw-mb-5"
          >
            <h2 class="tw-text-gray-400">otherwise</h2>
            <button
              class="tw-bg-red-400 tw-text-center tw-w-full tw-text-white lg:tw-w-3/5 tw-py-2"
            >
              Request Help
            </button>
          </div>
        </div>


<!-- map -->
        <div
          class="tw-flex tw-flex-col tw-w-full tw-border tw-border-solid lg:tw-w-1/3 tw-h-full"
        >
          <Map />

        </div>
      </div>
    </div>
    <AnemoneFooter />
  </div>
</template>

<script setup lang="ts">
import AnemoneFooter from "~/components/anemoneFooter.vue";
import AnemoneNavbar from "~/components/anemoneNavbar.vue";
import Map from "~/components/map.vue"
useHead({
  title: "Contacts",
});
</script>

<style scoped>
* {
  font-family: "Roboto";
}
.Font-titr {
  font-family: "Rosamila";
}
</style>
