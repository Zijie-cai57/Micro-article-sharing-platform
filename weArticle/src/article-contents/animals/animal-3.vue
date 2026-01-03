<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="neon-text">DEEP</span>
                <span class="ocean-text">OCEAN</span>
            </div>

            <div class="nav-links">
                <a href="#home" class="nav-link">深渊入口</a>
                <a href="#gallery" class="nav-link">浮游图鉴</a>
                <a href="#structure" class="nav-link">生物机制</a>
                <a href="#immortal" class="nav-link">永生之谜</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton ref="themeBtnRef"></ThemeButton>
            </div>
        </div>
    </nav>

    <div id="home" class="hero-section">
        <div class="hero-overlay"></div>
        <img src="../../assets/image/animal/animal-3/01.png" alt="深海背景" class="hero-bg">
        
        <div class="hero-content">
            <h1 class="glitch-title" data-text="海洋幽灵">海洋幽灵</h1>
            <p class="subtitle">在这个星球上漂浮了 6 亿年。它们没有心脏，没有大脑，却拥有令人窒息的美丽与致命的毒素。</p>
            <a href="#gallery" class="glow-btn">潜入深渊</a>
        </div>
    </div>

    <section id="gallery" class="gallery-section">
        <div class="section-header">
            <h2>浮游图鉴</h2>
            <p>The Drifters of the Abyss</p>
        </div>
        
        <div class="grid-container">
            <div class="grid-item item-large">
                <img src="../../assets/image/animal/animal-3/02.png" alt="海月水母" class="grid-img">
                <div class="grid-overlay">
                    <h3>海月水母</h3>
                    <p>Moon Jellyfish</p>
                    <span class="tag">梦幻</span>
                </div>
            </div>
            
            <div class="grid-item">
                <div class="info-card">
                    <h3>狮鬃水母</h3>
                    <p class="en-name">Lion's Mane</p>
                    <p class="desc">世界上最大的水母，触手可长达37米，比蓝鲸还长。它们如同深海中的红色风暴，触手布满刺细胞。</p>
                </div>
            </div>

            <div class="grid-item">
                <img src="../../assets/image/animal/animal-3/03.png" alt="狮鬃水母图" class="grid-img">
            </div>

            <div class="grid-item item-wide">
                <img src="../../assets/image/animal/animal-3/04.png" alt="发光水母" class="grid-img">
                <div class="grid-overlay left-align">
                    <h3>深海烟花</h3>
                    <p>90% 的深海生物会发光，水母是其中的佼佼者。</p>
                </div>
            </div>
        </div>
    </section>

    <main class="main-layout">
        <article class="article-content">
            
            <section id="structure" class="content-block">
                <h3 class="neon-title">01. 极简的生物工程</h3>
                <p class="lead-text">
                    水母在这个星球上漂浮了 6 亿年，比恐龙还要古老。它们是进化论中“极简主义”的巅峰之作——没有心脏、血液、骨骼，甚至没有大脑。
                </p>
                
                <h4>液体骨骼 (Hydrostatic Skeleton)</h4>
                <p>
                    水母体内含水量高达 95%-98%。它们依靠<strong>“静水骨骼”</strong>支撑身体，通过伞状体边缘的环肌有节奏地收缩，将水从伞下腔喷出，从而产生反作用力推动身体前进。这种推进方式虽然缓慢，但在低雷诺数的流体环境中，却是能量转化效率最高的运动方式之一。
                </p>

                <div class="feature-box">
                    <h4>没有大脑，如何思考？</h4>
                    <p>
                        水母虽然没有集中式的大脑，但拥有一套复杂的<strong>“神经网 (Nerve Net)”</strong>。
                        而在箱水母等高级品种中，它们进化出了<strong>“感觉棍 (Rhopalia)”</strong>——这是一种位于伞缘的感官中心，包含重力传感器（平衡石）和感光点（单眼）。这意味着水母不仅能感知光暗，甚至能像飞行员一样感知“上下左右”的空间方位。
                    </p>
                </div>
            </section>

            <section id="weapon" class="content-block">
                <h3 class="neon-title">02. 微观世界的加农炮</h3>
                <p>
                    水母的触手并非随风飘荡的装饰，而是布满地雷的死亡陷阱。其核心武器是<strong>刺细胞 (Cnidocyte)</strong>。
                </p>
                
                <div class="grid-text-img">
                    <div class="text-side">
                        <p>
                            每一个刺细胞内都卷曲着一根带毒的“刺丝囊”。当猎物触碰触手时，刺细胞内的渗透压会瞬间改变，导致刺针以<strong>5,000,000 g</strong> 的加速度弹射而出——这比子弹的出膛加速度还要快，是目前已知自然界中<strong>最快的生物力学过程</strong>。
                        </p>
                        <p>
                            毒液会瞬间破坏红细胞、引起剧痛甚至心脏骤停。对于浮游生物来说，这无异于被微观核弹击中。
                        </p>
                    </div>
                    <div class="img-side">
                        <div class="highlight-card">
                            <h5>⚠️ 生存指南</h5>
                            <p>被水母蛰伤后，<strong>千万不要用淡水清洗</strong>，也不要听信谣言用尿液。淡水会改变渗透压，导致更多刺细胞爆发。</p>
                            <p><strong>正确做法：</strong>使用醋（部分种类）或海水冲洗，并小心剔除触手。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="immortal" class="content-block">
                <h3 class="neon-title">03. 逆转时间的魔法</h3>
                <div class="img-wrap">
                    <img src="../../assets/image/animal/animal-3/05.png" alt="灯塔水母" class="article-img">
                    <span class="caption">灯塔水母 (Turritopsis dohrnii)：唯一已知能逆转衰老的动物</span>
                </div>
                <p>
                    所有的生命都遵循“出生-成长-繁殖-死亡”的单行道，唯独<strong>灯塔水母</strong>掌握了掉头的各力。
                </p>
                <p>
                    普通水母在繁殖后会自然死亡，但灯塔水母在面临饥饿、物理损伤或环境危机时，会触发<strong>“细胞转分化 (Transdifferentiation)”</strong>机制。它可以将已经成熟的细胞（如肌肉细胞、神经细胞）通过基因重编程，退回到未分化的干细胞状态。
                </p>
                <blockquote class="quote-box">
                    "这就像一只蝴蝶重新变回了毛毛虫，然后再次破茧成蝶。只要不被捕食，这个循环理论上可以无限进行。"
                </blockquote>
            </section>
            
            <section id="ecology" class="content-block">
                <h3 class="neon-title">04. 黏液的崛起</h3>
                <p>
                    随着全球变暖和海洋酸化，珊瑚礁在白化，鱼类在减少，但水母却迎来了<strong>“黄金时代”</strong>。
                </p>
                <ul class="neon-list">
                    <li><strong>耐缺氧：</strong> 水母对低氧环境的耐受力远超鱼类，在死海区域也能生存。</li>
                    <li><strong>过度捕捞：</strong> 人类捕捞了金枪鱼和海龟（水母的天敌），导致水母失去了自然控制。</li>
                    <li><strong>塑料温床：</strong> 海洋塑料垃圾为水母的水螅体提供了更多的人造附着点。</li>
                </ul>
                <p>
                    科学家警告，如果不加控制，未来的海洋可能不再是“鱼类的海洋”，而变成由胶状生物统治的<strong>“黏液海洋 (Rise of Slime)”</strong>。这不仅是生态的灾难，更是对人类破坏自然的无声嘲讽。
                </p>
            </section>
        </article>

        <aside class="sidebar">
            <div class="toc-container">
                <h4>FILE INDEX</h4>
                <ul class="toc-list">
                    <li><a href="#structure" :class="{ active: activeSection === 'structure' }">01 生物结构</a></li>
                    <li><a href="#weapon" :class="{ active: activeSection === 'weapon' }">02 捕食机制</a></li>
                    <li><a href="#immortal" :class="{ active: activeSection === 'immortal' }">03 永生之谜</a></li>
                    <li><a href="#ecology" :class="{ active: activeSection === 'ecology' }">04 生态危机</a></li>
                </ul>
                <div class="sidebar-widget">
                    <h5>DATA</h5>
                    <div class="data-row">
                        <span>含水量</span>
                        <span class="data-val">95%</span>
                    </div>
                    <div class="data-row">
                        <span>出现时间</span>
                        <span class="data-val">6亿年前</span>
                    </div>
                    <div class="data-row">
                        <span>游动速度</span>
                        <span class="data-val">8 km/h</span>
                    </div>
                </div>
            </div>
        </aside>
    </main>
    
    <footer class="footer">
        <p>探索更多深海奥秘</p>
    </footer>

