<template>
    <div>
      <AnemoneNavbar />
      
  <div
    class="tw-flex tw-my-5 lg:tw-my-0 lg:tw-h-[100vh] tw-flex-col tw-items-center tw-justify-center"
  >
  <!-- title -->
    <h1 class="tw-text-6xl tw-flex tw-items-end tw-font-black tw-ml-16 Font-titr">FAQ <img class="tw-mb-5 -tw-translate-x-5" src="/img/Qmark.png" alt=""></h1>
    <h2 class="tw-text-gray-400">Answers to your questions</h2>

    <div
      class="tw-flex tw-flex-col lg:tw-flex-row  tw-items-center tw-mt-16 tw-gap-10 tw-px-10 tw-justify-center"
    >
    <!-- Cards -->
      <div
        class="tw-flex tw-flex-col tw-pt-6 tw-pb-10 tw-px-12 tw-border tw-border-solid tw-border-stone-900 lg:tw-w-1/3 "
      >
        <h1 class="tw-font-semibold">How do you guarantee my safety?</h1>
        <h2>
          At Anemone, your safety is our sacred promise. As a non-profit
          dedicated to safeguarding women in crisis, we create a nurturing
          sanctuary where you can heal, grow, and reclaim your power. Our highly
          trained professionals and robust security protocols ensure a
          worry-free environment, allowing you to focus on your journey towards
          a life free from abuse and fear. Trust us to be your unwavering ally,
          providing the support and protection you deserve as you courageously
          rebuild your life.
        </h2>
      </div>

      <div
        class="tw-flex tw-flex-col tw-pt-6 tw-pb-10 tw-px-12 tw-border tw-h-full tw-border-solid tw-border-stone-900 lg:tw-w-1/3 "
      >
        <h1 class="tw-font-semibold">Do you protect my privacy?</h1>
        <h2>
          Safeguarding your privacy is our top priority. As a non-profit
          dedicated to protecting women who have experienced danger or abuse, we
          ensure that all your personal information remains confidential. Our
          commitment to your safety and privacy is unwavering, allowing you to
          seek support with complete peace of mind.
        </h2>
      </div>

      <div
        class="tw-flex tw-flex-col tw-pt-6 tw-pb-10 tw-px-12 tw-border tw-h-full tw-border-solid tw-border-stone-900 lg:tw-w-1/3"
      >
        <h1 class="tw-font-semibold">Why is Anemone doing this?</h1>
        <h2>
          We are driven by a deep commitment to making a difference in the lives
          of women who have faced danger or abuse. Our mission is to provide a
          safe haven and essential support, empowering women to rebuild their
          lives with dignity and hope. Every step we take is guided by our
          passion for creating a safer and more compassionate world.
        </h2>
      </div>


    </div>
  </div>




      <AnemoneFooter />
    </div>
</template>
  
<script setup lang="ts">
  import AnemoneFooter from '~/components/anemoneFooter.vue'
  import AnemoneNavbar from '~/components/anemoneNavbar.vue'
  useHead({
    title: 'FAQ',
  })
</script>
  
<style scoped>
/* Fonts */
*{
  font-family: 'Roboto';
}
.Font-titr{
  font-family:'Rosamila';
}
</style>