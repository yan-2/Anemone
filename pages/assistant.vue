<template>
  <div class="flex flex-col justify-between items-center">
    <div class="flex flex-col justify-center items-center">
      <div class="text-background font-rosamila text-big">
        Alfreud
      </div>
      <div class="text-secondary font-roboto font-bold text-base">
        How can I help you today?
      </div>
    </div>
    <!-- Chatbot input bar -->
    <div class="flex items-end w-4/12 bg-ternary font-roboto py-3 px-3">
      <div class="relative w-full h-full flex items-center mr-4 py-1">
        <textarea
          ref="textareaRef"
          v-model="message"
          placeholder="Talk with Alfreud"
          rows="1"
          class="text-neutral placeholder-secondary resize-none bg-transparent caret-accent caret-neutral w-full text-base focus:outline-none"
          @input="adjustTextareaHeight"
        />
      </div>
      <div class="flex justify-center items-center">
        <div class="text-base mr-2.5">
          <span :class="['font-bold', charCount > maxChars * 0.9 ? 'text-action' : 'text-neutral']">
            {{ charCount }}
          </span>
          <span class="text-secondary">/{{ maxChars }}</span>
        </div>
        <button class="bg-background text-primary font-bold text-base px-2.5 py-1">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'

// Message character counters
const maxChars = 200
const message = ref('')
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const charCount = computed(() => message.value.length)

const adjustTextareaHeight = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
  }
}

const sendMessage = () => {
  // Implement send logic here
  console.log('Sending message:', message.value)
  message.value = ''
  nextTick(adjustTextareaHeight)
}

onMounted(() => {
  adjustTextareaHeight()
})

// Watcher to limit input to maxChars
watch(message, (newVal) => {
  if (newVal.length > maxChars) {
    message.value = newVal.slice(0, maxChars)
  }
})
</script>