</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { isDark } from '../../components/themeState.js' // 1. 引入全局状态
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const activeSection = ref('');
const themeBtnRef = ref(null); // 2. 创建引用变量

const SECTIONS = ['structure', 'weapon', 'immortal', 'ecology'];
let ticking = false;

const handleScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            performScrollLogic();
            ticking = false;
        });
        ticking = true;
    }
};

const performScrollLogic = () => {
    isScrolled.value = window.scrollY > 50;
    for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= -150 && rect.top <= 300) {
                activeSection.value = section;
                break;
            }
        }
    }
};

onMounted(() => {
    // 平滑滚动逻辑
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
            behavior: 'smooth'
            });
        }
        });
    });
    window.addEventListener('scroll', handleScroll);
    
    // --- 核心修改：如果是白天，自动触发点击 ---
    if (!isDark.value) {
        // 找到组件内的 input 元素并点击
        // 这会触发 v-model 更新，也会触发 ThemeButton 内的 watch 从而播放动画
        themeBtnRef.value?.$el.querySelector('input').click();
    }
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 1. 导航栏：更加通透 */
.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.5rem;
    z-index: 1000;
    transition: all 0.4s ease;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
}

.nav-container.scrolled {
    background: rgba(4, 12, 24, 0.85); /* 深蓝黑色 */
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    height: 4rem;
}

