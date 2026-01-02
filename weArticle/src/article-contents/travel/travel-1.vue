<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="kanji-main">京都</span>
                <span class="kanji-sub">秋の紅葉狩り</span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="nav-link">古都之秋</a>
                <a href="#spots" class="nav-link">红叶名所</a>
                <a href="#illumination" class="nav-link">夜枫拝观</a>
                <a href="#guide" class="nav-link">攻略笔记</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-bg-wrapper" :style="{ transform: `translateY(${scrollY * 0.5}px)` }">
            <img src="../../assets/image/travel/travel-1/bg.png" alt="京都红叶背景" class="hero-bg">
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content">
            <div class="vertical-text-box">
                <h1 class="main-title">千年<br>の<br>赤紅</h1>
                <p class="sub-title">穿梭于古刹与山林之间<br>寻觅那抹最极致的秋色</p>
            </div>
            <div class="scroll-hint">
                <span>SCROLL</span>
                <div class="line"></div>
            </div>
        </div>
    </header>

    <main class="main-container">
        
        <section id="spots" class="section-block">
            <div class="section-header">
                <span class="eng-label">MUST VISIT</span>
                <h2>红叶绝景 · 三选</h2>
                <div class="separator"></div>
            </div>

            <div class="cards-grid">
                <div class="travel-card">
                    <div class="card-img-box">
                        <img src="../../assets/image/travel/travel-1/qinshui.png" alt="清水寺" class="card-img">
                        <div class="card-tag">定番</div>
                    </div>
                    <div class="card-info">
                        <h3>清水寺 (Kiyomizu-dera)</h3>
                        <p class="location">📍 东山区 | 见顷：11月下旬</p>
                        <p class="desc">
                            京都地标。站在“清水的舞台”上眺望，红叶如火海般包围着悬空的木造本堂。建议清晨6点前往，避开恐怖的人潮，独享晨光中的古都。
                        </p>
                    </div>
                </div>

                <div class="travel-card">
                    <div class="card-img-box">
                        <img src="../../assets/image/travel/travel-1/dongfu.png" alt="东福寺" class="card-img">
                        <div class="card-tag">震撼</div>
                    </div>
                    <div class="card-info">
                        <h3>东福寺 (Tofuku-ji)</h3>
                        <p class="location">📍 东山区 | 见顷：11月中旬</p>
                        <p class="desc">
                            拥有京都最壮观的红叶云海。从“通天桥”俯瞰洗玉涧，2000棵枫树交织成色彩的交响乐。这里的红叶被称为“通天红叶”，色彩层次极度丰富。
                        </p>
                    </div>
                </div>

                <div class="travel-card">
                    <div class="card-img-box">
                        <img src="../../assets/image/travel/travel-1/lanshan.png" alt="岚山" class="card-img">
                        <div class="card-tag">浪漫</div>
                    </div>
                    <div class="card-info">
                        <h3>岚山 (Arashiyama)</h3>
                        <p class="location">📍 右京区 | 见顷：11月下旬</p>
                        <p class="desc">
                            搭乘“嵯峨野小火车”穿梭于保津峡的红叶隧道中。下车后漫步渡月桥，山峦的彩林倒映在桂川之上，是属于平安贵族的风雅。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="illumination" class="dark-section">
            <div class="dark-content-wrapper">
                <div class="text-side">
                    <h2 class="gold-title">夜の特別拝観</h2>
                    <p class="lead-text">
                        当夜幕降临，京都展现出另一副面孔。寺院点亮灯光，红叶在幽暗中浮现，如同燃烧的幻境。
                    </p>
                    <ul class="place-list">
                        <li>
                            <strong>永观堂 (Eikan-do)</strong>
                            <span>“红叶的永观堂”。夜枫之王，放生池的倒影美得不真实。</span>
                        </li>
                        <li>
                            <strong>高台寺 (Kodai-ji)</strong>
                            <span>利用现代光影映射枯山水庭园，传统与科技的梦幻结合。</span>
                        </li>
                        <li>
                            <strong>贵船神社 (Kifune)</strong>
                            <span>远离市区的山中神社，灯笼参道与红叶交相辉映，充满灵气。</span>
                        </li>
                    </ul>
                </div>
                <div class="img-side">
                    <img src="../../assets/image/travel/travel-1/yefen.png" alt="夜枫" class="feature-img">
                </div>
            </div>
        </section>

        <section id="guide" class="guide-layout">
            <article class="guide-content">
                <h3>实用攻略笔记</h3>
                
                <div class="note-block">
                    <h4>📅 最佳观赏期 (The Best Timing)</h4>
                    <p>
                        京都市区的红叶通常在<strong>11月20日 - 12月5日</strong>达到全盛（见顷）。
                        <br>北部山区（如贵船、大原）会早一周左右；南部地区（如宇治）则晚一周。
                    </p>
                </div>

                <div class="note-block">
                    <h4>👘 穿衣指南</h4>
                    <p>
                        11月底的京都早晚温差极大（5°C - 15°C）。建议“洋葱式穿搭”：
                        <strong>保暖内衣 + 毛衣 + 风衣/大衣</strong>。
                        <br>⚠️ 重要：许多寺庙需要脱鞋参观，地板极冷，请务必穿<strong>厚袜子</strong>！
                    </p>
                </div>

                <div class="note-block warning">
                    <h4>🚌 交通避坑</h4>
                    <p>
                        红叶季的京都市巴士是“灾难级”拥堵。
                        <br><strong>请尽量利用地铁和电车 (JR/京阪/阪急)</strong>。去清水寺如果坐巴士可能堵在东大路通一小时，不如坐京阪电车到“清水五条”站走过去。
                    </p>
                </div>
            </article>

            <aside class="sticky-sidebar">
                <div class="info-widget">
                    <h4>美食推荐</h4>
                    <div class="food-item">
                        <span class="icon">🍵</span>
                        <span class="text">宇治抹茶巴菲</span>
                    </div>
                    <div class="food-item">
                        <span class="icon">🍲</span>
                        <span class="text">南禅寺·汤豆腐</span>
                    </div>
                    <div class="food-item">
                        <span class="icon">🍁</span>
                        <span class="text">红叶天妇罗 (箕面名物)</span>
                    </div>
                </div>
            </aside>
        </section>

    </main>

    <footer class="kyoto-footer">
        <p>Copyright © 2025 京都旅人 | Student Project</p>
    </footer>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const scrollY = ref(0);

