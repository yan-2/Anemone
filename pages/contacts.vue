<template>
  <div class="flex justify-center px-6 py-3">
    <div class="w-full max-w-6xl">
      <div class="text-center">
        <!-- Title with doodle -->
        <div class="relative inline-block">
          <h1 class="font-rosamila text-5xl text-primary mb-1">
            Contacts
          </h1>
          <!-- Doodle -->
          <img src="~/public/img/vectors/message.svg" class="absolute -top-6 -right-12 w-14 h-14" alt="Doodle">
        </div>
        <!-- Subtitle -->
        <h2 class="text-secondary mb-8">
          Useful information to get in touch
        </h2>
        <!-- Boxes -->
        <div class="grid grid-cols-1 max-w-xl xl:grid-cols-2 xl:max-w-3xl gap-8 w-full">
          <!-- Contact details -->
          <div class="text-left rounded-2xl bg-neutral border border-primary shadow-md p-6 h-[400px] overflow-auto">
            <ul class="space-y-2">
              <li>
                <h3 class="font-bold mb-1">
                  Phone
                </h3>
                <p class="text-primary mb-4">
                  In case of emergency contact us at the phone number <span class="font-bold text-hyperlinks">+393382358478</span>
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-1">
                  Mail
                </h3>
                <p class="text-primary mb-4">
                  An email address is available too <span class="font-bold text-hyperlinks">anemergency@anemone.it</span>
                </p>
              </li>
            </ul>
            <hr class="solid my-2 border-secondary/25">
            <h3 class="font-bold mb-1">
              Headquarters
            </h3>
            <p class="text-primary mb-4">
              Feel free to come visit us in person at the address <br><span class="font-bold text-hyperlinks">Via Vittime della Violenza 24, LO</span>
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
