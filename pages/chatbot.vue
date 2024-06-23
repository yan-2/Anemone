<template>
  <div class="chatbotContainer">
    <div class="chatbotNavbar">
      <AnemoneNavbar />
    </div>
    <div class="chatbot">
      <div class="pageTitle">
        <h1 class="chatbotTitle">
          Alfreud
        </h1>
        <h1 class="chatbotSubtitle">
          Our friendly and confidential virtual counselling chatbot
        </h1>
      </div>
      <div class="chatbotMessages">
              <!-- messages from the converastion -->
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="chat-message"
          :class="message.role"
        >
          <div class="chatbotMessage">
            <div class="messageRole">
              {{ message.role === 'user' ? 'You' : 'Alfreud' }}
            </div>
            {{ message.content }}
          </div>
        </div>
      </div>
      <div class="chatbotInputBox">
        <div
          class="editableDiv"
          contenteditable="true"
          spellcheck="false"
          @input="updateCharCount"
          @keyup.enter="sendMessage"
        >
          Message Anemone
        </div>
        <span class="chatbotCounter">
          <span class="chatbotCounterValue">{{ charCount }}</span>/{{ charLimit }}
        </span>
        <button @click="sendMessage">
          Send
        </button>
      </div>
    </div>
    <div class="chatbotFooter">
      <AnemoneFooter />
    </div>
  </div>
</template>

<script>
import { PRIMARY_COLOR, SECONDARY_COLOR, BACKGROUND_COLOR } from '~/assets/js/constants.js'
import AnemoneFooter from '~/components/anemoneFooter.vue'
import AnemoneNavbar from '~/components/anemoneNavbar.vue'

const CHAR_LIMIT = 200

export default {
  components: { AnemoneNavbar, AnemoneFooter },
  data() {
    return {
      charCount: 0,
      charLimit: CHAR_LIMIT,
      inputText: '',
      messages: [
        {
          role: 'assistant',
          content: `Hello, I am a virtual counselling chatbot from Anemone. I am here to offer initial counselling to women. Our conversation is confidential, and I do not remember any personal details you share, such as names or locations. How may I assist you today?`,
        },
      ],
      firstMessageSent: false, 
    }
  },
  mounted() {
    document.body.style.backgroundColor = PRIMARY_COLOR

    // event listener for input text box interactions
    const inputDiv = document.querySelector('.chatbotInputBox .editableDiv')
    inputDiv.addEventListener('focus', this.hidePlaceholder)
    inputDiv.addEventListener('blur', this.showPlaceholder)
    inputDiv.addEventListener('input', this.updateCharCount)

    this.showPlaceholder({ target: inputDiv })

    if (inputDiv.innerText.trim() === 'Message Anemone') {
      inputDiv.style.color = SECONDARY_COLOR
    }
  },
  methods: {
    hidePlaceholder(event) {
            // Hide placeholder text when focused
      const inputDiv = event.target
      if (inputDiv.innerText.trim() === 'Message Anemone' && !this.firstMessageSent) {
        inputDiv.innerText = ''
      }
      inputDiv.style.color = BACKGROUND_COLOR
    },
    showPlaceholder(event) {
            // Show placeholder text when blurred
      const inputDiv = event.target
      if (inputDiv.innerText.trim() === '' && !this.firstMessageSent) {
        inputDiv.style.color = SECONDARY_COLOR
        inputDiv.innerText = 'Message Anemone'
      }
      else {
        inputDiv.style.color = SECONDARY_COLOR
      }
    },
    updateCharCount(event) {
            // Update character count 
      const inputDiv = event.target
      if (inputDiv.innerText.length > this.charLimit) {
        inputDiv.innerText = inputDiv.innerText.substring(0, this.charLimit)
      }
      this.charCount = inputDiv.innerText.length
      this.inputText = inputDiv.innerText
    },
    sendMessage() {
      const inputDiv = document.querySelector('.chatbotInputBox .editableDiv')
      if (inputDiv.innerText.trim() === '') return

      const userMessage = {
        role: 'user',
        content: inputDiv.innerText,
      }
      this.messages.push(userMessage)

      const sampleMessages = [ // example messages for chatbot conditioning
        {
          role: 'user',
          content: `I can't handle the pressure at home anymore.`,
        },
        {
          role: 'assistant',
          content: `I'm really sorry to hear that you're feeling so pressured. It's important to take moments for yourself when things get overwhelming. Would you like to discuss what’s been happening,
          or perhaps I can suggest some ways to help you cope better?`,
        },
        {
          role: 'user',
          content: `I am thinking of leaving my husband.`,
        },
        {
          role: 'assistant',
          content: `It sounds like you are going through a lot right now. Leaving an abusive situation is a big step. Would you like to tell me what is happening? At Anemone we are here to support you in these tough times.`,
        },
      ]

      // api call to set up chatbot
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
              content: `You are a chatbot from "Anemone" a women's rights refuge centre. You function as a psychological counsellor, offering initial counselling to women, who may be victims of abuse. Engage in a supportive, empathetic manner. Recognise the emotional weight of their inquiries. Keep your responses conversational and warm. All conversations are treated with strict confidentiality, filter out any personal information that you receive, for example, you cannot remember details the user tells you such as names, locations, etc. Adhere to principles of psychological counseling in interactions, avoiding bias or judgment while providing supportive advice. Respond to the user by giving short answers, like a person would in conversation. Ask the users questions like a counsellor would. If this chatbot is confused or unsure it will apologise to the user and direct them to contact the centre for more information.`,
            },
            ...sampleMessages,
            ...this.messages.slice(1),
          ],
          max_tokens: 150,
        }),
      })
        .then(response => response.json())
        .then((data) => {   // parse response messages into an array we can display
          const botMessage = {
            role: 'assistant',
            content: data.choices[0].message.content.trim(),
          }
          this.messages.push(botMessage)
        })
        .catch((error) => {  // error handling for api response
          console.error('Error:', error)
          const errorMessage = {
            role: 'assistant',
            content: 'An error occurred while fetching the response.',
          }
          this.messages.push(errorMessage)
        })

        // clear input box and char count
      inputDiv.innerText = ''
      this.charCount = 0
      this.firstMessageSent = true
    },
  },
}
</script>


