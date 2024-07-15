<template>
  <div class="flex justify-center px-6 py-3 w-full">
    <div
      v-if="!messageSubmitted"
      class="flex flex-col max-w-3xl w-full rounded-2xl"
    >
      <h1 class="font-rosamila text-5xl text-primary mb-2 text-center">
        Request
      </h1>
      <h2 class="text-secondary mb-8 text-center">
        Anemone at your rescue
      </h2>
      <form @submit.prevent="handleSubmit">
        <div class="px-4 py-2 mb-4 rounded-lg border border-primary shadow-md bg-neutral">
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
        </div>
        <div class="flex flex-col w-full rounded-lg border shadow-md bg-neutral border-primary mb-8 overflow-hidden">
          <textarea
            v-model="message"
            placeholder="Tell us what is going on"
            :maxlength="charLimit"
            class="w-full p-4 resize-none min-h-60 h-fit mb-4 focus:outline-none"
            @input="updateCharCount"
          />
          <div class="flex items-center justify-between mb-4 mx-4">
            <div class="flex flex-col items-start">
              <span
                class="px-4 py-1 rounded-lg"
                :class="[levelColor, levelBgColor]"
              >{{ levelText }}</span>
            </div>
            <div>
              <span
                :class="chars < 400 ? 'text-primary' : 'text-action'"
              >{{ chars }}</span>
              <span class="text-secondary">/{{ charLimit }}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full">
          <button
            type="submit"
            class="w-full max-w-[256px] py-2 px-4 rounded-lg transition duration-300"
            :class="[
              isFormValid
                ? 'bg-primary text-neutral hover:bg-primary/85 hover:cursor-pointer'
                : 'bg-primary/20 text-neutral',
            ]"
            :disabled="!isFormValid"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center rounded-2xl bg-neutral border border-primary shadow-md p-8"
    >
      <h1 class="font-rosamila text-5xl text-primary mb-2 text-center">
        Thanks
      </h1>
      <h2 class="text-secondary mb-8 text-center">
        You have done the first step to a brighter future<br>
        Give us a little time to analyze your request
      </h2>
      <div class="flex justify-center w-full">
        <NuxtLink
          to="/"
          class="w-full max-w-[256px] bg-primary hover:bg-primary/85 hover:cursor-pointer text-neutral py-2 px-4 rounded-lg transition duration-300 text-center"
        >
          Homepage
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const requestType = ref('')
const message = ref('')
const chars = ref(0)
const charLimit = 500
const messageSubmitted = ref(false)
const options = [
  { value: 'assistance', label: 'Assistance' },
  { value: 'booking', label: 'Booking' },
  { value: 'rescue', label: 'Rescue' },
  { value: 'other', label: 'Other' },
]

const updateCharCount = () => {
  chars.value = message.value.length
}

const levelText = computed(() => {
  const levelMap: Record<string, string> = {
    booking: 'Low',
    other: 'Low',
    assistance: 'Medium',
    rescue: 'High',
  }
  return levelMap[requestType.value] || 'Undefined'
})

const levelColor = computed(() => {
  const colors: Record<string, string> = {
    booking: 'text-bulbasaur',
    other: 'text-bulbasaur',
    assistance: 'text-charizard',
    rescue: 'text-action',
  }
  return colors[requestType.value] || 'text-secondary'
})

const levelBgColor = computed(() => {
  const bgColors: Record<string, string> = {
    booking: 'bg-bulbasaur/20',
    other: 'bg-bulbasaur/20',
    assistance: 'bg-charizard/20',
    rescue: 'bg-action/20',
  }
  return bgColors[requestType.value] || 'bg-secondary/20'
})

const isFormValid = computed(() => {
  return requestType.value !== '' && message.value.trim() !== ''
})

const handleSubmit = () => {
  if (isFormValid.value) {
    console.log('Message submission simulated!')
    messageSubmitted.value = true
  }
}
</script>
