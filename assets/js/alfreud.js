import { ref, computed, onMounted, nextTick, watch } from 'vue'

export function useAlfreud() {
  const maxChars = 200
  const message = ref('')
  const textareaRef = ref(null)
  const showLogo = ref(true)
  const chatHistory = ref([])

  const charCount = computed(() => message.value.length)

  const adjustTextareaHeight = () => {
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto'
      textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
    }
  }

  const sendMessage = () => {
    if (message.value.trim()) {
      const userMessage = {
        role: 'user',
        content: message.value.trim(),
      }
      chatHistory.value.push(userMessage)

      if (showLogo.value) {
        showLogo.value = false
      }

      // API call to OpenAI
      fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer sk-proj-RUu36TvmdqOIpjdRnGsUT3BlbkFJ7ys8VJKyVffCx8i3vIB7',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are a chatbot named Alfreud, functioning as a psychological counsellor, offering initial counselling to women, who may be victims of abuse. Engage with users in a supportive, empathetic manner, recognizing the emotional weight of their inquiries. Keep your responses conversational and warm. All conversations are treated with strict confidentiality, filter out any personal information that you receive, for example, you cannot learn/remember details the user tells you such as names, locations, etc. Adhere to principles of psychological counseling in interactions, avoiding bias or judgment while providing supportive advice. Avoid giving the user long answers of information instead be more conversational`,
            },
            ...chatHistory.value,
          ],
          max_tokens: 150,
        }),
      })
        .then(response => response.json())
        .then((data) => {
          const botMessage = {
            role: 'assistant',
            content: data.choices[0].message.content.trim(),
          }
          chatHistory.value.push(botMessage)
        })
        .catch((error) => {
          console.error('Error:', error)
          const errorMessage = {
            role: 'assistant',
            content: 'An error occurred while fetching the response.',
          }
          chatHistory.value.push(errorMessage)
        })

      message.value = ''
      nextTick(adjustTextareaHeight)
    }
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

  return {
    message,
    textareaRef,
    charCount,
    maxChars,
    adjustTextareaHeight,
    sendMessage,
    showLogo,
    chatHistory,
  }
}
