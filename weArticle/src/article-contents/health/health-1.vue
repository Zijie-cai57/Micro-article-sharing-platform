<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="nankai-logo">❖</span>
                <span class="brand-text">NKU</span>
                <span class="health-text">HEALTH</span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="nav-link">夜读</a>
                <a href="#card-desk" class="nav-link">锦囊</a>
                <a href="#diet" class="nav-link">食补</a>
                <a href="#sleep" class="nav-link">补觉</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-overlay"></div>
        
        <div class="carousel-container">
            <img src="../../assets/image/health/health-1/nankai-night1.jpg" 
                 alt="南开夜景1" 
                 class="hero-bg" 
                 :class="{ 'active': currentBgIndex === 0 }">
            <img src="../../assets/image/health/health-1/nankai-night2.jpg" 
                 alt="南开夜景2" 
                 class="hero-bg" 
                 :class="{ 'active': currentBgIndex === 1 }">
            <img src="../../assets/image/health/health-1/nankai-night3.jpg" 
                 alt="南开夜景3" 
                 class="hero-bg" 
                 :class="{ 'active': currentBgIndex === 2 }">
        </div>
        
        <div class="hero-content">
            <p class="motto">允公允能 · 日新月异</p>
            <h1 class="main-title">致敬每一个<br>不眠的<span class="highlight">灵魂</span></h1>
            <p class="sub-title">DDL在前，期末考试在后，任务繁重，通宵难免。但请记得，身体是革命的本钱。<br>这里有一份专属于你的“回血指南”。</p>
            <a href="#card-desk" class="action-btn">获取修复方案</a>
        </div>
    </header>

    <main class="main-container">
        
        <section id="card-desk" class="section-block desk-section">
            <div class="section-header">
                <h2>熬夜急救锦囊</h2>
                <p>Post-All-Nighter Survival Kit</p>
            </div>

            <div class="desk-surface">
                <div class="card-spread-area">
                    <p v-if="drawnCount === 0" class="empty-hint">点击抽取按钮<br>抽取今日修复建议</p>
                </div>

                <div class="card-holder">
                    <div class="holder-label">TIPS DECK</div>
                    <div class="holder-base"></div>
                </div>

                <div v-for="(card, index) in tipsCards" 
                     :key="card.id"
                     class="repair-card"
                     :class="getCardClass(index)"
                     :style="getCardStyle(index)">
                    
                    <div class="card-face">
                        <div class="card-icon">{{ card.icon }}</div>
                        <h4>{{ card.title }}</h4>
                        <p>{{ card.desc }}</p>
                        <span class="card-num">NO.0{{ index + 1 }}</span>
                    </div>
                    <div class="card-back">
                        <span class="logo">NKU</span>
                    </div>
                </div>

                <button class="draw-btn" 
                        :class="{ 'reset-mode': isDeckEmpty }"
                        @click="handleCardAction">
                    {{ isDeckEmpty ? '↺ 收纳整理' : '抽取建议 →' }}
                </button>
            </div>
        </section>

        <section class="content-layout">
            <article class="article-body">
                
                <div class="intro-block">
                    <p class="lead">
                        在八里台的图书馆，在津南的自习室，灯光往往彻夜长明。我们不提倡熬夜，但我们理解大学生面对期末周和项目的压力。既然熬夜已经发生，与其焦虑，不如科学修复。
                    </p>
                </div>

                <div class="divider-lotus">❖</div>

                <section id="diet" class="text-block">
                    <h3 class="nankai-title">一、饮食调理：拒绝油腻</h3>
                    <p>熬夜后的身体处于“内炎”状态，肠胃功能减弱。此时最忌讳的是<strong>高糖高油</strong>的“安慰性进食”（比如炸鸡和奶茶）。</p>
                    
                    <div class="info-grid">
                        <div class="grid-box">
                            <h4>✅ 推荐清单</h4>
                            <ul>
                                <li><strong>早餐：</strong>优质蛋白（水煮蛋/豆浆）+ 杂粮粥。</li>
                                <li><strong>午餐：</strong>深色蔬菜（西兰花/菠菜）补充B族维生素。</li>
                                <li><strong>饮品：</strong>大量温水、菊花茶或枸杞水。</li>
                            </ul>
                        </div>
                        <div class="grid-box warning">
                            <h4>❌ 避雷清单</h4>
                            <ul>
                                <li><strong>咖啡：</strong>下午2点后禁止摄入，防止透支。</li>
                                <li><strong>甜食：</strong>会加剧皮肤糖化和疲劳感。</li>
                                <li><strong>重口味：</strong>加重肝脏代谢负担。</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="sleep" class="text-block">
                    <h3 class="nankai-title">二、补觉策略：R90法则</h3>
                    <p>熬夜后直接睡一天是错误的，这会打乱生物钟，导致“周一综合症”。请参考<strong>R90睡眠周期理论</strong>：</p>
                    
                    <div class="step-process">
                        <div class="step">
                            <span class="step-num">01</span>
                            <strong>午睡回血</strong>
                            <p>次日中午进行20分钟（小憩）或90分钟（完整周期）的睡眠。</p>
                        </div>
                        <div class="step">
                            <span class="step-num">02</span>
                            <strong>早睡早起</strong>
                            <p>次日晚上提前1-1.5小时入睡，不要为了“补昨晚的觉”而睡到第二天中午。</p>
                        </div>
                        <div class="step">
                            <span class="step-num">03</span>
                            <strong>见光死？</strong>
                            <p>不！醒来后必须接触阳光，抑制褪黑素，重启生物钟。</p>
                        </div>
                    </div>
                </section>

            </article>

            <aside class="sidebar">
                <div class="sidebar-widget quote-widget">
                    <h4>日新月异</h4>
                    <p>每天都是新的开始。偶尔的熬夜定义不了你的健康，但长期的习惯可以。</p>
                </div>

                <div class="sidebar-widget stats-widget">
                    <h4>身体数据</h4>
                    <div class="stat-row">
                        <span>熬夜水分流失</span>
                        <span class="val">~500ml</span>
                    </div>
                    <div class="stat-row">
                        <span>代谢率下降</span>
                        <span class="val">15%</span>
                    </div>
                    <div class="stat-row">
                        <span>注意力恢复需</span>
                        <span class="val">2 Days</span>
                    </div>
                </div>
            </aside>
        </section>

    </main>

    <footer class="nankai-footer">
        <p>Copyright © 2025 NKU Health | 关注大学生健康</p>
    </footer>
