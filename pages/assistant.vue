<template>
  <div class="flex flex-col h-full w-full overflow-hidden">
    <div class="flex-1 w-full flex flex-col overflow-hidden">
      <!-- CHAT -->
      <div
        ref="chatHistoryRef"
        class="flex-1 overflow-y-auto w-full px-6"
      >
        <div class="max-w-3xl mx-auto p-4 min-h-full">
          <!-- ALFREUD LOGO  -->
          <div
            v-if="showLogo"
            class="flex items-center justify-center h-full space-y-2"
          >
            <div class="text-center">
              <!-- Title -->
              <div class="font-rosamila text-5xl text-primary-dark">
                Alfreud
              </div>
              <!-- Subtitle -->
              <div class="text-secondary-dark">
                How can I help you today?
              </div>
            </div>
          </div>

          <!-- MESSAGES -->
          <div class="space-y-4">
            <div
              v-for="(msg, index) in chatHistory"
              :key="index"
              class="flex flex-col"
              :class="msg.role === 'user' ? 'items-end' : 'items-start'"
            >
              <!-- Message role -->
              <div
                v-if="msg.role !== 'user'"
                class="text-sm text-primary-dark mb-2"
              >
                Alfreud
              </div>
              <!-- Message content -->
              <div
                class="max-w-[80%] rounded-md"
                :class="msg.role === 'user' ? 'px-3 py-2 bg-ternary text-neutral' : 'bg-transparent text-secondary-dark'"
              >
                {{ msg.content }}
              </div>
            </div>
          </div>

          <!-- Thinking indicator -->
          <div
            v-if="isLoading"
            class="flex flex-col items-start"
          >
            <div class="text-primary-dark mb-2">
              Alfreud
            </div>
            <div class="flex space-x-1.5">
              <div class="w-1.5 h-1.5 bg-secondary-dark rounded-full animate-bounce" />
              <div
                class="w-1.5 h-1.5 bg-secondary-dark rounded-full animate-bounce"
                style="animation-delay: 0.15s"
              />
              <div
                class="w-1.5 h-1.5 bg-secondary-dark rounded-full animate-bounce"
                style="animation-delay: 0.3s"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- INPUT BAR -->
      <div class="flex justify-center w-full mt-4 px-4">
        <div class="max-w-3xl w-full bg-ternary flex items-end py-4 border border-secondary-dark/5 rounded-xl shadow-lg">
          <div class="flex-grow flex items-center px-4 py-0.5">
            <!-- Textarea -->
            <textarea
              ref="textareaRef"
              v-model="message"
              spellcheck="false"
              placeholder="Talk with Alfreud"
              rows="1"
              :maxlength="maxChars"
              class="max-h-32 text-primary-dark placeholder-secondary-dark resize-none bg-transparent caret-neutral w-full focus:outline-none"
              @input="adjustTextareaHeight"
              @keydown.enter.exact.prevent="sendMessage"
            />
          </div>
          <!-- Chars counter -->
          <div class="py-0.5">
            <span
              class="font-bold"
              :class="charCount < 150 ? 'text-primary-dark' : 'text-action'"
            >{{ charCount }}</span><span class="text-secondary-dark">/{{ maxChars }}</span>
          </div>
          <!-- Send button -->
          <button
            class="transition-colors duration-200 px-4"
            :class="message.trim() ? 'text-primary-dark animate-wiggle' : 'text-secondary-dark'"
            :disabled="!message.trim()"
            @click="sendMessage"
          >
            <PhPaperPlane
              :size="24"
              weight="fill"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { PhPaperPlane } from '@phosphor-icons/vue'
import { useAlfreud } from '~/assets/js/alfreud.js'

definePageMeta({
  layout: 'chatbot',
})

const {
  message,
  textareaRef,
  charCount,
  maxChars,
  sendMessage,
  showLogo,
  chatHistory,
  isLoading,
} = useAlfreud()

const chatHistoryRef = ref(null)

const adjustTextareaHeight = () => {
  const textarea = textareaRef.value
  textarea.style.height = 'auto'
  const newHeight = Math.min(textarea.scrollHeight, 128) // 128px is equivalent to max-h-32
  textarea.style.height = `${newHeight}px`
}

const scrollToBottom = () => {
  nextTick(() => {
    if (chatHistoryRef.value) {
      chatHistoryRef.value.scrollTop = chatHistoryRef.value.scrollHeight
    }
  })
}

watch(chatHistory, scrollToBottom, { deep: true })
watch(isLoading, (newValue) => {
  if (!newValue) {
    scrollToBottom()
  }
})
</script>
