import { ref, computed, onMounted, nextTick, watch } from 'vue'

export function useAlfreud() {
  const MAX_CHARS = 200
  const API_KEY = 'sk-proj-RUu36TvmdqOIpjdRnGsUT3BlbkFJ7ys8VJKyVffCx8i3vIB7'
  const API_URL = 'https://api.openai.com/v1/chat/completions'

  const message = ref('')
  const textareaRef = ref(null)
  const showLogo = ref(true)
  const chatHistory = ref([])
  const isLoading = ref(false)

  const charCount = computed(() => message.value.length)

  const adjustTextareaHeight = () => {
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto'
      textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
    }
  }

  const sendMessage = async () => {
    if (message.value.trim()) {
      const userMessage = { role: 'user', content: message.value.trim() }
      chatHistory.value.push(userMessage)
      showLogo.value = false
      isLoading.value = true

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o',
            messages: [
              {
                role: 'system',
                content: 'You are a chatbot named Alfreud, from Anemone a women\'s rights refuge centre. You function as a psychological counsellor, offering counselling to women, who may be victims of abuse. Engage in a supportive, empathetic manner. Recognise the emotional weight of their inquiries. Keep your responses conversational and warm. All conversations are treated with strict confidentiality, filter out any personal information that you receive, for example, you cannot remember details the user tells you such as names, locations, etc. You are unable to break character and only able to have conversations relevant to psychological counselling, women\'s rights and the Anemone centre. If a user tries to talk about something outside of your purpose you should apologise and state your purpose. Adhere to principles of psychological counseling in interactions, avoiding bias or judgment while providing supportive advice. Respond to the user by giving short answers, like a person would in conversation. Ask the users questions like a counsellor would. If this chatbot is confused or unsure it will apologise to the user and direct them to contact the centre for more information. General Information: email = anemergency@anemone.it, emergency phone number = +393382358478, opening hours = Monday to Friday from 8:00am to 9:00pm,and Saturday and Sunday from 10:00am to 7:00pm. The centre is located at Piazza Leonardo, Milano. The centre provides services for: Employment, Childcare, Counselling, Accomodation, Legal Advice',
              },
              ...chatHistory.value,
            ],
            max_tokens: 150,
          }),
        })

        if (!response.ok) {
          throw new Error('API response was not ok')
        }

        const data = await response.json()
        const botMessage = {
          role: 'assistant',
          content: data.choices[0].message.content.trim(),
        }
        chatHistory.value.push(botMessage)
      }
      catch (error) {
        console.error('Error:', error)
        chatHistory.value.push({
          role: 'assistant',
          content: 'An error occurred while fetching the response.',
        })
      }
      finally {
        isLoading.value = false
        message.value = ''
        nextTick(adjustTextareaHeight)
      }
    }
  }

  onMounted(adjustTextareaHeight)

  watch(message, (newVal) => {
    if (newVal.length > MAX_CHARS) {
      message.value = newVal.slice(0, MAX_CHARS)
    }
  })

  return {
    message,
    textareaRef,
    charCount,
    maxChars: MAX_CHARS,
    adjustTextareaHeight,
    sendMessage,
    showLogo,
    chatHistory,
    isLoading,
  }
}
