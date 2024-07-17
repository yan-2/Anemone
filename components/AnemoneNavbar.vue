<!-- HTML structure -->
<template>
  <nav class="w-full py-6 px-6 relative text-secondary dark:text-secondary-dark">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between">
        <!-- Navbar logo -->
        <NuxtLink
          to="/"
          class="z-50 relative"
          aria-label="Home"
        >
          <svg
            class="w-11 h-7 fill-primary dark:fill-primary-dark md:hover:animate-shrink"
            viewBox="0 0 58 24"
          >
            <title>Anemone Logo</title>
            <desc>Modern logo with primary colors representing the center's identity</desc>
            <path d="M19.3588 15C18.8021 19.8345 14.6952 23.5885 9.7115 23.5885C4.34799 23.5885 0 19.2405 0 13.877C0 8.51351 4.34799 4.16553 9.7115 4.16553C14.7794 4.16553 18.9406 8.04744 19.3839 13L34.9084 13C30.5948 11.5851 25.3472 8.17951 26.2916 0L39.1881 13L56.1802 13V15L19.3588 15Z" />
          </svg>
        </NuxtLink>
        <!-- Links -->
        <ul class="hidden sm:flex justify-center space-x-4">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="hover:text-primary dark:hover:text-primary-dark"
          >
            <NuxtLink
              v-if="!['Services', 'Projects'].includes(item.text)"
              :to="item.href"
              :class="{
                'text-primary dark:text-primary-dark': isActive(item.href),
                'font-bold': isActive(item.href),
              }"
            >
              {{ item.text }}
            </NuxtLink>
            <!-- Floating menus -->
            <ServicesMenu
              v-else-if="item.text === 'Services'"
              :class="{ 'text-primary dark:text-primary-dark': isActive('/services') }"
            />
            <ProjectsMenu
              v-else-if="item.text === 'Projects'"
              :class="{ 'text-primary dark:text-primary-dark': isActive('/projects') }"
            />
          </li>
        </ul>
        <!-- Mobile Menu -->
        <MobileMenu ref="mobileMenu" />
      </div>
    </div>
  </nav>
</template>

<!-- Typescript code -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ServicesMenu from '~/components/navbar/ServicesMenu.vue'
import ProjectsMenu from '~/components/navbar/ProjectsMenu.vue'
import MobileMenu from '~/components/navbar/MobileMenu.vue'

// Navbar links
const menuItems = ref([
  { text: 'Assistant', href: '/assistant' },
  { text: 'Center', href: '/center' },
  { text: 'Projects', href: '/projects' },
  { text: 'Services', href: '/services' },
  { text: 'People', href: '/people' },
])

// Exports component
defineOptions({ name: 'AnemoneNavbar' })

const route = useRoute()
const mobileMenu = ref(null)

// Checks if the current route matches the menu link
const isActive = (href: string) => route.path === href
</script>
