<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="serif-text">VENEZIA</span>
                <span class="gold-dot">.</span>
            </div>

            <div class="nav-links">
                <a href="#grand-canal" class="nav-link">大运河</a>
                <a href="#islands" class="nav-link">群岛巡礼</a>
                <a href="#secrets" class="nav-link">隐秘角落</a>
                <a href="#mask" class="nav-link">面具之魂</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="grand-canal" class="hero-section">
        <div class="hero-overlay"></div>
        <img src="../../assets/image/travel/travel-3/grand-canal.jpg" alt="威尼斯大运河" class="hero-bg">
        
        <div class="hero-content">
            <p class="intro-text">La Serenissima</p>
            <h1 class="main-title">亚得里亚海<br>的<span class="highlight">新娘</span></h1>
            <div class="ornament-line"></div>
            <p class="sub-title">在这个没有车轮的城市，迷路是唯一正确的探索方式。</p>
        </div>
        
        <!-- <div class="gondola-silhouette">
            <img src="../../assets/image/travel/travel-3/gondola-shadow.png" alt="Gondola">
        </div> -->
    </header>

    <main class="main-container">
        
        <section id="islands" class="section-block horizontal-scroll-section">
            <div class="section-header">
                <h2>群岛巡礼</h2>
                <p>Island Hopping</p>
            </div>
            
            <div class="scroll-wrapper">
                <div class="island-card">
                    <div class="card-img">
                        <img src="../../assets/image/travel/travel-3/burano.jpg" alt="彩色岛">
                    </div>
                    <div class="card-text">
                        <h3>Burano</h3>
                        <span class="tag">彩色岛</span>
                        <p>上帝打翻的调色盘。渔民为了在浓雾中找到家，将房子涂成彩虹色。必买：蕾丝制品。</p>
                    </div>
                </div>
                

                <div class="island-card">
                    <div class="card-img">
                        <img src="../../assets/image/travel/travel-3/murano.jpg" alt="玻璃岛">
                    </div>
                    <div class="card-text">
                        <h3>Murano</h3>
                        <span class="tag">玻璃岛</span>
                        <p>世界玻璃艺术的中心。参观玻璃博物馆，看工匠如何吹制出精美绝伦的吊灯。</p>
                    </div>
                </div>

                <div class="island-card">
                    <div class="card-img">
                        <img src="../../assets/image/travel/travel-3/torcello.jpg" alt="教堂岛">
                    </div>
                    <div class="card-text">
                        <h3>Torcello</h3>
                        <span class="tag">本岛源头</span>
                        <p>海明威最爱的地方。这里几乎荒无人烟，只有最古老的拜占庭马赛克教堂。</p>
                    </div>
                </div>
                
                <div class="spacer"></div>
            </div>
            <p class="scroll-hint">← 探索群岛 →</p>
        </section>

        <section id="secrets" class="section-block secret-section">
            <div class="section-header">
                <h2>隐秘角落</h2>
                <p>Hidden Gems</p>
            </div>

            <div class="magazine-layout">
                <div class="feature-item">
                    <div class="feature-img-box">
                        <img src="../../assets/image/travel/travel-3/bookstore.jpg" alt="沉船书店">
                    </div>
                    <div class="feature-text">
                        <h4>Libreria Acqua Alta</h4>
                        <h5>世界上最美的书店</h5>
                        <p>为了应对洪水，书店老板将书装在浴缸、小船甚至一艘贡多拉里。爬上由废旧百科全书堆成的“书楼梯”，可以俯瞰运河。</p>
                    </div>
                </div>

                <div class="feature-item reverse">
                    <div class="feature-text">
                        <h4>Ponte dei Sospiri</h4>
                        <h5>叹息桥的秘密视角</h5>
                        <p>不要只在外面看。进入总督宫，亲自走过这座连接法院与监狱的桥。透过石窗的缝隙最后看一眼自由的大海，那是当年囚犯的视角。</p>
                    </div>
                    <div class="feature-img-box">
                        <img src="../../assets/image/travel/travel-3/bridge-sighs.jpg" alt="叹息桥">
                    </div>
                </div>
            </div>
        </section>

        <section id="mask" class="section-block mask-section">
            <div class="mask-bg-overlay"></div>
            <div class="section-header light-text">
                <h2>面具之魂</h2>
                <p>Carnevale di Venezia</p>
            </div>

            <div class="mask-container">
                <div class="mask-card">
                    <div class="mask-front">
                        <img src="../../assets/image/travel/travel-3/mask-bauta.png" alt="Bauta">
                        <h3>Bauta</h3>
                    </div>
                    <div class="mask-reveal">
                        <p><strong>全脸/半脸白面具。</strong><br>这是威尼斯最传统的面具，是身份隐匿与社会平等的象征。这种面具以纯白色为主色调，通过完全覆盖面部的设计消除佩戴者的社会阶级、身份和性别差异。</p>
                    </div>
                </div>

                <div class="mask-card">
                    <div class="mask-front">
                        <img src="../../assets/image/travel/travel-3/mask-doctor.png" alt="Medico">
                        <h3>Medico</h3>
                    </div>
                    <div class="mask-reveal">
                        <p><strong>瘟疫医生。</strong><br>长长的鸟嘴原本是用来填充香料以隔绝瘟疫的“防毒面具”，后来演变成了一种带有死亡与神秘气息的独特装扮。</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="tips-section">
            <div class="tips-paper">
                <h3>📜 旅人手札</h3>
                <ul class="tips-list">
                    <li><strong>交通：</strong> 威尼斯没有汽车。主岛靠步行或水上巴士 (Vaporetto)。通票非常划算。</li>
                    <li><strong>咖啡：</strong> 在圣马可广场喝咖啡要收昂贵的“音乐费”。站着喝（al banco）比坐着喝便宜一半。</li>
                    <li><strong>迷路：</strong> 谷歌地图在这里经常失灵。看墙上的黄色路牌 "Per San Marco" (去圣马可) 或 "Per Rialto" (去里亚托)。</li>
                </ul>
            </div>
        </section>

    </main>

    <footer class="venice-footer">
        <p>Ciao, Venezia. Until we meet again.</p>
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
/* 平滑移动  */
:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 字体设定 */
.serif-text, h1, h2, h3, h4, .intro-text {
    font-family: "Playfair Display", "Times New Roman", serif;
}

