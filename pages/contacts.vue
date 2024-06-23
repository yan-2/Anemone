<template>
  <div>
    <h1 class="title">Contacts</h1>
    <p class="subtitle">Useful information to get in touch</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-4">
      <div class="bg-white p-6">
        <h2 class="text-lg font-semibold">Phone</h2>
        <p class="text-gray-700 mb-4">In case of emergency contact us at the phone number <a href="tel:+393382358478"
                                                                                             class="text-blue-500">+393382358478</a>
        </p>
        <h2 class="text-lg font-semibold">Mail</h2>
        <p class="text-gray-700 mb-4">An email address is available too <a href="mailto:anemergency@anemone.it"
                                                                           class="text-blue-500">anemergency@anemone.it</a>
        </p>
        <h2 class="text-lg font-semibold">Headquarters</h2>
        <p class="text-gray-700 mb-4">Feel free to come visit us in person at the address <a
            href="https://maps.google.com/?q=Via Vittime della Violenza 24, MI" target="_blank" class="text-blue-500">Via
          Vittime della Violenza 24, MI</a></p>
        <div class="text-center">
          <button class="bg-action text-white px-4 py-2 mt-4">Request Help</button>
        </div>
      </div>
      <div class="flex-1">
        <img src="https://via.placeholder.com/400x300" alt="Map Image" >
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script setup lang="ts">
</script>