// 性能优化的滚动监听
let ticking = false;

const handleScroll = () => {
    scrollY.value = window.scrollY; // 用于视差滚动
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            isScrolled.value = window.scrollY > 50;
            ticking = false;
        });
        ticking = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 配色系统 (Color Palette)
    主色调 (Akabeni): #cb4042 (深红)
    点缀色 (Kitsune): #d99058 (狐狸黄/金)
    背景色 (Washi): #fcfaf2 (和纸白)
    文字色 (Sumi): #2b2b2b (墨黑)
    深色模式背景: #1a0c0c (黑红)
*/

/* 全局滚动行为 */
:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.nav-container {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000;
    transition: all 0.4s ease;
    background: rgba(255, 255, 255, 0); /* 初始全透明 */
    color: #fff; /* 初始文字白色 */
}

.nav-container.scrolled {
    background: rgba(252, 250, 242, 0.9); /* 滚动变和纸白 */
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    height: 4.5rem;
    color: #2b2b2b; /* 滚动变墨黑 */
}
/* 深色模式下的导航 */
.dark .nav-container.scrolled {
    background: rgba(20, 10, 10, 0.9);
    color: #e0e0e0;
}

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}

.nav-title {
    font-family: "Songti SC", "SimSun", serif; /* 宋体更有韵味 */
    display: flex; flex-direction: column; line-height: 1;
}
.kanji-main { font-size: 1.8rem; font-weight: bold; letter-spacing: 0.2rem; }
.kanji-sub { font-size: 0.8rem; letter-spacing: 0.1rem; opacity: 0.8; margin-top: 3px; }

.nav-links { display: flex; gap: 2rem; }
.nav-link {
    text-decoration: none; color: inherit; font-size: 1rem; font-weight: 500;
    position: relative; transition: color 0.3s;
}
.nav-link::after {
    content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px;
    background-color: #cb4042; transition: width 0.3s;
}
.nav-link:hover { color: #cb4042; }
.nav-link:hover::after { width: 100%; }

/* Hero Section */
.hero-section {
    position: relative; height: 100vh; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
}
.hero-bg-wrapper {
    position: absolute; top: -10%; left: 0; width: 100%; height: 120%; /* 放大一点给视差留空间 */
    z-index: 1; will-change: transform;
}
.hero-bg {
    width: 100%; height: 100%; object-fit: cover;
}
.hero-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.3); z-index: 2;
}

.hero-content {
    position: relative; z-index: 3; color: #fff;
    display: flex; flex-direction: column; align-items: center;
}

