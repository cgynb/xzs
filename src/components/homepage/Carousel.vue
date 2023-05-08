<template>
    <a-carousel :style="{
        margin: '20px',
        width: '450px',
        height: '300px',
    }" :auto-play="true" indicator-type="dot">
        <a-carousel-item v-for="image, k in images" :key="k">
            <img :src="image"/>
        </a-carousel-item>
    </a-carousel>
</template>
  
<script setup>
const images = [
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
]
</script>
  