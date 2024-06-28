<template>
  <div class="relative grid grid-cols-1 grid-rows-1 justify-center items-center px-8 text-center">
    <!-- Background blob -->
    <div class="absolute inset-x-0 top-0 flex items-center justify-center z-0">
      <img
        src="~/public/img/vectors/shape.svg"
        alt="Background shape"
        class="min-w-2/5"
      >
    </div>
    <div class="flex flex-col items-center justify-center">
      <!-- Woman image -->
      <img
        src="~/public/img/vectors/woman.svg"
        alt="Website testimonial"
        class="min-w-2/3 translate-y-2 z-20"
      >
      <!-- Splash information box -->
      <div class="bg-neutral border border-primary max-w-xl p-4 rounded-lg z-10">
        <h2 class="font-rosamila text-5xl text-primary">
          Anemone
        </h2>
        <p class="text-secondary mb-4">
          It's time to bloom again
        </p>
        <p class="text-primary mb-8">
          Hello stranger!<br>
          Whether you're encountering challenges or seeking support,
          remember that you are not alone.<br>
          Join us in our mission to empower women or let us help you.
        </p>
        <RequestButton />
      </div>
    </div>
  </div>
</template>

<script setup>
// Defines the layout used
import RequestButton from '~/components/RequestButton.vue'
// Declares the adopted layout
definePageMeta({ layout: 'default' })
</script>
