<script setup>
const { data: page, pending, error } = await useFetch(
  'https://demoiraya.bicoluni-busina.com/index.php/wp-json/wp/v2/pages?slug=home-page'
)
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error loading page.</div>
  <div v-else>
    <h1>{{ page[0]?.title?.rendered }}</h1>
    <div v-html="page[0]?.content?.rendered" />
  </div>
</template>