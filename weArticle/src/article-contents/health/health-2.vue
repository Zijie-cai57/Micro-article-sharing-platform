<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="icon">✚</span>
                <span class="brand-text">SPINE</span>
                <span class="care-text">LAB_</span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="nav-link">痛点扫描</a>
                <a href="#lab" class="nav-link">矫正档案</a>
                <a href="#guide" class="nav-link">处方解析</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-overlay"></div>
        <img src="../../assets/image/health/health-2/spine-hero.jpg" alt="脊柱健康" class="hero-bg">
        
        <div class="hero-content">
            <div class="scan-line"></div>
            <div class="status-badge">STATUS: CRITICAL</div>
            <h1 class="main-title">久坐党<br><span class="highlight">自救指南</span></h1>
            <p class="sub-title">// 检测到脊柱压力过载<br>// 正在请求访问机密档案...</p>
            <a href="#lab" class="action-btn">调取档案 [ENTER]</a>
        </div>
    </header>

    <main class="main-container">
        
        <section id="lab" class="lab-section">
            <div class="section-header">
                <h2>体态矫正档案</h2>
                <p>CORRECTION FILES // ARCHIVE_2025</p>
            </div>

            <div class="lab-container">
                <div class="control-panel">
                    <div class="panel-header">
                        <div class="led-light" :class="{ 'blink': activeIndex === -1 }"></div>
                        <span>档案索引 / INDEX</span>
                    </div>
                    
                    <div class="btn-group">
                        <button 
                            class="part-btn" 
                            :class="{ 'active': activeIndex === 0 }"
                            @click="selectPart(0)">
                            <span class="code">01.</span> 颈椎 (Cervical)
                        </button>
                        <button 
                            class="part-btn" 
                            :class="{ 'active': activeIndex === 1 }"
                            @click="selectPart(1)">
                            <span class="code">02.</span> 肩部 (Shoulder)
                        </button>
                        <button 
                            class="part-btn" 
                            :class="{ 'active': activeIndex === 2 }"
                            @click="selectPart(2)">
                            <span class="code">03.</span> 腰椎 (Lumbar)
                        </button>
                    </div>

                    <button 
                        class="reset-btn" 
                        :disabled="activeIndex === -1"
                        @click="resetArchive">
                        <span class="icon">📁</span> 重新封存档案 (RE-SEAL)
                    </button>
                    
                    <div class="system-log">
                        <p>> System Ready...</p>
                        <p v-if="activeIndex === -1">> Status: ENCRYPTED (已封存)</p>
                        <p v-else>> Accessing File: {{ parts[activeIndex].fileCode }}...</p>
                    </div>
                </div>

                <div class="card-stack">
                    
                    <div class="archive-envelope" :class="{ 'open': activeIndex !== -1 }">
                        <div class="envelope-flap"></div>
                        <div class="envelope-body">
                            <div class="top-secret-stamp">TOP SECRET</div>
                            <div class="envelope-info">
                                <h3>机密医疗档案</h3>
                                <p>SUBJECT: SPINAL CORRECTION</p>
                                <p>AUTH: DR. VUE</p>
                            </div>
                            <div class="string-tie">
                                <div class="circle c1"></div>
                                <div class="circle c2"></div>
                                <div class="string"></div>
                            </div>
                        </div>
                    </div>

                    <div 
                        v-for="(part, index) in parts" 
                        :key="index"
                        class="file-folder"
                        :class="getCardClass(index)"
                    >
                        <div class="folder-tab">
                            {{ part.bgText }}
                        </div>

                        <div class="folder-body">
                            <div class="stamp">REPAIR</div>

                            <div class="card-header">
                                <h3>{{ part.title }}</h3>
                                <div class="meta-data">
                                    <span>CODE: {{ part.fileCode }}</span>
                                    <span>RISK: {{ part.level }}</span>
                                </div>
                            </div>
                            
                            <div class="report-content">
                                <div class="section-box">
                                    <h4>[ 症状诊断 / DIAGNOSIS ]</h4>
                                    <p>{{ part.problem }}</p>
                                </div>
                                <div class="section-box highlight-box">
                                    <h4>[ 修复处方 / SOLUTION ]</h4>
                                    <p>{{ part.solution }}</p>
                                </div>
                            </div>

                            <div class="link-footer">
                                <a :href="part.link" target="_blank" class="wiki-link">
                                    🔍 搜索相关疗法：{{ part.name }} ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="guide" class="article-section">
            <div class="content-wrapper">
                <article>
                    <div class="tech-header">
                        <span class="tech-tag">REPORT #8902</span>
                        <h3 class="chapter-title">疼痛机理分析</h3>
                    </div>
                    <p class="text mono-font">
                        >> 数据显示：低头看手机（60°角）时，颈椎承重 ≈ 27kg。<br>
                        >> 长期后果：颈椎曲度变直 -> 肌肉纤维化 -> 神经压迫。
                    </p>
                    <p class="text mono-font">
                        >> 腰椎压力测试：坐姿压力系数 140%（对比站姿 100%）。<br>
                        >> 风险警告：前倾坐姿（葛优躺）压力系数飙升至 185%。
                    </p>

                    <div class="tech-header mt-5">
                        <span class="tech-tag">PROTOCOL</span>
                        <h3 class="chapter-title">日常维护协议</h3>
                    </div>
                    <div class="protocol-grid">
                        <div class="protocol-item">
                            <strong>RULE 20-20-20</strong>
                            <p>每20分钟 -> 远眺20英尺 -> 持续20秒</p>
                        </div>
                        <div class="protocol-item">
                            <strong>ERGONOMICS</strong>
                            <p>臀部坐满 + 腰部支撑 + 双脚平放</p>
                        </div>
                        <div class="protocol-item">
                            <strong>MONITOR</strong>
                            <p>视线平视屏幕顶端 1/3 处</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>

    </main>

    <footer class="health-footer">
        <p>SYSTEM OPTIMIZED | NKU SPINE LAB</p>
    </footer>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const activeIndex = ref(-1);

