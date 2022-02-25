/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-22 13:40:44
 * @LastEditTime: 2022-02-22 17:49:24
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\store\index.ts
 * @Environment: Win 10
 * @Description: 
 */
import {createStore} from 'vuex'

import { ComponentCustomProperties } from 'vue'

// ------------------------------------暂时不知道有什么用----------------------------
// // 配置vue+ts的项目使用vuex
// declare module '@vue/runtime-core' {
//   // 声明自己的 store state
//   interface State {
//     cunList:string[],
//     val:string
//   }

//   // 为 `this.$store` 提供类型声明
//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
// }



// const files = require.context("./module", false, /\.js$/); // 以前是通过require的方式 来获取全部的文件

const files = import.meta.globEager("./module/*.ts") // 在vite里使用 import.meta.globEager

const modules: any = {};

for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
        modules[key.replace(/(\.\/\module\/|\.ts)/g, "")] = files[key].default
    }
}

console.log(modules)

// createStore 创建vuex
const store=createStore({
  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules,
})

export default store