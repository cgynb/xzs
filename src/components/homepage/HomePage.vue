<template>
    <a-row>
        <a-col :span="12"><Carousel/></a-col>
        <a-col :span="12"><PersonCard/></a-col>
    </a-row>
    <a-divider/>
    <a-typography-title :heading="4" :style="{marginLeft: '20px'}">
      热门推荐
    </a-typography-title>
    <a-row>
        <a-col :span="6"><CommendMenu/></a-col>
        <a-col :span="18"><CommendList/></a-col>
    </a-row>
    <a-divider/>
    <a-typography-title :heading="4" :style="{marginLeft: '20px'}">
      猜你喜欢
    </a-typography-title>
        <GuessYouLike/>
</template>

<script setup>
import Carousel from './Carousel.vue'
import PersonCard from './PersonCard.vue'
import CommendMenu from './CommendMenu.vue'
import CommendList from './CommendList.vue'
import GuessYouLike from './GuessYouLike.vue'
</script>