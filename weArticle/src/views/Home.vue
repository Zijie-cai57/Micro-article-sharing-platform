<template>
  <MouseTrail :z-index="1" />

  <div class="layout-container">
    
    <div class="sidebar-wrapper">
      <SideNavBar />
    </div>

    <div class="main-content">
      
      <div class="welcome-banner">
        <div class="banner-text">
          <h1>"微文章"分享平台</h1>
          <p>开启你的数字旅程，分享你心中的任何想法。</p>
          <button class="explore-btn" @click="$router.push('/about')">了解更多</button>
        </div>
        <div class="banner-bg"></div>
      </div>

      <h2 class="section-title">热门分类</h2>
      <div class="category-grid">
        
        <div class="category-card animals" @click="$router.push('/animals')">
          <span class="cat-icon">🦁</span>
          <h3>动物世界</h3>
          <p>探索自然的奇迹</p>
        </div>

        <div class="category-card travel" @click="$router.push('/travel')">
          <span class="cat-icon">✈️</span>
          <h3>旅游攻略</h3>
          <p>寻找下一站风景</p>
        </div>

        <div class="category-card health" @click="$router.push('/health')">
          <span class="cat-icon">🌿</span>
          <h3>健康科普</h3>
          <p>身心平衡指南</p>
        </div>

        <div class="category-card leisure" @click="$router.push('/leisure')">
          <span class="cat-icon">🎮</span>
          <h3>休闲娱乐</h3>
          <p>发现生活乐趣</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import SideNavBar from '../components/SideNavBar.vue'
import MouseTrail from '../components/MouseTrail.vue'
</script>

<style scoped>
/* --- 核心布局：左侧固定，右侧滚动 --- */
.layout-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #f8f9fa;
  overflow: hidden;
}

.sidebar-wrapper {
  width: 240px; /* 侧边栏宽度 */
  flex-shrink: 0;
  height: 100%;
  z-index: 10;
}

.main-content {
  flex-grow: 1;
  height: 100%;
  overflow-y: auto; /* 右侧独立滚动 */
  padding: 30px 40px;
  position: relative;
  z-index: 5;
}

/* 暗色模式背景适配 */
.dark .layout-container {
  background-color: #121212;
}

/* --- Banner 样式 --- */
.welcome-banner {
  position: relative;
  height: 280px;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 60px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  margin-bottom: 40px;
}

.banner-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  /* 炫彩渐变背景 */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 1;
}

.banner-text {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 500px;
}

.banner-text h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: -1px;
}

.banner-text p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 25px;
}

.explore-btn {
  padding: 12px 30px;
  background: white;
  color: #764ba2;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
.explore-btn:hover { transform: scale(1.05); }

/* --- 分类卡片样式 --- */
.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: 700;
  border-left: 5px solid #764ba2;
  padding-left: 15px;
}
.dark .section-title { color: #eee; border-left-color: #fff; }

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.category-card {
  padding: 24px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  border: 1px solid rgba(0,0,0,0.05);
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.dark .category-card {
  background: #1e1e1e;
  border: 1px solid rgba(255,255,255,0.05);
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.cat-icon { font-size: 3rem; margin-bottom: 15px; }
.category-card h3 { font-size: 1.25rem; margin-bottom: 5px; color: #333; font-weight: 700; }
.dark .category-card h3 { color: #fff; }
.category-card p { font-size: 0.9rem; color: #888; }

/* 各个卡片的特色颜色 */
.animals { border-bottom: 4px solid #42d392; }
.animals:hover { background: linear-gradient(to bottom, #fff, #f0fdf4); }
.dark .animals:hover { background: linear-gradient(to bottom, #1e1e1e, #062111); }

.travel { border-bottom: 4px solid #38bdf8; }
.travel:hover { background: linear-gradient(to bottom, #fff, #f0f9ff); }
.dark .travel:hover { background: linear-gradient(to bottom, #1e1e1e, #082f49); }

.health { border-bottom: 4px solid #2dd4bf; }
.health:hover { background: linear-gradient(to bottom, #fff, #f0fdfa); }
.dark .health:hover { background: linear-gradient(to bottom, #1e1e1e, #042f2e); }

.leisure { border-bottom: 4px solid #fb7185; }
.leisure:hover { background: linear-gradient(to bottom, #fff, #fff1f2); }
.dark .leisure:hover { background: linear-gradient(to bottom, #1e1e1e, #4c0519); }
</style>