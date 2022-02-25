<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-21 15:58:03
 * @LastEditTime: 2022-02-24 11:54:57
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\components\HelloWorld.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div>{{ msg.title }}</div>

  <button @click="handleChangeTitle('改变后的标题')">点击改变标题</button>
</template>

<script lang="ts">
// 定义接口
interface News {
  title: string
  count: number
  value: string
}
// 使用接口 第一种写法
// let newData: News = {
//   title: "我是标题",
//   count: 1,
//   value: "你好啊啊啊",
// }

// 第二种写法
let newData = {
  title: "我是标题",
  count: 1,
  value: "你好啊啊啊",
} as News

import { defineComponent } from "vue"

// defineComponent 启用类型判断
export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      msg: newData,
    }
  },
  methods: {
    handleChangeTitle(val: string) {
      this.msg.title = val
      console.log(this.$route.params)
      console.log(this.$route.query)
    },
  },
})
</script>

<style></style>