</template>


<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, onMounted, computed, onUnmounted } from 'vue';

const isScrolled = ref(false);
const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

// --- 卡片数据 ---
const tipsCards = ref([
    { id: 1, title: '起床一杯水', desc: '醒来第一件事喝300ml温水，这是重启身体系统的开关。', icon: '💧' },
    { id: 2, title: 'B族维生素', desc: '早餐后补充一片复合VB，修复受损的神经系统。', icon: '💊' },
    { id: 3, title: '拒绝高碳水', desc: '午餐少吃米面，防止血糖飙升导致的午后昏睡。', icon: '🥦' },
    { id: 4, title: '20分钟小憩', desc: '不要睡太久！20分钟Power Nap足够恢复精力。', icon: '⚡' },
    { id: 5, title: '急救面膜', desc: '熬夜脸蜡黄？一片补水面膜比粉底管用。', icon: '🧖' },
    { id: 6, title: '晒晒太阳', desc: '去户外走走，阳光是调节褪黑素的唯一解药。', icon: '☀️' },
]);

const drawnCount = ref(0);
const isDeckEmpty = computed(() => drawnCount.value >= tipsCards.value.length);

const handleCardAction = () => {
    if (isDeckEmpty.value) {
        drawnCount.value = 0;
    } else {
        drawnCount.value++;
    }
};

const getCardClass = (index) => {
    return index < drawnCount.value ? 'on-table' : 'in-deck';
};

// 预设桌面散落位置
const cardStyles = [
    { left: '3%', rotate: '-5deg', zIndex: 1 },
    { left: '15%', rotate: '3deg',  zIndex: 2 },
    { left: '27%', rotate: '-2deg', zIndex: 3 },
    { left: '39%', rotate: '4deg',  zIndex: 4 },
    { left: '51%', rotate: '-3deg', zIndex: 5 },
    { left: '63%', rotate: '2deg',  zIndex: 6 },
];

