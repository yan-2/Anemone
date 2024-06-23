<template>
  <div>
    <h1 class="title">Contacts</h1>
    <p class="subtitle">Useful information to get in touch</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-4">
      <div class="bg-white p-6 border border-primary">
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
      <div class="flex-1 border border-primary">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143.919005309419!2d9.490880733149849!3d45.29814216637437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47812c22484b7b2b%3A0x82e30781a28f0d75!2sVia%20Vittime%20della%20Violenza%2C%2026900%20Lodi%20LO!5e0!3m2!1sit!2sit!4v1719150273224!5m2!1sit!2sit"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script setup lang="ts">
</script>