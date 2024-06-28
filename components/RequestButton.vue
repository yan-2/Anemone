<template>
  <!-- Request help button -->
  <button
    class="hover:bg-action/85"
    :class="[
      'bg-action text-neutral px-4 py-2 text-sm rounded-md',
      'transition-all duration-200 ease-in-out',
      { 'transform scale-95': isClicked },
    ]"
    @click="handleClick"
  >
    Request Help
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isClicked = ref(false)

// Exports component
defineOptions({ name: 'RequestButton' })

// Opens the email client on the local machine
const handleClick = () => {
  isClicked.value = true

  // Resets the button size after a small delay
  setTimeout(() => {
    isClicked.value = false
  }, 200)

  const email = 'anemergency@anemone.it'
  const subject = encodeURIComponent('Help Request')
  window.location.href = `mailto:${email}?subject=${subject}`
}
</script>
