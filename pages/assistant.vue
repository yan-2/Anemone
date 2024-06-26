<template>
  <div class="flex flex-col items-center bg-green-900 max-h-dvh">
    <!-- Chat history -->
    <div class="relative flex-1 flex flex-col justify-center items-center max-w-2xl w-full bg-green-600 overflow-y-auto">
      <div
        v-if="showLogo"
        id="alfreudLogo"
        class="flex flex-col justify-center items-center bg-blue-400 w-full p-4 transition-opacity duration-300 ease-in-out"
        :class="{ 'opacity-0': !showLogo, 'opacity-100': showLogo }"
      >
        <div class="text-background font-rosamila text-big">
          Alfreud
        </div>
        <div class="text-secondary font-roboto font-bold text-base">
          How can I help you today?
        </div>
      </div>

      <div class="w-full p-4 font-roboto">
        <div
          v-for="(msg, index) in chatHistory"
          :key="index"
          class="mb-4"
          :class="msg.role ? (msg.role === 'user' ? 'flex flex-col items-end' : 'flex flex-col items-start') : 'flex flex-col items-start'"
        >
          <div class="text-secondary font-bold mb-1">
            {{ msg.role ? (msg.role === 'user' ? 'User' : 'Alfreud') : 'Unknown' }}
          </div>
          <div
            :class="[
              'p-2 rounded max-w-[70%]',
              msg.role ? (msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black') : 'bg-gray-400 text-white',
            ]"
          >
            {{ msg.content || 'No message content' }}
          </div>
        </div>
      </div>
    </div>

    <!-- Input bar -->
    <div class="flex items-end w-4/12 bg-ternary font-roboto py-3 px-3 rounded-xl">
      <div class="relative w-full h-full flex items-center mr-4 py-1">
        <textarea
          ref="textareaRef"
          v-model="message"
          spellcheck="false"
          placeholder="Talk with Alfreud"
          rows="1"
          class="text-neutral placeholder-secondary resize-none bg-transparent caret-neutral w-full text-base focus:outline-none"
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
        <button
          class="hover:bg-secondary text-secondary font-bold text-base px-2.5 py-1 rounded-lg bg-transparent hover:text-neutral transition-colors duration-300"
          @click="sendMessage"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlfreud } from '~/assets/js/alfreud'

const { message, textareaRef, charCount, maxChars, adjustTextareaHeight, sendMessage, showLogo, chatHistory } = useAlfreud()
</script>
