<template>
  <!-- 文章卡片，点击跳转到对应文章详情页 -->
  <div class="article-card" @click="$router.push(`/article/${article.id}`)">
    <div class="article-card1">
      <div class="card-content">
        <!-- 图片 -->
        <div class="image-container">
          <img :src="article.image" :alt="article.title" class="card-image">
        </div>
        <!-- 标签列表 -->
        <div class="card-tags">
          <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <!-- 标题 -->
        <h3 class="card-title">{{ article.title }}</h3>
        <!-- 简述 -->
        <p class="card-desc">{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 定义组件接收的props：文章数据
defineProps({
  article: {
    type: Object,  // 类型为对象
    required: true,  // 必传参数
    default: () => ({  // 默认值（防止未传参时报错）
      id: '',  // 文章唯一标识（对应详情页路由）
      title: '',  // 文章标题
      image: '',  // 封面图路径
      tags: [],  // 标签数组
      description: ''  // 描述文本
      //如果还要添加就在这里写，不要忘了','
    })
  }
})
</script>

<style scoped>
/* 卡片容器样式*/
.article-card {
  box-sizing: border-box;
  max-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  /* 亮色模式默认：红黄暖色调 */
  background-image: linear-gradient(163deg, #ff1900 0%, #ffbc05 100%);
  border: 1px solid #f0f0f0; 
}

/* --- Dark Mode 配色优化 --- */
.dark .article-card {
  /* 暗色模式：改为更有质感的 青-紫 渐变，不再是刺眼的亮绿 */
  background-image: linear-gradient(163deg, #0073ff 0%, #ac3ad5 100%);
  border: none; /* 暗色模式去掉白边框，靠渐变区分 */
}

.article-card1 {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  transition: all .2s;
}

/* 暗色模式：卡片内部背景改为深蓝灰，比纯黑更护眼 */
.dark .article-card1 {
  background-color: #1a1f2e; 
}

.article-card1:hover {
  transform: scale(0.98);
  border-radius: 10px;
}

/* 卡片鼠标悬停效果 */
.article-card:hover {
  transform: translateY(-6px); 
  box-shadow: 0px 0px 30px 1px rgba(255, 123, 0, 0.3);
}

.dark .article-card:hover {
  /* 暗色悬停光晕：匹配新的青蓝色调 */
  box-shadow: 0px 0px 30px 1px rgba(0, 210, 255, 0.3);
}

/* 图片容器：增加顶部圆角和间距 */
.image-container {
  border-radius: 3%;
  width: 100%;
  border: 1px solid #c5c2c2;
}
/* 暗色模式下图片边框调暗 */
.dark .image-container {
  border: 1px solid #333;
}

/* 封面图样式 */
.card-image {
  display: block;
  margin: 6px auto;
  border-radius: 5%;
  width: 91%;
  height: 160px;
  object-fit: cover;
  transition: all 0.5s ease; 
}
.article-card:hover .card-image {
  transform: scale(1.1); /* 悬停时图片微缩放 */
}

/* 卡片容器 */
.card-content {
  padding: 16px;
}

/* 标签样式 */
.card-tags {
  margin-bottom: 0px;
  margin-top: 10px;
}
.tag {
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 6px;
  background-color: #e8f4fd;
  padding: 2px 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #2c9caf;
  transition: all 1000ms;
  font-size: 12px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  outline: 1.5px solid #2c9caf;
}
.tag:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #70bdca;
  box-shadow: 4px 5px 17px -4px #268391;
}

/* 暗色模式标签优化 */
.dark .tag {
  /* 背景变深，与卡片背景融合但有区分 */
  background-color: rgba(44, 156, 175, 0.15); 
  color: #4dd0e1; /* 文字变亮青色 */
  outline: 1.5px solid #4dd0e1;
}
.dark .tag:before {
  /* 悬停时的填充色 */
  background-color: #4dd0e1; 
}
.dark .tag:hover {
  color: #000; /* 悬停后文字变黑以保证对比度 */
  outline: 2px solid #4dd0e1;
  box-shadow: 0 0 10px rgba(77, 208, 225, 0.4);
}

.tag::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #2c9caf;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

.tag:hover::before {
  width: 250%;
}

/* 标题样式 */
.card-title {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  color: #333; /* 亮色默认 */
  display: -webkit-box; 
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s;
}

/* 暗色模式标题 */
.dark .card-title {
  color: #e0e0e0; /* 灰白色，柔和不刺眼 */
}

/* 文本样式 */
.card-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #666; /* 亮色默认 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s;
}

/* 暗色模式描述文本 */
.dark .card-desc {
  color: #a0a0a0; /* 中灰色 */
}
</style>