<template>
    <div>
      <AnemoneNavbar />
      faq
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
  