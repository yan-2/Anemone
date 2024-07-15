<template>
  <div
    class="font-roboto text-sm"
    :class="[{ dark: isDarkMode }, isDarkMode ? 'bg-background-dark' : 'bg-background']"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from '#imports'
import { useHtmlBackground } from '~/composables/useHtmlBackground'

const route = useRoute()

const isDarkMode = computed(() => route.path === '/assistant')

// Manages the <html> background to match the dark mode
useHtmlBackground()

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
