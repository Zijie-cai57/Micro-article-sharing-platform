import { ref, watchEffect } from 'vue'

// 1. 读取本地存储，如果没有则默认为 false (亮色)
const savedTheme = localStorage.getItem('user-theme')
const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// 优先使用本地存储，其次跟随系统，最后默认亮色
const initialTheme = savedTheme ? savedTheme === 'dark' : isSystemDark

// 2. 创建一个全局共享的响应式变量
export const isDark = ref(initialTheme)

// 3. 全局监听：只要 isDark 变了，就修改 html 的 class 并保存到本地
watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('user-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('user-theme', 'light')
  }
})