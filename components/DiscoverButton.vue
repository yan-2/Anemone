<!-- HTML structure -->
<template>
  <div class="flex justify-center w-full">
    <div
      :class="[
        'w-full max-w-[220px] hover:cursor-pointer text-neutral py-2 px-4 rounded-lg transition duration-300 text-center bg-accent hover:bg-accent/80',
      ]"
    >
      Discover
    </div>
  </div>
</template>

<!-- Typescript code -->
<script setup lang="ts">
// Exports the component
defineOptions({ name: 'DiscoverButton' })
</script>
