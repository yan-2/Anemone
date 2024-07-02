<template>
  <div class="sm:hidden">
    <!-- Mobile menu button -->
    <button @click="toggleMenu" class="text-secondary dark:text-secondary-dark focus:outline-none z-50 relative">
      <div class="w-6 h-6 flex flex-col justify-center items-center">
        <span class="w-6 h-0.5 bg-current transition-all duration-300 ease-in-out absolute"
              :class="isOpen ? 'rotate-45' : '-translate-y-1'"></span>
        <span class="w-6 h-0.5 bg-current transition-all duration-300 ease-in-out absolute"
              :class="isOpen ? '-rotate-45' : 'translate-y-1'"></span>
      </div>
    </button>

    <!-- Mobile menu overlay -->
    <transition
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 bg-white dark:bg-gray-900 z-40 overflow-hidden">
        <nav class="h-full flex flex-col">
          <transition name="slide">
            <ul v-if="!activeSubmenu" class="space-y-4 px-8 py-12 overflow-y-auto">
              <li v-for="(item, index) in menuItems" :key="index">
                <button
                    @click="item.submenu ? openSubmenu(item) : navigateTo(item.href)"
                    class="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200 flex justify-between items-center w-full"
                    :class="{ 'text-primary dark:text-primary-dark': isActive(item.href) }"
                >
                  {{ item.text }}
                  <svg v-if="item.submenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </li>
            </ul>
          </transition>

          <transition name="slide">
            <div v-if="activeSubmenu" class="absolute inset-0 bg-white dark:bg-gray-900">
              <button @click="closeSubmenu" class="text-xl font-semibold text-gray-900 dark:text-gray-100 px-8 py-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <ul class="space-y-4 px-8 py-4 overflow-y-auto">
                <li v-for="(subItem, subIndex) in activeSubmenu.submenu" :key="subIndex">
                  <NuxtLink
                      :to="subItem.href"
                      class="text-lg text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-dark transition-colors duration-200 block"
                      :class="{ 'text-primary dark:text-primary-dark': isActive(subItem.href) }"
                      @click="closeMenu"
                  >
                    {{ subItem.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </transition>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()
const router = useRouter()
const activeSubmenu = ref(null)

const menuItems = ref([
  { text: 'Assistant', href: '/assistant' },
  {
    text: 'Center',
    href: '/center',
    submenu: [
      { text: 'Overview', href: '/center/overview' },
      { text: 'Locations', href: '/center/locations' },
      { text: 'Resources', href: '/center/resources' },
    ]
  },
  { text: 'Projects', href: '/projects' },
  {
    text: 'Services',
    href: '/services',
    submenu: [
      { text: 'Consulting', href: '/services/consulting' },
      { text: 'Development', href: '/services/development' },
      { text: 'Support', href: '/services/support' },
    ]
  },
  { text: 'People', href: '/people' },
])

const isActive = (href: string) => route.path === href

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
  if (!isOpen.value) {
    closeSubmenu()
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
  closeSubmenu()
}

const openSubmenu = (item) => {
  activeSubmenu.value = item
}

const closeSubmenu = () => {
  activeSubmenu.value = null
}

const navigateTo = (href: string) => {
  router.push(href)
  closeMenu()
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>