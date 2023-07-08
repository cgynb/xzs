<template>
    <a-empty v-if="total === 0"/>
    <a-card :title="item.title" v-for="item, key in favorite_list" :key="key">
      <template #extra>
        <a-link :href="`/#/goods/${item.commodityId}`">详情</a-link>
      </template>
      {{ item.game }}
    </a-card>
    <a-pagination :total="total" simple @change="changePage"/>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Message } from "@arco-design/web-vue";
import{ getFavoriteList } from "@/api/buyer";

const favorite_list = reactive([]);
const total = ref(0);

const changePage = (current) => {
    getFavoriteList(current, 10)
    .then(res => {
        favorite_list.splice(0, favorite_list.length);
        total.value = res.data.total;
        if(res.code === 200){
            for(let item of res.data.commodityList){
                if(item != null){
                favorite_list.push(item);
                }
            }
        }else{
            Message.error(res.msg);
        }
    })
    .catch(err => {
        Message.error("获取收藏夹失败，请检查网络");
    });
}

changePage(1);
</script>
