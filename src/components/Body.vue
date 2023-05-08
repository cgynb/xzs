<template>
  <div class="menu">
    <a-menu
      mode="horizontal"
      :default-selected-keys="['1']"
      @menu-item-click="changeRoute"
    >
      <a-menu-item key="1">首页</a-menu-item>
      <a-menu-item key="2">我要买</a-menu-item>
      <a-menu-item key="3">我要卖</a-menu-item>
      <a-menu-item key="4">个人中心</a-menu-item>
    </a-menu>
  </div>
  <router-view></router-view>
</template>
<style scoped>
.menu {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 20px;
}
</style>
<script setup>
import { useRouter } from "vue-router";
import request from "@/common/request";
const router = useRouter();
const changeRoute = (key) => {
  switch (key) {
    case "1":
        console.log("h")
      router.push("/homepage");
      break;
    case "2":
      router.push("/buy/all");
      break;
    case "3":
      router.push("/sell");
      break;
    case "4":
      router.push("/user");
      break;
  }
};
request({
    url:'/info'
}).then(res=>{
    console.log(res.data)
}).catch(err=>{
    console.log(err)
})

</script>