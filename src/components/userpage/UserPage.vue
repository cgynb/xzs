<template>
  <a-space direction="vertical" size="large" :style="{ width: '100%' }">
    <Info />
    <a-tabs size="large" type="card-gutter">
      <a-tab-pane key="1" title="购买订单"> 
        <BuyerOrder/>
      </a-tab-pane>
      <a-tab-pane key="2" title="出售订单"> 
        <SellerOrder/>
      </a-tab-pane>
      <a-tab-pane key="3" title="我发布的">
        <Release/>
      </a-tab-pane>
      <a-tab-pane key="4" title="我的钱包">
        <Balance/>
      </a-tab-pane>
      <a-tab-pane key="5" title="收藏夹">
        <Favorite/>
      </a-tab-pane>
    </a-tabs>
  </a-space>
</template>
  
<script setup>
import Info from "./Info.vue";
import BuyerOrder from "./BuyerOrder.vue";
import SellerOrder from "./SellerOrder.vue";
import Balance from "./Balance.vue";
import Favorite from "./Favorite.vue";
import Release from "./Release.vue";

import { useCommonStore } from "../../store/common";

const store = useCommonStore();
</script>
  