/* 导航栏 */
.nav-container {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.5s ease;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
}
.nav-container.scrolled {
    background: #9e1b32; /* 威尼斯红背景 */
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    height: 4rem;
}
/* 深色模式适配 */
.dark .nav-container.scrolled { background: #4a0e16; }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}

.nav-title { font-size: 1.8rem; letter-spacing: 2px; color: #fff; font-weight: bold; }
.gold-dot { color: #c5a059; }

.nav-links { display: flex; gap: 2rem; }
.nav-link {
    color: rgba(255,255,255,0.9); text-decoration: none; font-size: 0.95rem;
    letter-spacing: 1px; transition: color 0.3s; position: relative;
}
.nav-link::after {
    content: ''; position: absolute; bottom: -5px; left: 50%; width: 0; height: 1px;
    background: #c5a059; transition: all 0.3s; transform: translateX(-50%);
}
.nav-link:hover { color: #c5a059; }
.nav-link:hover::after { width: 100%; }

/* Hero Section */
.hero-section {
    position: relative; height: 100vh; display: flex; align-items: center; justify-content: center;
    overflow: hidden;
}
.hero-bg {
    position: absolute; width: 100%; height: 100%; object-fit: cover;
    animation: slowZoom 20s infinite alternate;
}
@keyframes slowZoom {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
}

.hero-overlay {
    position: absolute; width: 100%; height: 100%;
    background: rgba(0,0,0,0.3);
}

.hero-content {
    position: relative; z-index: 2; text-align: center; color: #fff;
    max-width: 800px; padding: 0 20px;
}

.intro-text {
    font-size: 1.5rem; color: #c5a059; font-style: italic; margin-bottom: 1rem;
}
.main-title {
    font-size: 4.5rem; line-height: 1.1; margin-bottom: 1.5rem;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}
.highlight { color: #c5a059; font-style: italic; }

.ornament-line {
    width: 100px; height: 2px; background: #c5a059; margin: 0 auto 1.5rem;
}
.sub-title {
    font-size: 1.2rem; font-weight: 300; letter-spacing: 1px; opacity: 0.9;
}

/* 贡多拉剪影动画 */
.gondola-silhouette {
    position: absolute; bottom: 0; right: -100px; width: 300px; opacity: 0.8;
    animation: floatBoat 10s infinite ease-in-out;
}
@keyframes floatBoat {
    0%, 100% { transform: translateX(0) rotate(1deg); }
    50% { transform: translateX(-20px) rotate(-2deg); }
}
.gondola-silhouette img { width: 100%; }

/* Main Content */
.main-container {
    background: #fdfbf7; color: #333; position: relative; z-index: 10;
}
.dark .main-container { background: #121212; color: #ddd; }

.section-block { padding: 5rem 0; }
.section-header { text-align: center; margin-bottom: 3rem; }
.section-header h2 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #9e1b32; }
.section-header p { font-family: sans-serif; letter-spacing: 3px; color: #c5a059; text-transform: uppercase; font-size: 0.9rem; }
.light-text h2 { color: #fff; }

/* 横向滚动部分 */
.horizontal-scroll-section {
    background: linear-gradient(to bottom, #fdfbf7, #fff0f0);
    overflow: hidden;
}
.dark .horizontal-scroll-section { background: #1a1a1a; }

.scroll-wrapper {
    display: flex; gap: 2rem; overflow-x: auto; padding: 2rem 5vw;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.scroll-wrapper::-webkit-scrollbar { display: none; }

.island-card {
    flex: 0 0 350px; /* 固定宽度，防止挤压 */
    scroll-snap-align: center;
    background: #fff; border-radius: 8px; overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s;
}
.dark .island-card { background: #2a2a2a; }

.island-card:hover { transform: translateY(-10px); }

.card-img { height: 250px; overflow: hidden; }
.card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.island-card:hover .card-img img { transform: scale(1.1); }

.card-text { padding: 1.5rem; text-align: left; }
.card-text h3 { font-size: 1.5rem; margin: 0 0 0.5rem; color: #333; }
.dark .card-text h3 { color: #eee; }
.tag {
    display: inline-block; padding: 2px 8px; background: #c5a059; color: #fff;
    font-size: 0.7rem; margin-bottom: 1rem; border-radius: 2px;
}
.card-text p { font-size: 0.9rem; line-height: 1.6; color: #666; }
.dark .card-text p { color: #aaa; }
.spacer { flex: 0 0 2rem; }
.scroll-hint { text-align: center; color: #999; font-size: 0.8rem; margin-top: 1rem; }

/* 隐秘角落 (杂志风) */
.secret-section { max-width: 1000px; margin: 0 auto; padding: 5rem 2rem; }

.feature-item {
    display: flex; align-items: center; gap: 4rem; margin-bottom: 6rem;
}
.feature-item.reverse { flex-direction: row-reverse; }

.feature-img-box {
    flex: 1; position: relative;
}
.feature-img-box img {
    width: 100%; border-radius: 4px;
    box-shadow: 15px 15px 0 #c5a059; /* 金色阴影装饰 */
}
.feature-text { flex: 1; }
.feature-text h4 {
    font-size: 2rem; color: #9e1b32; margin-bottom: 0.5rem;
}
.feature-text h5 {
    font-size: 1rem; color: #666; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px;
    border-bottom: 1px solid #ddd; padding-bottom: 1rem; display: inline-block;
}
.feature-text p { line-height: 1.8; color: #555; text-align: justify; }
.dark .feature-text p { color: #bbb; }

/* 面具交互 */
.mask-section {
    position: relative; background: #121212; padding: 6rem 2rem;
    overflow: hidden;
}
.mask-bg-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(circle at center, #2a0509 0%, #000 100%);
    z-index: 1;
}
.mask-section .section-header { position: relative; z-index: 2; }

.mask-container {
    position: relative; z-index: 2; max-width: 900px; margin: 0 auto;
    display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap;
}

.mask-card {
    width: 300px; height: 400px; position: relative; cursor: pointer;
    perspective: 1000px;
}

.mask-front {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: #fff; border-radius: 8px; padding: 2rem;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 2; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border: 1px solid #333;
}
.mask-front img { width: 80%; drop-shadow: 0 10px 10px rgba(0,0,0,0.3); }
.mask-front h3 { margin-top: 2rem; color: #333; font-size: 1.5rem; }

.mask-reveal {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: #9e1b32; color: #fff; border-radius: 8px;
    padding: 2rem; display: flex; align-items: center; text-align: center;
    z-index: 1; transform: scale(0.9); transition: transform 0.6s;
    border: 1px solid #c5a059;
}
.mask-reveal p { line-height: 1.6; font-size: 1rem; }

/* Hover Effect: 移开面具 */
.mask-card:hover .mask-front {
    transform: translateY(-80%) rotateX(20deg);
}
.mask-card:hover .mask-reveal {
    transform: scale(1);
}

/* 贴士 */
.tips-section {
    padding: 4rem 2rem; background: url('https://www.transparenttextures.com/patterns/cream-paper.png');
}
.tips-paper {
    max-width: 800px; margin: 0 auto;
    background: #fff; padding: 3rem; border: 1px solid #e0e0e0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    position: relative;
}
.dark .tips-paper { background: #222; border-color: #444; }

.tips-paper::before {
    content: ''; position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
    width: 100px; height: 20px; background: rgba(197, 160, 89, 0.3); /* 胶带效果 */
}

.tips-list { list-style: none; padding: 0; margin-top: 1.5rem; }
.tips-list li { margin-bottom: 1rem; line-height: 1.6; }
.dark .tips-list li { color: #bbb; }

.venice-footer {
    background: #9e1b32; color: #ffcccc; text-align: center; padding: 3rem;
    font-family: serif; font-style: italic;
}
.dark .venice-footer { background: #2a0509; }

/* 移动端适配 */
@media (max-width: 768px) {
    .main-title { font-size: 3rem; }
    .feature-item, .feature-item.reverse { flex-direction: column; gap: 2rem; }
    .feature-img-box img { box-shadow: 10px 10px 0 #c5a059; }
    .scroll-wrapper { padding: 2rem 1rem; }
}
</style>