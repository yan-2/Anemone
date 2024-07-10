<template>
  <NuxtLink
    to="/request"
    class="inline-block bg-action text-neutral px-4 py-2 text-sm rounded-md hover:bg-action/85 transition-all duration-200 ease-in-out"
  >
    Request Help
  </NuxtLink>
</template>

<script setup lang="ts">
// Exports component
defineOptions({ name: 'RequestButton' })
</script>
