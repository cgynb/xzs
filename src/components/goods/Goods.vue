<template>
    <h1>{{ id }}</h1>
  <a-card>
    <a-row>
      <a-col :span="14">
        <a-image
          width="400"
          height="300"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          :style="{ margin: '40px 0px 40px 40px' }"
        />
      </a-col>
      <a-col :span="10">
        <a-row>
            <a-col :span="24">
          <a-card
            hoverable
            :style="{ margin: '40px 40px 40px 0px', backgroundColor: 'Bisque' }"
          >
            <p class="price">售价: {{ good.price }}￥</p>
            <p>商品编号: {{ good.id }}</p>
            <p>商品类型: {{ good.type }}</p>
            <p>上架时间: {{ good.createAt }}</p>
          </a-card>
        </a-col>
        </a-row>
        <a-row>
          <a-col :span="8">
            <a-button shape="round" type="primary" status="danger">砍一砍</a-button>
          </a-col>
          <a-col :span="8">
            <a-button shape="round" type="primary">直接购买</a-button>
          </a-col>
          <a-col :span="8">
            <a-button shape="round">咨询客服</a-button>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-card>
  <h2 :style="{margin: '30px'}">商品详情</h2>
  <a-card>
    <p>lfjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
    <p>lfjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
    <p>lfjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
    <p>lfjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
    <p>lfjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
    <p>lfjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
    <p>lfjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
    <p>lfjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
    <p>lfjdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
  </a-card>
</template>
<style scoped>
.price {
  font-size: large;
  font-weight: 600;
  color: red;
}
</style>
<script setup>
import { reactive, defineProps } from "vue";

const props = defineProps({
    id: String
})
const good = reactive({
  price: 999,
  id: "lsjf98w",
  type: "游戏账号",
  createAt: "2022-1-1",
});
</script>