const getCardStyle = (index) => {
    const style = cardStyles[index] || { left: '0', rotate: '0' };
    const totalCards = tipsCards.value.length;
    
    // 状态A: 在桌面上 (On Table)
    if (index < drawnCount.value) {
        return {
            '--target-left': style.left,
            '--target-rotate': style.rotate,
            'zIndex': style.zIndex,
            'marginTop': index % 2 === 0 ? '0px' : '15px' 
        };
    } 
    // 状态B: 在卡片夹里 (In Deck)
    else {
        // 反向索引：第一张在最上面
        const reverseIndex = totalCards - index; 
        
        // 计算堆叠偏移：现在是第几张待发卡片 (0, 1, 2...)
        const stackPosition = index - drawnCount.value;
        
        // 核心修改：加大偏移量 (6px)，让厚度更明显
        const offset = stackPosition * 6; 
        
        return {
            'zIndex': reverseIndex,
            // 增加位移和微小的旋转，模拟不完美的堆叠
            'transform': `translateX(${offset}px) translateY(${offset}px) rotate(${stackPosition * 0.5}deg)`,
            // 核心修改：亮度层级，越下面的卡片越暗 (95%, 90%...)，制造光影层次
            'filter': `brightness(${100 - stackPosition * 5}%)`
        };
    }
}
const currentBgIndex = ref(0); // 当前显示的图片索引 (0, 1, 2)
let carouselInterval = null;

const startCarousel = () => {
    // 每 5 秒切换一次
    carouselInterval = setInterval(() => {
        // (0+1)%3=1, (1+1)%3=2, (2+1)%3=0 -> 循环切换
        currentBgIndex.value = (currentBgIndex.value + 1) % 3;
    }, 3000);
};


onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    document.documentElement.style.setProperty('--primary-purple', '#701e5e');
    
    // 启动轮播
    startCarousel();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    // 销毁定时器，防止内存泄漏
    if (carouselInterval) clearInterval(carouselInterval);
});
</script>

<style scoped>
/* 配色系统 */
:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.nav-container {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.4s ease;
    background: rgba(112, 30, 94, 0);
}
.nav-container.scrolled {
    background: rgba(112, 30, 94, 0.95);
    backdrop-filter: blur(10px);
    height: 4.5rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.dark .nav-container.scrolled { background: rgba(40, 10, 35, 0.95); }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}
