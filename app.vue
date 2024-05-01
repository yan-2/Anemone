
<template>
  <div>
    <img src="/img/test.png" alt="for test" />
    <pre>{{data}}</pre>
  </div>

</template>
<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>