.vertical-text-box {
    writing-mode: vertical-rl; /* 竖排文字核心代码 */
    text-orientation: upright;
    background: rgba(168, 36, 36, 0.75); /* 半透明红底 */
    padding: 3rem 1.5rem;
    border: 1px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.main-title {
    font-size: 3.5rem; letter-spacing: 0.5rem; margin: 0 0 0 1rem;
    font-family: "Songti SC", serif;
}
.sub-title {
    font-size: 1.1rem; letter-spacing: 0.3rem; opacity: 0.9; margin: 0;
    line-height: 2;
}

.scroll-hint {
    position: absolute; bottom: 25px; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    opacity: 0.8; animation: bounce 2s infinite;
}
.scroll-hint .line { width: 1px; height: 40px; background: #fff; }

/* 主要内容容器 */
.main-container {
    background-color: #fcfaf2; /* 和纸白背景 */
    position: relative; z-index: 10;
}
.dark .main-container { background-color: #1a1a1a; }

/* 通用章节样式 */
.section-block {
    max-width: 1200px; margin: 0 auto; padding: 6rem 2rem;
}

.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 {
    font-size: 2.2rem; color: #2b2b2b; margin: 0.5rem 0;
    font-family: "Songti SC", serif;
}
.dark .section-header h2 { color: #e0e0e0; }
.eng-label { color: #cb4042; font-size: 0.8rem; letter-spacing: 2px; font-weight: bold; }
.separator { width: 40px; height: 3px; background: #d99058; margin: 1rem auto; }

/* 卡片网格 */
.cards-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.travel-card {
    background: #fff; border-radius: 8px; overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: default;
}
.dark .travel-card { background: #2c2c2c; }

.travel-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(203, 64, 66, 0.15); /* 红色阴影 */
}

.card-img-box { position: relative; height: 220px; overflow: hidden; }
.card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.travel-card:hover .card-img { transform: scale(1.1); }
.card-tag {
    position: absolute; top: 10px; right: 10px;
    background: #cb4042; color: #fff; padding: 4px 10px;
    font-size: 0.8rem; border-radius: 2px;
}

.card-info { padding: 1.5rem; }
.card-info h3 { margin: 0 0 0.5rem 0; font-size: 1.3rem; color: #2b2b2b; }
.card-info .location { font-size: 0.85rem; color: #888; margin-bottom: 1rem; }
.card-info .desc { font-size: 0.95rem; color: #555; line-height: 1.6; text-align: justify; }

.dark .card-info h3 { color: #eee; }
.dark .card-info .desc { color: #bbb; }

/* 夜枫深色区域 */
.dark-section {
    background-color: #1a0c0c; color: #e0e0e0;
    padding: 6rem 2rem; margin-top: 4rem;
}
.dark-content-wrapper {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; gap: 4rem;
}

.gold-title { color: #d99058; font-size: 2.5rem; margin-bottom: 2rem; font-family: serif; }
.place-list { list-style: none; padding: 0; margin-top: 2rem; }
.place-list li { margin-bottom: 1.5rem; border-left: 2px solid #cb4042; padding-left: 1rem; }
.place-list strong { display: block; font-size: 1.2rem; color: #fff; margin-bottom: 0.3rem; }
.place-list span { color: #999; font-size: 0.95rem; }

.img-side { flex: 1; }
.feature-img { width: 100%; border-radius: 4px; border: 1px solid #333; }

/* 攻略侧边栏布局 */
.guide-layout {
    max-width: 1000px; margin: 6rem auto; padding: 0 2rem;
    display: flex; gap: 4rem;
}
.guide-content { flex: 2; }
.sticky-sidebar { flex: 1; }

.guide-content h3 { font-size: 1.8rem; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
.dark .guide-content h3 { border-color: #333; color: #e0e0e0; }

.note-block { margin-bottom: 2.5rem; }
.note-block h4 { color: #cb4042; font-size: 1.2rem; margin-bottom: 0.8rem; }
.note-block.warning h4 { color: #e67e22; }

/* 侧边小部件 */
.info-widget {
    background: #fff; padding: 1.5rem; border-radius: 8px;
    border: 1px solid #eee; position: sticky; top: 7rem;
}
.dark .info-widget { background: #2c2c2c; border-color: #333; }
.dark .info-widget h4 { color: #e0e0e0; }

.food-item {
    display: flex; align-items: center; gap: 1rem;
    padding: 0.8rem 0; border-bottom: 1px dashed #eee;
}
.dark .food-item { border-color: #444; color: #bbb; }
.icon { font-size: 1.5rem; }

.kyoto-footer {
    text-align: center; padding: 3rem;
    background: #2b2b2b; color: #888;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .dark-content-wrapper { flex-direction: column; }
    .guide-layout { flex-direction: column; }
    .sticky-sidebar { display: none; }
    .hero-bg-wrapper { height: 100%; }
    .main-title { font-size: 2.5rem; }
}

@keyframes bounce {
    0%, 100% { transform: translate(-50%, 0); }
    50% { transform: translate(-50%, 10px); }
}
</style>