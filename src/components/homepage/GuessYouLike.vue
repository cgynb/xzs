<template>
  <a-grid
    :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }"
    :colGap="12"
    :rowGap="16"
  >
    <a-grid-item v-for="(item, k) in guess_you_like_list" :key="k">
      <router-link :to="{ path: '/goods/' + item.game_id }">
        <a-card>
          <template #cover>
            <div
              :style="{
                height: '250px',
                overflow: 'auto',
              }"
            >
              <img
                :style="{ width: '100%' }"
                alt="dessert"
                :src="item.game_image"
              />
            </div>
          </template>
          <a-card-meta
            :title="item.game_name"
            :description="item.game_description"
          >
            <template #avatar>
              <div
                :style="{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#1D2129',
                }"
              >
                <a-avatar :size="24" :style="{ marginRight: '8px' }">
                  <img alt="avatar" :src="item.avatar" />
                </a-avatar>
                <a-typography-text>Username</a-typography-text>
              </div>
            </template>
          </a-card-meta>
        </a-card>
      </router-link>
    </a-grid-item>
  </a-grid>
  <div class="load">
    <a-spin dot />
  </div>
</template>
  <style scoped>
.load {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
<script setup>
import { reactive, onBeforeUnmount } from "vue";
import { preventShake } from "@/common/control";
const guess_you_like_list = reactive([
  {
    username: "username",
    avatar:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
    game_id: "jlj234ljf",
    game_name: "game_name",
    game_description: "game_description",
    game_image:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
  },
  {
    username: "username",
    avatar:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
    game_id: "jl7423j",
    game_name: "game_name",
    game_description: "game_description",
    game_image:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
  },
  {
    username: "username",
    avatar:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
    game_id: "jl7423j",
    game_name: "game_name",
    game_description: "game_description",
    game_image:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
  },
  {
    username: "username",
    avatar:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
    game_id: "jl7423j",
    game_name: "game_name",
    game_description: "game_description",
    game_image:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
  },
  {
    username: "username",
    avatar:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
    game_id: "jl7423j",
    game_name: "game_name",
    game_description: "game_description",
    game_image:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
  },
  {
    username: "username",
    avatar:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
    game_id: "jl7423j",
    game_name: "game_name",
    game_description: "game_description",
    game_image:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
  },
  {
    username: "username",
    avatar:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
    game_id: "jl7423j",
    game_name: "game_name",
    game_description: "game_description",
    game_image:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
  },
  {
    username: "username",
    avatar:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
    game_id: "jl7423j",
    game_name: "game_name",
    game_description: "game_description",
    game_image:
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
  },
]);

const addItems = () => {
  if (
    window.screen.height + document.documentElement.scrollTop >=
    document.documentElement.scrollHeight
  ) {
    for (let i = 0; i < 8; i++) {
      guess_you_like_list.push({
        username: "username",
        avatar:
          "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
        game_id: "jlj234ljf",
        game_name: "game_name",
        game_description: "game_description",
        game_image:
          "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
      });
    }
  }
};
window.onscroll = preventShake(addItems, 1000);

onBeforeUnmount(() => {
  window.onscroll = undefined;
});
</script>
  