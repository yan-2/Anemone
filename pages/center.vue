<template>
  <div class="flex justify-center px-6 py-3">
    <div class="w-full max-w-6xl">
      <div class="text-center">
        <!-- Title -->
        <h1 class="font-rosamila text-5xl text-primary mb-1">
          Center
        </h1>
        <!-- Subtitle -->
        <h2 class="text-secondary mb-8">
          Let us introduce ourselves
        </h2>
        <!-- Boxes -->
        <div class="grid grid-cols-1 max-w-xl xl:grid-cols-3 xl:max-w-full gap-8 w-full">
          <!-- History and Mission -->
          <div class="text-left rounded-2xl bg-neutral border border-primary shadow-md p-6 h-[400px] overflow-auto">
            <h3 class="font-bold mb-1">
              History and Mission
            </h3>
            <p class="text-primary">
              At Anemone, our mission is clear: empower women facing adversity, including violence and family maltreatment. Since 1998, we've been a trusted ally for women in the metropolitan area of Milan, offering support, education, and advocacy. With over 25 years of service, we're committed to creating a safe, nurturing community where every woman feels valued and supported on her path to healing and independence.
            </p>
          </div>
          <!-- Map -->
          <div class="rounded-2xl shadow-md overflow-hidden h-[400px] w-full">
            <iframe
              width="100%"
              height="100%"
              style="border:0; outline: none;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvNvdAbBl7fli1qk5kv_xvizJfC9w-VTc&q=Via+Vittime+della+Violenza+24,LO&zoom=13"
            />
          </div>

          <!-- Opening Hours -->
          <div class="text-left rounded-2xl bg-neutral border border-primary shadow-md p-6 h-[400px] overflow-auto">
            <h3 class="font-bold mb-1">
              Opening Hours
            </h3>
            <p class="text-primary mb-4">
              Our doors are open every day to ensure you have support whenever you need it
            </p>
            <!-- List -->
            <ul class="space-y-2">
              <li>
                <div class="flex justify-between">
                  <span class="font-bold text-hyperlinks mb-1">Weekdays</span>
                  <span>8AM to 9PM</span>
                </div>
              </li>
              <li>
                <div class="flex justify-between">
                  <span class="font-bold text-hyperlinks mb-1">Holidays</span>
                  <span>10AM to 7PM</span>
                </div>
              </li>
            </ul>
            <hr class="solid my-2 border-secondary/25">
            <h3 class="font-bold mb-1">
              Address
            </h3>
            <p>Via Vittime della Violenza 24, LO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Set the page title
import { useHead } from '@vueuse/head'

useHead({
  title: 'Center',
})
</script>
