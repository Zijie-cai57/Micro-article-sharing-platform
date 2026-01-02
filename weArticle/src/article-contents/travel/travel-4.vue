<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="thai-font">สงกรานต์</span>
                <span class="eng-font">SONGKRAN</span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="nav-link">狂欢序幕</a>
                <a href="#battle-map" class="nav-link">战场地图</a>
                <a href="#survival-book" class="nav-link">生存宝典</a>
                <a href="#tips" class="nav-link">贴士</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-overlay"></div>
        <img src="../../assets/image/travel/travel-4/water-hero.jpg" alt="Songkran Festival" class="hero-bg">
        
        <div class="hero-content">
            <h1 class="splash-title">全城<br><span class="highlight">水战</span></h1>
            <p class="sub-title">Get Wet or Go Home | 全球最大的水仗节</p>
            <div class="scroll-down">
                <span>4月13日 - 15日</span>
                <div class="water-drop">💧</div>
            </div>
        </div>
    </header>

    <main class="main-container">
        
        <section id="battle-map" class="section-block">
            <div class="section-header">
                <h2>主战场分布</h2>
                <p>Choose Your Battle Zone</p>
            </div>

            <div class="droplet-grid">
                <div class="droplet-card shape-1">
                    <img src="../../assets/image/travel/travel-4/thapae.jpg" alt="塔佩门" class="droplet-img">
                    <div class="droplet-content">
                        <h3>塔佩门</h3>
                        <p>主舞台与选美大赛。人密度最高，消<br>防车直接喷水，完全没有干的地方。</p>
                    </div>
                </div>

                <div class="droplet-card shape-2">
                    <img src="../../assets/image/travel/travel-4/moat.jpg" alt="护城河" class="droplet-img">
                    <div class="droplet-content">
                        <h3>护城河周边</h3>
                        <p>皮卡车巡游路线。人们直接抽取护<br>城河的水互泼，也是“冰水<br>攻击”的高发区。</p>
                    </div>
                </div>

                <div class="droplet-card shape-3">
                    <img src="../../assets/image/travel/travel-4/maya.jpg" alt="MAYA商场" class="droplet-img">
                    <div class="droplet-content">
                        <h3>MAYA / 宁曼路</h3>
                        <p>年轻人的电音派对。现代舞台、大<br>型水枪、泡沫派对，氛围更像夜店。</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="survival-book" class="section-block book-section">
            <div class="section-header">
                <h2>生存宝典</h2>
                <p>The Book of Survival</p>
            </div>

            <div class="book-stage">
                <p class="instruction">👇 点击封面翻阅，🔫 查看泼水攻略</p>
                
                <div class="the-book" 
                     :class="{ 'open': isBookOpen }" 
                     @click="toggleBook"
                     @mouseleave="closeBook">
                    
                    <div class="book-cover-group">
                        <div class="cover-front">
                            <div class="cover-design">
                                <span class="thai-title">คู่มือ</span>
                                <h3>泼水节<br>生存指南</h3>
                                <div class="gold-border"></div>
                                <span class="vol-text">VOL.2025</span>
                            </div>
                        </div>

                        <div class="cover-back">
                            <div class="page-inner">
                                <h4 class="page-title">起源与习俗</h4>
                                <p class="page-text">
                                    宋干节 (Songkran) 源于梵文，意为“跨越”。这不仅是泰国的农历新年，更是清除厄运、祈求来年顺遂的仪式。
                                </p>
                                
                                <div class="info-box">
                                    <h5>🎒 装备清单 (必带)</h5>
                                    <ul class="check-list">
                                        <li><span class="icon">🥽</span> 护目镜 (防脏水入眼)</li>
                                        <li><span class="icon">📱</span> 手机防水袋 (挂脖)</li>
                                        <li><span class="icon">🩳</span> 速干衣裤 (拒绝牛仔)</li>
                                        <li><span class="icon">💰</span> 少量现金 (装防水袋)</li>
                                    </ul>
                                </div>
                                <span class="page-number left">P.01</span>
                            </div>
                        </div>
                    </div>

                    <div class="book-page-right">
                        <div class="page-inner">
                            <h4 class="page-title">战斗等级表</h4>
                            <div class="weapon-tier">
                                <div class="tier-item">
                                    <span class="rank">S级</span>
                                    <span class="desc">皮卡车水桶 (移动炮台)</span>
                                </div>
                                <div class="tier-item">
                                    <span class="rank">A级</span>
                                    <span class="desc">5500CC 加压水枪 (注意安全)</span>
                                </div>
                                <div class="tier-item">
                                    <span class="rank">B级</span>
                                    <span class="desc">洗脸盆 (性价比之王，近战无敌)</span>
                                </div>
                            </div>

                            <h4 class="page-title mt-4">生存泰语</h4>
                            <ul class="thai-vocab">
                                <li>
                                    <strong>Sawasdee Pee Mai</strong>
                                    <span>新年快乐</span>
                                </li>
                                <li>
                                    <strong>Mai Ao Nam Kang</strong>
                                    <span>不要冰水！(重要)</span>
                                </li>
                            </ul>

                            <div class="emergency-box">
                                <strong>🆘 旅游警察：1155</strong>
                            </div>
                            
                            <span class="page-number right">P.02</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="tips" class="section-block culture-section">
            <div class="glass-panel">
                <div class="text-content">
                    <h3>不只是打水仗</h3>
                    <p>狂欢之后，别忘了去清迈古城的寺庙看看。当地人会堆起精美的沙塔，插上彩旗，这叫<strong>“堆沙塔祈福”</strong>。</p>
                    <p>如果你想体验温和版的泼水节，请在上午前往寺庙，那里只有象征性的“滴水礼”。</p>
                </div>
                <div class="img-content">
                    <img src="../../assets/image/travel/travel-4/temple.jpg" alt="浴佛">
                </div>
            </div>
        </section>

    </main>

    <footer class="thai-footer">
        <p>Sawasdee Krub | 清迈·2025</p>
    </footer>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isBookOpen = ref(false);

