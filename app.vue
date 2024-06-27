<template>
  <div
    class="flex flex-col w-screen h-screen font-roboto text-sm"
    :class="{
      'bg-background-dark text-primary-dark': isDarkMode,
      'bg-background text-primary': !isDarkMode,
    }"
  >
    <AnemoneNavbar />
    <NuxtLayout>
      <NuxtPage class="h-screen bg-red-400"/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AnemoneNavbar from '~/components/AnemoneNavbar.vue'

const route = useRoute()
const isDarkMode = ref(false)

const updateDarkMode = () => {
  isDarkMode.value = route.path.includes('/assistant')
  // Apply dark mode class to html element
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark', 'bg-html-dark')
    document.documentElement.classList.remove('bg-html-light')
  }
  else {
    document.documentElement.classList.remove('dark', 'bg-html-dark')
    document.documentElement.classList.add('bg-html-light')
  }
}

onMounted(() => {
  updateDarkMode()
})

watch(() => route.path, updateDarkMode)
</script>
