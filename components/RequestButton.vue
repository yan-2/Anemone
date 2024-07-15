<template>
  <div class="flex justify-center w-full">
    <NuxtLink
      to="/request"
      class="w-full max-w-[256px] bg-primary hover:bg-primary/85 hover:cursor-pointer text-neutral py-2 px-4 rounded-lg transition duration-300 text-center"
    >
      Request Help
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// Exports component
defineOptions({ name: 'RequestButton' })
</script>
