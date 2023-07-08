<template>
  <div class="header">
    <a-space direction="vertical" size="large">
      <a-row>
        <a-col :span="4" :offset="4" :size="'large'">闲猪手</a-col>
        <a-col :span="10">
          <a-row>
            <a-input-search
              placeholder="请输入游戏和商品名称"
              button-text="Search"
              search-button
              @search="search"
            >
              <template #button-default> 搜索 </template>
            </a-input-search>
          </a-row>
          <a-row>
            <p class="little">热门搜索:</p>
            <p class="little" v-for="(v, k) in popular_search" :key="k">
              {{ v }}
            </p>
          </a-row>
        </a-col>
      </a-row>
    </a-space>
  </div>
</template>
<style scoped>
.header {
  background: var(--color-fill-2);
  padding: 28px;
  font-size: 48px;
  font-weight: 700;
  color: var(--color-neutral-8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.little {
  font-size: small;
  margin-right: 2px;
}
</style>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
// import { storeToRefs } from 'pinia'
// import { runtimeStore } from '@/store/runtime'
// const store = runtimeStore()
// const { homePage } = storeToRefs(store)

const router = useRouter();
const search = (key) => {
  console.log("search");
  console.log(key);
  router.push("/buy/" + key);
};
const popular_search = reactive(["王者荣耀", "和平精英"]);
</script>