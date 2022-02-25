/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-22 13:54:19
 * @LastEditTime: 2022-02-22 17:49:15
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\store\module\msg.ts
 * @Environment: Win 10
 * @Description: 
 */




const msg={
  namespaced: true,
  state:{
      cunList:['1','2'],
      val:'123'
  },
  getters:{
    getVal(state:any){
      return state.val
    },
     getCunList: ({cunList}:any) => cunList,
  }, 
  modules: {
    account: {
      namespaced: true,
    }
  }
}

export default msg