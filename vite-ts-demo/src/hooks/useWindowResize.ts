/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-02-24 13:38:40
 * @LastEditTime: 2022-02-24 13:39:44
 * @Email: str-liang@outlook.com
 * @FilePath: \vite-ts-demo\src\hooks\useWindowResize.ts
 * @Environment: Win 10
 * @Description: 自定义hook
 */

import {ref,onMounted,onUnmounted} from 'vue'

function useWindowResize() {
  const width = ref(0);
  const height = ref(0);

  function onResize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  onMounted(() => {
    window.addEventListener("resize", onResize);
    onResize();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });

  return {
    width,
    height
  };
}

export default useWindowResize