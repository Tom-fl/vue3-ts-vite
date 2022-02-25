<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-22 10:07:09
 * @LastEditTime: 2022-02-25 09:35:00
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\To.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="box">
    <router-link to="/hello" tag="button">hello</router-link>
    <router-link to="/combination" tag="button">使用Compositon-api</router-link>
    <router-link to="/msg" tag="button">child-router-msg</router-link>
    <router-link to="/vuex" tag="button">Vuex</router-link>
    <router-link to="/hook" tag="button">Hook(自定义钩子)</router-link>
    <router-link to="/example" tag="button">小例子</router-link>
  </div>
</template>

<script>
export default {
  name: "To",
}
</script>

<style scoped>
.box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
}
</style>
