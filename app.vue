
<template>
  <div>aa</div>
  <Test></Test>
  <div>
    <img src="/img/test.png" alt="for test" />
    <pre>{{data}}</pre>
  </div>

</template>
<script setup lang="ts">
import Test from "~/components/test.vue";

const { data } = await useFetch('/api/hello')
</script>