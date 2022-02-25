/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-25 10:00:41
 * @LastEditTime: 2022-02-25 10:00:42
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\types\todo.ts
 * @Environment: Win 10
 * @Description: 
 */

//定义一个接口，约束state的数据类型
export interface Todo {
    id:number,
    title:string,
    isCompleted:boolean
}