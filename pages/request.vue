<!-- HelpRequestForm.vue -->
<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-2">
      Help Request Form
    </h1>
    <h2 class="text-lg text-gray-600 mb-4">
      Please fill out the form below
    </h2>

    <form
      v-if="!submitted"
      class="space-y-4"
      @submit.prevent="handleSubmit"
    >
      <div>
        <select
          v-model="requestType"
          class="w-full p-2 border rounded"
        >
          <option
            value=""
            disabled
            selected
          >
            Select request type
          </option>
          <option value="domestic-violence">
            Domestic violence
          </option>
          <option value="stalking">
            Stalking
          </option>
          <option value="psychologic-consult">
            Psychologic consult
          </option>
          <option value="information">
            Information
          </option>
          <option value="other">
            Other
          </option>
        </select>
      </div>

      <textarea
        v-model="message"
        placeholder="Please describe your situation (max 500 characters)"
        maxlength="500"
        class="w-full p-2 border rounded resize-none h-40"
      />

      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>

    <div
      v-else
      class="text-center"
    >
      <p class="text-lg mb-4">
        Thank you for submitting your request. We appreciate your courage in reaching out.
        Our team will review your message and provide assistance as soon as possible.
      </p>
      <button
        class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        @click="goToHomepage"
      >
        Return to Homepage
      </button>
    </div>

    <p class="mt-4 text-sm text-gray-600">
      For urgent assistance, please contact: requesthelp@anemone.it
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const requestType = ref('')
const message = ref('')
const submitted = ref(false)

const handleSubmit = () => {
  // Here you would typically handle form submission, e.g., sending data to a server
  console.log('Form submitted:', { requestType: requestType.value, message: message.value })
  // Set submitted to true to show the thank you message
  submitted.value = true
}

const goToHomepage = () => {
  // Here you would typically redirect to the homepage
  console.log('Redirecting to homepage')
  // For demonstration, we'll just reset the form
  submitted.value = false
  requestType.value = ''
  message.value = ''
}
useHead({
  title: 'Request',
})
</script>
