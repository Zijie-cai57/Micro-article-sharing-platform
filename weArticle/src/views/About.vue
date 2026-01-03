<template>
  <MouseTrail :z-index="1" />

  <div class="layout-container">
    <div class="sidebar-wrapper">
      <SideNavBar />
    </div>

    <div class="main-content">
      
      <div class="info-panel">
        <div class="info-content">
          <h1 class="page-title">关于 weArticle</h1>
          <p class="page-desc">
            weArticle 是一个致力于分享各种"微文章"的知识平台(目前主要以娱乐分享为主)。作者希望通过这次对平台雏形搭建的实验探讨在现实中开发大型网站的可行性。
          </p>
          
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-num">4</span>
              <span class="stat-label">核心板块数量</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">16</span>
              <span class="stat-label">收录的文章数目</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">100%</span>
              <span class="stat-label">网页好评率(目前只有作者投票)</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">{{ runningDays }}</span>
              <span class="stat-label">平稳运行天数</span>
            </div>
          </div>

          <div class="expand-section">
            <button v-if="!isExpanded" class="learn-more" @click="isExpanded = true">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">展开作者的碎碎念</span>
            </button>
            
            <transition name="expand">
              <div v-if="isExpanded" class="more-details-container">
                <div class="details-content">
                  <h2>一些可能的问题和解答⁉️</h2>
                  <p><strong>大作业的灵感来源？</strong>答：灵感来源是想结合短视频和传统文<!--
                    -->章阅读网站的长处。传统文章网站有一般很强的科普性和专业性，但是排版单调，缺乏吸<!--
                    -->引力。短视频网站门槛低，吸引力强，但是对于知识的精准查询获取难度较大。恰好网页<!--
                    -->又是一个很好的媒介，可以结合两者。微文章舍弃了部分传统文章的科普性与高门槛，结<!--
                    -->合了短视频的可视化和创意布局，又有文章一望到底的优势。于是便决定以这个方向展开。</p>
                  <p><strong>项目的目的是什么？</strong>答：目的就是借助本次大作业的开发过程思考探究<!--
                    -->微文章传播网站在现实生活中有无成为一个大型娱乐分享平台的可能。目前来看，结论是<!--
                    -->否定的。虽然相对于专业文章降低了许多的门槛。但相对于短视频极易上手的特征来说，<!--
                    -->门槛还是过高。作者本人在制作的过程中，哪怕借助了网络上的许多资源以及AI工具，还<!--
                    -->是花费了许多的时间精力😴。或许未来可以通过增加通用组件特效等交互方式帮助用户更<!--
                    -->容易的创建多样微文章。但是就现在而言，这并不是一个可以“爆款”的设计路径。但是个<!--
                    -->人觉得也不是完全没有使用人群，通过创建微文章，可以帮助前端初学者很好的了解网页<!--
                    -->的设计理念。</p>
                  <p><strong>微文章到底是什么/名字的来历？</strong>答：微文章顾名思义是一个承载微型<!--
                    -->文章的网页。其相对于传统文章来说，只提炼核心的观点和科普方法，去除大篇幅的说理<!--
                    -->论证内容，相对于短视频来说，有一视到底的特点可以减少用户寻找兴趣内容的时间成本<!--
                    -->，同时保留多样化视觉效果增加吸引力。毫无疑问，网页对于这种设计目的来说是一个极<!--
                    -->其合适的载体。在制作过程中恰逢发现行文特色与微信(weChat)中"看一看"的大量文章内<!--
                    -->容有着相似之处，此名又可以很好的概括网页特色，因此得名微文章(weArticle🔖)。</p>
                  <p><strong>制作过程中的困难和收获？</strong>答：
                    <br>困难：大抵就在一开始虽然有这个初步想法，但是具体不知道如何实行，加之在增添文<!--
                    -->章时难免遇到的灵感枯竭，组件复用问题。还有一些局外因素对我的影响(大概是最令人<!--
                    -->猝不及防以及恼怒的🤬)。
                    <br>收获：一次很好的体验，把我的想法真真切切地复现了一遍，也是一次很好的实验探究<!--
                    -->与尝试，同时也锻炼了我的能力。</p>
                  <div class="collapse-wrapper">
                    <button @click="isExpanded = false" class="back-button">
                      <svg class="svgIcon" viewBox="0 0 384 512">
                        <path
                          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <div class="social-links">
            <a href="https://github.com/Zijie-cai57/Micro-article-sharing-platform" target="_blank" class="social-link">GitHub</a>
            <a href="https://www.nankai.edu.cn/" target="_blank" class="social-link">University</a>
            <a href="https://cs.nankai.edu.cn/" target="_blank" class="social-link">College</a>
          </div>
        </div>
      </div>

      <div class="visual-panel">
        <div class="visual-bg"></div>
        <div class="visual-text">
          <span>Try & Explore</span>
          <span>Share & </span>
          <span>Dissemination</span>
          <span>Inspire & help</span>
        
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue' // 确保引入 onMounted
import SideNavBar from '../components/SideNavBar.vue'
import MouseTrail from '../components/MouseTrail.vue'

