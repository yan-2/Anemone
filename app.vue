<template>
  <div class="foundation app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  // title: 'My App',
  titleTemplate: '%s - Anemone',
  meta: [
    {name: 'description', content: 'Join us in our mission to empower women or let us help you.'},
    {name: 'keywords', content: 'women, help you'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {'charset': 'utf-8'}
  ],
})
</script>
<style scoped lang="less">
.app{
  padding: 0 0 0 20px;
}
</style>
