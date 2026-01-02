<template>
    <nav class="ride-nav" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="brand">
                <span class="icon">🚴</span>
                <span class="text">URBAN<span class="highlight">RIDER</span></span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="link">起点</a>
                <a href="#science" class="link">数据</a>
                <a href="#guide" class="link">新手</a>
                <a href="#routes" class="link">路线</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-overlay"></div>
        <img src="../../assets/image/leisure/leisure-3/ride-hero.jpg" alt="骑行" class="hero-bg">
        
        <div class="hero-content">
            <div class="speed-box">
                <span class="label">CURRENT SPEED</span>
                <span class="val">25.4 <small>km/h</small></span>
            </div>
            <h1 class="main-title">风是自由的<br>你也是</h1>
            <p class="sub-title">逃离城市拥堵，去探索那些汽车无法到达的隐秘角落。</p>
            <a href="#science" class="action-btn">查看骑行收益 ↓</a>
        </div>
    </header>

    <main class="main-container">
        <svg class="track-line" preserveAspectRatio="none">
            <path d="M50,0 Q50,200 80,400 T50,800 T20,1200 T50,1600" 
                  fill="none" stroke="#e0e0e0" stroke-width="4" stroke-dasharray="20,20" />
        </svg>

        <section id="science" class="section-block science-section">
            <div class="section-header">
                <h2>身体数据分析</h2>
                <p>WHY WE RIDE? THE SCIENCE</p>
            </div>

            <div class="dashboard-grid">
                <div class="data-card">
                    <div class="chart-ring green-ring">
                        <span class="icon">🫀</span>
                    </div>
                    <h3>心肺强化</h3>
                    <p>骑行是最佳的有氧运动之一。研究表明，每周骑行30公里可降低50%的心血管疾病风险。</p>
                    <a href="https://baike.baidu.com/item/%E6%9C%89%E6%B0%A7%E8%BF%90%E5%8A%A8" target="_blank" class="data-link">
                        百度百科：有氧运动原理 ↗
                    </a>
                </div>

                <div class="data-card">
                    <div class="chart-ring orange-ring">
                        <span class="icon">🔥</span>
                    </div>
                    <h3>高效燃脂</h3>
                    <p>以20km/h的速度骑行1小时，大约消耗 <strong>500-600千卡</strong> 热量，且对膝盖的冲击力远小于跑步。</p>
                    <a href="https://baike.baidu.com/item/%E5%9F%BA%E7%A1%80%E4%BB%A3%E8%B0%A2" target="_blank" class="data-link">
                        百度百科：基础代谢率 ↗
                    </a>
                </div>

                <div class="data-card">
                    <div class="chart-ring blue-ring">
                        <span class="icon">🧠</span>
                    </div>
                    <h3>多巴胺工厂</h3>
                    <p>户外骑行能刺激大脑分泌内啡肽和多巴胺，是缓解焦虑和压力的天然良药。</p>
                    <a href="https://baike.baidu.com/item/%E5%A4%9A%E5%B7%B4%E8%83%BA" target="_blank" class="data-link">
                        百度百科：多巴胺机制 ↗
                    </a>
                </div>
            </div>
        </section>

        <section id="guide" class="section-block guide-section">
            <div class="section-header">
                <h2>新手装备指南</h2>
                <p>Beginner's Starter Pack</p>
            </div>

            <div class="gear-container">
                <div class="gear-layout">
                    <div class="bike-center">
                        <img src="../../assets/image/leisure/leisure-3/bike-vector.png" alt="骑行装备" class="bike-img">
                    </div>

                    <div class="hotspot point-1" @mouseenter="activeGear=1">
                        <div class="dot"></div>
                        <div class="line"></div>
                        <span class="label">头盔</span>
                    </div>
                    <div class="hotspot point-2" @mouseenter="activeGear=2">
                        <div class="dot"></div>
                        <div class="line"></div>
                        <span class="label">骑行裤</span>
                    </div>
                    <div class="hotspot point-3" @mouseenter="activeGear=3">
                        <div class="dot"></div>
                        <div class="line"></div>
                        <span class="label">补给水壶</span>
                    </div>
                    <div class="hotspot point-4" @mouseenter="activeGear=4">
                        <div class="dot"></div>
                        <div class="line"></div>
                        <span class="label">前后车灯</span>
                    </div>
                    <div class="hotspot point-5" @mouseenter="activeGear=5">
                        <div class="dot"></div>
                        <div class="line"></div>
                        <span class="label">专用手套</span>
                    </div>
                </div>

                <div class="gear-detail-panel">
                    <transition name="fade" mode="out-in">
                        <div :key="activeGear" class="detail-content">
                            <div class="detail-header">
                                <span class="detail-num">0{{ activeGear }}</span>
                                <h3>{{ gears[activeGear-1].name }}</h3>
                            </div>
                            <p class="importance">重要指数：{{ gears[activeGear-1].star }}</p>
                            <p class="desc">{{ gears[activeGear-1].desc }}</p>
                            <div class="tip-box">
                                💡 <strong>老手经验：</strong> {{ gears[activeGear-1].tip }}
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </section>

        <section id="routes" class="section-block route-section">
            <div class="section-header">
                <h2>城市周边 · 秘境探索</h2>
                <p>Featured Routes</p>
            </div>

            <div class="route-list">
                <div class="route-card">
                    <div class="route-img">
                        <img src="../../assets/image/leisure/leisure-3/route-lake.jpg" alt="湖畔线">
                        <div class="badge easy">休闲级</div>
                    </div>
                    <div class="route-info">
                        <h3>🌊 环湖生态绿道</h3>
                        <div class="meta">
                            <span>📏 15km</span>
                            <span>⏱️ 1.5h</span>
                            <span>⛰️ 平路为主</span>
                        </div>
                        <p>适合新手的完美路线。全程铺装路面，沿途有湿地公园和网红咖啡馆。夕阳西下时，湖面波光粼粼，是拍照的绝佳时刻。</p>
                    </div>
                </div>

                <div class="route-card reverse">
                    <div class="route-img">
                        <img src="../../assets/image/leisure/leisure-3/route-mountain.jpg" alt="山路线">
                        <div class="badge hard">挑战级</div>
                    </div>
                    <div class="route-info">
                        <h3>⛰️ 森林氧吧爬坡</h3>
                        <div class="meta">
                            <span>📏 30km</span>
                            <span>⏱️ 3h</span>
                            <span>⛰️ 累计爬升500m</span>
                        </div>
                        <p>进阶选手的试炼场。虽然爬坡过程很痛苦（爆心率），但登顶后俯瞰城市的成就感无与伦比。下坡时请务必控制速度！</p>
                    </div>
                </div>

                <div class="route-card">
                    <div class="route-img">
                        <img src="../../assets/image/leisure/leisure-3/route-city.jpg" alt="城市夜骑">
                        <div class="badge medium">探索级</div>
                    </div>
                    <div class="route-info">
                        <h3>🌃 城市夜巡线</h3>
                        <div class="meta">
                            <span>📏 20km</span>
                            <span>⏱️ 2h</span>
                            <span>⛰️ 城市道路</span>
                        </div>
                        <p>避开白天的喧嚣，感受城市的另一面。穿梭于老城区的胡同与新CBD的霓虹之间，发现那些平时被忽略的烟火气。</p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="ride-footer">
        <p>KEEP RIDING | 只要在路上，就是好天气</p>
    </footer>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const activeGear = ref(1);

