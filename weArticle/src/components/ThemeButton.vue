<template>
  <label class="switch" :class="{ 'cooldown': isCooldown, 'animate': enableAnim }">
    <input 
      id="input" 
      type="checkbox" 
      v-model="isDark" 
      @click="handleClick"
    >
    <div class="slider round">
      <div class="sun-moon">
        <svg id="moon-dot-1" class="moon-dot" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="moon-dot-2" class="moon-dot" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="moon-dot-3" class="moon-dot" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="light-ray-1" class="light-ray" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="light-ray-2" class="light-ray" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="light-ray-3" class="light-ray" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="cloud-1" class="cloud cloud-dark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="cloud-2" class="cloud cloud-dark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="cloud-3" class="cloud cloud-dark" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="cloud-4" class="cloud cloud-light" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="cloud-5" class="cloud cloud-light" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
        <svg id="cloud-6" class="cloud cloud-light" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
      </div>
      <div class="stars">
        <svg id="star-1" class="star" viewBox="0 0 20 20"><path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path></svg>
        <svg id="star-2" class="star" viewBox="0 0 20 20"><path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path></svg>
        <svg id="star-3" class="star" viewBox="0 0 20 20"><path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path></svg>
        <svg id="star-4" class="star" viewBox="0 0 20 20"><path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path></svg>
      </div>
    </div>
  </label>
</template>

<script setup>
import { ref, watch } from 'vue'
import { isDark } from './themeState.js'

const isCooldown = ref(false)
const enableAnim = ref(false) // 默认不开启动画

// 只有当 isDark 真正发生变化时（用户点击了），才开启动画权限
watch(isDark, () => {
  enableAnim.value = true
})

// 注意：删除了之前的 onMounted 逻辑。
// 这样进入新页面时 enableAnim 永远是 false，按钮会根据静态 CSS 停在正确位置，绝不乱动。

const handleClick = (e) => {
  if (isCooldown.value) {
    e.preventDefault()
    return
  }
  isCooldown.value = true
  setTimeout(() => {
    isCooldown.value = false
  }, 1000)
}
</script>

<style scoped>
.switch {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  width: 50px; 
  height: 24px;
}

.switch.cooldown { cursor: not-allowed; opacity: 0.8; }
.switch.cooldown .slider { cursor: not-allowed; }
.switch #input { opacity: 0; width: 0; height: 0; }

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #2196f3;
  transition: 0.4s;
  z-index: 0;
  overflow: hidden;
}

/* --- 静态样式：负责页面刚加载时的定位 --- */
.sun-moon {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: yellow;
  transition: background-color 0.4s;
  
  /* 旋转中心 */
  transform-origin: 22px center;
  
  /* 白天静态位置：0度 */
  transform: rotate(0deg); 
}

#input:checked + .slider {
  background-color: black;
}

#input:checked + .slider .sun-moon {
  /* 黑夜静态位置：180度 */
  transform: rotate(180deg);
  background-color: white;
}

/* --- 动态动画：只有交互后 (.animate) 才生效 --- */

/* 1. 白天 -> 黑夜 (顺时针 0 -> 180) */
.switch.animate #input:checked + .slider .sun-moon {
  animation: rotate-to-night 0.6s ease-in-out both;
}

/* 2. 黑夜 -> 白天 (顺时针 180 -> 360) */
.switch.animate .slider .sun-moon {
  animation: rotate-to-day 0.6s ease-in-out both;
}

@keyframes rotate-to-night {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
}

@keyframes rotate-to-day {
  0% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
}

/* --- 装饰元素显隐 --- */

/* 月球坑：黑夜显示 */
.moon-dot { opacity: 0; transition: 0.4s; fill: gray; }
#input:checked + .slider .sun-moon .moon-dot { opacity: 1; }

/* 光晕：常驻 (0.1透明度) */
.light-ray { opacity: 0.1; transition: 0.4s; }
#input:checked + .slider .sun-moon .light-ray { opacity: 0.1; }

/* 云朵：黑夜隐藏 */
.cloud { opacity: 1; transition: 0.4s; }
#input:checked + .slider .sun-moon .cloud { opacity: 0; }

/* 星星：黑夜显示 */
.stars { transform: translateY(-30px); transition: 0.4s; opacity: 0; }
#input:checked + .slider .stars { transform: translateY(0); opacity: 1; }

.slider.round { border-radius: 34px; }
.slider.round .sun-moon { border-radius: 50%; }

/* SVG定位 */
#moon-dot-1 { left: 7px; top: 2px; width: 4px; height: 4px; z-index: 4; position: absolute; }
#moon-dot-2 { left: 1px; top: 7px; width: 7px; height: 7px; z-index: 4; position: absolute; }
#moon-dot-3 { left: 11px; top: 13px; width: 2px; height: 2px; z-index: 4; position: absolute; }
#light-ray-1 { left: -6px; top: -6px; width: 30px; height: 30px; z-index: -1; fill: white; opacity: 10%; position: absolute; }
#light-ray-2 { left: -35%; top: -35%; width: 38px; height: 38px; z-index: -1; fill: white; opacity: 10%; position: absolute; }
#light-ray-3 { left: -13px; top: -13px; width: 42px; height: 42px; z-index: -1; fill: white; opacity: 10%; position: absolute; }

.cloud-light { position: absolute; fill: #eee; animation: cloud-move 6s infinite; }
.cloud-dark { position: absolute; fill: #ccc; animation: cloud-move 6s infinite; animation-delay: 1s; }

#cloud-1 { left: 20px; top: 10px; width: 28px; }
#cloud-2 { left: 30px; top: 7px; width: 14px; }
#cloud-3 { left: 12px; top: 17px; width: 21px; }
#cloud-4 { left: 25px; top: 13px; width: 28px; }
#cloud-5 { left: 33px; top: 10px; width: 14px; }
#cloud-6 { left: 15px; top: 18px; width: 21px; }

@keyframes cloud-move {
  0% { transform: translateX(0px); }
  40% { transform: translateX(4px); }
  80% { transform: translateX(-4px); }
  100% { transform: translateX(0px); }
}

.star { fill: white; position: absolute; transition: 0.4s; animation: star-twinkle 2s infinite; }
#star-1 { width: 14px; top: 1px; left: 2px; animation-delay: 0.3s; }
#star-2 { width: 4px; top: 11px; left: 2px; }
#star-3 { width: 8px; top: 14px; left: 7px; animation-delay: 0.6s; }
#star-4 { width: 13px; top: 0px; left: 13px; animation-delay: 1.3s; }

@keyframes star-twinkle {
  0% { transform: scale(1); }
  40% { transform: scale(1.2); }
  80% { transform: scale(0.8); }
  100% { transform: scale(1); }
}
</style>