.nav-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* 霓虹标题 */
.neon-text {
    color: #fff;
    font-weight: 800;
    font-size: 1.8rem;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}
.ocean-text {
    color: #00f2ff;
    font-weight: 300;
    margin-left: 5px;
    letter-spacing: 2px;
}

.nav-links { display: flex; gap: 2.5rem; }
.nav-link {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s;
    position: relative;
}
.nav-link:hover { color: #00f2ff; text-shadow: 0 0 8px #00f2ff; }

/* 2. Hero Section：深海氛围 */
.hero-section {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #020a16;
}

.hero-bg {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    z-index: 1;
    animation: zoomEffect 20s infinite alternate;
}

@keyframes zoomEffect {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
}

.hero-overlay {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(2,10,22,0.3), #020a16);
    z-index: 2;
}

.hero-content {
    position: relative;
    z-index: 3;
    text-align: center;
    max-width: 800px;
    padding: 0 20px;
}

.glitch-title {
    font-size: 5rem;
    color: #fff;
    font-weight: 900;
    letter-spacing: 10px;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 0px #00f2ff, -2px -2px 0px #ff00de;
}

.subtitle {
    color: #a0aec0;
    font-size: 1.2rem;
    margin-bottom: 3rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.glow-btn {
    padding: 1rem 3rem;
    border: 1px solid #00f2ff;
    color: #00f2ff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s;
    background: rgba(0, 242, 255, 0.1);
}
.glow-btn:hover {
    background: #00f2ff;
    color: #000;
    box-shadow: 0 0 20px #00f2ff;
}

/* 3. Gallery Grid：砌体布局 */
.gallery-section {
    background-color: #020a16;
    padding: 6rem 2rem;
    color: white;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}
.section-header h2 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #00f2ff, #0066ff);
    -webkit-background-clip: text;
    color: transparent;
}
.section-header p {
    color: #586980;
    letter-spacing: 4px;
    text-transform: uppercase;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 三列布局 */
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* 网格合并逻辑 */
.item-large { grid-row: span 2; } /* 纵向跨两行 */
.item-wide { grid-column: span 2; } /* 横向跨两列 */

.grid-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    background: #0b1626;
    min-height: 250px;
    transition: transform 0.3s ease;
}
.grid-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 242, 255, 0.15);
    z-index: 10;
}

.grid-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
.grid-item:hover .grid-img { transform: scale(1.05); }

/* 图片上的文字遮罩 */
.grid-overlay {
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;
    padding: 20px;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
    color: white;
}
.tag {
    font-size: 0.8rem;
    padding: 2px 8px;
    border: 1px solid #00f2ff;
    color: #00f2ff;
    border-radius: 4px;
    margin-top: 5px;
    display: inline-block;
}