<style scoped lang="less">
@import "@/assets/css/variables.less";
@import "@/assets/css/fonts.less";

.messageRole {
  font-family: "Roboto", sans-serif;
  font-size: @baseFontSize;
  margin-bottom: 10px;
}

.chatbotContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.chatbotNavbar, .chatbotFooter {
  flex-shrink: 0;
}

.chatbot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  overflow: hidden;
}

.pageTitle {
  margin: 20px 0;
  line-height: normal;
  text-align: center;
}

.chatbotTitle {
  font-family: Rosamila, sans-serif;
  font-size: 60px;
  letter-spacing: 4px;
  color: @backgroundColor;
}

.chatbotSubtitle {
  font-family: "Roboto Bold", sans-serif;
  font-size: @baseFontSize;
  color: @backgroundColor;
}

.chatbotMessages {
  width: 45%;
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 10px;
}

.chatbotMessages::-webkit-scrollbar {
  width: 10px;
}

.chatbotMessages::-webkit-scrollbar-track {
  background: var(background-color);
}

.chatbotMessages::-webkit-scrollbar-thumb {
  background: #8A88A0;
  border-radius: 5px;
}

.chatbotMessages::-webkit-scrollbar-thumb:hover {
  background: #2F2E41;
}

.chat-message {
  margin: 25px 0;
}

.chat-message.user {
  text-align: right;
  color: @backgroundColor;
}

.chat-message.assistant {
  text-align: left;
  color: @secondaryColor;
}

.chatbotInputBox {
  display: flex;
  align-items: center;
  background-color: @tertiaryColor;
  width: 30%;
  text-align: left;
  padding: 10px;
  margin: 20px 0;
}

.chatbotInputBox .editableDiv {
  width: 100%;
  color: @backgroundColor;
  margin-right: 20px;
  caret-color: @backgroundColor;
  line-height: normal;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
}

.chatbotInputBox .editableDiv[contenteditable="true"]:empty:before {
  content: 'Message Anemone';
  color: @secondaryColor;
}

.chatbotCounter {
  color: @secondaryColor;
  margin-right: 10px;
}

.chatbotCounterValue {
  font-family: "Roboto Bold", sans-serif;
  color: @backgroundColor;
}

.chatbotInputBox button {
  background-color: @backgroundColor;
  font-family: "Roboto Bold", sans-serif;
  color: @primaryColor;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.chatbotNavbar /deep/ .anemoneNavbar li:hover {
  color: @backgroundColor;
}

.chatbotNavbar /deep/ .anemoneNavbar svg {
  stroke: @backgroundColor;
}

.chatbotNavbar /deep/ .anemoneNavbar path {
  fill: @backgroundColor;
}

.chatbotFooter /deep/ .anemoneFooter li:hover {
  color: @backgroundColor;
}

.chatbotFooter /deep/ .anemoneFooter svg:hover {
  stroke: @backgroundColor;
}
</style>