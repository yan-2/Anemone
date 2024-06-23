<template>
  <div class="flex justify-center items-center">
      <div class="relative max-w-full max-h-full grid-cols-1 grid-rows-1 justify-center items-center">
        <div class="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src="~/public/img/vectors/logoBackground.svg"
            alt="Background shape"
            class="w-full md:w-3/4 lg:w-2/5 h-auto lg:-translate-y-36"
          >
        </div>
        <div class="flex flex-col items-center justify-center">
          <!-- Woman vector -->
          <img
            src="~/public/img/vectors/logo.svg"
            alt="The website logo"
          >
          <!-- Splash information box -->
          <div class="bg-neutral border border-primary p-6 max-w-2xl z-10">
            <div class="text-center">
              <div class="font-rosamila text-big text-primary">
                Anemone
              </div>
              <div class="font-roboto text-secondary text-base">
                It's time to bloom again
              </div>
              <p class="text-primary font-roboto text-base mb-4">
                Hello stranger!<br>
                Whether you're encountering challenges or seeking support,
                remember that you're not alone.<br>
                Join us in our mission to empower women or let us help you.
              </p>
              <!-- Request help button -->
              <div class="text-center">
                <button class="font-roboto bg-action text-neutral px-4 py-2 text-sm transition-colors hover:bg-opacity-90">
                  Request Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import AnemoneNavbar from '~/components/AnemoneNavbar.vue'
import AnemoneFooter from '~/components/AnemoneFooter.vue'

export default defineComponent({
  components: { AnemoneFooter, AnemoneNavbar },
})
</script>

<style>
/* Add any additional styles here if needed */
</style>
