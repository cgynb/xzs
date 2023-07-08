<template>
    <a-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }" :colGap="12" :rowGap="16">
        <a-grid-item v-for="item, k in commend_list" :key="k"> 
            <router-link :to="'/buy/'+item.name">
            <a-image width="100" height="100"
                :src="item.image" />
            </router-link>
        </a-grid-item>
    </a-grid>
</template>
<script setup>
import { reactive } from 'vue'
const commend_list = reactive([
    {
        name: "csgo",
        image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.blkg4IfsSpcHe_148lQocQHaEm?pid=ImgDet&rs=1"
    },
    {
        name: "王者荣耀",
        image: "https://ts1.cn.mm.bing.net/th/id/R-C.a2b97600d5e75d694127d2a6cfdf8d41?rik=LLrJeyt6Oi50uw&riu=http%3a%2f%2fimage.37wan.cn%2fupload%2fimage%2f20161103%2f1478166397571463.png&ehk=W1kZCzp%2bsCuvZJu%2f2nbmZAbGEmVcMIOnxrUDpc%2b7Qy8%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "和平精英",
        image: "https://ts1.cn.mm.bing.net/th/id/R-C.1ff00f914e1c84eb15195e5685dbd287?rik=6S2dXKN2YxfFnw&riu=http%3a%2f%2fimgres.zi7.com%2fzi7%2f2%2f9310-202007281434145f1fc6e661e79.jpg&ehk=TUwH8GlrVEF0Ctp2FR%2bOE7%2b4T0sufgTc3YMsCY2dsWA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "荒野乱斗",
        image: "https://tse2-mm.cn.bing.net/th/id/OIP-C.qhquUyzHdRjMxg-h-00QpwHaHa?pid=ImgDet&rs=1"
    },
    {
        name: "nba2k",
        image: "https://pic.baike.soso.com/ugc/baikepic2/21907/cut-20190918145347-1322158029_jpg_305_244_12535.jpg/300"
    },
    {
        name: "idea",
        image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.sUWwDc3rKY5mg-FADPF78gHaHa?pid=ImgDet&rs=1"
    },
    {
        name: "pycharm",
        image: "https://ts1.cn.mm.bing.net/th/id/R-C.ff063a8c9a06e1ac70ea4da6b6802bd6?rik=iMmJXNkjQVi8qg&riu=http%3a%2f%2fimg.kxdw.com%2f2019%2f0916%2f20190916030721932.png&ehk=dtknIwpcGeIO4xgpy%2fUK1sl9FQ%2bxFUTin6op8X8eAOg%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "goland",
        image: "https://www.lizhi.io/wp-content/uploads/2020/03/goland.png"
    },
])
</script>
