<template>
    <h1>Anemone</h1>
    <div class="chat-container">
      <div class="chat-box">
        <div v-for="(message, index) in messages" :key="index" class="chat-message" :class="message.role">
          <p><strong>{{ message.role === 'user' ? 'You' : 'Bot' }}:</strong> {{ message.content }}</p>
        </div>
      </div>
      <div class="input-box">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type your message here..." />
        <button @click="sendMessage">Send</button>
      </div>
      <AnemoneFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  import AnemoneFooter from '~/components/anemoneFooter.vue';
  import { ref } from 'vue';
  
  const userInput = ref("");
  const messages = ref([
    {
      role: 'assistant',
      content: `Hello! I am a virtual counselling chatbot from "Anemone", a women's rights refuge centre. I am here to offer initial counselling to women who may be victims of abuse. Engage with me in a supportive and empathetic manner. Remember, our conversation is confidential, and I do not remember any personal details you share, such as names or locations. How can I assist you today?`
    }
  ]);
  
  const sendMessage = () => {
    if (userInput.value.trim() === "") return;
  
    const userMessage = {
      role: 'user',
      content: userInput.value
    };
    messages.value.push(userMessage);
  
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sk-proj-RUu36TvmdqOIpjdRnGsUT3BlbkFJ7ys8VJKyVffCx8i3vIB7',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: `You are a chatbot from "Anemone" a women's rights refuge centre. You function as a psychological counsellor, offering initial counselling to women, who may be victims of abuse. Engage with users in a supportive, empathetic manner, recognizing the emotional weight of their inquiries. Keep your responses conversational and warm. All conversations are treated with strict confidentiality, filter out any personal information that you receive, for example, you cannot learn/remember details the user tells you such as names, locations, etc. Adhere to principles of psychological counseling in interactions, avoiding bias or judgment while providing supportive advice.` },
          ...messages.value.slice(1)
        ],
        max_tokens: 150
      })
    })
    .then(response => response.json())
    .then(data => {
      const botMessage = {
        role: 'assistant',
        content: data.choices[0].message.content.trim()
      };
      messages.value.push(botMessage);
    })
    .catch(error => {
      console.error('Error:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'An error occurred while fetching the response.'
      };
      messages.value.push(errorMessage);
    });
  
    userInput.value = "";
  };
  </script>
  
  <style scoped>
  
  .chat-container {
    max-width: 600px;
    margin: 0 auto;
    font-family: var(--primary-font);
  }
  
  .chat-box {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    height: 400px;
    overflow-y: auto;
    margin-bottom: 10px;
    background-color: var(--background-color);
  }
  
  .chat-message {
    margin: 10px 0;
  }
  
  .chat-message.user {
    text-align: right;
  }
  
  .chat-message.bot {
    text-align: left;
  }
  
  .input-box {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: var(--primary-font);
    font-size: var(--primary-font-size);
    color: var(--primary-font-color);
    box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
  }
  
  button {
    padding: 10px;
    background-color: #8088E3;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
    font-family: var(--primary-bold-font);
    box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
  }
  
  button:hover {
    background-color: #666FCC;
  }
  </style>
  