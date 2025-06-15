<template>
    <div>
        <iframe
            v-if="iframeSrc"
            id="demo-frame"
            :src="iframeSrc"
            width="100%"
            height="911vh"
            allowfullscreen
            title="Iframe Example"
            style="border: none;"
        ></iframe>
    </div>
</template>

<script>
export default {
  data() {
    return {
      iframeSrc: null
    };
  },
  mounted() {
    // Use browser-side logic only in `mounted()`
    const urlParams = new URLSearchParams(window.location.search);
    const productUrl = urlParams.get('product');

    if (productUrl && productUrl.startsWith('https://')) {
      this.iframeSrc = productUrl;
    } else {
      console.warn('Invalid or missing product URL');
    }
  }
};
</script>
