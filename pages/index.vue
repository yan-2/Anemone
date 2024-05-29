<template>
  <div class="container">
    <AnemoneNavbar />
    <div class="pageContainer">
      <img src="@/public/img/vectors/logo.svg" class="logo" alt="Overlapping SVG" />
      <img src="@/public/img/vectors/logoBackground.svg" class="backgroundLogo" alt="Overlapping SVG" />
      <div class="box">
        <h1>Anemone</h1>
        <h2>It's time to bloom again</h2>
        <p>
          Hello stranger!<br>
          Whether you're encountering challenges or seeking support, remember that you're not alone.<br>
          Join us in our mission to empower women or let us help you.
        </p>
        <button class="request-help-btn">
          Request Help
        </button>
      </div>
    </div>
    <AnemoneFooter />
  </div>
</template>

<script lang="ts" setup>
import { BACKGROUND_COLOR } from '~/assets/js/constants.js'
import AnemoneFooter from '~/components/anemoneFooter.vue'
import AnemoneNavbar from '~/components/anemoneNavbar.vue'

useHead({
  title: 'Home',
})

onMounted(() => {
    document.body.style.backgroundColor = BACKGROUND_COLOR
    useHead({title: 'Home',})
})
</script>

<style scoped lang="less">
@import "@/assets/css/variables.less";

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.pageContainer {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
}

.logo {
  position: static;
  transform: translateY(116.7%);
  width: 20%; /* Adjust as needed */
  height: auto;
  z-index: 3;
}

.backgroundLogo {
  position: static;
  transform: translateY(20%);
  width: 20%; /* Adjust as needed */
  height: auto;
  z-index: 1;
}

.box {
  text-align: center;
  border: 1.5px solid @primaryColor;
  padding: 40px;
  max-width: 600px;
  background-color: @neutralColor;
  position: relative;
  z-index: 2;
}

h1 {
  color: @primaryColor;
  font-family: 'Rosamila', sans-serif; // Replace with actual font family if needed
  font-size: 80px;
  margin: 0;
}

h2 {
  font-family: 'Roboto', sans-serif; // Replace with actual font family if needed
  font-size: @baseFontSize;
  color: @secondaryColor;
  margin: 0;
}

p {
  font-size: @baseFontSize;
  color: @primaryColor;
  margin: 20px 0;
}

.request-help-btn {
  background-color: @actionColor;
  color: @neutralColor;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>