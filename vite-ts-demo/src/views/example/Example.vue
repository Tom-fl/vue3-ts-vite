<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-25 09:33:58
 * @LastEditTime: 2022-02-25 16:41:43
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\example\Example.vue
 * @Environment: Win 10
 * @Description: 小例子
-->

<template>
  <div class="todo-wrap">
    <h2>todoList</h2>
    <Header :addTodo="addTodo" />
    <List :todos="todos" />
    <Footer :todos="todos" />
  </div>
</template>

<script lang="ts">
// provide可以向所有子孙组件提供数据以及提供修改数据的方法，子孙组件用inject使用数据。--------------------------------
import { defineComponent, reactive, toRefs, provide, watch } from "vue"

import { Todo } from "@/types/todo"
import { saveTodos, readTodos } from "@/utils/localStorageUtils"

import Header from "./child/Header.vue"
import Footer from "./child/Footers.vue"
import List from "./child/List.vue"

export default defineComponent({
  name: "Example",
  components: { Header, Footer, List },
  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        // { id: 1, title: "xx1", isCompleted: true },
        // { id: 2, title: "xx2", isCompleted: false },
      ],
    })
    state.todos = readTodos()

    // 添加数据方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }

    // 删除数据的方法
    const delTodo = (index: number) => {
      console.log(index)
      state.todos.splice(index, 1)
    }

    // 修改todo的isComleted属性的状态
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted
      console.log(todo)
    }

    // 全选或者是全不选方法
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach(todo => {
        todo.isCompleted = isCompleted
      })
    }

    const clearCompleted = () => {
      state.todos = state.todos.filter(todo => !todo.isCompleted)
    }

    // 监视:如果todos数组的数据变化了，直接存储到 localStorage
    // watch(
    //   () => state.todos,
    //   value => {
    //     saveTodos(value)
    //   },
    //   { deep: true }
    // )
    watch(() => state.todos, saveTodos, { deep: true })

    provide("delTodo", delTodo)
    provide("updateTodo", updateTodo)
    provide("checkAll", checkAll)
    provide("clearCompleted", clearCompleted)

    return {
      ...toRefs(state),
      addTodo,
    }
  },
})
</script>

<style scoped>
.todo-wrap {
  width: 500px;
  margin: 0 auto;
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 20px;
}
.todo-wrap h2 {
  text-align: center;
}
</style>