const parts = [
    { 
        name: '颈椎病康复训练',
        title: '拒绝“乌龟颈”', 
        level: 'LEVEL 5 (CRITICAL)',
        fileCode: 'C-SPINE-01',
        problem: '头前伸、长期低头。颈椎生理曲度变直，压迫神经导致手麻、头晕。',
        solution: '【收下巴训练】手指抵住下巴，水平向后推，感觉后脑勺向上顶，保持“双下巴”状态10秒。',
        bgText: 'CERVICAL',
        // 百度搜索链接
        link: 'https://www.baidu.com/s?wd=%E9%A2%88%E6%A4%8E%E7%97%85%E5%BA%B7%E5%A4%8D%E8%AE%AD%E7%BB%83' 
    },
    { 
        name: '圆肩驼背矫正',
        title: '拯救“圆肩驼背”', 
        level: 'LEVEL 4 (HIGH)',
        fileCode: 'SHOULDER-02',
        problem: '胸大肌过紧，背肌无力。视觉上显矮、显胖，呼吸不畅。',
        solution: '【门框拉伸】双手扶住门框两侧，身体前倾，感受胸部拉伸感。每组30秒，做3组。',
        bgText: 'SHOULDER',
        // 百度搜索链接
        link: 'https://www.baidu.com/s?wd=%E5%9C%86%E8%82%A9%E9%A9%BC%E8%83%8C%E7%9F%AB%E6%AD%A3' 
    },
    { 
        name: '腰肌劳损锻炼',
        title: '告别“腰肌劳损”', 
        level: 'LEVEL 5 (CRITICAL)',
        fileCode: 'L-SPINE-03',
        problem: '久坐不动、二郎腿。腰椎间盘压力过大，核心肌肉萎缩。',
        solution: '【麦肯基挺身】俯卧，双手撑地将上半身撑起，骨盆紧贴地面，保持腰部放松。',
        bgText: 'LUMBAR',
        // 百度搜索链接
        link: 'https://www.baidu.com/s?wd=%E8%85%B0%E8%82%8C%E5%8A%B3%E6%8D%9F%E9%94%BB%E7%82%BC' 
    }
];

const selectPart = (index) => {
    activeIndex.value = index;
};

// 归档重置功能
const resetArchive = () => {
    activeIndex.value = -1;
};

const getCardClass = (index) => {
    // 默认状态（信封盖住）：卡片全部藏在下面，不需要显示，或者叠在后面
    if (activeIndex.value === -1) {
        return 'folder-archived'; 
    }
    // 激活状态
    if (activeIndex.value === index) {
        return 'folder-active';
    }
    // 未激活状态（隐藏）
    return 'folder-hidden';
};

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
/* 风格定义：医学蓝图 + 机密档案 */
:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

.code, .meta-data, .tech-tag, .mono-font, .system-log {
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
}

