<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-21 15:58:03
 * @LastEditTime: 2022-02-22 10:20:39
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\App.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <to></to>
  <hr />
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

<script>
import To from "./views/To.vue"
export default {
  components: { To },
}
</script>
