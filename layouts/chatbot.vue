<template>
  <div class="flex flex-col w-screen h-screen">
    <!-- Navbar -->
    <AnemoneNavbar />
    <!-- Page content -->
    <main class="flex-1 overflow-hidden">
      <slot />
    </main>
    <!-- Footer -->
    <AnemoneFooter />
  </div>
</template>

<script setup lang="ts">
// Imports components
import AnemoneNavbar from '~/components/AnemoneNavbar.vue'
import AnemoneFooter from '~/components/AnemoneFooter.vue'
</script>
