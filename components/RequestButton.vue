<!-- HTML structure -->
<template>
  <div class="flex justify-center w-full">
    <NuxtLink
      to="/request"
      class="w-full max-w-[198px] bg-action hover:bg-action/80 hover:cursor-pointer text-neutral py-2 px-4 rounded-lg transition duration-300 text-center shadow-md"
    >
      Request Help
    </NuxtLink>
  </div>
</template>

<!-- Typescript code -->
<script setup lang="ts">
// Exports component
defineOptions({ name: 'RequestButton' })
</script>
