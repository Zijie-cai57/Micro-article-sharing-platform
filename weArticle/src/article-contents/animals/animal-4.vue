<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="icon">🐫</span>
                <span class="brand-text">DESERT</span>
                <span class="sub-text">LEGEND</span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="nav-link">沙海启程</a>
                <a href="#anatomy" class="nav-link">生存构造</a>
                <a href="#history" class="nav-link">文明伴侣</a>
                <a href="#myth" class="nav-link">迷思破解</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-overlay"></div>
        <img src="../../assets/image/animal/animal-4/camel-hero.jpg" alt="沙漠之舟" class="hero-bg">
        
        <div class="hump-silhouette"></div>

        <div class="hero-content">
            <h1 class="main-title">沙漠中的<br><span class="sand-text">忍耐大师</span></h1>
            <p class="sub-title">它背负着两座山峰，丈量着地球上最贫瘠的土地。<br>探索进化的奇迹——骆驼。</p>
            <a href="#anatomy" class="action-btn">揭秘身体构造 ↓</a>
        </div>
    </header>

    <main class="main-container">
        
        <div class="sand-dune-bg"></div>

        <section id="anatomy" class="section-block anatomy-section">
            <div class="section-header">
                <h2>生而为荒漠</h2>
                <p>Designed for the Extreme</p>
            </div>

            <div class="anatomy-grid">
                <div class="feature-card">
                    <div class="card-icon">⛰️</div>
                    <h3>能量仓库：驼峰</h3>
                    <p>驼峰里存的<strong>不是水</strong>，而是<strong>脂肪</strong>。当食物匮乏时，骆驼分解这些脂肪提供能量和代谢水。这种集中储存脂肪的方式，避免了脂肪分布全身导致散热困难。</p>
                </div>

                <div class="feature-card">
                    <div class="card-icon">🐾</div>
                    <h3>沙漠雪鞋：肉垫</h3>
                    <p>它们的脚掌宽大且扁平，像穿了雪鞋一样，能分散体重，防止陷入松软的沙子中。脚底厚厚的角质层还能隔绝滚烫沙粒的热量（沙面温度可达70℃）。</p>
                </div>

                <div class="feature-card">
                    <div class="card-icon">👁️</div>
                    <h3>防沙面罩：五官</h3>
                    <p>双层长睫毛像两把刷子阻挡风沙；鼻孔由肌肉控制，可以自由闭合，彻底将沙尘暴拒之门外。第三眼睑（瞬膜）还能像雨刮器一样清洁眼球。</p>
                </div>
            </div>
        </section>

        <section id="history" class="section-block history-section">
            <div class="content-wrapper">
                <div class="text-side">
                    <h3 class="silk-road-title">文明的承载者</h3>
                    <p class="drop-cap">
                        如果说马是草原的翅膀，那么骆驼就是沙漠的方舟。在长达两千年的时间里，骆驼是连接东西方文明的唯一纽带。
                    </p>
                    <p>
                        在古丝绸之路上，双峰驼驮着中国的丝绸、瓷器，换回西域的香料与宝石。它们不仅是交通工具，更是游牧民族的生命线——驼奶解渴，驼毛御寒，驼粪生火。没有骆驼，人类文明或许无法跨越那片死亡之海。
                    </p>
                    <div class="quote-box">
                        <p>"驼铃声声，穿越千年的风沙，连接起世界的两端。"</p>
                    </div>
                </div>
                <div class="img-side">
                    <div class="frame-decoration">
                        <img src="../../assets/image/animal/animal-4/silk-road.jpg" alt="丝绸之路" class="history-img">
                        <span class="img-caption">唐三彩 · 载乐骆驼俑</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="myth" class="section-block myth-section">
            <div class="section-header">
                <h2>关于骆驼的误解</h2>
                <p>Myth vs Reality</p>
            </div>

            <div class="myth-grid">
                <div class="myth-card">
                    <div class="myth-header wrong">
                        <span class="mark">❌</span>
                        <h4>误区：驼峰里装满了水</h4>
                    </div>
                    <div class="myth-body">
                        <p>这是最经典的误解。切开驼峰，你只会看到白花花的<strong>脂肪</strong>。</p>
                    </div>
                    <div class="myth-footer correct">
                        <span class="mark">✅</span>
                        <p><strong>真相：</strong>水藏在<strong>血液</strong>里。红细胞吸水后可膨胀240%而不破裂。</p>
                    </div>
                </div>

                <div class="myth-card">
                    <div class="myth-header wrong">
                        <span class="mark">❌</span>
                        <h4>误区：骆驼只怕热不怕冷</h4>
                    </div>
                    <div class="myth-body">
                        <p>很多人认为骆驼只生活在炎热的撒哈拉沙漠。</p>
                    </div>
                    <div class="myth-footer correct">
                        <span class="mark">✅</span>
                        <p><strong>真相：</strong>亚洲的<strong>双峰驼</strong>生活在戈壁，能抵御 -40℃ 的严寒。</p>
                    </div>
                </div>

                <div class="myth-card">
                    <div class="myth-header wrong">
                        <span class="mark">❌</span>
                        <h4>误区：骆驼喜欢吐口水</h4>
                    </div>
                    <div class="myth-body">
                        <p>你以为那是普通的唾液？那其实是生化武器。</p>
                    </div>
                    <div class="myth-footer correct">
                        <span class="mark">✅</span>
                        <p><strong>真相：</strong>那是反刍出来的<strong>胃液</strong>，绿色且恶臭，用于防御。</p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="desert-footer">
        <p>The Ship of the Desert | 敬畏自然进化之力</p>
    </footer>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 配色：
   Sand Gold: #e1b16a (主色)
   Earth Brown: #5d4037 (文字/深色)
   Sunset Red: #d35400 (强调色)
   Sky Blue: #87ceeb (辅助)
