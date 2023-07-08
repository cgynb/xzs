<template>
    <!-- <p v-for="item, key of toManageList" :key="key">
        {{ item }}
    </p> -->

    <a-card :title="item.title" v-for="(item, key) in toManageList" :key="key"
        :style="{ margin: '0px 0px 30px 0px', border: '2px solid grey' }">
        <template #extra>
            <a-typography-paragraph> {{ item.price }}￥ </a-typography-paragraph>
        </template>
        <a-row>
            <a-col :span="6">
                <a-row>
                    <a-avatar shape="square" :size="64">
                        <img :src="item.pictureUrl" />
                    </a-avatar>
                </a-row>
                <a-divider/>
                <a-row>
                    <a-tag>编号：{{ item.commodityId }}</a-tag>
                    <a-divider direction="vertical" />
                    <a-tag>{{ item.game }}</a-tag>
                </a-row>
            </a-col>
            <a-col :span="16">
                
            </a-col>
            <a-col :span="2">
                <icon-check-circle-fill :size="32" :style="{ color: '#97da97' }" @click="pass(item.commodityId, key)" v-if="item.result === null"/>
                <icon-close-circle-fill :size="32" :style="{ color: '#eb8888' }" @click="forbid(item.commodityId, key)" v-if="item.result === null"/>
                <a-tag v-if="item.result != null" :color="item.result == '通过'? 'green': 'red'">{{ item.result }}</a-tag>
            </a-col>
        </a-row>
    </a-card>
    <a-empty v-if="total == 0"/>
    <a-pagination :total="total" simple @change="changePage"/>
</template>
<script setup>
import { ref, reactive } from "vue";
import { Message } from "@arco-design/web-vue";
import { getToManageList, passCommodity, forbidCommodity } from "@/api/admin";

const total = ref(0);
const toManageList = reactive([]);

const pass = (commodityId, index) => {
    passCommodity(commodityId)
    .then(res => {
        if(res.code === 200){
            Message.info(`审核通过${commodityId}号商品`);
            toManageList[index].result = "通过";
        }else{
            Message.error(res.msg);
        }
    })
    .catch(err => {
        Message.error("操作失败，请检查网络");
    });
}
const forbid = (commodityId, index) => {
    forbidCommodity(commodityId)
    .then(res => {
        if(res.code === 200){
            Message.info(`审核禁止${commodityId}号商品`);
            toManageList[index].result = "禁止";
        }else{
            Message.error(res.msg);
        }
    })
    .catch(err => {
        Message.error("操作失败，请检查网络");
    });
}
const changePage = (current) => {
    getToManageList(current, 10).then((res) => {
        toManageList.splice(0, toManageList.length);
    for (let item of res.data.commodityList) {
        item.result = null;
        toManageList.push(item);
    }
});
}
getToManageList(1, 10).then((res) => {
    total.value = res.data.total;
    for (let item of res.data.commodityList) {
        item.result = null;
        toManageList.push(item);
    }
});
</script>