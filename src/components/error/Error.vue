<template>
  <a-result status="error" title="something wrong">
    <template #extra>
      <a-space>
        <a-button type="primary" @click="back">返回上一页</a-button>
      </a-space>
    </template>
  </a-result>
</template>
  <script setup>
import { useRouter } from "vue-router"

const router = useRouter()
const back = () => {
    router.go(-1)
}
</script>