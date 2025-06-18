<template>
    <div class="font-exo2 transition-colors duration-300 min-h-screen bg-white text-black dark:bg-[#202124] dark:text-white">
        <Header />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import Footer from '@/components/footer.vue'
</script>
