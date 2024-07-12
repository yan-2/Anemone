<template>
  <div class="sm:hidden">
    <!-- Hamburger -->
    <button
      class="text-primary dark:text-primary-dark focus:outline-none z-50 relative"
      @click="toggleMenu"
    >
      <div class="w-5 h-5 flex flex-col justify-center items-center">
        <span
          class="w-5 h-0.5 bg-current transition-all duration-150 ease-in-out absolute rounded-xl"
          :class="isOpen ? 'rotate-45' : '-translate-y-1.5'"
        />
        <span
          class="w-5 h-0.5 bg-current transition-all duration-150 ease-in-out absolute rounded-xl"
          :class="isOpen ? '-rotate-45' : 'translate-y-1.5'"
        />
      </div>
    </button>

    <!-- Menu -->
    <transition
      enter-active-class="transition-opacity ease-linear duration-100"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-background dark:bg-background-dark z-40 overflow-hidden flex items-center justify-center"
      >
        <nav class="w-full max-w-md">
          <ul class="space-y-6 px-6">
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              class="text-center"
            >
              <button
                class="text-xl inline-block"
                :class="[
                  isActive(item.href)
                    ? 'font-bold text-primary dark:text-primary-dark'
                    : 'text-secondary dark:text-secondary-dark hover:text-primary dark:hover:text-primary-dark',
                ]"
                @click="navigateTo(item.href)"
              >
                {{ item.text }}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface MenuItem {
  text: string
  href: string
}

const isOpen = ref(false)
const route = useRoute()
const router = useRouter()

const menuItems = ref<MenuItem[]>([
  { text: 'Assistant', href: '/assistant' },
  { text: 'Center', href: '/center' },
  { text: 'Projects', href: '/projects' },
  { text: 'Services', href: '/services' },
  { text: 'People', href: '/people' },
])

const isActive = (href: string) => route.path === href

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const navigateTo = (href: string) => {
  router.push(href)
  closeMenu()
}

onMounted(() => {
  console.log('Component mounted')
})

defineExpose({ isOpen })
</script>
