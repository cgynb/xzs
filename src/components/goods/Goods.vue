<template>
  <a-card>
    <a-row>
      <a-col :span="14">
        <div :style="{height: '300px', width: '90%', overflow: 'auto', margin: '20px'}">
        <a-image
          width="100%"
          :src="commodity.pictureUrlList[0]"
          v-if="commodity.pictureUrlList != null"
        />
    </div>
      </a-col>
      <a-col :span="10">
        <a-row>
            <a-col :span="24">
          <a-card
            hoverable
            :style="{ margin: '40px 40px 40px 0px', backgroundColor: 'Bisque' }"
          >
            <p class="title">{{ commodity.title }}</p>
            <p class="price">售价: {{ commodity.price }}￥</p>
            <p>商品编号: {{ commodity.commodityId }}</p>
            <p>商品类型: {{ commodity.game }}</p>
            <p>上架时间: {{ commodity.releaseAt }}</p>
          </a-card>
        </a-col>
        </a-row>
        <a-row>
          <a-col :span="8">
            <a-button shape="round" type="primary" status="danger" @click="handleClick">砍一砍</a-button>
          </a-col>
          <a-col :span="8">
            <a-button shape="round" type="primary" @click="buy(commodity.commodityId)">立即下单</a-button>
          </a-col>
          <a-col :span="8">
            <a-button shape="round" @click="favorite">收藏</a-button>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-card>
  <h2 :style="{margin: '30px'}">商品详情</h2>
  <a-card>
    <p>{{ commodity.description }}</p>
  </a-card>
  <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel" okText="" cancelText="" unmountOnClose>
    <template #title>
      砍一砍
    </template>
    <Chat :seller="commodity.seller"/>
  </a-modal>

</template>
<style scoped>
.price {
  font-size: large;
  font-weight: 600;
  color: red;
}
.title {
  font-size: large;
  font-weight: 600;
  color: black;
}
</style>
<script setup>
import { ref, reactive, defineProps } from "vue";
import { Message } from "@arco-design/web-vue";
import { getCommodity } from "@/api/public";
import { addFavorite, addOrder } from "@/api/buyer";
import Chat from '../chat/Chat.vue'

const visible = ref(false);

const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
}

const props = defineProps({
    id: String
})
const commodity = reactive({
  price: null,
  commodityId: null,
  game: null,
  releaseAt: null,
  title: null,
  description: null,
  pictureUrlList: null,
  seller: null
});

const buy = (commodityId) => {
    addOrder(commodityId)
    .then(res => {
        if(res.code === 200){
            Message.success("下单成功");
        }else{
            Message.error(res.msg);
        }
    })
    .catch(err => {
        Message.error("操作失败，请检查网络");
    })
}
const favorite = () => {
    addFavorite(props.id)
    .then(res => {
        if(res.code === 200){
            Message.success("收藏成功");
        }else{
            Message.error(res.msg);
        }
    }).catch(err => {
        Message.error("收藏失败, 请稍后重试");
    })
}

getCommodity(props.id)
.then(res => {
    commodity.commodityId = res.data.commodityId;
    commodity.price = res.data.price;
    commodity.game = res.data.game;
    commodity.releaseAt = res.data.releaseAt;
    commodity.title = res.data.title;
    commodity.description = res.data.description;
    commodity.pictureUrlList = res.data.pictureUrlList;
    commodity.seller = res.data.seller;
})
.catch(err => {
    console.log(err);
})
</script>