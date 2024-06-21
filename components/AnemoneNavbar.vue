<template>
  <nav class="fixed w-full z-20 top-0 start-0 bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div class="flex items-center justify-between py-4 md:py-5">
        <!-- Logo : come back to homepage -->
        <NuxtLink
            to="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <svg
              class="w-12 h-8"
              viewBox="0 0 57 24"
              fill="none"
          >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.3588 15C18.8021 19.8345 14.6952 23.5885 9.7115 23.5885C4.34799 23.5885 0 19.2405 0 13.877C0 8.51351 4.34799 4.16553 9.7115 4.16553C14.7794 4.16553 18.9406 8.04744 19.3839 13L34.9084 13C30.5948 11.5851 25.3472 8.17951 26.2916 0L39.1881 13L56.1802 13V15L19.3588 15Z"
                fill="#2F2E41"
            />
          </svg>
        </NuxtLink>
        <div class="md:hidden">
          <button
              type="button"
              class="inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              :aria-expanded="isMenuOpen.toString()"
              @click="toggleMenu"
          >
            <div
                class="hamburger-icon"
                :class="{ open: isMenuOpen }"
            >
              <span />
              <span />
            </div>
          </button>
        </div>
        <div class="hidden md:flex md:items-center">
          <ul class="flex space-x-8 font-roboto text-base text-secondary">
            <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="hover:text-primary"
            >
              <NuxtLink
                  :to="item.href"
                  :class="[
                  'block py-2',
                  isActiveRoute(item.href)
                    ? 'text-primary font-bold'
                    : 'text-gray-600 hover:text-gray-900',
                ]"
                  :aria-current="isActiveRoute(item.href) ? 'page' : undefined"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state -->
    <div
        v-show="isMenuOpen"
        class="md:hidden fixed inset-0 z-10 bg-white"
        style="top: 64px;" <!-- Adjust this value based on your navbar height -->
    >
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <NuxtLink
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.href"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium',
            isActiveRoute(item.href)
              ? 'text-primary bg-gray-100 font-bold'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
          ]"
          :aria-current="isActiveRoute(item.href) ? 'page' : undefined"
          @click="closeMenu"
      >
        {{ item.text }}
      </NuxtLink>
    </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const isMenuOpen = ref(false)
    const route = useRoute()

    const menuItems = ref([
      { text: 'Assistant', href: '/assistant' },
      { text: 'Center', href: '/center' },
      { text: 'Projects', href: '/projects' },
      { text: 'Services', href: '/services' },
      { text: 'People', href: '/people' },
    ])

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    const isActiveRoute = (href) => {
      return computed(() => route.path === href).value
    }

    return {
      isMenuOpen,
      menuItems,
      toggleMenu,
      closeMenu,
      isActiveRoute
    }
  }
}
</script>

<style scoped>
.hamburger-icon {
  width: 20px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

.hamburger-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: currentColor;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.hamburger-icon span:nth-child(1) {
  top: 4px;
}

.hamburger-icon span:nth-child(2) {
  bottom: 4px;
}

.hamburger-icon.open span:nth-child(1) {
  top: 9px;
  transform: rotate(45deg);
}

.hamburger-icon.open span:nth-child(2) {
  bottom: 9px;
  transform: rotate(-45deg);
}
</style>