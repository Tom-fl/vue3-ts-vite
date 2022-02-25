/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-22 09:48:55
 * @LastEditTime: 2022-02-25 09:38:14
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\router\index.ts
 * @Environment: Win 10
 * @Description: 
 */

import { createRouter,createWebHashHistory,createWebHistory } from 'vue-router'

// import HelloWorld from  '../components/HelloWorld.vue'
const HelloWorld =() => import('../components/HelloWorld.vue') // 路由懒加载
import Combination from  '../views/Combination.vue'
import Msg from  '../views/Msg.vue'
import Vuex from  '../views/Vuex.vue'
import Hook from  '../views/Hook.vue'
import Example from  '../views/example/Example.vue'

import Msg1 from '../components/childMsg/ChildMsg1.vue'
import Msg2 from '../components/childMsg/ChildMsg2.vue'


const routes=[
  { path: '', redirect:'/hello' },
  { path: '/', component: HelloWorld },
  { path: '/combination', component: Combination, alias:'/Combination1' }, //alias  起别名。输入user1 也可以访问
  { path: '/hello', component: HelloWorld },
  { path: '/vuex', component: Vuex },
  { path: '/hook', component: Hook },
  { path: '/example', component: Example },
  { path: '/msg', component: Msg,
    children:[
       {path: '', redirect:'/msg/msg1'},
       {path: 'msg1', component: Msg1},
       {path: 'msg2', component: Msg2}
  ] },
]



// 创建路由构造器
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(), //h5   history模式
  routes
})


export default router