<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-25 09:39:57
 * @LastEditTime: 2022-02-25 13:53:17
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\example\child\Header.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="header-wrap">
    <input type="text" v-model="title" placeholder="输入待完成任务，按回车键添加" @keyup.enter="add" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: "Header",
  props: {
    addTodo: { type: Function, required: true },
  },
  setup(props) {
    //定义一个ref的数据
    const title = ref("")

    // 回车的事件的回调函数，用来添加数据
    const add = () => {
      // 获取文本框中输入的数据，判断不为空
      const text = title.value
      if (!text.trim()) return

      // 此时有数据，创建一个todo对象
      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false,
      }

      // 调用方法addTodo
      props.addTodo(todo)
      title.value = ""
    }
    return {
      title,
      add,
    }
  },
})
</script>

<style scoped>
.header-wrap input {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid lightblue;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
