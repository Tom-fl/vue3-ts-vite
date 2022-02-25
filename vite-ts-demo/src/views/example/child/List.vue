<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-25 09:56:53
 * @LastEditTime: 2022-02-25 15:28:35
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\example\child\List.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="todo-main">
    <ul class="todo-list">
      <ListItem v-for="(item, index) in todos" :todoitem="item" :index="index" :key="item.id" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import ListItem from "./ListItem.vue"

export default defineComponent({
  name: "List",
  props: {
    todos: { type: Array, default: () => [] },
  },
  components: { ListItem },
  mounted() {
    console.log(this.todos)
  },
  setup() {},
})
</script>

<style scoped>
.todo-list {
  width: 100%;
}
</style>
