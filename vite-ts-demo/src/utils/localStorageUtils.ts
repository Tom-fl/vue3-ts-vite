/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-25 16:30:50
 * @LastEditTime: 2022-02-25 16:36:03
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\utils\localStorageUtils.ts
 * @Environment: Win 10
 * @Description: 浏览器缓存，读和取 操作
 */

import {Todo} from '@/types/todo'

// 保存到浏览器的缓存中
export function saveTodos(todos:Todo[]){
  localStorage.setItem('todos_key',JSON.stringify(todos))
}

// 从浏览器缓存读取数据
export function readTodos():Todo[]{
  return JSON.parse(localStorage.getItem('todos_key')|| '[]')
}