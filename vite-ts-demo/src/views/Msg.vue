<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-22 10:06:09
 * @LastEditTime: 2022-02-22 14:08:26
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\Msg.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="box">
    <div class="nav">
      <router-link to="/msg/msg1" tag="div" class="nav_item">msg1</router-link>
      <router-link to="/msg/msg2" tag="div" class="nav_item">msg2</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Msg",
}
</script>

<style scoped>
.box {
  height: 90vh;
  display: flex;
}
.nav {
  width: 15%;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav_item {
  padding-top: 10px;
}
.content {
  width: 85%;
  border: 1px solid red;
}
</style>
