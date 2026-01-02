<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="icon">🌿</span>
                <span class="brand-text">CLAY</span>
                <span class="sub-text">GARDEN</span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="nav-link">治愈工坊</a>
                <a href="#materials" class="nav-link">准备工具</a>
                <a href="#tutorial" class="nav-link">制作教程</a>
                <a href="#video" class="nav-link">视频指引</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-bg-container">
            <img src="../../assets/image/leisure/leisure-1/clay-hero.jpg" alt="黏土多肉" class="hero-bg">
        </div>
        
        <div class="hero-content">
            <div class="tag-pill">HANDMADE THERAPY</div>
            <h1 class="main-title">指尖上的<br><span class="clay-text">永生花园</span></h1>
            <p class="sub-title">无需浇水，没有虫害。<br>在揉捏与调色中，找回内心的宁静。</p>
            <a href="#materials" class="start-btn">开始我的手作之旅 ✂️</a>
        </div>
        
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
    </header>

    <main class="main-container">
        
        <section id="materials" class="section-block material-section">
            <div class="section-header">
                <h2>🛠️ 准备工具</h2>
                <p>Materials & Tools Checklist</p>
            </div>

            <div class="toolbox-grid">
                <div class="tool-card">
                    <div class="tool-icon">🎨</div>
                    <h3>超轻黏土</h3>
                    <p>白色为主，少量红/黄/蓝/绿用于调色。推荐“得力”或“晨光”，手感细腻不粘手。</p>
                </div>
                <div class="tool-card">
                    <div class="tool-icon">🖌️</div>
                    <h3>塑形工具三件套</h3>
                    <p>丸棒（压出叶片弧度）、切刀（刻画纹理）、细针（处理细节）。</p>
                </div>
                <div class="tool-card">
                    <div class="tool-icon">💅</div>
                    <h3>色粉/眼影</h3>
                    <p><strong>灵魂注入！</strong>用旧眼影或色粉给多肉叶尖上色，制造渐变感。</p>
                </div>
                <div class="tool-card">
                    <div class="tool-icon">🏺</div>
                    <h3>容器与填充</h3>
                    <p>小花盆、软木塞或旧杯子。内部可用废弃黏土或铝箔纸填充做底。</p>
                </div>
            </div>
        </section>

        <section id="tutorial" class="section-block tutorial-section">
            <div class="section-header">
                <h2>制作流程：桃蛋 (Graptopetalum)</h2>
                <p>Beginner Level: Round & Cute</p>
            </div>

            <div class="timeline">
                <div class="step-item">
                    <div class="step-num">01</div>
                    <div class="step-content">
                        <h3>调色：治愈的肉粉色</h3>
                        <p>取大块<strong>白色</strong>黏土，加入极少量<strong>红色</strong>和微量<strong>黄色</strong>（比例约 10:1:0.5）。</p>
                        <p class="tip">💡 技巧：像拉面一样反复拉伸折叠，直到颜色均匀。颜色要比预想的浅，因为干了之后会变深。</p>
                    </div>
                    <div class="step-img-box">
                        <img src="../../assets/image/leisure/leisure-1/step-1.jpg" alt="调色步骤">
                    </div>
                </div>

                <div class="step-item reverse">
                    <div class="step-img-box">
                        <img src="../../assets/image/leisure/leisure-1/step-2.jpg" alt="捏形步骤">
                    </div>
                    <div class="step-content">
                        <h3>捏形：水滴状叶片</h3>
                        <p>1. 将黏土搓成不同大小的圆球（小、中、大各5-6个）。</p>
                        <p>2. 搓成水滴状（一头圆一头尖）。</p>
                        <p>3. 用手指腹轻轻压扁圆头部分，让它看起来饱满圆润。</p>
                    </div>
                </div>

                <div class="step-item">
                    <div class="step-num">02</div>
                    <div class="step-content">
                        <h3>组装：花朵的绽放</h3>
                        <p>准备一个底座（圆锥形黏土）。</p>
                        <p><strong>第一层：</strong>选最小的叶片，3片围成一圈，叶尖朝上聚拢。</p>
                        <p><strong>第二层：</strong>选稍大的叶片，交错贴在第一层空隙处，角度稍微打开。</p>
                        <p><strong>外层：</strong>最大的叶片贴在最外层，呈现盛开状。</p>
                    </div>
                    <div class="step-img-box">
                        <img src="../../assets/image/leisure/leisure-1/step-3.jpg" alt="组装步骤">
                    </div>
                </div>

                <div class="step-item reverse">
                    <div class="step-img-box">
                        <img src="../../assets/image/leisure/leisure-1/step-4.jpg" alt="上妆步骤">
                    </div>
                    <div class="step-content">
                        <h3>上妆：注入灵魂</h3>
                        <p>这是最关键的一步！等待黏土半干。</p>
                        <p>用刷子蘸取少许<strong>深红色色粉</strong>，轻轻刷在叶片的<strong>尖端</strong>和<strong>边缘</strong>。</p>
                        <p class="tip">✨ 魔法时刻：你会发现原本像塑料的黏土瞬间有了植物的生命力！</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="video" class="section-block resource-section">
            <div class="section-header">
                <h2>视频跟练</h2>
                <p>Learn from the Masters</p>
            </div>

            <div class="video-grid">
                <a href="https://www.bilibili.com/video/BV1Zks7eeEbW?t=12.2" target="_blank" class="video-card">
                    <div class="video-thumb">
                        <span class="play-icon">▶</span>
                        <img src="../../assets/image/leisure/leisure-1/video-thumb-1.jpg" alt="基础多肉">
                    </div>
                    <div class="video-info">
                        <h4>基础：【粘土入门05】多肉植物-桃蛋</h4>
                        <span class="source">Bilibili · 安静的乔乔</span>
                    </div>
                </a>

                <a href="https://www.bilibili.com/video/BV1Sb4y147uk?t=58.0" target="_blank" class="video-card">
                    <div class="video-thumb">
                        <span class="play-icon">▶</span>
                        <img src="../../assets/image/leisure/leisure-1/video-thumb-2.jpg" alt="进阶拼盘">
                    </div>
                    <div class="video-info">
                        <h4>进阶：粘土多肉简单做|多肉拼盘|粘土手工</h4>
                        <span class="source">Bilibili · 三支玲</span>
                    </div>
                </a>

                <a href="https://www.bilibili.com/video/BV1zx41157VK?t=57.7" target="_blank" class="video-card">
                    <div class="video-thumb">
                        <span class="play-icon">▶</span>
                        <img src="../../assets/image/leisure/leisure-1/video-thumb-3.jpg" alt="仿真上色">
                    </div>
                    <div class="video-info">
                        <h4>硬核：粘土幼儿园 多肉上色教程</h4>
                        <span class="source">Bilibili · 蛋黄酥酥酥酥酥05</span>
                    </div>
                </a>
            </div>
        </section>

        <div class="note-box">
            <h4>💡 宿舍党提示</h4>
            <p>黏土作品怕水，请勿放在潮湿的浴室。如果想永久保存，干透后可以刷一层<strong>透明指甲油</strong>或<strong>水性光油</strong>防尘防水。</p>
        </div>

    </main>

    <footer class="craft-footer">
        <p>Created with Love & Clay | 愿你拥有片刻宁静</p>
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
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 配色：莫兰迪色系
   Sage Green: #88b04b (主色)
   Clay Brown: #c17e61 (强调)
   Cream: #fdfcf0 (背景)
   Text: #5d5c61
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
    background: rgba(253, 252, 240, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(136, 176, 75, 0.15);
    height: 4rem;
}
.dark .nav-container.scrolled { background: rgba(40, 45, 40, 0.95); }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}
.nav-title { display: flex; align-items: center; gap: 8px; font-weight: bold; font-size: 1.4rem; }
.brand-text { color: #88b04b; letter-spacing: 2px; }
.sub-text { color: #c17e61; font-family: serif; font-style: italic; }

.nav-links { display: flex; gap: 2rem; }
.nav-link { text-decoration: none; color: #5d5c61; font-weight: 500; transition: color 0.3s; }
.nav-link:hover { color: #88b04b; }

/* Hero Section */
.hero-section {
    position: relative; height: 90vh; display: flex; align-items: center; justify-content: left;
    background: #fdfcf0; overflow: hidden;
}
.hero-bg-container {
    position: absolute; width: 50%; height: 80%; right: 5%; top: 10%;
    border-radius: 30px 30px 200px 30px; overflow: hidden;
    box-shadow: 20px 20px 0px rgba(136, 176, 75, 0.2);
    z-index: 1;
}
.hero-bg { width: 100%; height: 100%; object-fit: cover; transition: transform 10s; }
.hero-section:hover .hero-bg { transform: scale(1.05); }

.hero-content {
    position: relative; z-index: 2; width: 40%; max-width: 1200px; padding: 0 2rem;
}
.tag-pill {
    background: #c17e61; color: #fff; padding: 5px 15px; border-radius: 20px;
    font-size: 0.8rem; letter-spacing: 1px; display: inline-block; margin-bottom: 1.5rem;
}
.main-title {
    font-size: 4.5rem; line-height: 1.1; color: #5d5c61; margin-bottom: 1.5rem; font-family: serif;
}
.clay-text { color: #88b04b; position: relative; z-index: 1; }
.clay-text::after {
    content: ''; position: absolute; bottom: 5px; left: 0; width: 100%; height: 15px;
    background: rgba(136, 176, 75, 0.3); z-index: -1; transform: rotate(-2deg);
}
.sub-title { font-size: 1.2rem; color: #888; margin-bottom: 3rem; line-height: 1.6; }
.start-btn {
    padding: 1rem 2.5rem; background: #88b04b; color: #fff; text-decoration: none;
    border-radius: 12px; font-weight: bold; transition: all 0.3s;
    box-shadow: 0 10px 20px rgba(136, 176, 75, 0.3);
}
.start-btn:hover { background: #6a8f3d; transform: translateY(-3px); }

/* 装饰形状 */
.floating-shape {
    position: absolute; background: rgba(193, 126, 97, 0.1); border-radius: 50%;
    z-index: 0; animation: float 6s infinite ease-in-out;
}
.shape-1 { width: 100px; height: 100px; top: 10%; left: 10%; }
.shape-2 { width: 150px; height: 150px; bottom: 10%; left: 40%; animation-delay: -3s; }

/* Main Container */
.main-container { background: #fff; position: relative; z-index: 2; border-radius: 40px 40px 0 0; margin-top: -40px; overflow: hidden; }
.dark .main-container { background: #1a1a1a; }

.section-block { padding: 6rem 2rem; max-width: 1100px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; color: #5d5c61; margin-bottom: 0.5rem; }
.dark .section-header h2 { color: #ddd; }
.section-header p { color: #88b04b; font-family: serif; font-style: italic; }

/* 1. 工具箱 */
.material-section { background: #fdfcf0; }
.dark .material-section { background: #222; }
.toolbox-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; }
.tool-card {
    background: #fff; padding: 2rem; border-radius: 16px; text-align: center;
    border: 2px dashed #e0e0e0; transition: all 0.3s;
}
.dark .tool-card { background: #2d2d2d; border-color: #444; }
.tool-card:hover { border-color: #88b04b; transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.tool-icon { font-size: 3rem; margin-bottom: 1rem; }
.tool-card h3 { margin-bottom: 0.5rem; color: #5d5c61; }
.dark .tool-card h3 { color: #ccc; }
.tool-card p { font-size: 0.9rem; color: #888; line-height: 1.5; }

/* 2. 教程时间轴 */
.tutorial-section { background: #fff; }
.dark .tutorial-section { background: #1a1a1a; }
.timeline { display: flex; flex-direction: column; gap: 4rem; position: relative; }
/* 中线 */
.timeline::before {
    content: ''; position: absolute; left: 50%; top: 0; width: 2px; height: 100%;
    background: #e0e0e0; transform: translateX(-50%);
}

.step-item { display: flex; align-items: center; gap: 4rem; position: relative; }
.step-item.reverse { flex-direction: row-reverse; }

.step-content { flex: 1; padding: 2rem; background: #f9f9f9; border-radius: 20px; position: relative; z-index: 1; }
.dark .step-content { background: #252525; }
.step-num {
    font-size: 4rem; font-weight: 900; color: rgba(136, 176, 75, 0.2);
    position: absolute; top: -30px; left: -10px; z-index: -1;
}
.step-content h3 { font-size: 1.5rem; color: #c17e61; margin-bottom: 1rem; }
.step-content p { color: #5d5c61; line-height: 1.8; margin-bottom: 0.5rem; }
.dark .step-content p { color: #aaa; }
.tip { background: #fff8e1; padding: 10px; border-radius: 8px; font-size: 0.9rem; color: #795548; margin-top: 1rem; }
.dark .tip { background: #3e2723; color: #d7ccc8; }

.step-img-box { flex: 1; height: 300px; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); z-index: 1; }
.step-img-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.step-img-box:hover img { transform: scale(1.1); }

/* 3. 视频资源 */
.resource-section { background: #fdfcf0; }
.dark .resource-section { background: #222; }
.video-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.video-card {
    display: block; text-decoration: none; border-radius: 16px; overflow: hidden; background: #fff;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s;
}
.dark .video-card { background: #2d2d2d; }
.video-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }

.video-thumb { height: 180px; position: relative; overflow: hidden; }
.video-thumb img { width: 100%; height: 100%; object-fit: cover; }
.play-icon {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 50px; height: 50px; background: rgba(0,0,0,0.6); color: #fff;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; backdrop-filter: blur(4px);
}

.video-info { padding: 1.5rem; }
.video-info h4 { color: #5d5c61; margin-bottom: 0.5rem; font-size: 1.1rem; }
.dark .video-info h4 { color: #ddd; }
.source { font-size: 0.8rem; color: #88b04b; font-weight: bold; }

.note-box {
    max-width: 800px; margin: 0 auto 6rem; padding: 2rem; background: #e8f5e9;
    border-radius: 16px; text-align: center; border: 1px solid #c8e6c9;
}
.dark .note-box { background: #1b2e1b; border-color: #2e7d32; }
.note-box h4 { color: #2e7d32; margin-bottom: 0.5rem; }
.note-box p { color: #444; }
.dark .note-box p { color: #aaa; }

.craft-footer {
    text-align: center; padding: 3rem; background: #88b04b; color: #fff;
}
.dark .craft-footer { background: #33691e; }

@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }

@media (max-width: 900px) {
    .hero-content { text-align: center; }
    .hero-bg-container { position: relative; width: 100%; height: 300px; right: 0; top: 0; border-radius: 20px; margin-bottom: 2rem; }
    .timeline::before { left: 20px; }
    .step-item, .step-item.reverse { flex-direction: column; padding-left: 40px; }
    .step-num { left: -30px; font-size: 3rem; top: 0; }
    .step-img-box { width: 100%; height: 200px; }
}
</style>