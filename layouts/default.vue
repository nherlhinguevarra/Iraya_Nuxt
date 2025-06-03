<template>
  <div>
    <Header />
    <div class="px-6 max-w-screen-xl mx-auto">
      <NuxtPage /> <!-- This renders your blog page content -->
    </div>
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
</script>
