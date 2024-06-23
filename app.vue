<template>
  <div
    :class="backgroundClass"
    class="flex flex-col min-h-screen transition-colors duration-500 ease-in-out"
  >
    <AnemoneNavbar class="h-16" />
    <NuxtLayout>
      <NuxtPage class="flex-grow" />
    </NuxtLayout>
    <AnemoneFooter class="h-16" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AnemoneNavbar from '~/components/AnemoneNavbar.vue'
import AnemoneFooter from '~/components/AnemoneFooter.vue'

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
    ? 'bg-dark-background text-dark-primary'
    : 'bg-background text-primary'
})

// Provide the current theme to all components
provide('currentTheme', computed(() => route.path === '/assistant' ? 'dark' : 'light'))
</script>
