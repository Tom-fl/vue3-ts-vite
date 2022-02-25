<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-25 09:57:14
 * @LastEditTime: 2022-02-25 15:46:08
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\example\child\ListItem.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <li class="todo-item">
    <div>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ todoitem.title }}</span>
    </div>
    <button class="delBtn" @click="del(index)">删除</button>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, inject } from "vue"

import { Todo } from "@/types/todo"

export default defineComponent({
  name: "ListItem",
  props: {
    todoitem: { type: Object as () => Todo, default: () => {} },
    index: { type: Number, default: () => 1 },
  },
  setup(props, context) {
    const index = props.index
    const delTodo: Function | undefined = inject("delTodo")
    const updateTodo: Function | undefined = inject("updateTodo")

    const isCompleted = computed({
      get() {
        return props.todoitem.isCompleted
      },
      set(val) {
        if (typeof updateTodo === "function") updateTodo(props.todoitem, val)
      },
    })

    const del = (index: any) => {
      if (window.confirm("确定要删除吗?")) if (typeof delTodo === "function") delTodo(index)
    }

    return {
      isCompleted,
      del,
    }
  },
})
</script>

<style scoped>
.todo-item {
  border: 1px solid lightblue;
  list-style: none;
  width: 100%;
  padding: 5px;
  margin-left: -40px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.delBtn {
  background-color: #e95b47;
  color: #fff;
  border-radius: 5px;
  border: none;
  display: none;
}
.todo-item:hover {
  color: lightcoral;
  background-color: rgba(137, 190, 78, 0.3);
}
.todo-item:hover .delBtn {
  display: block;
}
</style>