.nav-title { display: flex; align-items: center; gap: 8px; color: #701e5e; }
.nav-container.scrolled .nav-title { color: #fff; }
.nankai-logo { font-size: 1.8rem; }
.brand-text { font-weight: 800; font-size: 1.2rem; letter-spacing: 1px; }
.health-text { font-weight: 300; font-size: 1.2rem; opacity: 0.8; }

.nav-links { display: flex; gap: 2rem; }
.nav-link { text-decoration: none; color: #555; font-weight: 500; transition: color 0.3s; }
.nav-link:hover { color: #701e5e; }
.nav-container.scrolled .nav-link { color: rgba(255,255,255,0.8); }
.nav-container.scrolled .nav-link:hover { color: #fff; }

/* Hero Section 容器保持不变 */
.hero-section {
    position: relative; height: 90vh; display: flex; align-items: center; justify-content: center;
    overflow: hidden;
}

/* --- 修改：背景图样式 --- */
.hero-bg {
    position: absolute; 
    top: 0; left: 0; width: 100%; height: 100%; 
    object-fit: cover;
    
    /* 核心动画逻辑 */
    opacity: 0; /* 默认隐藏 */
    transition: opacity 1.5s ease-in-out; /* 1.5秒的淡入淡出效果 */
    z-index: 0;
    transform: scale(1.05); /* 稍微放大一点，防止淡入淡出时露底 */
}

/* 当添加了 active 类名时，图片显示 */
.hero-bg.active {
    opacity: 1;
    z-index: 1;
}

/* 遮罩层必须在图片上面 (z-index: 2) */
.hero-overlay {
    position: absolute; width: 100%; height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(112,30,94,0.4) 100%);
    z-index: 2; /* 确保盖住所有图片 */
}

/* 内容层必须在最上面 (z-index: 3) */
.hero-content {
    position: relative; z-index: 3; text-align: center; color: #fff;
    max-width: 800px; text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

/* ... 其他样式保持不变 ... */
.motto { font-size: 1.2rem; letter-spacing: 5px; margin-bottom: 1rem; opacity: 0.9; }
.main-title { font-size: 4.5rem; font-weight: 700; margin-bottom: 2rem; font-family: serif; }
.highlight { color: #e0c3fc; font-style: italic; }
.sub-title { font-size: 1.1rem; line-height: 1.8; margin-bottom: 3rem; color: #f0f0f0; }
.action-btn {
    display: inline-block; padding: 1rem 3rem; background: #701e5e; color: #fff;
    text-decoration: none; border-radius: 50px; border: 1px solid rgba(255,255,255,0.3);
    transition: all 0.3s;
}
.action-btn:hover { background: #fff; color: #701e5e; transform: translateY(-3px); }

/* --- 桌面卡片交互区 (Desk Section) --- */
.desk-section { background: #f9f7f2; padding: 6rem 0 4rem; overflow: hidden; }
.dark .desk-section { background: #1a1a1a; }
.section-header { text-align: center; margin-bottom: 3rem; }
.section-header h2 { font-size: 2.5rem; color: #701e5e; margin-bottom: 0.5rem; font-family: serif; }
.dark .section-header h2 { color: #cba3d6; }
.section-header p { color: #888; letter-spacing: 1px; }

/* 桌面表面 */
.desk-surface {
    position: relative; width: 100%; height: 550px;
    max-width: 1400px; margin: 0 auto;
    background: #e6e0d4; border-radius: 20px;
    box-shadow: inset 0 0 50px rgba(0,0,0,0.05);
    display: flex; overflow: hidden;
}
.dark .desk-surface { background: #2d2a26; }

.card-spread-area { flex: 1; position: relative; display: flex; align-items: center; justify-content: center; }
.empty-hint {
    color: #a8a090; font-size: 1.2rem; text-align: center;
    border: 2px dashed #ccc; padding: 2rem; border-radius: 10px;
}

.card-holder {
    width: 250px; height: 100%; background: rgba(0,0,0,0.05);
    border-left: 2px solid rgba(0,0,0,0.1);
    position: relative; display: flex; justify-content: center; align-items: center; z-index: 0;
}
.holder-label { position: absolute; top: 20px; font-weight: bold; color: #aaa; letter-spacing: 2px; }
.holder-base { width: 160px; height: 240px; border: 2px dashed #ccc; border-radius: 10px; }

/* 3. 卡片实体 */
.repair-card {
    position: absolute; width: 160px; height: 240px; perspective: 1000px;
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-face, .card-back {
    position: absolute; width: 100%; height: 100%; border-radius: 12px;
    backface-visibility: hidden;
    /* 基础阴影 */
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; padding: 15px; 
}

.card-face { 
    background: #fff; color: #333; z-index: 2; transform: rotateY(0deg); 
    border: 1px solid rgba(0,0,0,0.05);
}
.dark .card-face { background: #333; color: #eee; }

.card-back {
    background: #701e5e; color: #fff; transform: rotateY(180deg);
    background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px);
    
    /* --- 核心修改：堆叠效果增强 --- */
    /* 1. 3px 纯白实线边框，强行分割卡片视觉粘连 */
    border: 3px solid #ffffff; 
    /* 2. 内部微阴影，增加立体感 */
    box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
    box-sizing: border-box;
}
.logo { font-size: 2rem; font-family: serif; font-weight: bold; border: 2px solid #fff; padding: 5px 15px; }

.card-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.card-face h4 { margin: 0 0 10px 0; color: #701e5e; font-size: 1.1rem; }
.dark .card-face h4 { color: #cba3d6; }
.card-face p { font-size: 0.8rem; color: #666; line-height: 1.4; }
.dark .card-face p { color: #aaa; }
.card-num { margin-top: auto; font-size: 0.7rem; color: #999; font-family: monospace; letter-spacing: 1px; }

/* --- 状态控制核心 CSS (位置修正版) --- */

/* 状态 A: 在卡片夹里 (In Deck) */
.in-deck {
    /* 核心修改：位置大幅上提至 38%，完全避开底部按钮 */
    top: 45%; 
    right: 55px;
    margin-top: -120px; /* 自身高度一半的负边距，用于居中修正 */
}
.in-deck .card-face { transform: rotateY(180deg); } 
.in-deck .card-back { transform: rotateY(0deg); }

/* 状态 B: 在桌面上 (On Table) */
.on-table {
    /* 核心修改：位置同样上提至 38% */
    top: 30%;
    right: auto; left: var(--target-left);
    margin-top: -120px;
    transform: rotate(var(--target-rotate)) !important;
}
.on-table .card-face { transform: rotateY(0deg); }
.on-table .card-back { transform: rotateY(-180deg); }

/* 按钮 */
.draw-btn {
    position: absolute; 
    bottom: 40px; /* 距离底部 40px，确保不被卡片挡住 */
    right: 70px;
    padding: 12px 30px; background: #701e5e; color: #fff; border: none; border-radius: 50px;
    font-size: 1rem; cursor: pointer; box-shadow: 0 5px 15px rgba(112, 30, 94, 0.3);
    transition: all 0.3s; z-index: 100;
}
.draw-btn:hover { transform: scale(1.05); background: #882472; }
.draw-btn.reset-mode { background: #fff; color: #701e5e; border: 2px solid #701e5e; }

/* --- 正文与侧边栏 --- */
.content-layout {
    max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; display: flex; gap: 4rem;
}
.article-body { flex: 2; }
.intro-block { font-size: 1.1rem; line-height: 1.8; color: #555; margin-bottom: 3rem; }
.dark .intro-block { color: #bbb; }
.divider-lotus { text-align: center; color: #701e5e; font-size: 2rem; margin: 3rem 0; opacity: 0.5; }
.nankai-title {
    color: #701e5e; font-size: 1.8rem; margin-bottom: 1.5rem;
    padding-bottom: 10px; border-bottom: 2px solid rgba(112, 30, 94, 0.1);
}
.dark .nankai-title { color: #cba3d6; border-color: rgba(255,255,255,0.1); }
.text-block p { line-height: 1.8; color: #444; margin-bottom: 1.5rem; }
.dark .text-block p { color: #ccc; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
.grid-box { background: #fff; padding: 2rem; border-radius: 10px; border: 1px solid #eee; }
.dark .grid-box { background: #222; border-color: #333; }
.grid-box h4 { margin-top: 0; color: #2ecc71; }
.grid-box.warning h4 { color: #e74c3c; }
.grid-box ul { padding-left: 1.2rem; margin-bottom: 0; }
.grid-box li { margin-bottom: 0.5rem; color: #666; font-size: 0.95rem; }
.dark .grid-box li { color: #aaa; }
.step-process { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem; }
.step {
    display: flex; align-items: flex-start; gap: 1.5rem; background: #fdfbf7; padding: 1.5rem; border-radius: 8px;
}
.dark .step { background: #222; }
.step-num { font-size: 2rem; font-weight: bold; color: rgba(112, 30, 94, 0.2); line-height: 1; }
.step strong { display: block; margin-bottom: 0.5rem; color: #333; font-size: 1.1rem; }
.dark .step strong { color: #eee; }
.step p { margin: 0; font-size: 0.95rem; }

.sidebar { flex: 1; }
.sidebar-widget { background: #fff; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; border: 1px solid #eee; }
.dark .sidebar-widget { background: #222; border-color: #333; }
.quote-widget { border-left: 5px solid #701e5e; }
.quote-widget h4 { color: #701e5e; margin-top: 0; }
.quote-widget p { font-style: italic; color: #666; margin-bottom: 0; }
.stats-widget h4 { margin-top: 0; margin-bottom: 1.5rem; }
.stat-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #eee; font-size: 0.9rem; }
.dark .stat-row { border-color: #444; color: #bbb; }
.stat-row .val { font-weight: bold; color: #701e5e; }
.dark .stat-row .val { color: #cba3d6; }
.nankai-footer { background: #701e5e; color: #fff; text-align: center; padding: 3rem; }
.dark .nankai-footer { background: #4a0e3d; }

/* 移动端适配 */
@media (max-width: 900px) {
    .content-layout { flex-direction: column; }
    .sidebar { order: -1; }
    .desk-section { height: auto; padding-top: 4rem; }
    .desk-surface { flex-direction: column-reverse; height: 600px; }
    .card-spread-area { height: 65%; width: 100%; }
    .card-holder { width: 100%; height: 35%; border-left: none; border-top: 2px solid #ccc; background: rgba(0,0,0,0.02); }
    
    .in-deck { 
        top: auto !important;
        bottom: 80px; 
        right: 50%; 
        margin-right: -80px; 
        margin-top: 0;
    }
    
    .on-table { 
        top: 35% !important; 
        left: 50% !important; 
        margin-left: -80px; 
        margin-top: 0;
        transform: rotate(var(--target-rotate)) scale(0.9) !important;
    }
    
    .draw-btn { bottom: 20px; right: 20px; padding: 8px 20px; font-size: 0.9rem; }
    .holder-label { top: 10px; font-size: 0.8rem; }
}
</style>