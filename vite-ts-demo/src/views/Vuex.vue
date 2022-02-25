<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-24 11:53:07
 * @LastEditTime: 2022-02-24 11:55:05
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\vuex.vue
 * @Environment: Win 10
 * @Description: vuex 部分用法
-->

<template>
  <div>vuex</div>
  <ul>
    <li v-for="item in getCunList">{{ item }}</li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "Vuex",
  computed: {
    ...mapGetters("msg", ["getCunList"]),
  },
}
</script>

<style></style>