/* 导航栏 */
.nav-container {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.4s ease;
    background: transparent;
    border-bottom: 1px solid rgba(0,0,0,0);
}
.nav-container.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #ddd;
    height: 4rem;
}
.dark .nav-container.scrolled { background: rgba(20, 20, 25, 0.95); border-color: #333; }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}
.nav-title { font-weight: 900; font-size: 1.4rem; display: flex; align-items: center; gap: 8px; letter-spacing: 2px; }
.brand-text { color: #2c3e50; }
.care-text { color: #00b894; background: #2c3e50; padding: 2px 6px; font-size: 1rem; }
.nav-links { display: flex; gap: 2rem; }
.nav-link { text-decoration: none; color: #555; font-weight: 600; font-size: 0.9rem; letter-spacing: 1px; }
.nav-link:hover { color: #00b894; }

/* Hero Section */
.hero-section {
    position: relative; height: 85vh; display: flex; align-items: center; justify-content: center;
    background: #000; overflow: hidden;
}
.hero-bg {
    position: absolute; width: 100%; height: 100%; object-fit: cover; opacity: 0.5;
    filter: grayscale(80%) contrast(1.2);
}
.hero-overlay {
    position: absolute; width: 100%; height: 100%;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 206, 201, 0.05) 3px);
    z-index: 1;
}
.hero-content {
    position: relative; z-index: 2; color: #fff; text-align: left;
    max-width: 1000px; width: 100%; padding: 0 2rem;
}
.status-badge {
    border: 1px solid #ff7675; color: #ff7675; display: inline-block; padding: 5px 15px;
    font-family: monospace; font-size: 0.9rem; margin-bottom: 1rem;
    animation: blink 2s infinite;
}
.main-title { font-size: 4.5rem; margin: 0; line-height: 1.1; font-weight: 900; letter-spacing: -2px; }
.highlight { color: #00cec9; -webkit-text-stroke: 1px #fff; }
.sub-title { 
    font-family: monospace; font-size: 1.1rem; margin: 2rem 0; color: #dfe6e9; 
    border-left: 3px solid #00cec9; padding-left: 1rem;
}
.action-btn {
    padding: 1rem 3rem; background: #00cec9; color: #000; text-decoration: none;
    font-weight: bold; font-family: monospace; transition: all 0.3s;
    box-shadow: 0 0 15px rgba(0, 206, 201, 0.4);
}
.action-btn:hover { background: #fff; box-shadow: 0 0 25px rgba(255,255,255,0.6); }

/* Lab Section */
.lab-section { padding: 6rem 0; background: #eef2f5; position: relative; }
.dark .lab-section { background: #121212; }
.lab-section::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-image: linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px);
    background-size: 40px 40px; opacity: 0.2; pointer-events: none;
}
.section-header { text-align: center; margin-bottom: 4rem; position: relative; z-index: 2; }
.section-header h2 { font-size: 2.5rem; color: #2c3e50; margin-bottom: 0.5rem; }
.dark .section-header h2 { color: #fff; }
.section-header p { font-family: monospace; color: #7f8c8d; letter-spacing: 2px; }

.lab-container {
    max-width: 1100px; margin: 0 auto; display: flex; gap: 4rem;
    height: 550px; padding: 0 2rem; position: relative; z-index: 2;
}

/* 左侧控制台 */
.control-panel { flex: 1; display: flex; flex-direction: column; justify-content: center; }
.panel-header { display: flex; align-items: center; gap: 10px; margin-bottom: 2rem; border-bottom: 2px solid #2c3e50; padding-bottom: 10px; }
.led-light { width: 12px; height: 12px; background: #e74c3c; border-radius: 50%; transition: all 0.3s; opacity: 0.5; }
.led-light.blink { background: #00cec9; opacity: 1; box-shadow: 0 0 10px #00cec9; animation: blink 1s infinite; }

.btn-group { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
.part-btn {
    text-align: left; padding: 1.2rem; border: 1px solid #bdc3c7; background: #fff;
    cursor: pointer; font-size: 1rem; color: #2c3e50; font-family: monospace;
    transition: all 0.2s; position: relative; overflow: hidden;
}
.part-btn:hover { background: #f1f2f6; border-color: #2c3e50; }
.part-btn.active {
    background: #2c3e50; color: #00cec9; border-color: #2c3e50;
    box-shadow: 4px 4px 0px rgba(0,0,0,0.2); transform: translate(-2px, -2px);
}

/* 重置按钮 */
.reset-btn {
    padding: 1rem; background: #95a5a6; color: #fff; border: none; cursor: pointer;
    font-family: monospace; font-weight: bold; border-radius: 4px;
    transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 10px;
}
.reset-btn:hover:not(:disabled) { background: #e74c3c; transform: translateY(-2px); }
.reset-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.system-log { 
    margin-top: 2rem; background: #000; color: #00cec9; padding: 1rem; 
    font-size: 0.8rem; border-radius: 4px; border: 1px solid #333; height: 100px;
}

/* 档案夹堆叠区 */
.card-stack { flex: 1.5; position: relative; perspective: 1000px; }

/* --- 绝密档案袋样式 --- */
.archive-envelope {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: #d4c5a3; /* 档案袋棕色 */
    border-radius: 5px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 20; /* 最高层级 */
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    border: 2px solid #bba580;
    transform-origin: bottom center;
}

.archive-envelope.open {
    transform: translateY(120%) rotate(-5deg); /* 打开时滑到底部 */
    opacity: 0;
    pointer-events: none;
}

.top-secret-stamp {
    font-size: 3rem; font-weight: 900; color: #c0392b; border: 5px double #c0392b;
    padding: 10px 30px; transform: rotate(-10deg); opacity: 0.8; margin-bottom: 2rem;
    font-family: 'Impact', sans-serif; letter-spacing: 5px;
}
.envelope-info { text-align: center; font-family: monospace; color: #5d4037; }
.envelope-info h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }

/* 档案袋系绳装饰 */
.string-tie {
    margin-top: 3rem; position: relative; width: 100px; height: 150px;
}
.circle { width: 20px; height: 20px; background: #8d6e63; border-radius: 50%; position: absolute; left: 40px; }
.c1 { top: 0; }
.c2 { bottom: 0; }
.string {
    position: absolute; top: 10px; left: 49px; width: 2px; height: 130px; background: #a1887f;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
}

/* 档案文件夹样式 */
.file-folder {
    position: absolute; width: 100%; height: 100%;
    display: flex; flex-direction: column;
    transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    transform-origin: bottom center;
}

.folder-tab {
    width: 120px; height: 35px; background: #f1c40f; border-radius: 10px 10px 0 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.8rem; font-weight: bold; color: #2f3542;
    position: absolute; top: -35px; left: 0;
}

.folder-body {
    background: #fdfbf7; width: 100%; height: 100%;
    border-radius: 0 10px 10px 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    padding: 2.5rem; position: relative; border-top: 4px solid #f1c40f;
    background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size: 20px 20px;
}

/* 状态逻辑 */
.folder-archived {
    /* 在档案袋里时，也保持在原位，只是层级在袋子下面 */
    transform: scale(0.95); z-index: 1; opacity: 1;
}

.folder-active {
    transform: scale(1) translateY(0);
    filter: none; opacity: 1; z-index: 10;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

.folder-hidden {
    transform: scale(0.9) translateY(20px) rotate(2deg);
    opacity: 0; pointer-events: none; z-index: 0;
}

/* 内容样式 */
.stamp {
    position: absolute; top: 20px; right: 20px;
    border: 3px double #e74c3c; color: #e74c3c; padding: 5px 15px;
    font-weight: 900; font-family: monospace; transform: rotate(-15deg); font-size: 1.2rem;
}

.card-header h3 { font-size: 2rem; color: #2c3e50; margin: 0 0 0.5rem 0; font-family: serif; }
.meta-data { font-size: 0.8rem; color: #7f8c8d; margin-bottom: 2rem; border-bottom: 1px solid #ccc; padding-bottom: 1rem; }
.section-box { margin-bottom: 1.5rem; }
.section-box h4 { margin: 0 0 0.5rem 0; font-size: 0.9rem; color: #95a5a6; font-family: monospace; }
.section-box p { margin: 0; font-size: 1rem; line-height: 1.6; color: #2c3e50; text-align: justify; }
.highlight-box { background: rgba(0, 206, 201, 0.1); padding: 1rem; border-left: 3px solid #00cec9; }

.link-footer { margin-top: auto; text-align: right; }
.wiki-link {
    color: #2980b9; font-size: 0.9rem; text-decoration: none; border-bottom: 1px dashed #2980b9; font-family: monospace;
}
.wiki-link:hover { background: #2980b9; color: #fff; }

/* 文章区 */
.article-section { padding: 4rem 2rem; background: #fff; border-top: 5px solid #2c3e50; }
.content-wrapper { max-width: 800px; margin: 0 auto; }
.tech-header { border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 1.5rem; margin-top: 2rem; }
.tech-tag { background: #000; color: #fff; padding: 2px 8px; font-size: 0.8rem; font-family: monospace; }
.chapter-title { font-size: 1.5rem; margin: 5px 0 0 0; color: #000; }
.text { font-size: 1.05rem; line-height: 1.8; color: #333; margin-bottom: 1rem; }
.protocol-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; }
.protocol-item { border: 1px solid #000; padding: 1.5rem; text-align: center; }
.protocol-item strong { display: block; margin-bottom: 0.5rem; font-family: monospace; font-size: 1.1rem; }
.protocol-item p { margin: 0; font-size: 0.9rem; color: #555; }
.health-footer { text-align: center; padding: 3rem; background: #000; color: #00cec9; font-family: monospace; }

@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

@media (max-width: 900px) {
    .lab-container { flex-direction: column; height: auto; }
    .card-stack { height: 500px; }
    .protocol-grid { grid-template-columns: 1fr; }
    .main-title { font-size: 3rem; }
}
</style>