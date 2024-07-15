<!-- FAQ Component -->
<template>
  <div class="flex justify-center px-6 py-3">
    <div class="text-center">
      <!-- Title -->
      <h1 class="font-rosamila text-5xl text-primary mb-2">
        FAQ
      </h1>
      <!-- Subtitle -->
      <h2 class="text-secondary mb-8">
        Answers to your questions
      </h2>
      <!-- Boxes -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <!-- Dynamic FAQ boxes -->
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="text-left rounded-2xl bg-neutral border border-primary shadow-md p-6"
        >
          <h3 class="font-bold mb-1">
            {{ item.question }}
          </h3>
          <p class="text-primary">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const faqItems = ref([])

    onMounted(async () => {
      try {
        const response = await fetch('/json/faq.json')
        faqItems.value = await response.json()
      }
      catch (error) {
        console.error('Error loading FAQ data:', error)
      }
    })

    return {
      faqItems,
    }
  },
}
</script>
