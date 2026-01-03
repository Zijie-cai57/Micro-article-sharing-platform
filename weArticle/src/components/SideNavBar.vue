<template>
  <nav class="sidebar-container">
    <div class="logo-area">
      <div class="logo-icon">W</div>
      <span class="logo-text">weArticle</span>
    </div>

    <div class="menu-list">
      <router-link 
        v-for="item in menuItems" 
        :key="item.path" 
        :to="item.path" 
        class="menu-item"
      >
        <span class="icon">{{ item.icon }}</span>
        <span class="label">{{ item.name }}</span>
        <div class="active-indicator"></div>
      </router-link>
    </div>

    <div class="sidebar-footer">
      <ThemeButton/>
      <span class="copyright">© 2026</span>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import ThemeButton from './ThemeButton.vue' // 确保路径正确引用你的 ThemeButton

// 定义导航菜单数据
const menuItems = ref([
  { name: '首页', path: '/', icon: '🏠' },
  { name: '关于我们', path: '/about', icon: '📚' },
  { name: '动物世界', path: '/animals', icon: '🦁' },
  { name: '旅游攻略', path: '/travel', icon: '✈️' },
  { name: '休闲娱乐', path: '/leisure', icon: '🛝' },
  { name: '健康科普', path: '/health', icon: '🌿' },
])
</script>

<style scoped>
/* --- 整体容器：毛玻璃风格 --- */
.sidebar-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.6); /* 半透明白 */
  backdrop-filter: blur(12px); /* 核心：背景模糊 */
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  padding: 24px 16px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

/* 暗色模式适配 */
.dark .sidebar-container {
  background: rgba(20, 20, 20, 0.6); /* 半透明黑 */
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

/* --- 1. Logo 区域 --- */
.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  padding-left: 8px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0 4px 10px rgba(118, 75, 162, 0.3);
}

.logo-text {
  font-size: 20px;
  font-weight: 800;
  background: linear-gradient(to right, #333, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
}

.dark .logo-text {
  background: linear-gradient(to right, #fff, #aaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* --- 2. 菜单列表 --- */
.menu-list {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: all 0.3s ease;
  overflow: hidden;
}

.dark .menu-item {
  color: #bbb;
}

.menu-item .icon {
  font-size: 18px;
  transition: transform 0.3s ease;
}

/* 悬停效果 */
.menu-item:hover {
  background: rgba(0, 0, 0, 0.05);
  transform: translateX(4px);
}

.dark .menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* 选中激活状态 (router-link-active 自动添加的类) */
.router-link-active {
  background: white !important;
  color: #764ba2 !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.dark .router-link-active {
  background: #2c2c2c !important;
  color: #fff !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.router-link-active .icon {
  transform: scale(1.2);
}

/* 激活指示条 */
.active-indicator {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 0;
  background: #764ba2;
  border-radius: 0 4px 4px 0;
  transition: height 0.3s ease;
}

.router-link-active .active-indicator {
  height: 60%; /* 激活时变长 */
}

/* --- 3. 底部区域 --- */
.sidebar-footer {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.dark .sidebar-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.copyright {
  font-size: 12px;
  color: #999;
  font-family: monospace;
}
</style>