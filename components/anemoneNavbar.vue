<template>
  <div class="nav-container clearfix">
    <input type="checkbox" id="nav-check">
    <div class="nav-header">
    </div>
    <div class="logo">
      <RouterLink
          to="/"
      >
        <svg
            viewBox="0 -4.5 55 32"
            preserveAspectRatio="xMidYMid meet"
        >
          <path
              d="M19.423 13.877C19.423 19.2405 15.075 23.5885 9.7115 23.5885C4.34799 23.5885 0 19.2405 0 13.877C0 8.51351 4.34799 4.16553 9.7115 4.16553C15.075 4.16553 19.423 8.51351 19.423 13.877Z"/>
          <path d="M40.1802 14C40.1802 14 24.7259 13.5611 26.2916 0L40.1802 14Z"/>
          <path d="M10.1802 14L56.1802 14"/>
        </svg>
      </RouterLink>
    </div>

    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div class="nav-links">
      <RouterLink to="/chatbot">
        Assistant
      </RouterLink>
      <RouterLink to="/center">
        Center
      </RouterLink>
      <RouterLink to="/projects">
        Projects
      </RouterLink>
      <RouterLink to="/services">
        Services
      </RouterLink>
      <RouterLink to="/people">
        People
      </RouterLink>
    </div>
  </div>
</template>
<style scoped lang="less">
@import "@/assets/css/variables.less";
.nav-container svg {
  height:100%;
  width:100%;
  fill:none;
  stroke-width:1.5;
  stroke:#2f2e41
}
.nav-container path{
  fill:#2f2e41
}
.nav-container {
  height: 50px;
  width: 100%;
  color: @secondaryColor;
  font-size: @baseFontSize;
  position: relative;
}

.nav-container > .nav-header {
  display: inline;
}

.nav-container > .nav-header > .nav-title {
  display: inline-block;
  padding: 10px;
}

.nav-container > .nav-btn {
  display: none;
}

.nav-container > .nav-links {
  display: inline;
  float: right;
}

.nav-container > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
}

.nav-container > .nav-links > a:hover {
  color: @primaryColor;
}

.nav-container > #nav-check {
  display: none;
}

.logo {
  width: 60px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  float: left;
  margin-top:10px;
}

@media (max-width: 600px) {
  .nav-container > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
  }

  .nav-container > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }

  .nav-container > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #000;
  }

  .nav-container > .nav-links {
    z-index: 10;
    position: absolute;
    display: block;
    width: 100%;
    //background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
    color: #000;
    background: @backgroundColor;

  }

  .nav-container > .nav-links > a {
    display: block;
    width: 100%;
  }

  .nav-container > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }

  .nav-container > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
<script>
export default {name: 'AnemoneNavbar'}
</script>