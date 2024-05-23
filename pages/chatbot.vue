<template>
  <AnemoneNavbar />
    <!-- Main title for the chat application -->
  <h1>Virtual Counsellor</h1>
  <div class="chat-container">
      <!-- Container for the chat messages -->
      <div class="chat-box">
          <!-- Loop through messages and display each message -->
          <div v-for="(message, index) in messages" :key="index" class="chat-message" :class="message.role">
              <!-- Display role (user or bot) and message content -->
              <p><strong>{{ message.role === 'user' ? 'You' : 'Assistant' }}:</strong> {{ message.content }}</p>
          </div>
      </div>
      <!-- Input area for the user to type messages -->
      <div class="input-box">
        <input v-model="userInput" @input="updateCharCount" @keyup.enter="sendMessage" placeholder="Type your message here..." />
          <span>{{ charCount }}/200</span> <!-- Character counter display -->
          <button @click="sendMessage">Send</button>
      </div>
      <!-- Footer component -->
      <AnemoneFooter />
  </div>
</template>

<script setup lang="ts">
import AnemoneFooter from '~/components/anemoneFooter.vue';  // Import footer component
import AnemoneNavbar from '~/components/anemoneNavbar.vue'
import { ref } from 'vue';  // Import Vue's ref function for reactive variables

// Reactive variable to hold user input
const userInput = ref("");
const charCount = ref(0);
// Reactive array to hold chat messages, starting with an initial bot message
const messages = ref([
  {
      role: 'assistant',
      content: `Hello, I am a virtual counselling chatbot from Anemone. I am here to offer initial counselling to women. Our conversation is confidential, and I do not remember any personal details you share, such as names or locations. How may I assist you today?`
  }
]);

// Function to update character count
const updateCharCount = () => {
  charCount.value = userInput.value.length;
};

// Function to send user messages and get a response from the chatbot API
const sendMessage = () => {
  // If the input is empty or only whitespace, do nothing
  if (userInput.value.trim() === "") return;

  // Create a user message object
  const userMessage = {
      role: 'user',
      content: userInput.value
  };
  // Add the user message to the messages array
  messages.value.push(userMessage);

  // Send a POST request to the OpenAI API to get the chatbot's response
  fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer sk-proj-RUu36TvmdqOIpjdRnGsUT3BlbkFJ7ys8VJKyVffCx8i3vIB7',  // API key for authentication
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          model: 'gpt-3.5-turbo',  // Specify the model to use
          messages: [
              { 
                  role: 'system', 
                  content: `You are a chatbot from "Anemone" a women's rights refuge centre. You function as a psychological counsellor, offering initial counselling to women, who may be victims of abuse. Engage with users in a supportive, empathetic manner, recognizing the emotional weight of their inquiries. Keep your responses conversational and warm. All conversations are treated with strict confidentiality, filter out any personal information that you receive, for example, you cannot learn/remember details the user tells you such as names, locations, etc. Adhere to principles of psychological counseling in interactions, avoiding bias or judgment while providing supportive advice. Avoid giving the user long answers of information instead be more conversational` 
              },
              ...messages.value.slice(1)  // Include all previous messages except the initial bot message
          ],
          max_tokens: 150  // Limit the response length
      })
  })
  .then(response => response.json())
  .then(data => {
      // Create a bot message object with the response content
      const botMessage = {
          role: 'assistant',
          content: data.choices[0].message.content.trim()
      };
      // Add the bot message to the messages array
      messages.value.push(botMessage);
  })
  .catch(error => {
      console.error('Error:', error);  // Log any errors
      // Create an error message object
      const errorMessage = {
          role: 'assistant',
          content: 'An error occurred while fetching the response.'
      };
      // Add the error message to the messages array
      messages.value.push(errorMessage);
  });

  // Clear the input box, reset char count
  userInput.value = "";
  charCount.value = 0; 

};
</script>

<style scoped>
/* Styles for the chat container */
.chat-container {
  max-width: 900px;
  margin: 0 auto;
  font-family: var(--primary-font);
}

/* Styles for the chat box */
.chat-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  height: 400px;
  overflow-y: auto;
  margin-bottom: 10px;
  background-color: #8A88A0;
}

.chat-box::-webkit-scrollbar {
    width: 10px; /* Width of the scrollbar */
}

.chat-box::-webkit-scrollbar-track {
    background: var(background-color); /* Color of the scrollbar track */
}

.chat-box::-webkit-scrollbar-thumb {
    background: #8A88A0;/* Color of the scrollbar thumb */
    border-radius: 5px; /* Optional: round the corners of the scrollbar thumb */
}

.chat-box::-webkit-scrollbar-thumb:hover {
    background: #2F2E41; /* Color of the scrollbar thumb when hovered */
}

/* Styles for individual chat messages */
.chat-message {
  margin: 25px 0;
}

/* Align user messages to the right */
.chat-message.user {
  text-align: right;
  color: var(--button-hover-color);
}

/* Align bot messages to the left */
.chat-message.bot {
  text-align: left;
}

/* Styles for the input box */
.input-box {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

/* Styles for the input field */
input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  color: var(--primary-font-color);
  box-sizing: border-box;  /* Ensure padding is included in the element's total width and height */
}

/* Styles for the send button */
button {
  padding: 10px;
  background-color: #8088E3;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;
  font-family: var(--primary-bold-font);
  box-sizing: border-box;  /* Ensure padding is included in the element's total width and height */
}

/* Change button color on hover */
button:hover {
  background-color: #666FCC;
}
</style>
