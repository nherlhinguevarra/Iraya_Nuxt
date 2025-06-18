<template>
  <div class="font-exo2 transition-colors duration-300 min-h-screen bg-white text-black dark:bg-[#202124] dark:text-white pt-5 relative">
    <Header />
    <NuxtPage />
    <Footer />

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 bg-[#F47734] text-white dark:text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-opacity duration-300"
      aria-label="Scroll to top"
    >
      <i class="fas fa-chevron-up text-lg"></i>
    </button>
  </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import Header from '~/components/header.vue'
    import Footer from '@/components/footer.vue'

    const showScrollTop = ref(false)

    const handleScroll = () => {
    showScrollTop.value = window.scrollY > 300
    }

    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    }

    onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    })
</script>