/* 纯文字卡片样式 */
.info-card {
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(135deg, #0f233f, #020a16);
}
.info-card h3 { color: #fff; font-size: 1.5rem; margin: 0; }
.en-name { color: #586980; font-size: 0.9rem; margin-bottom: 1rem; }
.desc { color: #a0aec0; font-size: 0.95rem; line-height: 1.6; }

/* 4. 双栏内容布局 */
.main-layout {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    gap: 4rem;
    background-color: #020a16; /* 深色背景延续 */
    color: #e2e8f0;
}

.article-content { flex: 3; }
.sidebar { flex: 1; }

.content-block { margin-bottom: 5rem; }
.neon-title {
    font-size: 2rem;
    color: #fff;
    border-left: 4px solid #00f2ff;
    padding-left: 1rem;
    margin-bottom: 2rem;
}
.lead-text { font-size: 1.2rem; line-height: 1.8; color: #cbd5e0; margin-bottom: 2rem; }

/* 特性盒子 */
.feature-box {
    background: rgba(255, 255, 255, 0.03);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 0 12px 12px 0;
    margin: 2rem 0;
}
.feature-box h4 { color: #00f2ff; margin-top: 0; }

/* 图片包装 */
.img-wrap {
    margin: 2rem 0;
    position: relative;
}
.article-img {
    width: 100%;
    border-radius: 8px;
    opacity: 0.9;
}
.caption {
    display: block;
    text-align: center;
    color: #586980;
    font-size: 0.9rem;
    margin-top: 0.5rem;
}

/* 引用 */
.quote-box {
    font-size: 1.4rem;
    font-style: italic;
    color: #fff;
    text-align: center;
    padding: 3rem;
    border-top: 1px solid #1e293b;
    border-bottom: 1px solid #1e293b;
    margin: 3rem 0;
}

/* 侧边栏 */
.toc-container {
    position: sticky;
    top: 6rem; /* 距离顶部距离 */
    background: rgba(255, 255, 255, 0.02);
    padding: 2rem;
    border-radius: 12px;
    backdrop-filter: blur(5px);
}
.toc-list { list-style: none; padding: 0; }
.toc-list li { margin-bottom: 1rem; }
.toc-list a {
    color: #718096;
    text-decoration: none;
    transition: all 0.3s;
    display: block;
    border-left: 2px solid transparent;
    padding-left: 10px;
}
.toc-list a:hover, .toc-list a.active {
    color: #00f2ff;
    border-left-color: #00f2ff;
    padding-left: 15px;
}

.sidebar-widget {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #1e293b;
}
.sidebar-widget h5 { color: #a0aec0; margin-bottom: 0.5rem; }
.sidebar-widget p { color: #718096; font-size: 0.9rem; }

.footer {
    text-align: center;
    padding: 3rem;
    background-color: #000;
    color: #4a5568;
    font-size: 0.8rem;
    letter-spacing: 2px;
}

/* 响应式适配 */
@media (max-width: 900px) {
    .grid-container { grid-template-columns: 1fr; }
    .item-large, .item-wide { grid-column: span 1; grid-row: span 1; }
    .main-layout { flex-direction: column; }
    .sidebar { display: none; } /* 移动端隐藏侧边栏 */
    .glitch-title { font-size: 3rem; }
}

/* --- 新增样式 --- */

/* 图文混排布局 */
.grid-text-img {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin: 2rem 0;
}
.text-side { flex: 3; }
.img-side { flex: 2; }

/* 警告/高亮卡片 */
.highlight-card {
    background: rgba(255, 50, 50, 0.1); /* 红色警示微光 */
    border: 1px solid rgba(255, 50, 50, 0.3);
    padding: 1.5rem;
    border-radius: 8px;
}
.highlight-card h5 {
    color: #ff4d4d;
    margin-top: 0;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}
.highlight-card p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #ffd1d1;
}

/* 霓虹列表 */
.neon-list {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
}
.neon-list li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    color: #cbd5e0;
}
.neon-list li::before {
    content: '>';
    position: absolute;
    left: 0;
    color: #00f2ff;
    font-weight: bold;
}
.neon-list strong {
    color: #fff;
    margin-right: 0.5rem;
}

/* 侧边栏数据行 */
.data-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    border-bottom: 1px dashed #2d3748;
    padding-bottom: 0.3rem;
    font-size: 0.85rem;
    color: #718096;
}
.data-val {
    color: #00f2ff;
    font-family: monospace;
}

/* 移动端适配补充 */
@media (max-width: 768px) {
    .grid-text-img {
        flex-direction: column;
    }
    .highlight-card {
        margin-top: 1rem;
    }
}
</style>