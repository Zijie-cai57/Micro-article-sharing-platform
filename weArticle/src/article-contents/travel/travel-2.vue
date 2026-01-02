<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="iceland-text">ICELAND</span>
                <span class="aurora-text">AURORA</span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="nav-link">追光起点</a>
                <a href="#settings" class="nav-link">参数直觉</a>
                <a href="#composition" class="nav-link">构图美学</a>
                <a href="#locations" class="nav-link">机位推荐</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="aurora-bg"></div>
        <img src="../../assets/image/travel/travel-2/aurora-hero.jpg" alt="冰岛极光" class="hero-img">
        <div class="hero-overlay"></div>
        
        <div class="hero-content">
            <h1 class="main-title">
                <span class="glitch" data-text="绿色的">绿色的</span>
                <span class="glitch" data-text="奇迹">奇迹</span>
            </h1>
            <p class="sub-title">捕捉北纬 64° 的星空之舞 | 极光摄影终极指南</p>
            
            <div class="kp-indicator">
                <span class="kp-label">LIVE KP INDEX</span>
                <div class="kp-bar">
                    <div class="kp-fill" style="width: 70%"></div>
                </div>
                <span class="kp-value">KP 5 (Storm)</span>
            </div>
        </div>
    </header>

    <main class="main-container">
        
        <section id="settings" class="section-block camera-ui-section">
            <div class="section-header">
                <h2>参数直觉</h2>
                <p>The Exposure Triangle</p>
            </div>

            <div class="viewfinder-container">
                <div class="viewfinder-overlay">
                    <div class="vf-top">
                        <span>RAW</span>
                        <span>AWB</span>
                        <span>[ 999+ ]</span>
                    </div>
                    
                    <div class="vf-center">
                        <div class="setting-card">
                            <div class="icon-ring aperture">f/2.8</div>
                            <h4>光圈 (Aperture)</h4>
                            <p>最大光圈进光。推荐 f/2.8 或更大。f/4 是底线。</p>
                        </div>

                        <div class="setting-card">
                            <div class="icon-ring shutter">15"</div>
                            <h4>快门 (Shutter)</h4>
                            <p>5s - 15s。太长会导致星星拖影（星轨），太短噪点过高。</p>
                        </div>

                        <div class="setting-card">
                            <div class="icon-ring iso">1600</div>
                            <h4>感光度 (ISO)</h4>
                            <p>起步 1600，根据环境光最高可推至 6400。</p>
                        </div>
                    </div>

                    <div class="vf-bottom">
                        <div class="focus-mode">MF [ ∞ Infinity ]</div>
                        <div class="battery-level">BAT ⚠️ Cold</div>
                    </div>
                </div>
                <img src="../../assets/image/travel/travel-2/camera-bg.jpg" alt="取景背景" class="vf-bg-img">
            </div>
            
            <div class="tips-box">
                <h4>💡 关键技巧：手动对焦 (MF)</h4>
                <p>极光环境下自动对焦会失效。请切换至手动对焦，打开实时取景(Live View)，放大画面中的一颗亮星，手动旋转对焦环直到星星变成一个“实心小点”。</p>
            </div>
        </section>

        <section id="composition" class="section-block composition-section">
            <div class="section-header">
                <h2>构图美学</h2>
                <p>Composition Rules</p>
            </div>

            <div class="comp-grid">
                <div class="comp-item">
                    <img src="../../assets/image/travel/travel-2/reflection.jpg" alt="倒影构图" class="comp-img">
                    <div class="comp-desc">
                        <h3>镜像倒影</h3>
                        <p>利用冰岛平静的湖面或海滩积水。水面的倒影能让画面光量加倍，营造梦幻感。</p>
                    </div>
                </div>

                <div class="comp-item reverse">
                    <div class="comp-desc">
                        <h3>前景参照</h3>
                        <p>光拍天空是单调的。利用教会山的瀑布、黑沙滩的冰块或废弃飞机作为前景，增加照片的故事性。</p>
                    </div>
                    <img src="../../assets/image/travel/travel-2/foreground.jpg" alt="前景构图" class="comp-img">
                </div>

                <div class="comp-item">
                    <img src="../../assets/image/travel/travel-2/scale.jpg" alt="人物比例" class="comp-img">
                    <div class="comp-desc">
                        <h3>渺小人类</h3>
                        <p>让人站在画面下方（保持不动10秒！），用头灯照亮夜空，对比出大自然的宏大。</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="locations" class="section-block location-section">
            <div class="section-header">
                <h2>传奇机位</h2>
                <p>Legendary Spots</p>
            </div>

            <div class="location-cards">
                <div class="loc-card" style="--accent-color: #00ff9d;">
                    <div class="loc-bg">
                        <img src="../../assets/image/travel/travel-2/kirkjufell.jpg" alt="教会山">
                    </div>
                    <div class="loc-content">
                        <h3>Kirkjufell</h3>
                        <span>教会山</span>
                        <p>《权力的游戏》取景地。经典的瀑布+尖顶山构图。</p>
                        <a href="#" class="map-link">View Map ↗</a>
                    </div>
                </div>

                <div class="loc-card" style="--accent-color: #00d2ff;">
                    <div class="loc-bg">
                        <img src="../../assets/image/travel/travel-2/diamond-beach.jpg" alt="钻石沙滩">
                    </div>
                    <div class="loc-content">
                        <h3>Diamond Beach</h3>
                        <span>钻石沙滩</span>
                        <p>晶莹剔透的冰块散落在黑沙滩上，极光下的“碎钻”。</p>
                        <a href="#" class="map-link">View Map ↗</a>
                    </div>
                </div>

                <div class="loc-card" style="--accent-color: #a100ff;">
                    <div class="loc-bg">
                        <img src="../../assets/image/travel/travel-2/skgafoss.jpg" alt="斯科加瀑布">
                    </div>
                    <div class="loc-content">
                        <h3>Skógafoss</h3>
                        <span>斯科加瀑布</span>
                        <p>巨大的水幕。如果运气好，可以拍到极光下的双彩虹（月虹）。</p>
                        <a href="#" class="map-link">View Map ↗</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="checklist-section">
            <h3>🎒 出发前检查清单</h3>
            <div class="checklist">
                <div class="check-item">📸 广角镜头 (14mm-24mm)</div>
                <div class="check-item">🔋 备用电池 x3 (低温掉电快)</div>
                <div class="check-item">🏗️ 碳纤维三脚架 (抗强风)</div>
                <div class="check-item">🧤 触屏手套 + 暖宝宝</div>
            </div>
        </section>

    </main>

    <footer class="iceland-footer">
        <p>Chase the Light | ICELAND 2025</p>
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
    
    // 自动平滑滚动逻辑
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
/* 配色方案：
   Light Mode: 冰川白 (#f0f4f8) + 深蓝 (#1a2a3a)
   Dark Mode:  午夜蓝 (#050a14) + 极光绿 (#00ff9d) + 霓虹紫 (#a100ff)
*/

