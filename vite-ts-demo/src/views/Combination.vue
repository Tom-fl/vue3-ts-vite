<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-22 08:50:12
 * @LastEditTime: 2022-02-24 16:06:03
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\views\Combination.vue
 * @Environment: Win 10
 * @Description: 
-->

<template>
  <div>{{ name }}</div>
  <div>{{ arr }}</div>
  <div>{{ num }}</div>
  <div>computed:{{ computedName }}</div>

  <button @click="handleSetName">通过setup改变name</button>

  <hr />

  <ul>
    <li>obj1</li>
    <li>{{ obj1.name }}</li>
    <li>{{ obj1.age }}</li>
  </ul>

  <ul>
    <li>obj2</li>
    <li>{{ obj2.name }}---是响应式的</li>
    <li>{{ obj2.age }}---是响应式的</li>
    <input type="text" v-model="obj2.age" />
    <li>{{ obj2.child.color }}---不是响应式的,是浅的劫持，浅的响应式</li>
    <input type="text" v-model="obj2.child.color" />
  </ul>

  <hr />
  <write-combination />
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs, shallowReactive, isReactive } from "vue"

import WriteCombination from "@/components/childCombination/WriteCombination.vue"

interface User {
  name: string
  age: number
  handleSetName(): void
}

export default defineComponent({
  name: "Combination",
  components: { WriteCombination },
  setup() {
    // 第一种写法实现接口
    // let data: User = reactive({
    //   name: "张三",
    //   age: 21,
    //   // 也可以写方法
    //   handleSetName() {
    //     this.name = "赵四"
    //   },
    // })

    // 第二种写法实现接口,使用泛型的方式
    // let data = reactive<User>({
    //   name: "张三",
    //   age: 21,
    //   // 也可以写方法
    //   handleSetName() {
    //     this.name = "赵四"
    //   },
    // })

    // 第三种写法实现接口,使用泛型的方式  通过  as
    let data = reactive({
      name: "张三",
      age: 21,
      // 也可以写方法
      handleSetName() {
        this.name = "赵四"
      },
    }) as User

    let arr = reactive([1, 2, 3, 4])
    // 通过ref 指定类型
    let num = ref<string | number>(12)
    // let num1:string=ref() // 这样指定类型 是错误写法，必须通过泛型来指定

    // setup 里计算属性的写法
    let computedName = computed(() => {
      return data.name.split("").reverse().join("")
    })

    // shallowReactive 浅劫持 浅响应式
    let obj1 = reactive({ name: "亚索", age: 11 })
    let obj2 = shallowReactive({ name: "盲僧", age: 22, child: { color: "red" } })

    console.log(obj1)
    console.log(obj2)

    obj2.name = "瞎子"
    obj2.child.color = "blue"

    console.log(isReactive(obj1))
    console.log(isReactive(obj1.name))

    console.log(isReactive(obj2))
    console.log(isReactive(obj2.name))
    return {
      ...toRefs(data),
      arr,
      num,
      computedName,
      obj1,
      obj2,
    }
  },
})
</script>
