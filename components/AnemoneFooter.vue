<!-- HTML structure -->
<template>
  <div class="flex justify-center text-secondary dark:fill-secondary-dark">
    <footer class="p-6">
      <div class="flex justify-center items-center space-x-4">
        <!-- Contacts -->
        <NuxtLink
          to="/contacts"
          :class="[
            'hover:text-primary dark:hover:text-primary-dark',
            { 'font-bold text-primary dark:text-primary-dark': isActive('/contacts') },
          ]"
        >
          Contacts
        </NuxtLink>
        <!-- Instagram -->
        <a
          href="https://www.instagram.com/anemoneresc?igsh=MWVhdnhjb3p1bG9heg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary dark:hover:text-primary-dark"
          aria-label="Visit Anemone Instagram page"
        >
          <PhosphorIconInstagramLogo :size="20" />
        </a>
        <!-- X -->
        <a
          href="https://x.com/anemonerescue?s=21"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-primary dark:hover:text-primary-dark"
          aria-label="Visit Anemone X page"
        >
          <PhosphorIconXLogo :size="20" />
        </a>
        <!-- FAQ -->
        <NuxtLink
          to="/faq"
          :class="[
            'hover:text-primary dark:hover:text-primary-dark',
            { 'font-bold text-primary dark:text-primary-dark': isActive('/faq') },
          ]"
        >
          FAQ
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>

<!-- Typescript code -->
<script setup lang="ts">
import { useRoute } from 'vue-router'

// Exports component
defineOptions({ name: 'AnemoneFooter' })

const route = useRoute()

// Checks if the current route matches the path [ used for text dynamic bolding ]
const isActive = (path: string) => route.path === path
</script>
