<template>
  <div>aa</div>
  <Test/>
  <div>
    <img
        src="/img/test.png"
        alt="for test"
    >
    <div class="container">
      <div class="row">
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import Test from '~/components/test.vue'
import {test} from '~/assets/js/utils'

const {data} = await useFetch('/api/employee')
test()
</script>

<style lang="less">

</style>
