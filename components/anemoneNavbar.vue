<script>
export default { name: 'AnemoneNavbar' }
</script>

<template>
  <nav class="anemoneNavbar">
    <div class="container">
      <RouterLink
        to="/"
        class="logo"
      >
        <svg
          viewBox="0 -4.5 55 32"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M19.423 13.877C19.423 19.2405 15.075 23.5885 9.7115 23.5885C4.34799 23.5885 0 19.2405 0 13.877C0 8.51351 4.34799 4.16553 9.7115 4.16553C15.075 4.16553 19.423 8.51351 19.423 13.877Z" />
          <path d="M40.1802 14C40.1802 14 24.7259 13.5611 26.2916 0L40.1802 14Z" />
          <path d="M10.1802 14L56.1802 14" />
        </svg>
      </RouterLink>
      <ul>
        <li>
          <RouterLink to="/chatbot">
            Assistant
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/center">
            Center
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/projects">
            Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/services">
            Services
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/people">
            People
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="less">
@import "@/assets/css/variables.less";

.anemoneNavbar {
  left: 0;
  top: 0;
  color: @secondaryColor;
  font-size: @baseFontSize;
  margin: 15px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 60px;
  height: 30px;
}

.anemoneNavbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
}

.anemoneNavbar ul li {
  padding: 0 15px;
  cursor: pointer;
}

.anemoneNavbar ul li:hover {
  color: @primaryColor;
}

.anemoneNavbar svg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 1.5;
}

.anemoneNavbar path {
  fill: @primaryColor;
}
</style>
