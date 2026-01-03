<template>
  <MouseTrail :z-index="1" />
  
  <div class="layout-container">
    <div class="sidebar-wrapper">
      <SideNavBar />
    </div>

    <div class="main-content">
      
      <div class="hero-header nature-theme">
        <div class="hero-text">
          <h1>动物世界</h1>
          <p>探索生灵的奥秘，感受大自然的心跳。</p>
        </div>
        <div class="hero-icon">🦁</div>
      </div>

      <div class="search-section">
        <SearchBar @search="handleSearch" />
      </div>
      
      <div class="articles-grid">
        <ArticleCard 
          v-for="article in filteredArticles" 
          :key="article.id"  
          :article="article"  
        />
      </div>
      
      <div v-if="filteredArticles.length === 0" class="no-results">
        🍃 没有找到相关文章
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'
import SearchBar from '../components/SearchBar.vue'
import SideNavBar from '../components/SideNavBar.vue' // 引入侧边栏
import MouseTrail from '../components/MouseTrail.vue' // 引入粒子
import animalsArticles from '../card_data/animals.js' // 引入数据

const searchQuery = ref('')
const articles = ref(animalsArticles)

const filteredArticles = computed(() => {
  if (!searchQuery.value) return articles.value
  const query = searchQuery.value.toLowerCase()
  return articles.value.filter(article => 
    article.title.toLowerCase().includes(query) ||
    article.description.toLowerCase().includes(query) ||
    article.tags.some(tag => tag.toLowerCase().includes(query))
  )
})

const handleSearch = (query) => {
  searchQuery.value = query
}
</script>

<style scoped>
/* 布局样式 (与 Home.vue 保持一致) */
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
  overflow-y: auto;
  padding: 0; /* Header 贴边，所以 padding 设为 0 */
  position: relative;
  z-index: 5;
}
.dark .layout-container { background-color: #121212; }

/* Hero Header 样式 */
.hero-header {
  height: 240px;
  border-radius: 0 0 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  margin-bottom: 40px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.hero-text h1 { font-size: 3rem; margin-bottom: 10px; font-weight: 800; }
.hero-text p { font-size: 1.2rem; opacity: 0.9; }

.hero-icon {
  font-size: 10rem;
  opacity: 0.2;
  transform: rotate(-10deg) translateY(20px);
}

/* --- 不同主题配色 (复制到不同页面时只需修改这里) --- */

/* 1. 动物世界配色 (Nature) */
.nature-theme { background: linear-gradient(120deg, #42d392 0%, #3bb2b8 100%); }

/* 2. 旅游攻略配色 (Sky) - 用在 Travel.vue */
.sky-theme { background: linear-gradient(120deg, #38bdf8 0%, #2563eb 100%); }

/* 3. 健康科普配色 (Mint) - 用在 Health.vue */
.mint-theme { background: linear-gradient(120deg, #2dd4bf 0%, #059669 100%); }

/* 4. 休闲娱乐配色 (Party) - 用在 Leisure.vue */
.party-theme { background: linear-gradient(120deg, #f472b6 0%, #db2777 100%); }


/* --- 列表与搜索区域 --- */
.search-section { display: flex; justify-content: center; margin-bottom: 40px; }

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 0 40px 60px; /* 底部留白 */
  max-width: 1400px;
  margin: 0 auto;
}

.no-results { text-align: center; padding: 50px; color: #999; }
</style>