/* 全局滚动设置 */
:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.nav-container {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.4s ease;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
}
.nav-container.scrolled {
    background: rgba(5, 10, 20, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 255, 157, 0.1);
}
.dark .nav-container.scrolled { background: rgba(0, 0, 0, 0.9); }

.nav-content {
    max-width: 1400px; margin: 0 auto; padding: 0 2rem; height: 100%;
    display: flex; justify-content: space-between; align-items: center;
}

.nav-title { font-family: 'Impact', sans-serif; letter-spacing: 2px; font-size: 1.5rem; }
.iceland-text { color: #fff; }
.aurora-text { color: #00ff9d; margin-left: 5px; text-shadow: 0 0 10px rgba(0,255,157,0.5); }

.nav-links { display: flex; gap: 2rem; }
.nav-link {
    color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 500;
    transition: color 0.3s; font-size: 0.95rem;
}
.nav-link:hover { color: #00ff9d; }

/* Hero Section */
.hero-section {
    position: relative; height: 100vh; width: 100%; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    background: #000;
}
.hero-img {
    position: absolute; width: 100%; height: 100%; object-fit: cover;
    z-index: 1; opacity: 0.8;
}
/* 模拟极光动画 */
.aurora-bg {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(120deg, transparent 0%, rgba(0,255,157,0.1) 40%, rgba(161,0,255,0.1) 60%, transparent 100%);
    background-size: 200% 200%;
    z-index: 2;
    animation: auroraFlow 10s ease infinite;
    mix-blend-mode: screen;
}
@keyframes auroraFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.hero-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(circle, transparent 20%, #050a14 100%);
    z-index: 3;
}

.hero-content {
    position: relative; z-index: 4; text-align: center; color: #fff;
}

.main-title {
    font-size: 5rem; font-weight: 900; margin: 0;
    line-height: 1.1; text-transform: uppercase;
}
.glitch {
    position: relative; display: block;
    text-shadow: 2px 2px 0px #a100ff, -2px -2px 0px #00ff9d;
}

.sub-title {
    font-size: 1.2rem; letter-spacing: 3px; color: #cbd5e0; margin-top: 1.5rem;
}

/* KP 指数条 */
.kp-indicator {
    margin-top: 3rem; background: rgba(255,255,255,0.1);
    padding: 10px 20px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.2);
    display: inline-flex; align-items: center; gap: 15px; backdrop-filter: blur(5px);
}
.kp-label { font-size: 0.8rem; font-weight: bold; color: #00ff9d; }
.kp-bar { width: 100px; height: 6px; background: #333; border-radius: 3px; overflow: hidden; }
.kp-fill { height: 100%; background: linear-gradient(90deg, #00ff9d, #ff4d4d); }
.kp-value { font-size: 0.8rem; font-weight: bold; }

/* Main Container */
.main-container {
    background-color: #050a14; color: #fff; position: relative; z-index: 5;
}
.section-block { padding: 6rem 2rem; max-width: 1200px; margin: 0 auto; }

.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 3rem; margin-bottom: 0.5rem; color: #fff; }
.section-header p { color: #00ff9d; letter-spacing: 2px; text-transform: uppercase; }

/* 相机参数界面 */
.viewfinder-container {
    position: relative; width: 100%; height: 500px;
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    border: 1px solid #333;
}
.vf-bg-img {
    width: 100%; height: 100%; object-fit: cover; filter: brightness(0.4);
    transition: filter 0.5s;
}
.viewfinder-container:hover .vf-bg-img { filter: brightness(0.6); }

.viewfinder-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    padding: 2rem; display: flex; flex-direction: column; justify-content: space-between;
    z-index: 2; pointer-events: none; /* 让鼠标能穿透去触发背景hover */
}

/* 顶部信息栏 */
.vf-top { display: flex; justify-content: space-between; font-family: monospace; color: #00ff9d; font-size: 1.2rem; }

/* 中间参数圆环 */
.vf-center {
    display: flex; justify-content: center; gap: 3rem; align-items: center;
    pointer-events: auto; /* 恢复中间卡片的交互 */
}
.setting-card {
    text-align: center; width: 200px;
    background: rgba(0,0,0,0.6); backdrop-filter: blur(8px);
    padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);
    transition: transform 0.3s;
}
.setting-card:hover { transform: translateY(-10px); border-color: #00ff9d; }

.icon-ring {
    width: 80px; height: 80px; border-radius: 50%;
    border: 3px solid #fff; margin: 0 auto 1rem;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; font-weight: bold; font-family: monospace;
    box-shadow: 0 0 15px rgba(255,255,255,0.3);
}
.aperture { border-color: #ff9d00; color: #ff9d00; box-shadow: 0 0 15px rgba(255,157,0,0.3); }
.shutter { border-color: #00d2ff; color: #00d2ff; box-shadow: 0 0 15px rgba(0,210,255,0.3); }
.iso { border-color: #a100ff; color: #a100ff; box-shadow: 0 0 15px rgba(161,0,255,0.3); }

.setting-card h4 { margin: 0.5rem 0; color: #fff; }
.setting-card p { font-size: 0.8rem; color: #aaa; line-height: 1.4; }

/* 底部状态栏 */
.vf-bottom { display: flex; justify-content: space-between; font-family: monospace; color: #fff; margin-top: auto; }
.battery-level { color: #ff4d4d; animation: blink 2s infinite; }

.tips-box {
    margin-top: 2rem; background: rgba(0, 255, 157, 0.1);
    border-left: 4px solid #00ff9d; padding: 1.5rem; border-radius: 0 8px 8px 0;
}
.tips-box h4 { color: #00ff9d; margin: 0 0 0.5rem; }
.tips-box p { margin: 0; color: #ddd; }

/* 构图部分 */
.comp-grid { display: flex; flex-direction: column; gap: 4rem; }
.comp-item { display: flex; align-items: center; gap: 3rem; }
.comp-item.reverse { flex-direction: row-reverse; }

.comp-img {
    flex: 1; height: 350px; object-fit: cover; border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3); opacity: 0.8; transition: opacity 0.3s;
}
.comp-img:hover { opacity: 1; }

.comp-desc { flex: 1; }
.comp-desc h3 { font-size: 2rem; color: #fff; margin-bottom: 1rem; border-bottom: 2px solid #333; display: inline-block; }
.comp-desc p { color: #a0aec0; line-height: 1.8; }

/* 机位推荐 */
.location-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }

.loc-card {
    position: relative; height: 400px; border-radius: 16px; overflow: hidden;
    cursor: pointer; transition: transform 0.4s;
}
.loc-card:hover { transform: scale(1.02); }

.loc-bg { width: 100%; height: 100%; }
.loc-bg img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.loc-card:hover .loc-bg img { transform: scale(1.1); }

.loc-content {
    position: absolute; bottom: 0; left: 0; width: 100%; padding: 2rem;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
    color: #fff;
}
.loc-content h3 { font-size: 1.8rem; margin: 0; text-shadow: 0 0 10px var(--accent-color); }
.loc-content span { color: var(--accent-color); font-size: 0.9rem; letter-spacing: 1px; }
.loc-content p { font-size: 0.9rem; color: #ccc; margin-top: 10px; line-height: 1.4; }
.map-link {
    display: inline-block; margin-top: 1rem; color: var(--accent-color);
    text-decoration: none; font-size: 0.8rem; font-weight: bold;
}

/* 清单 */
.checklist-section {
    margin-top: 4rem; background: #0b1426; padding: 4rem 2rem; text-align: center;
}
.checklist-section h3 { font-size: 2rem; margin-bottom: 2rem; }
.checklist {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem;
}
.check-item {
    background: rgba(255,255,255,0.05); padding: 1rem 2rem; border-radius: 50px;
    border: 1px solid rgba(255,255,255,0.1); color: #00ff9d; font-weight: bold;
    transition: all 0.3s;
}
.check-item:hover { background: #00ff9d; color: #000; }

.iceland-footer {
    text-align: center; padding: 3rem; background: #000; color: #555;
    letter-spacing: 3px; font-size: 0.8rem;
}

/* 移动端适配 */
@media (max-width: 900px) {
    .viewfinder-container { height: auto; min-height: 800px; }
    .vf-center { flex-direction: column; gap: 1.5rem; }
    .comp-item, .comp-item.reverse { flex-direction: column; }
    .location-cards { grid-template-columns: 1fr; }
    .main-title { font-size: 3rem; }
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}
</style>