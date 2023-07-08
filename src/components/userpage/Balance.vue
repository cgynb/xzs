<template>
  <a-row :style="{height: '100%', width: '100%'}">
    <a-col :span="10" :offset="1">
      <a-input-number placeholder="充值金额" allow-clear v-model="add">
        <template #append> ￥ </template>
      </a-input-number>
      <a-button type="text" long @click="addBalance_">充值</a-button>
    </a-col>
    <a-col :span="10" :offset="1">
      <a-input-number placeholder="提现金额" allow-clear v-model="reduce">
        <template #append> ￥ </template>
      </a-input-number>
      <a-button type="text" long @click="reduceBalance_">提现</a-button>
    </a-col>
  </a-row>
</template>
<script setup>
import { ref } from "vue";
import { Message } from "@arco-design/web-vue";
import { addBalance, reduceBalance } from "@/api/public";
import { useCommonStore } from "../../store/common";

const add = ref(null);
const reduce = ref(null);
const store = useCommonStore();

const addBalance_ = () => {
    addBalance(add.value)
    .then(res => {
        if(res.code === 200){
            Message.success("充值成功");
            store.user.balance += add.value;
        }else{
            Message.error("充值失败，请稍后重试");
        }
    })
    .catch(err => {
        Message.error("充值失败，请稍后重试");
    });
}
const reduceBalance_ = () => {
    reduceBalance(reduce.value)
    .then(res => {
        if(res.code === 200){
            Message.success("提现成功");
            store.user.balance -= reduce.value;
        }else{
            Message.error("提现失败，请稍后重试");
        }
    })
    .catch(err => {
        Message.error("提现失败，请稍后重试");
    });
}
</script>