const toggleBook = () => {
    isBookOpen.value = !isBookOpen.value;
};

const closeBook = () => {
    isBookOpen.value = false;
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
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
   Water Blue: #00A5CF
   Temple Gold: #F4D35E
   Fresh White: #F0F8FF
*/

:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.nav-container {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.4s ease;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
}
.nav-container.scrolled {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 165, 207, 0.2);
    height: 4.5rem;
}
.dark .nav-container.scrolled { background: rgba(20, 30, 40, 0.95); }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}

.nav-title { display: flex; flex-direction: column; align-items: flex-start; }
.thai-font { font-size: 1.2rem; color: #F4D35E; font-weight: bold; }
.eng-font { font-size: 1rem; color: #fff; font-weight: 800; letter-spacing: 2px; }
.nav-container.scrolled .eng-font { color: #00A5CF; }

.nav-links { display: flex; gap: 2rem; }
.nav-link {
    color: #fff; text-decoration: none; font-weight: 500; transition: color 0.3s;
}
.nav-container.scrolled .nav-link { color: #333; }
.nav-link:hover { color: #F4D35E; }
.nav-container.scrolled .nav-link:hover { color: #00A5CF; }
.dark .nav-container.scrolled .nav-link { color: #eee; }

/* Hero Section */
.hero-section {
    position: relative; height: 100vh; display: flex; align-items: center; justify-content: center;
    overflow: hidden;
}
.hero-bg {
    position: absolute; width: 100%; height: 100%; object-fit: cover;
}
.hero-overlay {
    position: absolute; width: 100%; height: 100%;
    background: rgba(0, 165, 207, 0.3);
    mix-blend-mode: multiply;
}
.hero-content {
    position: relative; z-index: 2; text-align: center; color: #fff;
}
.splash-title {
    font-size: 5rem; font-weight: 900; line-height: 1.1;
    text-shadow: 4px 4px 0px #00A5CF;
    transform: rotate(-3deg);
}
.highlight { color: #F4D35E; font-style: italic; }
.sub-title { font-size: 1.2rem; margin-top: 1rem; letter-spacing: 2px; background: #00A5CF; display: inline-block; padding: 5px 15px; transform: rotate(2deg); }

.scroll-down { margin-top: 3rem; animation: bounce 2s infinite; }
.water-drop { font-size: 2rem; margin-top: 5px; }

/* Main Container */
.main-container {
    background: #F0F8FF; position: relative; z-index: 10;
    overflow-x: hidden;
}
.dark .main-container { background: #0f172a; }

.section-block { padding: 6rem 2rem; max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; color: #00A5CF; margin-bottom: 0.5rem; }
.section-header p { color: #888; letter-spacing: 2px; text-transform: uppercase; }

/* 1. 水滴卡片 */
.droplet-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}
.droplet-card {
    position: relative; height: 350px; overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 165, 207, 0.15);
    transition: transform 0.3s;
}
.droplet-card:hover { transform: scale(1.03); z-index: 5; }
.shape-1 { border-radius: 43% 57% 70% 30% / 30% 62% 38% 70%; }
.shape-2 { border-radius: 65% 35% 38% 62% / 54% 30% 70% 46%; }
.shape-3 { border-radius: 36% 64% 48% 52% / 60% 39% 61% 40%; }
.droplet-img { width: 100%; height: 100%; object-fit: cover; }
.droplet-content {
    position: absolute; top: 0; left: 0; width: 85%; height: 100%;
    background: rgba(0,0,0,0.5); color: #fff;
    display: flex; flex-direction: column; 
    justify-content: center; 
    align-items: left;
    text-align: center; padding: 2rem; opacity: 0; transition: opacity 0.3s;
}
.droplet-card:hover .droplet-content { opacity: 1; }

/* 2. 翻书交互 (Pro版 - 带位移) */
.book-stage {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    perspective: 1500px; padding: 2rem 0;
}
.instruction { margin-bottom: 2rem; color: #888; font-size: 0.9rem; animation: pulse 2s infinite; }

.the-book {
    width: 380px; height: 500px;
    position: relative;
    transform-style: preserve-3d;
    /* 核心修改：增加 transform 的过渡时间，使其位移平滑 */
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    cursor: pointer;
}

/* 状态1：悬停 (书本未打开时) */
/* 使用 :not(.open) 确保打开后不再乱动 */
.the-book:not(.open):hover {
    transform: rotateY(-10deg) translateY(-10px);
    box-shadow: 20px 20px 30px rgba(0,0,0,0.15);
}

/* 状态2：打开 (核心逻辑修改) */
.the-book.open {
    /* translateX(50%) 的原理：
       书本原来宽 380px，居中显示。
       打开后，左侧封面翻出去，书本视觉宽度变成 760px。
       为了让这 760px 居中，我们需要把书脊（原来的中心）向右移动一半宽度 (190px)。
       50% 正好是自身宽度的一半。
    */
    transform: translateX(50%) rotateY(0deg); 
    z-index: 10;
}

/* 封面组 (包含封面正反面) */
.book-cover-group {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    transform-origin: left; /* 以左轴旋转 */
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    z-index: 10;
}
.the-book.open .book-cover-group {
    transform: rotateY(-180deg);
}

/* 封面设计 */
.cover-front {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, #005f7a 0%, #00A5CF 100%);
    border-radius: 5px 15px 15px 5px;
    display: flex; align-items: center; justify-content: center;
    backface-visibility: hidden;
    z-index: 2;
    box-shadow: inset 5px 0 10px rgba(0,0,0,0.1);
}
.cover-design {
    border: 3px solid #F4D35E; padding: 2rem; margin: 20px;
    text-align: center; color: #fff; width: 80%; height: 85%;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
}
.thai-title { color: #F4D35E; font-size: 1.5rem; margin-bottom: 1rem; }
.cover-design h3 { font-size: 2.8rem; line-height: 1.2; margin: 0; }
.vol-text { margin-top: auto; font-family: monospace; opacity: 0.8; }

/* 封面背面 (Page 1) */
.cover-back {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: #fdfbf7;
    color: #333;
    border-radius: 15px 5px 5px 15px; /* 圆角反过来 */
    transform: rotateY(180deg);
    backface-visibility: hidden;
    z-index: 1;
    display: flex; flex-direction: column;
    box-shadow: inset -5px 0 15px rgba(0,0,0,0.05);
}

/* 右侧内页 (Page 2) */
.book-page-right {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: #fdfbf7;
    border-radius: 5px 15px 15px 5px;
    z-index: 1;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
    display: flex; flex-direction: column;
    border-left: 1px solid #eee;
}

/* 内页通用样式 */
.page-inner {
    padding: 2.5rem; height: 100%; position: relative;
    display: flex; flex-direction: column;
}
.dark .cover-back, .dark .book-page-right { background: #1e293b; color: #ccc; }

.page-title {
    color: #00A5CF; border-bottom: 2px solid #F4D35E;
    padding-bottom: 5px; margin-bottom: 1rem; font-size: 1.2rem;
}
.page-text { font-size: 0.9rem; line-height: 1.6; text-align: justify; margin-bottom: 1.5rem; }

/* 信息盒样式 */
.info-box {
    background: #eef9fc; padding: 1rem; border-radius: 8px; border: 1px dashed #00A5CF;
}
.dark .info-box { background: #0f172a; border-color: #334155; }
.check-list { list-style: none; padding: 0; margin: 0.5rem 0 0 0; }
.check-list li { margin-bottom: 0.5rem; font-size: 0.9rem; display: flex; align-items: center; gap: 8px; }

/* 武器等级 */
.weapon-tier { display: flex; flex-direction: column; gap: 10px; }
.tier-item { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; }
.rank {
    background: #00A5CF; color: #fff; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 0.8rem; width: 40px; text-align: center;
}

/* 泰语词汇 */
.thai-vocab { list-style: none; padding: 0; margin-top: 10px; }
.thai-vocab li {
    display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding: 5px 0; font-size: 0.9rem;
}
.dark .thai-vocab li { border-color: #333; }

/* 紧急电话 */
.emergency-box {
    margin-top: auto; background: #ffebeb; color: #d63031; padding: 10px; text-align: center; border-radius: 4px; font-size: 0.9rem;
}
.dark .emergency-box { background: #4a0e0e; color: #ffcccc; }

/* 页码 */
.page-number {
    position: absolute; bottom: 15px; font-family: monospace; color: #999; font-size: 0.8rem;
}
.page-number.left { left: 20px; }
.page-number.right { right: 20px; }
.mt-4 { margin-top: 1.5rem; }

/* 3. 玻璃面板 */
.glass-panel {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 20px; padding: 3rem;
    display: flex; align-items: center; gap: 3rem;
    box-shadow: 0 8px 32px rgba(0, 165, 207, 0.1);
}
.dark .glass-panel { background: rgba(30, 41, 59, 0.7); }
.text-content { flex: 1; }
.text-content h3 { font-size: 2rem; color: #00A5CF; margin-bottom: 1.5rem; }
.img-content { flex: 1; }
.img-content img { width: 100%; border-radius: 10px; transform: rotate(2deg); border: 5px solid #fff; }

.thai-footer {
    background: #00A5CF; color: #fff; text-align: center; padding: 2rem;
    font-weight: bold;
}
.dark .thai-footer { background: #005f7a; }

/* 动画 */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
}
@keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .glass-panel { flex-direction: column; }
    .book-stage { perspective: 1000px; }
    
    /* 移动端逻辑调整：不进行水平位移，因为屏幕不够宽 */
    .the-book { width: 90vw; height: auto; min-height: 450px; }
    
    .the-book.open {
        transform: rotateY(0deg) translateX(0); /* 移动端不位移 */
    }
    
    /* 移动端翻开时，稍微缩小一点以防溢出 */
    .the-book.open .book-cover-group {
        transform: rotateY(-170deg); /* 稍微留一点角度 */
    }
    
    .cover-design h3 { font-size: 2rem; }
}
</style>