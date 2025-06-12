<template>
    <div class="mx-auto my-auto earth 
                w-[380px] h-[380px] 
                md:w-[400px] md:h-[400px] 
                lg:w-[600px] lg:h-[600px] 
                xl:w-[800px] xl:h-[800px]">
    </div>
</template>

<style scoped>
    .earth {
        background-image: url('https://shorturl.at/jluH8');
        background-size: 1500px;
        background-repeat: repeat-x;
        border-radius: 50%;
        box-shadow:
            inset 15px 15px 30px rgba(0, 0, 0, 0.6),
            inset -8px -8px 12px rgba(255, 255, 255, 0.2),
            0 0 40px rgba(0, 150, 255, 0.3);
        animation: rotate 15s linear infinite;
        position: relative;
        overflow: hidden;
    }

    .earth::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), rgba(0,0,0,0.6));
        pointer-events: none;
    }

    @keyframes rotate {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 1500px 0;
        }
    }
</style>
