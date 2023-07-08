<template>
  <div class="menu">
    <a-menu
      mode="horizontal"
      :default-selected-keys="['1']"
      @menu-item-click="changeRoute"
    >
      <a-menu-item key="1">首页</a-menu-item>
      <a-menu-item key="3">我要卖</a-menu-item>
      <a-menu-item key="4">个人中心</a-menu-item>
      <a-menu-item key="5">信息中心</a-menu-item>
      <a-menu-item key="6" v-if="store.role == '2'">管理中心</a-menu-item>
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
import { useCommonStore } from "../store/common";

const store = useCommonStore();
const router = useRouter();
const changeRoute = (key) => {
  switch (key) {
    case "1":
      router.push("/homepage");
      break;
    case "3":
      router.push("/sell");
      break;
    case "4":
      router.push("/user");
      break;
    case '5':
      router.push("/chat")
      break;
    case '6':
      router.push("/admin")
      break;
  }
};

</script>