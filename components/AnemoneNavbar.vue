<template>
  <nav class="w-full p-3.5 relative text-secondary dark:text-secondary-dark">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between">
        <!-- Navbar logo : redirects to homepage -->
        <NuxtLink to="/">
          <svg
            class="w-11 h-7 fill-primary dark:fill-primary-dark"
            viewBox="0 0 58 24"
          >
            <path d="M19.3588 15C18.8021 19.8345 14.6952 23.5885 9.7115 23.5885C4.34799 23.5885 0 19.2405 0 13.877C0 8.51351 4.34799 4.16553 9.7115 4.16553C14.7794 4.16553 18.9406 8.04744 19.3839 13L34.9084 13C30.5948 11.5851 25.3472 8.17951 26.2916 0L39.1881 13L56.1802 13V15L19.3588 15Z" />
          </svg>
        </NuxtLink>
        <!-- Links -->
        <ul class="hidden sm:flex justify-center space-x-4">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="hover:text-primary dark:hover:text-primary-dark"
            :class="{ 'font-bold text-primary dark:text-primary-dark': isActive(item.href) }"
          >
            <NuxtLink :to="item.href">
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

// Exports component
defineOptions({ name: 'AnemoneNavbar' })

// List of navbar links
const menuItems = ref([
  { text: 'Assistant', href: '/assistant' },
  { text: 'Center', href: '/center' },
  { text: 'Projects', href: '/projects' },
  { text: 'Services', href: '/services' },
  { text: 'People', href: '/people' },
])

const route = useRoute()

// Checks if the current route matches the menu link
const isActive = (href: string) => route.path === href
</script>