*/

:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.nav-container {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.4s ease;
    background: transparent;
}
.nav-container.scrolled {
    background: rgba(253, 24cf, 225, 0.95); /* 米黄色背景 */
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(141, 110, 99, 0.1);
    height: 4rem;
}
.dark .nav-container.scrolled { background: rgba(62, 39, 35, 0.95); }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}
.nav-title { font-weight: 800; font-size: 1.4rem; display: flex; align-items: center; gap: 8px; }
.brand-text { color: #8d6e63; letter-spacing: 2px; }
.sub-text { color: #d35400; font-family: serif; font-style: italic; }
.dark .brand-text { color: #d7ccc8; }

.nav-links { display: flex; gap: 2rem; }
.nav-link { text-decoration: none; color: #5d4037; font-weight: 600; transition: color 0.3s; }
.nav-link:hover { color: #d35400; }
.dark .nav-link { color: #d7ccc8; }

/* Hero Section */
.hero-section {
    position: relative; height: 90vh; display: flex; align-items: center; justify-content: center;
    background: #d7ccc8; overflow: hidden;
}
.hero-bg {
    position: absolute; width: 100%; height: 100%; object-fit: cover;
}
.hero-overlay {
    position: absolute; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(93, 64, 55, 0.6));
    z-index: 1;
}

/* 驼峰虚影装饰 (纯CSS绘制) */
.hump-silhouette {
    position: absolute; bottom: -10%; right: -5%;
    width: 120%; height: 50%;
    background: radial-gradient(ellipse at 70% 100%, rgba(0,0,0,0.3) 0%, transparent 60%);
    z-index: 2; pointer-events: none;
    transform: rotate(-5deg);
}

.hero-content {
    position: relative; z-index: 3; text-align: center; color: #fff;
    max-width: 800px; text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}
.main-title { font-size: 4.5rem; margin: 0; line-height: 1.1; font-weight: 900; }
.sand-text { 
    color: #ffd54f; 
    background: linear-gradient(to bottom, #ffd54f, #ffca28);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.sub-title { font-size: 1.2rem; margin: 2rem 0; color: #ffe0b2; letter-spacing: 1px; }
.action-btn {
    padding: 1rem 3rem; border: 2px solid #ffd54f; color: #ffd54f; text-decoration: none;
    font-weight: bold; transition: all 0.3s;
}
.action-btn:hover { background: #ffd54f; color: #5d4037; }

/* 背景纹理 */
.sand-dune-bg {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-image: repeating-linear-gradient(45deg, rgba(225, 177, 106, 0.05) 0px, rgba(225, 177, 106, 0.05) 1px, transparent 1px, transparent 20px);
    z-index: -1; pointer-events: none;
}

/* Common Section */
.section-block { padding: 6rem 2rem; max-width: 1100px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; color: #5d4037; margin-bottom: 0.5rem; font-family: serif; }
.dark .section-header h2 { color: #d7ccc8; }
.section-header p { color: #a1887f; letter-spacing: 2px; text-transform: uppercase; }

/* 1. 解剖构造 */
.anatomy-section { background: #fff8e1; border-radius: 20px; margin-top: -50px; position: relative; z-index: 10; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.dark .anatomy-section { background: #3e2723; }

.anatomy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
.feature-card {
    background: #fff; padding: 2rem; border-radius: 12px; text-align: center;
    border-bottom: 4px solid #e1b16a; transition: transform 0.3s;
    box-shadow: 0 5px 15px rgba(141, 110, 99, 0.1);
}
.dark .feature-card { background: #4e342e; border-color: #8d6e63; }
.feature-card:hover { transform: translateY(-5px); }

.card-icon { font-size: 3rem; margin-bottom: 1rem; }
.feature-card h3 { color: #8d6e63; margin-bottom: 1rem; }
.dark .feature-card h3 { color: #ffcc80; }
.feature-card p { color: #5d4037; line-height: 1.6; text-align: justify; }
.dark .feature-card p { color: #d7ccc8; }

/* 2. 历史渊源 */
.history-section { position: relative; }
.content-wrapper { display: flex; align-items: center; gap: 4rem; }
.text-side { flex: 1; }
.img-side { flex: 1; }

.silk-road-title { font-family: serif; font-size: 2rem; color: #d35400; margin-bottom: 2rem; }
.drop-cap::first-letter {
    float: left; font-size: 3.5rem; line-height: 0.8; margin-right: 10px;
    color: #e1b16a; font-weight: bold;
}
.text-side p { line-height: 1.8; color: #5d4037; margin-bottom: 1.5rem; text-align: justify; }
.dark .text-side p { color: #bcaaa4; }

.quote-box {
    border-left: 4px solid #d35400; padding-left: 1.5rem; margin-top: 2rem;
    font-style: italic; color: #8d6e63; font-family: serif; font-size: 1.1rem;
    background: rgba(225, 177, 106, 0.1); padding: 1.5rem; border-radius: 0 10px 10px 0;
}

.frame-decoration {
    padding: 15px; border: 2px solid #d7ccc8; position: relative;
    background: #fff; transform: rotate(2deg); box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.history-img { width: 100%; display: block; filter: sepia(40%); }
.img-caption {
    display: block; text-align: center; font-size: 0.8rem; color: #8d6e63;
    margin-top: 10px; font-family: serif;
}

/* 3. 迷思破解 (扩展版) */
.myth-section { background: #efebe9; border-radius: 20px; }
.dark .myth-section { background: #3e2723; }

.myth-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }

.myth-card {
    background: #fff; border-radius: 12px; overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s;
}
.dark .myth-card { background: #4e342e; }
.myth-card:hover { transform: translateY(-5px); }

.myth-header { padding: 1.5rem; display: flex; align-items: center; gap: 10px; }
.myth-header.wrong { background: #ffebee; color: #c62828; }
.dark .myth-header.wrong { background: #3e2723; color: #ef5350; }

.myth-header h4 { margin: 0; font-size: 1.1rem; }

.myth-body { padding: 1.5rem; min-height: 100px; }
.myth-body p { margin: 0; color: #5d4037; font-size: 0.95rem; line-height: 1.6; }
.dark .myth-body p { color: #d7ccc8; }

.myth-footer {
    padding: 1rem 1.5rem; background: #e8f5e9; color: #2e7d32;
    display: flex; gap: 10px; align-items: flex-start;
}
.dark .myth-footer { background: #1b5e20; color: #a5d6a7; }
.myth-footer p { margin: 0; font-size: 0.9rem; }

.mark { font-size: 1.2rem; }

.desert-footer {
    text-align: center; padding: 3rem; background: #3e2723; color: #e1b16a;
    font-family: serif; letter-spacing: 1px;
}

@media (max-width: 900px) {
    .content-wrapper { flex-direction: column; }
    .main-title { font-size: 3rem; }
    .myth-grid { grid-template-columns: 1fr; }
}
</style>