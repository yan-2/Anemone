<template>
  <div :class="backgroundClass" class="flex flex-col h-screen">
    <AnemoneNavbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AnemoneFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AnemoneNavbar from "~/components/AnemoneNavbar.vue";
import AnemoneFooter from "~/components/AnemoneFooter.vue";

useHead({
  titleTemplate: '%s - Anemone',
  meta: [
    { name: 'description', content: 'Join us in our mission to empower women or let us help you.' },
    { name: 'keywords', content: 'women, help you' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' },
  ],
})

const route = useRoute()

const backgroundClass = computed(() => {
  return route.path === '/assistant'
    ? 'background-dark'
    : 'background-light'
})
</script>

<style lang="less">
html, body {
  height: 100%;
}

#__nuxt {
  height: 100%;
}

.background-dark {
  background-color: #2F2E41;
  min-height: 100vh;
}

.background-light {
  background-color: #EDEDED;
  min-height: 100vh;
}
</style>
