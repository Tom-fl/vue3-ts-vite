/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-21 15:58:03
 * @LastEditTime: 2022-02-24 14:09:17
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\vite.config.ts
 * @Environment: Win 10
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置目录别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server:{
    port:8081
  }
})
