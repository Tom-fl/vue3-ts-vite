<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-24 11:57:30
 * @LastEditTime: 2022-02-24 18:00:38
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\Hook.vue
 * @Environment: Win 10
 * @Description: 自定义hook(钩子)函数
-->
<template>
  <div>自定义hook(钩子)函数</div>
  <div>浏览器的宽度:{{ width }}</div>
  <div>浏览器的高度:{{ height }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import useWindowResize from "@/hooks/useWindowResize"

export default defineComponent({
  name: "Hook",
  setup() {
    const { width, height } = useWindowResize()
    console.log(width, height)

    return {
      width,
      height,
    }
  },
})
</script>

<style></style>
