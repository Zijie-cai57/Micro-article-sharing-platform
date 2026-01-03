<template>
  <div class="search-wrapper">
    <div class="wave-group">
      <input required="" type="text" class="input" 
        v-model="searchQuery" 
        @input="handleSearch"
        placeholder=""
      >
      <span class="bar"></span>
      
      <label class="label">
        <span class="label-char" style="--index: 0">S</span>
        <span class="label-char" style="--index: 1">e</span>
        <span class="label-char" style="--index: 2">a</span>
        <span class="label-char" style="--index: 3">r</span>
        <span class="label-char" style="--index: 4">c</span>
        <span class="label-char" style="--index: 5">h</span>
        <span class="label-char" style="--index: 1">&nbsp;</span>
        <span class="label-char" style="--index: 2">b</span>
        <span class="label-char" style="--index: 3">y</span>
        <span class="label-char" style="--index: 1">&nbsp;</span>
        <span class="label-char" style="--index: 2">K</span>
        <span class="label-char" style="--index: 3">e</span>
        <span class="label-char" style="--index: 4">y</span>
        <span class="label-char" style="--index: 5">w</span>
        <span class="label-char" style="--index: 6">o</span>
        <span class="label-char" style="--index: 7">r</span>
        <span class="label-char" style="--index: 8">d</span>
        <span class="label-char" style="--index: 9">s</span>
      </label>

      <div class="decor left"></div>
      <div class="decor right"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['search'])
const searchQuery = ref('')

const handleSearch = () => {
  emit('search', searchQuery.value)
}
</script>

<style scoped>
/* 布局容器 */
.search-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
}

.wave-group {
  position: relative;
  width: 450px;
  max-width: 90%;
}

/* 输入框 */
.wave-group .input {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(81, 81, 81, 0.3);
  background: transparent;
  color: #333;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.dark .wave-group .input {
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.wave-group .input:focus {
  outline: none;
  border-bottom-color: transparent; /* 聚焦时隐藏原边框，交给 bar 显示 */
}

/* 标签文字 */
.wave-group .label {
  color: #999;
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 12px;
  display: flex;
  font-family: Consolas, Monaco, monospace;
}

.wave-group .label-char {
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: calc(var(--index) * 0.03s);
}

/* 聚焦动画 */
.wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  transform: translateY(-25px);
  font-size: 14px;
  color: #f68401; /* 亮色模式主题色：橙 */
  text-shadow: 0 2px 5px rgba(246, 132, 1, 0.3);
}

.dark .wave-group .input:focus ~ label .label-char,
.dark .wave-group .input:valid ~ label .label-char {
  color: #00e5ff; /* 暗色模式主题色：荧光青 */
  text-shadow: 0 0 8px rgba(0, 229, 255, 0.6); /* 增强发光感 */
}

/* 底部动态条 */
.wave-group .bar {
  position: relative;
  display: block;
  width: 100%;
}

.wave-group .bar:before,
.wave-group .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #f68401;
  transition: 0.4s ease all;
  box-shadow: 0 0 10px rgba(246, 132, 1, 0.5);
}

.dark .wave-group .bar:before,
.dark .wave-group .bar:after {
  background: #00e5ff; /* 荧光青 */
  box-shadow: 0 0 10px rgba(0, 229, 255, 0.6);
}

.wave-group .bar:before { left: 50%; }
.wave-group .bar:after { right: 50%; }

.wave-group .input:focus ~ .bar:before,
.wave-group .input:focus ~ .bar:after {
  width: 50%;
}

/* 两侧装饰 (直角括号) */
.wave-group .decor {
  position: absolute;
  bottom: 0;
  width: 0; /* 初始隐藏 */
  height: 0;
  border-color: #999;
  border-style: solid;
  border-width: 0;
  transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;
}

/* 左括号形状 */
.wave-group .decor.left {
  left: -10px;
  border-bottom-width: 1px;
  border-left-width: 1px;
}

/* 右括号形状 */
.wave-group .decor.right {
  right: -10px;
  border-bottom-width: 1px;
  border-right-width: 1px;
}

/* 聚焦时展开括号 */
.wave-group .input:focus ~ .decor {
  width: 15px;
  height: 15px;
  bottom: 5px; /* 上浮一点，更有悬浮感 */
  border-color: #f68401;
}

.dark .wave-group .input:focus ~ .decor {
  border-color: #00e5ff; /* 暗色模式括号变青色 */
  filter: drop-shadow(0 0 2px #00e5ff); /* 给括号也加一点微光 */
}
</style>