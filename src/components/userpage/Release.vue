<template>
    <a-empty v-if="release_list.length === 0" />
    <a-card :title="item.title" v-for="(item, key) in release_list" :key="key"
        :style="{ margin: '0px 0px 30px 0px', border: '2px solid grey' }">
        <template #extra>
            <a-typography-paragraph editable v-model:editText="item.price" @editEnd="changePrice_(key)">
                {{ item.price }}
            </a-typography-paragraph>
        </template>
        <a-tag>编号：{{ item.commodityId }}</a-tag>
        <a-divider direction="vertical" />
        <a-tag>{{ item.game }}</a-tag>
        <a-divider direction="vertical" />
        <a-tag :color="statusMap[item.status]">{{ item.status }}</a-tag>
        <a-divider :size="2" />
        {{ item.description }}
    </a-card>
</template>
<script setup>
import { ref, reactive } from "vue";
import { Message } from "@arco-design/web-vue";
import { getReleaseList, changePrice } from '@/api/seller';

const statusMap = reactive({
    已售出: "gray",
    审核中: "arcoblue",
    审核失败: "red",
    售卖中: "green",
});
const release_list = reactive([]);

const changePrice_ = (index) => {
    changePrice(release_list[index].commodityId, release_list[index].price)
        .then(res => {
            if(res.code == 200){
                Message.success("编辑成功");
            }else{
                Message.error(res.msg);
            }
        })
        .catch(err => {
            Message.error("编辑失败");
        });
}

getReleaseList()
.then(res => {
    if(res.code == 200){
        for(let item of res.data){
            release_list.push(item);
        }
    }else{
        Message.error(res.msg);
    }
})
.catch(err => {
    Message.error("获取失败，请检查网络");
})
</script>