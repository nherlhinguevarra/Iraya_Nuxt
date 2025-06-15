<template>
  <div class="">
    <iframe
      ref="wpIframe"
      :src="iframeSrc"
      width="100%"
      height="1000"
      style="border: none;"
    ></iframe>
  </div>
</template>

<script>
    export default {
        data() {
            return {
            iframeSrc: 'https://demoiraya.bicoluni-busina.com/index.php/wp-demopage/',
            checkInterval: null,
            };
        },
        mounted() {
            this.startMonitoringIframeURL();
        },
        beforeDestroy() {
            if (this.checkInterval) clearInterval(this.checkInterval);
        },
        methods: {
            startMonitoringIframeURL() {
            this.checkInterval = setInterval(() => {
                const iframe = this.$refs.wpIframe;
                if (!iframe || !iframe.contentWindow) return;

                try {
                const currentURL = iframe.contentWindow.location.href;

                if (
                    currentURL.startsWith(
                    'https://demoiraya.bicoluni-busina.com/index.php/wp-demoview/?product='
                    )
                ) {
                    // Redirect entire Nuxt page
                    window.location.href = currentURL;
                }
                } catch (e) {
                // Cross-origin error - do nothing
                }
            }, 500);
            },
        },
    };
</script>
