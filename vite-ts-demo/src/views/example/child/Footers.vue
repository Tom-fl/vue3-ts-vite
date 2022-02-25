<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-25 09:40:28
 * @LastEditTime: 2022-02-25 16:22:15
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\example\child\Footers.vue
 * @Environment: Win 10
 * @Description: 
-->
<template>
  <div class="todo-footer">
    <div>
      <label><input type="checkbox" v-model="isCheckAll" /></label>
      <span class="todo-tag">
        <span>已完成 {{ count }}</span>
        /全部 {{ todos.length }}
      </span>
    </div>
    <button class="btn btn-danger" @click="clearCompleted">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue"

export default defineComponent({
  name: "Footers",
  props: {
    todos: { type: Array, default: () => [] },
  },
  setup(props) {
    const checkAll: Function | undefined = inject("checkAll")
    const clearCompleted: Function | undefined = inject("clearCompleted")

    // 被选中的就是已完成的
    const count: any = computed(() => {
      return props.todos.reduce((pre: any, todo: any, index) => pre + (todo.isCompleted ? 1 : 0), 0)
    })

    const isCheckAll = computed({
      get() {
        return count.value > 0 && props.todos.length === count.value
      },
      set(val) {
        if (typeof checkAll === "function") checkAll(val)
      },
    })

    return {
      count,
      isCheckAll,
      clearCompleted,
    }
  },
})
</script>

<style scoped>
.todo-footer {
  display: flex;
  justify-content: space-between;
}
.btn-danger {
  color: #fff;
  background-color: #e95b47;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
}
.todo-tag {
  margin-left: 15px;
}
</style>