const gears = [
    {
        name: '骑行头盔',
        star: '⭐⭐⭐⭐⭐ (保命必备)',
        desc: '这是最重要的装备，没有之一。不要为了发型而放弃安全。',
        tip: '购买时一定要试戴，确认是否夹头，尽量选择带MIPS防撞系统的。'
    },
    {
        name: '骑行裤 (带坐垫)',
        star: '⭐⭐⭐⭐⭐ (屁股救星)',
        desc: '新手最容易放弃的原因是“屁股痛”。骑行裤内置的海绵/硅胶坐垫能极大缓解疼痛。',
        tip: '骑行裤是贴身穿的！里面不要再穿内裤了，否则会摩擦破皮。'
    },
    {
        name: '补给水壶',
        star: '⭐⭐⭐⭐',
        desc: '骑行流汗量巨大，每15-20分钟就需要补水一口。',
        tip: '推荐挤压式水壶，骑行过程中单手就能操作。长途骑行建议带电解质饮料。'
    },
    {
        name: '前后车灯',
        star: '⭐⭐⭐⭐',
        desc: '不仅是照明，更重要的是“被看见”。前灯照路，尾灯警示后车。',
        tip: '即使是白天，开启闪烁模式的日行灯也能提高安全性。'
    },
    {
        name: '专用手套',
        star: '⭐⭐⭐⭐',
        desc: '吸汗防滑，保护手掌和腕关节，长途骑行建议硅胶掌垫款。',
        tip: '不同季节需要选择合适厚度的手套，要遵循“三层穿衣法”原则，内层排汗、中层保暖、外层防风。'
    },
];

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 配色：
   Sky Blue: #87CEEB (主色)
   Asphalt: #34495e (深色背景)
   Energy Yellow: #f1c40f (点缀)
   Grass Green: #2ecc71 (数据)
