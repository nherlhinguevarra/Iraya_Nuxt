// plugins/aos.client.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  onMounted(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  })
})
