/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-21 15:58:03
 * @LastEditTime: 2022-02-22 13:42:15
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\main.ts
 * @Environment: Win 10
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
