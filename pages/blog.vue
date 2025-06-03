<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Blog Posts</h1>
    <div v-if="posts?.length">
      <div v-for="post in posts" :key="post.id" class="mb-6">
        <h2 class="text-xl font-semibold" v-html="post.title.rendered" />
        <div v-html="post.excerpt.rendered" class="text-gray-700" />
      </div>
    </div>

    <div v-else>
      <p>Loading posts...</p>
    </div>
  </div>
</template>

<script setup>
const { data: posts, error } = await useFetch('https://demoiraya.bicoluni-busina.com/wp-json/wp/v2/posts')

if (error.value) {
  console.error('Failed to fetch posts:', error.value)
}
</script>
