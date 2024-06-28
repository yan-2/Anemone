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
</script>
