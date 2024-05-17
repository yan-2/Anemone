<script>
export default {
  name: 'AnemoneFooter',
}
</script>

<template>
  <footer class="footer">
    <a class="footer-hyperlink" href="#">Contacts</a>
    <a>
      <img src="~/public/img/insta.svg" alt="Description of icon">
    </a>
    <a>
      <img src="~/public/img/twitter.svg" alt="Description of icon">
    </a>
    <a class="footer-hyperlink" href="#">FAQ</a>
  </footer>
</template>

<style scoped lang="less">
@import "@/assets/css/variables.less";

.footer {
  // Position and sizes
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 40px 0;

  // Colors
  color: @secondaryColor;

  // Typography
  text-align: center;
}

.footer-hyperlink {
  vertical-align: middle;
  padding: 0 15px;
}

.footer img {
  vertical-align: middle;
  padding: 0 15px;

  // Make the cursor a pointer when hovering over the image
  cursor: pointer;
}
</style>
