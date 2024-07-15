<!-- HTML structure -->
<template>
  <div class="flex justify-center px-6 py-3 w-full">
    <!-- Card -->
    <div class="w-full rounded-2xl bg-neutral border border-primary shadow-md p-8">
      <!-- Title -->
      <h1 class="font-rosamila text-5xl text-primary mb-2 text-center">
        Request
      </h1>
      <!-- Subtitle -->
      <h2 class="text-secondary mb-8 text-center">
        Anemone at your rescue
      </h2>
      <!-- Request -->
      <form class="space-y-4">
        <!-- Options -->
        <select
          v-model="requestType"
          class="w-full focus:outline-none focus:cursor-pointer"
        >
          <option
            value=""
            disabled
          >
            Request Class
          </option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <!-- Textarea -->
        <textarea
          v-model="message"
          placeholder="Tell us what is going on"
          maxlength="500"
          class="w-full p-4 rounded-2xl resize-none h-60 border border-secondary/50"
          @input="updateCharCount"
        />
        <div class="flex items-center justify-between mx-4">
          <div
            class="font-bold rounded-full"
            :class="levelColor"
          >
            {{ levelText }}
          </div>
          <div>
            <span
              class="font-bold"
              :class="chars < 400 ? 'text-primary' : 'text-action'"
            >{{ chars }}</span>
            <span class="text-secondary">/{{ charLimit }}</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<!-- Typescript code -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const requestType = ref('')
const message = ref('')
const chars = ref(0)
const charLimit = 500
const options = [
  { value: 'assistance', label: 'Assistance' },
  { value: 'booking', label: 'Booking' },
  { value: 'rescue', label: 'Rescue' },
  { value: 'other', label: 'Other' },
]

const updateCharCount = () => {
  chars.value = message.value.length
}

// New computed properties for Level functionality
const levelText = computed(() => {
  const levelMap = {
    booking: 'Low',
    other: 'Low',
    assistance: 'Medium',
    rescue: 'High'
  }
  return levelMap[requestType.value] || 'Level'
})

const levelColor = computed(() => {
  const colors = {
    booking: 'text-bulbasaur',
    other: 'text-bulbasaur',
    assistance: 'text-charizard',
    rescue: 'text-action',
  }
  return colors[requestType.value] || 'text-secondary'
})
</script>
