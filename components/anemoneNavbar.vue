<script>
export default {
  name: 'AnemoneNavbar',
  mounted() {
    const elements = [
      { toggle: 'nav-toggle', menu: 'nav-menu', close: 'nav-close', showClass: 'show-menu' },
    ]

    elements.forEach(({ toggle, menu, close, showClass }) => {
      const toggleElement = document.getElementById(toggle)
      const menuElement = document.getElementById(menu)
      const closeElement = document.getElementById(close)

      if (toggleElement) {
        toggleElement.addEventListener('click', () => {
          menuElement.classList.add(showClass)
        })
      }

      if (closeElement) {
        closeElement.addEventListener('click', () => {
          menuElement.classList.remove(showClass)
        })
      }
    })
  },
}
</script>

<!-- Must replace <a> with <NuxtLink> -->
<template>
  <nav>
    <!-- Organization Logo • Shortcut to home -->
    <nuxt-link to="\">
      <svg width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.423 13.877C19.423 19.2405 15.075 23.5885 9.7115 23.5885C4.34799 23.5885 0 19.2405 0 13.877C0 8.51351 4.34799 4.16553 9.7115 4.16553C15.075 4.16553 19.423 8.51351 19.423 13.877Z" fill="#2F2E41"/>
        <path d="M40.1802 14C40.1802 14 24.7259 13.5611 26.2916 0L40.1802 14Z" fill="#2F2E41"/>
        <path d="M10.1802 14L56.1802 14" stroke="#2F2E41" stroke-width="2"/>
      </svg>
    </nuxt-link>

    <div
      id="nav-menu"
      class="navbarPages"
    >
      <ul class="nav__list">
        <li>
          <nuxt-link to="/chatbot">Assistant</nuxt-link>
        </li>

        <li>
          <a href="#">Center</a>
        </li>

        <li>
          <a href="#">Projects</a>
        </li>

        <li>
          <a href="#">Services</a>
        </li>

        <li>
          <a href="#">People</a>
        </li>
      </ul>

      <!-- Close button -->
      <div
        id="nav-close"
        class="nav__close"
      >
        <img
          src="~/public/img/buttons/closeButton.svg"
          alt="Close Button"
        >
      </div>
    </div>

    <div class="nav__actions">
      <!-- Menu button -->
      <div
        id="nav-toggle"
        class="nav__toggle"
      >
        <img
          src="~/public/img/buttons/menuButton.svg"
          alt="Menù Button"
        >
      </div>
    </div>
  </nav>
</template>

<style scoped lang="less">
@import "@/assets/css/variables.less";

// Navbar
nav {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  position: fixed;
  padding: 20px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a { color : @secondaryColor; }
nav a:hover { color : @primaryColor; }

.nav__actions {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.nav__toggle,
.nav__close {
  font-size: 1.25rem;
  cursor: pointer;
  transition: color .4s;
}

:is(.nav__logo, .nav__search, .nav__login, .nav__toggle, .nav__link):hover {
  color: var(--first-color);
}

// Mobile devices behavior
@media screen and (max-width: 1023px) {
  .navbarPages {
    position: fixed;
    top: -100%;
    left: 0;
    background-color: @backgroundColor;
    width: 100%;
    height: 100%;
    padding-block: 4.5rem 4rem;
    transition: top .4s;
  }
}

nav ul {
  font-size: 1.5rem;
  padding-inline: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  text-align: left;
}

.nav__close {
  position: absolute;
  top: 1.15rem;
  right: 1.5rem;
}

/* Show menu */
.show-menu {
  top: 0;
}

// Large devices behavior
@media screen and (min-width: 1023px) {
  .nav__close,
  .nav__toggle {
    display: none;
  }

  .navbarPages {
    margin-left: auto;
  }

  nav ul {
    font-size: 1rem;
    flex-direction: row;
    column-gap: 40px;
  }
}

// Small devices behavior
@media screen and (min-width: 1150px) {
  .container {
    margin-inline: auto;
  }
}
</style>
