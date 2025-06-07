<template>
  <div>
    <Header />
    <div class="font-exo2">
      <NuxtPage /> <!-- This renders your blog page content -->
    </div>
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
</script>
