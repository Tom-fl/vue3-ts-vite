<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-24 15:18:51
 * @LastEditTime: 2022-02-24 17:59:28
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\components\childCombination\WriteCombination.vue
 * @Environment: Win 10
 * @Description: 手写组合式API
-->

<template>
  <h2>手写组合式API</h2>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  name: "WriteCombination",
  setup() {
    console.log("-----------------------------------------------")
    // Reflect 是一个内置对象，他提供了js拦截操作的方法
    //参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

    // 定义一个reactiveHandler处理对象
    const reactiveHandler = {
      // 获取属性值
      get(target: any, prop: any) {
        const result = Reflect.get(target, prop)
        console.log("拦截了读取数据", prop, result)
        return result
      },
      // 修改属性值或者是添加属性值
      set(target: any, prop: any, value: any) {
        const result = Reflect.set(target, prop, value)
        console.log("拦截了修改数据或者是添加属性", prop, value)
        return result
      },
      // 删除某个属性
      deleteProperty(target: any, prop: any) {
        const result = Reflect.deleteProperty(target, prop)
        console.log("拦截了删除数据", prop)
        return result
      },
    }

    // shallowReactive(浅的劫持，浅的监视，浅的响应数据) 与 reactive(深的)

    // 定义一个shallowReactive函数，传入一个目标对象
    function shallowReactive(target: any) {
      // 判断当前的目标对象是不是object类型(对象/数组)
      if (target && typeof target === "object") {
        return new Proxy(target, reactiveHandler)
      }

      // 如果传入的数据是基本类型的数据，直接返回
      return target
    }

    // 定义一个reactive函数，传入一个目标对象
    function reactive(target: any) {
      // 判断当前的目标对象是不是object类型(对象/数组)
      if (target && typeof target === "object") {
        // 对数组或者是对象中所有的数据进行reactive的递归处理
        // 先判断当前的数据是不是数组
        if (Array.isArray(target)) {
          target.forEach((item, index) => {
            //数组的数据要进行遍历操作
            target[index] = reactive(item)
          })
        } else {
          // 在判断当前的数据是不是对象
          // 对象的数据也要进行遍历的操作
          Object.keys(target).forEach(key => {
            target[key] = reactive(target[key])
          })
        }
        return new Proxy(target, reactiveHandler)
      }

      // 如果传入的数据是基本类型的数据，直接返回
      return target
    }

    const proxyUser1 = shallowReactive({
      name: "小明",
      car: {
        color: "red",
      },
    })
    // 拦截到了读和写的数据
    // proxyUser1.name += "小红"
    //拦截到了读取数据，但是拦截不到写的数据
    // proxyUser1.car.color + "=="
    // 拦截到了删除
    // delete proxyUser1.name
    // 只拦截到了读，但是拦截不到删除
    // delete proxyUser1.car.color

    const proxyUser2 = reactive({
      name: "小明",
      car: {
        color: "red",
      },
    })

    // 拦截到了读和写的数据
    // proxyUser2.name += "小红"
    //拦截到了读取数据 和 修改数据
    // proxyUser2.car.color = "===="
    // 拦截到了删除
    // delete proxyUser2.name
    // 拦截到了读 和 删除数据
    // delete proxyUser2.car.color

    // 定义一个shallowReadonly函数
    function shallowReadonly() {
      // 和上两个函数 差不多，就不展示了
    }

    // 定义一个readonly函数
    function readonly() {}
  },
})
</script>