// 控制“了解更多”内容是否展开
const isExpanded = ref(false)

// --- 新增：网站运行天数逻辑 ---
const runningDays = ref(0)

const calculateRunningDays = () => {
  // 1. 在这里设置你的【建站日期】 (格式：YYYY-MM-DD)
  const startTime = new Date('2025-12-31').getTime()
  
  // 2. 获取当前时间
  const currentTime = new Date().getTime()
  
  // 3. 计算差值 (毫秒)
  const timeDiff = currentTime - startTime
  
  // 4. 换算成天数 (向下取整，不满一天算0天；如果想从第1天开始算，可以 +1)
  const days = Math.floor(timeDiff / (1000 * 3600 * 24))
  
  runningDays.value = days
}

onMounted(() => {
  calculateRunningDays()
})
</script>

<style scoped>
/* --- 整体布局 --- */
.layout-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #f8f9fa;
  overflow: hidden;
}
.sidebar-wrapper {
  width: 240px;
  flex-shrink: 0;
  height: 100%;
  z-index: 10;
}
.main-content {
  flex-grow: 1;
  height: 100%;
  display: flex;
  position: relative;
  z-index: 5;
}
.dark .layout-container { background-color: #121212; }
/* --- 左面板：信息区 (调整 flex 占比) --- */
.info-panel {
  flex: 2.3; /* 占比加大，约 60% */
  padding: 60px 80px; /* 增加内边距 */
  display: flex;
  align-items: center;
  background: white;
  overflow-y: auto;
}
.dark .info-panel { background: #1e1e1e; color: #eee; }

.info-content { margin: auto;max-width: 800px; width: 100%; }

.page-title { font-size: 3.5rem; font-weight: 800; margin-bottom: 20px; color: #333; }
.dark .page-title { color: #fff; }

.page-desc { font-size: 1.2rem; line-height: 1.8; color: #666; margin-bottom: 40px; }
.dark .page-desc { color: #aaa; }

.stats-grid { 
  display: flex; 
  gap: 40px; 
  margin-bottom: 50px; 
  flex-wrap: wrap;  
  justify-content: center; 
}
.stat-item { display: flex; flex-direction: column; align-items: center; text-align: center; min-width: 120px; }
.stat-num { font-size: 2.5rem; font-weight: 900; color: #764ba2; }
.dark .stat-num { color: #a78bfa; }
.stat-label { font-size: 0.9rem; color: #888; }
/* 针对移动端的小优化 */
@media (max-width: 768px) {
  .stats-grid {
    gap: 20px;
    justify-content: space-between;
  }
  .stat-item {
    width: 45%; /* 手机上一行显示两个 */
    margin-bottom: 10px;
  }
}

/* --- 展开区域 --- */
.expand-section { margin-bottom: 60px; min-height: 60px; }

/* 1. Learn More 按钮样式 (移植过来) */
.learn-more {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 14rem; /* 稍微加宽以容纳文字 */
  height: auto;
}

.learn-more .circle {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: relative;
 display: block;
 margin: 0;
 width: 3rem;
 height: 3rem;
 background: #282936;
 border-radius: 1.625rem;
}
.dark .learn-more .circle {
  background-color: #fff;
}

.learn-more .circle .icon {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}
.dark .learn-more .circle .icon {
  background: #282936;
}

.learn-more .circle .icon.arrow {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 left: 0.625rem;
 width: 1.125rem;
 height: 0.125rem;
 background: none;
}

.learn-more .circle .icon.arrow::before {
 position: absolute;
 content: "";
 top: -0.29rem;
 right: 0.0625rem;
 width: 0.625rem;
 height: 0.625rem;
 border-top: 0.125rem solid #fff;
 border-right: 0.125rem solid #fff;
 transform: rotate(45deg);
}
.dark .learn-more .circle .icon.arrow::before {
  border-top: 0.125rem solid #282936;
 border-right: 0.125rem solid #282936;
}

.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #3b3c4f;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}
.dark .learn-more .button-text {
  color: aliceblue;
}

.learn-more:hover .circle {
 width: 100%;
}

.learn-more:hover .circle .icon.arrow {
 background: #fff;
 transform: translate(1rem, 0);
}
.dark .learn-more:hover .circle .icon.arrow {
 background: #282936;
 transform: translate(1rem, 0);
}

.learn-more:hover .button-text {
  color: #ffffff;
}
.dark .learn-more:hover .button-text {
  color: #282936;
}

/* 展开容器样式 */
.more-details-container {
  background: #f8f9fa;
  border-radius: 20px;
  padding: 30px;
  margin-top: 20px;
  border-left: 5px solid #282936;
}
.dark .more-details-container { background: #2d2d2d; border-left-color: #fff; }

.details-content h2 { margin-top: 0; color: #333; }
.dark .details-content h2 { color: #fff; }
.details-content p { color: #666; line-height: 1.6; }
.dark .details-content p { color: #aaa; }

/* 收起按钮容器 */
.collapse-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* 2. 收起按钮样式 (Back Button) */
.back-button {
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
  cursor: pointer;
  transition-duration: 0.6s;
  overflow: hidden;
  position: relative;
}
.dark .back-button {
  background-color: #fff;
  box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.2);
}

.svgIcon {
  width: 12px;
  transition-duration: 0.6s;
}

.svgIcon path {
  fill: white;
}
.dark .svgIcon path {
  fill: rgb(20, 20, 20);
}

.back-button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.6s;
  background-color: rgb(181, 160, 255);
  align-items: center;
}
.dark .back-button:hover {
  background-color: #14d7ca;
}

.back-button:hover .svgIcon {
  transition-duration: 0.6s;
  transform: translateY(-200%);
}

.back-button::before {
  position: absolute;
  bottom: -20px;
  content: "收起 / Close"; /* 修改这里 */
  color: white;
  font-size: 0px;
}
.dark .back-button::before {
  color: rgb(20, 20, 20);
}

.back-button:hover::before {
  font-size: 14px;
  opacity: 1;
  bottom: unset;
  transition-duration: 0.6s;
}

/* 展开动画 */
.expand-enter-active, .expand-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  max-height: 800px;
  opacity: 1;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
  margin-top: 0;
  padding: 0;
}

/* --- 社交链接 --- */
.social-links { display: flex; gap: 30px; }
.social-link { color: #888; text-decoration: none; font-weight: bold; transition: color 0.3s; }
.social-link:hover { color: #764ba2; }
.dark .social-link:hover { color: #a78bfa; }

/* --- 右面板：视觉区 (宽度占比调小) --- */
.visual-panel {
  flex: 1; /* 占比减小，约 40% */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-bg {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: url('../assets/image/about-bg.jpg'); 
  background-size: cover;
  background-position: center;
  filter: brightness(0.8); 
}

.visual-text {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 3.5rem; /* 字体稍微调小 */
  font-weight: 900;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0.8;
  text-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
.visual-text span {
  display: block;
  background: linear-gradient(to right, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* --- 响应式适配 --- */
@media (max-width: 1024px) {
  .main-content { flex-direction: column; }
  .info-panel { padding: 40px; flex: none; }
  .visual-panel { height: 300px; flex: none; }
  .visual-text { font-size: 3rem; }
}
</style>