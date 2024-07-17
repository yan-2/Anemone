<template>
  <div class="flex justify-center px-6 py-3">
    <div class="w-full max-w-6xl">
      <div class="text-center">
        <!-- Title with doodle -->
        <div class="relative inline-block">
          <h1 class="font-rosamila text-5xl text-primary mb-1">
            FAQ
          </h1>
          <!-- Doodle -->
          <img src="~/public/img/vectors/doodle.svg" class="absolute -top-6 -right-12 w-14 h-14" alt="Doodle">
        </div>
        <!-- Subtitle -->
        <h2 class="text-secondary mt-2 mb-8">
          Answers to your questions
        </h2>
        <!-- FAQ Boxes -->
        <div class="grid grid-cols-1 max-w-xl lg:grid-cols-3 lg:max-w-full gap-8 w-full">
          <!-- Safety -->
          <div class="text-left rounded-2xl bg-neutral border border-primary shadow-md p-6">
            <h3 class="font-bold mb-1">
              How do you guarantee my safety?
            </h3>
            <p class="text-primary">
              At Anemone, your safety is our sacred promise. As a non-profit dedicated to safeguarding women in crisis, we create a nurturing sanctuary where you can heal, grow, and reclaim your power. Our highly trained professionals and robust security protocols ensure a worry-free environment, allowing you to focus on your journey towards a life free from abuse and fear.
            </p>
          </div>
          <!-- Privacy -->
          <div class="text-left rounded-2xl bg-neutral border border-primary shadow-md p-6">
            <h3 class="font-bold mb-1">
              Do you protect my privacy?
            </h3>
            <p class="text-primary">
              Anemone provides a comprehensive range of services tailored to support women in crisis. Our experienced team offers personalized counseling, legal advocacy, and access to safe housing. We also provide educational workshops, support groups, and skill-building programs to empower you on your path to independence.
            </p>
          </div>
          <!-- Purpose -->
          <div class="text-left rounded-2xl bg-neutral border border-primary shadow-md p-6">
            <h3 class="font-bold mb-1">
              Why is Anemone doing this?
            </h3>
            <p class="text-primary">
              We are driven by a deep commitment to making a difference in the lives of women who have faced danger or abuse. Our mission is to provide a safe haven and essential support, empowering women to rebuild their lives with dignity and hope. Every step we take is guided by our passion for creating a safer and more compassionate world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'FAQ',
})
</script>