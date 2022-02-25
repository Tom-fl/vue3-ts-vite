## vue3+vite+ts

### 创建项目

##### cli方式

- vue create <project name>
- 可以在创建项目的时候 **勾选上typescript** ，这样就**不需要**下面的集成ts了

###### 脚手架vue中集成ts

- 使用vite创建的项目 就不需要 vue add typescript 

- 脚手架创建的项目，通过 `vue add typescript`，集成之后就可以在项目中使用ts语法

  - Use class-style component syntax? (Y/n)   y

    - 是否使用class类型的组件？

    - 选择Y的话 就会自动生成 和官方定义的一样的

    - ```js
      const Component = defineComponent({
        data() {
          return {
            count: 0
          }
        },
        mounted() {
          const result = this.count.split('') // => Property 'split' does not exist on type 'number'
        }
      })
      ```

  - Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n)   y

    - 是否使用 Babel 

  - Convert all .js files to .ts?(Y/n) y

    - 是否把所有的js转换为ts

  - Allow .js files to be compiled? (y/N) y

    - 是否允许编译成.js文件

  - Skip type checking of all declaration files (recommended for apps)? (Y/n) n

    - 是否检查所有的依赖

##### vite

- 通过vite  可以选择  **vite+vue3** 或者  **vite+vue3+ts**
  - yarn create vite  -> yarn -> yarn dev 



### Compositon-api

- ```typescript
  import { computed, defineComponent, reactive, ref, toRefs } from "vue"
  
  // 定义接口
  interface User {
    name: string
    age: number
    handleSetName(): void
  }
  
  
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
  
      return {
        ...toRefs(data),
        arr,
        num,
        computedName,
      }
    },
  ```



### 路由

###### 安装

- yarn add vue-router@next -D

###### 配置路由

- 创建index.ts 路由文件

- ```ts
  import { createRouter,createWebHashHistory,createWebHistory } from 'vue-router'
  
  // import HelloWorld from  '../components/HelloWorld.vue'
  const HelloWorld =() => import('../components/HelloWorld.vue') // 路由懒加载
  import User from  '../views/User.vue'
  
  const routes=[
    { path: '/', component: HelloWorld },
    { path: '/user', component: User, alias:'/user1' }, //alias  起别名。输入user1 也可以访问
    { path: '/hello', component: HelloWorld },
  ]
  
  // 创建路由构造器
  const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(), //h5   history模式
    routes
  })
  
  
  export default router
  ```

- main.ts  导入 router

  - ```ts
    import router from './router'
    
    .use(router)
    ```

###### 改动

- vue-router4 取消的 `router-link`的tag属性
- 在`setup`里访问路由和当前路由对象



### Vuex

###### 安装

- yarn add vuex@next -D

###### 配置vuex

- ```ts
  // index.ts
  import {createStore} from 'vuex'
  
  // 以前是通过require的方式 来获取全部的文件
  // const files = require.context("./module", false, /\.js$/);
  
  // 在vite里使用 import.meta.globEager
  const files = import.meta.globEager("./module/*.ts")
  
  const modules: any = {};
  
  for (const key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
          modules[key.replace(/(\.\/\module\/|\.ts)/g, "")] = files[key].default
      }
  }
  
  // createStore 创建vuex
  const store=createStore({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules, // 统一引入module 所有的ts文件
  })
  
  export default store
  ```







### vite的一些配置

###### 修改项目端口

- 使用vite创建的项目不是在 vue.config.js 里修改了，是在**vite.config.ts** 里去修改，如果没有自行创建

- ```js
  // vue.config.js
  devServer:{
      port:8081
  }
  
  // vite.config.ts
  server:{
      port:8081
    }
  ```

- 



### 记录

###### require.context

- vue2中

  - 在vuex，index.js  获取module文件夹下 所有的js文件

  - ```js
    const files = require.context("./module", false, /\.js$/);
    ```

- vue3+vite

  - 在vite里使用 import.meta.globEager

  - ```ts
    const files = import.meta.globEager("./module/*.ts")
    ```

###### vite 怎么配置别名 @

- vite.config.ts

  - ```ts
    const path = require('path');  
    
    // 在 defineConfig 里配置
    //配置目录别名
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      },
    ```

- tsconfig.json

  - ```ts
    // 在 compilerOptions 里配置
    
    "paths": {
          "@":["src"],
          "@/*":["src/*"],   
        }
    ```