*/

:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.ride-nav {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.4s ease;
    background: transparent;
}
.ride-nav.scrolled {
    background: #fff;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    height: 4rem;
}
.dark .ride-nav.scrolled { background: #1a1a1a; }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}
.brand { display: flex; align-items: center; gap: 10px; font-weight: 900; font-size: 1.4rem; font-style: italic; }
.brand .text { color: #34495e; }
.brand .highlight { color: #87CEEB; }
.dark .brand .text { color: #fff; }

.nav-links { display: flex; gap: 2rem; }
.link { text-decoration: none; color: #555; font-weight: bold; transition: color 0.3s; font-family: monospace; }
.link:hover { color: #87CEEB; }
.ride-nav.scrolled .link { color: #333; }
.dark .ride-nav.scrolled .link { color: #ddd; }

/* Hero Section */
.hero-section {
    position: relative; height: 90vh; display: flex; align-items: center; justify-content: center;
    background: #000; overflow: hidden;
}
.hero-bg {
    position: absolute; width: 100%; height: 100%; object-fit: cover; opacity: 1;
}
.hero-overlay {
    position: absolute; width: 100%; height: 100%;
    z-index: 1;
    transition-duration: 1s;
}
.dark .hero-overlay{background: linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(52, 73, 94, 0.4) 100%);}
.hero-content {
    position: relative; z-index: 2; text-align: left; color: #fff;
    width: 100%; max-width: 1200px; padding: 0 2rem;
}
.speed-box {
    display: inline-block; background: rgba(0,0,0,0.6); padding: 10px 20px;
    border-left: 4px solid #f1c40f; margin-bottom: 2rem; backdrop-filter: blur(5px);
}
.speed-box .label { display: block; font-size: 0.8rem; color: #aaa; letter-spacing: 2px; }
.speed-box .val { font-size: 2.5rem; font-family: monospace; font-weight: bold; color: #f1c40f; }
.speed-box small { font-size: 1rem; color: #fff; }

.main-title { font-size: 5rem; line-height: 1.1; font-weight: 900; margin: 0; font-style: italic; }
.sub-title { font-size: 1.2rem; margin: 2rem 0; color: #ccc; max-width: 600px; }
.action-btn {
    padding: 1rem 3rem; background: #87CEEB; color: #000; text-decoration: none;
    font-weight: bold; border-radius: 4px; transition: all 0.3s; display: inline-block;
}
.action-btn:hover { background: #fff; transform: skewX(-10deg); }

/* Main Container */
.main-container { position: relative; overflow: hidden; background: #f9f9f9; }
.dark .main-container { background: #121212; }

/* 轨迹线 */
.track-line {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    z-index: 0; pointer-events: none; opacity: 0.3;
}

.section-block { padding: 6rem 2rem; max-width: 1200px; margin: 0 auto; position: relative; z-index: 2; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; color: #34495e; margin-bottom: 0.5rem; font-style: italic; }
.dark .section-header h2 { color: #fff; }
.section-header p { color: #87CEEB; letter-spacing: 2px; font-weight: bold; }

/* 1. 科学数据 (仪表盘) */
.dashboard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.data-card {
    background: #fff; padding: 2rem; border-radius: 16px; text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s;
    border-top: 4px solid transparent;
}
.dark .data-card { background: #1e1e1e; }
.data-card:hover { transform: translateY(-10px); border-top-color: #87CEEB; }

.chart-ring {
    width: 100px; height: 100px; margin: 0 auto 1.5rem; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    border: 8px solid #f0f0f0; position: relative;
}
.dark .chart-ring { border-color: #333; }
.chart-ring::after {
    content: ''; position: absolute; top: -8px; left: -8px; width: 100px; height: 100px;
    border: 8px solid transparent; border-radius: 50%; transform: rotate(-45deg);
}
.green-ring::after { border-top-color: #2ecc71; border-right-color: #2ecc71; }
.orange-ring::after { border-top-color: #e67e22; border-right-color: #e67e22; border-bottom-color: #e67e22; }
.blue-ring::after { border-top-color: #3498db; }

.chart-ring .icon { font-size: 2.5rem; }
.data-card h3 { color: #34495e; margin-bottom: 1rem; }
.dark .data-card h3 { color: #ccc; }
.data-card p { color: #666; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; }
.dark .data-card p { color: #aaa; }
.data-link {
    color: #87CEEB; text-decoration: none; font-size: 0.9rem; border-bottom: 1px dashed #87CEEB;
}

/* 2. 新手装备 (交互图) */
.gear-container {
    display: flex; gap: 4rem; align-items: center;
    background: #fff; padding: 3rem; border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}
.dark .gear-container { background: #1e1e1e; }

.gear-layout { flex: 1; position: relative; height: 400px; display: flex; align-items: center; justify-content: center; }
.bike-img { width: 100%; max-width: 500px; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2)); }
.dark .bike-img { filter: invert(0.8) hue-rotate(180deg); } /* 简单的暗黑适配 */

.hotspot {
    position: absolute; cursor: pointer; display: flex; flex-direction: column; align-items: center;
}
.hotspot .dot {
    width: 15px; height: 15px; background: #f1c40f; border-radius: 50%;
    border: 3px solid #fff; box-shadow: 0 0 0 2px #f1c40f;
    animation: pulse 2s infinite;
}
.hotspot .label {
    margin-top: 5px; background: #34495e; color: #fff; padding: 2px 8px;
    border-radius: 4px; font-size: 0.8rem; opacity: 0; transition: opacity 0.3s;
}
.hotspot:hover .label { opacity: 1; }

/* 热点定位 (根据图片微调) */
.point-1 { top: 10%; left: 65%; } /* 头盔 */
.point-2 { top: 40%; left: 85%; } /* 裤子 */
.point-3 { top: 60%; left: 76%; } /* 水壶 */
.point-4 { top: 43%; left: 18%; } /* 车灯 */
.point-5 { top: 42%; left: 55%; } /* 手套 */

.gear-detail-panel {
    flex: 0.8; background: #f8f9fa; padding: 2rem; border-radius: 12px; height: 350px;
    border-left: 5px solid #87CEEB;
}
.dark .gear-detail-panel { background: #252525; }

.detail-header { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 1rem; }
.detail-num { font-size: 3rem; font-weight: 900; color: rgba(0,0,0,0.05); line-height: 1; }
.dark .detail-num { color: rgba(255,255,255,0.05); }
.detail-header h3 { font-size: 1.8rem; color: #34495e; margin: 0; }
.dark .detail-header h3 { color: #fff; }

.importance { color: #e67e22; font-weight: bold; margin-bottom: 1rem; }
.desc { color: #555; line-height: 1.6; margin-bottom: 1.5rem; }
.dark .desc { color: #ccc; }
.tip-box { background: #e3f2fd; padding: 1rem; border-radius: 8px; color: #2980b9; font-size: 0.9rem; }
.dark .tip-box { background: #1a3a50; color: #87CEEB; }

/* 3. 路线卡片 */
.route-list { display: flex; flex-direction: column; gap: 4rem; }
.route-card {
    display: flex; gap: 3rem; align-items: center;
    background: #fff; padding: 1rem; border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.dark .route-card { background: #1e1e1e; }
.route-card.reverse { flex-direction: row-reverse; }

.route-img { flex: 1; position: relative; border-radius: 15px; overflow: hidden; height: 300px; }
.route-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.route-card:hover .route-img img { transform: scale(1.05); }

.badge {
    position: absolute; top: 15px; left: 15px; padding: 5px 15px; color: #fff;
    font-weight: bold; border-radius: 20px; font-size: 0.9rem;
}
.badge.easy { background: #2ecc71; }
.badge.medium { background: #3498db; }
.badge.hard { background: #e74c3c; }

.route-info { flex: 1; padding: 1rem; }
.route-info h3 { font-size: 1.8rem; color: #34495e; margin-bottom: 1rem; }
.dark .route-info h3 { color: #fff; }
.meta { display: flex; gap: 1.5rem; margin-bottom: 1.5rem; font-family: monospace; color: #888; }
.route-info p { color: #555; line-height: 1.8; text-align: justify; }
.dark .route-info p { color: #bbb; }

.ride-footer { text-align: center; padding: 3rem; background: #34495e; color: #87CEEB; font-weight: bold; letter-spacing: 2px; }

/* 动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(241, 196, 15, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(241, 196, 15, 0); } 100% { box-shadow: 0 0 0 0 rgba(241, 196, 15, 0); } }

@media (max-width: 900px) {
    .gear-container { flex-direction: column; }
    .gear-layout { height: 300px; width: 100%; }
    .route-card, .route-card.reverse { flex-direction: column; }
    .route-img { width: 100%; height: 250px; }
    .main-title { font-size: 3.5rem; }
}
</style>