<template>
  <div class="anemonePlaceholder">
    <AnemoneNavbar />
    <div class="content">
      Hello :)
    </div>
    <AnemoneFooter />
  </div>
</template>

<script setup lang="ts">
// Imports components and variables
import {BACKGROUND_COLOR} from '~/assets/js/constants.js'
import AnemoneFooter from '~/components/anemoneFooter.vue'
import AnemoneNavbar from '~/components/anemoneNavbar.vue'

// Set the background color of the document body
document.body.style.backgroundColor = BACKGROUND_COLOR
</script>

<style scoped lang="less">
// Variables
@import "@/assets/css/variables.less";

// Styling for the entire background
.anemonePlaceholder {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
