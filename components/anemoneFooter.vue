<script>
export default {
  name: 'AnemoneFooter',
}
</script>

<template>
  <footer>
    <!-- Contacts page anchor -->
    <ul>
      <li>
        <nuxt-link to="#">
          Contacts
        </nuxt-link>
      </li>
      <!-- Instagram anchor -->
      <li>
        <a>
          <svg viewBox="0 0 22 22" id="insta">
            <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" />
            <path id="instaLens" d="M14.9997 10.3701C15.1231 11.2023 14.981 12.0523 14.5935 12.7991C14.206 13.5459 13.5929 14.1515 12.8413 14.5297C12.0898 14.908 11.2382 15.0397 10.4075 14.906C9.57683 14.7723 8.80947 14.3801 8.21455 13.7852C7.61962 13.1903 7.22744 12.4229 7.09377 11.5923C6.96011 10.7616 7.09177 9.90995 7.47003 9.15843C7.84829 8.40691 8.45389 7.7938 9.20069 7.4063C9.94749 7.0188 10.7975 6.87665 11.6297 7.00006C12.4786 7.12594 13.2646 7.52152 13.8714 8.12836C14.4782 8.73521 14.8738 9.52113 14.9997 10.3701Z" />
            <path id="instaFlash" d="M16.5 5.5H16.51" />
          </svg>
        </a>
      </li>
      <!-- Twitter anchor -->
      <li>
        <a>
          <svg viewBox="0 0 24 20" id="twitterLogo">
            <path d="M23 1.03813C22.0424 1.71361 20.9821 2.23024 19.86 2.56813C19.2577 1.87564 18.4573 1.38482 17.567 1.16206C16.6767 0.939292 15.7395 0.995328 14.8821 1.32259C14.0247 1.64984 13.2884 2.23253 12.773 2.99185C12.2575 3.75116 11.9877 4.65047 12 5.56813V6.56813C10.2426 6.6137 8.50127 6.22394 6.93101 5.43358C5.36074 4.64321 4.01032 3.47677 3 2.03813C3 2.03813 -1 11.0381 8 15.0381C5.94053 16.4361 3.48716 17.1371 1 17.0381C10 22.0381 21 17.0381 21 5.53813C20.9991 5.25959 20.9723 4.98173 20.92 4.70813C21.9406 3.70163 22.6608 2.43084 23 1.03813Z" />
          </svg>
        </a>
      </li>
      <!-- FAQ anchor -->
      <li>
        <nuxt-link to="#">
          FAQ
        </nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="less">
@import "@/assets/css/variables.less";

footer {
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
  font-size: @baseFontSize;
}

ul {
  margin: 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
}

ul li {
  padding: 0 15px;
}

ul li:hover {
  cursor: pointer;
  //color: @hightlightColor;
  a{
    color: #8A88A0;
  }
}

svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: @secondaryColor;
}

// Hovering
#twitterLogo:hover {
  stroke: @hightlightColor;
  fill: @hightlightColor;
}

#insta:hover {
  stroke: @hightlightColor;
  fill: @hightlightColor;
}

#insta:hover #instaLens {
  stroke: @hightlightColor;
  fill: @backgroundColor;
}

#insta:hover #instaFlash {
  stroke: @backgroundColor;
  fill: @backgroundColor;
}
</style>
