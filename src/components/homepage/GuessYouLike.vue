<template>
  <a-grid
    :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }"
    :colGap="12"
    :rowGap="16"
  >
    <a-grid-item v-for="(item, k) in guess_you_like_list" :key="k">
      <router-link :to="{ path: '/goods/' + item.commodityId }">
        <a-card>
          <template #cover>
            <div
              :style="{
                height: '250px',
                overflow: 'auto',
              }"
            >
              <img
                :style="{ height: '100%' }"
                alt="dessert"
                :src="item.pictureUrl"
              />
            </div>
          </template>
          <a-card-meta
            :title="item.title"
            :description="`${item.price}￥`"
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
                  <img alt="avatar" :src="item.seller.pictureUrl" />
                </a-avatar>
                <a-typography-text>{{ item.seller.username }}</a-typography-text>
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
import { ref, reactive, onBeforeUnmount } from "vue";
import { preventShake } from "@/common/control";
import { getCommodityList } from '@/api/public';
import { useCommonStore } from "../../store/common";

const store = useCommonStore();
// const guess_you_like_list = reactive([
//   {
//     username: "username",
//     avatar:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
//     game_id: "jlj234ljf",
//     game_name: "game_name",
//     game_description: "game_description",
//     game_image:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
//   },
//   {
//     username: "username",
//     avatar:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
//     game_id: "jl7423j",
//     game_name: "game_name",
//     game_description: "game_description",
//     game_image:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
//   },
//   {
//     username: "username",
//     avatar:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
//     game_id: "jl7423j",
//     game_name: "game_name",
//     game_description: "game_description",
//     game_image:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
//   },
//   {
//     username: "username",
//     avatar:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
//     game_id: "jl7423j",
//     game_name: "game_name",
//     game_description: "game_description",
//     game_image:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
//   },
//   {
//     username: "username",
//     avatar:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
//     game_id: "jl7423j",
//     game_name: "game_name",
//     game_description: "game_description",
//     game_image:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
//   },
//   {
//     username: "username",
//     avatar:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
//     game_id: "jl7423j",
//     game_name: "game_name",
//     game_description: "game_description",
//     game_image:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
//   },
//   {
//     username: "username",
//     avatar:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
//     game_id: "jl7423j",
//     game_name: "game_name",
//     game_description: "game_description",
//     game_image:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
//   },
//   {
//     username: "username",
//     avatar:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
//     game_id: "jl7423j",
//     game_name: "game_name",
//     game_description: "game_description",
//     game_image:
//       "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp",
//   },
// ]);
const guess_you_like_list = reactive([]);
const page = ref(0);
const addItems = () => {
  if (
    window.screen.height + document.documentElement.scrollTop >=
    document.documentElement.scrollHeight
  ) {
    if(store.user != null){
        getCommodityList(page.value)
            .then(res => {
                let commodityList = res.data.commodityList;
                for (let item of commodityList) {
                    guess_you_like_list.push(item);
                }
                if(res.data.commodityList.length == 0){
                    page.value = 0;
                }
            })
            .catch(err => {
                console.log(err)
            });
        page.value += 1;
    }
  }
};
window.onscroll = preventShake(addItems, 1000);

onBeforeUnmount(() => {
  window.onscroll = undefined;
});
</script>
  