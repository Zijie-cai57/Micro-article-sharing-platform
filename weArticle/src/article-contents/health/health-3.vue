<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="icon">👁️</span>
                <span class="brand-text">VISION</span>
                <span class="care-text">GUARD</span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="nav-link">视界</a>
                <a href="#crisis" class="nav-link">危机</a>
                <a href="#solution" class="nav-link">方案</a>
                <a href="#quiz" class="nav-link">测验</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-overlay"></div>
        <img src="../../assets/image/health/health-3/eye-hero.jpg" alt="护眼壁纸" class="hero-bg">
        
        <div class="hero-content">
            <h1 class="main-title">别让世界<br><span class="blur-text">越来越模糊</span></h1>
            <p class="sub-title">干涩、刺痛、视力下降？<br>这是身体向你发出的最后警告。</p>
            <a href="#crisis" class="action-btn">查看过度用眼危害 ↓</a>
        </div>
    </header>

    <main class="main-container">
        
        <section id="crisis" class="section-block warning-section">
            <div class="section-header">
                <h2>隐形杀手：CVS 综合症</h2>
                <p>Computer Vision Syndrome</p>
            </div>

            <div class="warning-grid">
                <div class="warning-card">
                    <div class="icon-box">📱</div>
                    <h3>寝室“关灯党”</h3>
                    <p>很多大学生习惯睡前关灯刷手机。黑暗中屏幕强光直射，会导致瞳孔长时间散大，不仅引发眼压升高，更可能诱发<strong>青光眼</strong>甚至永久性视力损伤。</p>
                    <a href="https://baike.baidu.com/item/%E9%9D%92%E5%85%89%E7%9C%BC" target="_blank" class="ref-link">参阅：青光眼诱因 (百度百科) ↗</a>
                </div>

                <div class="warning-card">
                    <div class="icon-box">💻</div>
                    <h3>瞬目减少</h3>
                    <p>正常人每分钟眨眼 15-20 次，但在写论文、打游戏专注盯着屏幕时，眨眼次数会骤降至 <strong>5-7 次</strong>。这导致泪膜破裂，角膜直接暴露在空气中，引发不可逆的干眼症。</p>
                    <a href="https://baike.baidu.com/item/%E5%B9%B2%E7%9C%BC%E7%97%87" target="_blank" class="ref-link">参阅：干眼症病理 (百度百科) ↗</a>
                </div>
            </div>
        </section>

        <section id="solution" class="section-block solution-section">
            <div class="section-header">
                <h2>科学修复方案</h2>
                <p>Scientific Protocols</p>
            </div>

            <div class="method-list">
                <div class="method-item">
                    <div class="method-num">01</div>
                    <div class="method-content">
                        <h3>20-20-20 法则</h3>
                        <p>这是美国视光协会 (AOA) 推荐的黄金法则：每用眼 <strong>20分钟</strong>，向 <strong>20英尺</strong> (约6米) 远处眺望，持续 <strong>20秒</strong>。这能有效放松睫状肌，防止痉挛。</p>
                        <a href="https://baike.baidu.com/item/%E2%80%9C20%E2%80%9420%E2%80%9420%E2%80%9D%E5%8F%A3%E8%AF%80/50064160?fromModule=search-result_lemma" target="_blank" class="source-badge">🔍 搜索：20-20-20护眼法则</a>
                    </div>
                </div>

                <div class="method-item">
                    <div class="method-num">02</div>
                    <div class="method-content">
                        <h3>人工泪液的选择</h3>
                        <p>眼药水不能乱滴！许多网红眼药水含有防腐剂（苯扎氯铵）和收缩血管成分，长期使用会加重病情。请认准<strong>“不含防腐剂”</strong>的单支装人工泪液（主要成分为玻璃酸钠）。</p>
                        <a href="https://www.baidu.com/s?wd=%E7%8E%BB%E7%92%83%E9%85%B8%E9%92%A0%E6%BB%B4%E7%9C%BC%E6%B6%B2" target="_blank" class="source-badge">🔍 搜索：玻璃酸钠</a>
                    </div>
                </div>

                <div class="method-item">
                    <div class="method-num">03</div>
                    <div class="method-content">
                        <h3>热敷 SPAS</h3>
                        <p>睑板腺堵塞是干眼的主因。每天晚上使用 40℃-42℃ 的热毛巾或蒸汽眼罩热敷 10-15 分钟，可以融化睑板腺油脂，恢复泪膜稳定。</p>
                        <a href="https://health.baidu.com/m/detail/ar_6143129731430695937" target="_blank" class="source-badge">🔍 搜索：眼部SPAS</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="quiz" class="section-block game-section">
            <div class="section-header">
                <h2>视力知识测试</h2>
                <p>Match The Correct Solution</p>
            </div>

            <div class="game-instruction">
                👇 点击左侧的 <span class="highlight">症状</span>，然后点击右侧对应的 <span class="highlight">对策</span> 进行连线
            </div>

            <div class="match-game-container" ref="gameContainer">
                <svg class="connections-layer">
                    <path v-for="(line, index) in activeLines" 
                          :key="'line-'+index" 
                          :d="line.path" 
                          stroke="#4caf50" 
                          stroke-width="3" 
                          fill="none"
                          class="animated-line"/>
                </svg>

                <div class="columns-wrapper">
                    <div class="column left-col">
                        <div v-for="(q, index) in questions" 
                             :key="q.id"
                             class="game-card question-card"
                             :class="{ 'selected': currentSelection === q.id, 'solved': isSolved(q.id) }"
                             @click="selectQuestion(q.id, index)"
                             ref="questionRefs">
                            <span class="dot">●</span>
                            {{ q.text }}
                        </div>
                    </div>

                    <div class="column right-col">
                        <div v-for="(a, index) in answers" 
                             :key="a.id"
                             class="game-card answer-card"
                             :class="{ 'solved': isSolved(a.id) }"
                             @click="selectAnswer(a.id, index)"
                             ref="answerRefs">
                            {{ a.text }}
                            <span class="dot">●</span>
                        </div>
                    </div>
                </div>
                
                <div class="success-message" v-if="allSolved">
                    🎉 恭喜！你已经掌握了科学护眼的精髓。
                </div>
            </div>
        </section>

    </main>

    <footer class="health-footer">
        <p>Eyes are the window to the soul | PROTECT THEM</p>
    </footer>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, onMounted, onUnmounted, reactive, nextTick } from 'vue';

const isScrolled = ref(false);

// --- 游戏数据 ---
const questions = [
    { id: 1, text: '长时间盯着屏幕' },
    { id: 2, text: '感觉眼睛干涩沙磨' },
    { id: 3, text: '必须熬夜赶论文' },
    { id: 4, text: '看不清远处物体' }
];

// 答案顺序打乱，增加游戏性
const answers = [
    { id: 3, text: '开台灯+屏幕调暖色' },
    { id: 1, text: '20-20-20 法则' },
    { id: 4, text: '多做户外运动' },
    { id: 2, text: '人工泪液+热敷' }
];

// --- 游戏逻辑 ---
const currentSelection = ref(null); // 当前选中的问题ID
const solvedPairs = reactive([]);   // 已解决的配对 [id, id, ...]
const activeLines = reactive([]);   // 存储连线坐标路径
const questionRefs = ref([]);       // DOM 引用
const answerRefs = ref([]);         // DOM 引用
const gameContainer = ref(null);    // 容器引用
const allSolved = ref(false);

const isSolved = (id) => solvedPairs.includes(id);

// 1. 点击左侧问题
const selectQuestion = (id, index) => {
    if (isSolved(id)) return; // 已解决的不能点
    currentSelection.value = id;
};

// 2. 点击右侧答案
const selectAnswer = (id, index) => {
    if (isSolved(id)) return;
    
    if (currentSelection.value === id) {
        // 配对成功！
        solvedPairs.push(id);
        drawLine(id);
        currentSelection.value = null;
        
        // 检查是否全部完成
        if (solvedPairs.length === questions.length) {
            setTimeout(() => { allSolved.value = true; }, 500);
        }
    } else {
        // 配对失败：这里可以加个震动效果，暂时省略
        // alert('不匹配，请重试'); // 或者重置选择
        currentSelection.value = null;
    }
};

// 3. 绘制连线的核心逻辑
const drawLine = async (id) => {
    await nextTick(); // 等待DOM更新
    
    // 找到对应的 DOM 元素
    // 注意：questions 和 answers 数组顺序不同，需要通过 id 查找 index
    const qIndex = questions.findIndex(q => q.id === id);
    const aIndex = answers.findIndex(a => a.id === id); // 这里的index是打乱后的视觉顺序
    
    const qEl = questionRefs.value[qIndex];
    const aEl = answerRefs.value[aIndex];
    const container = gameContainer.value;

    if (!qEl || !aEl || !container) return;

    // 获取相对坐标
    const containerRect = container.getBoundingClientRect();
    const qRect = qEl.getBoundingClientRect();
    const aRect = aEl.getBoundingClientRect();

    // 起点：左侧卡片的右边缘中心
    const x1 = qRect.right - containerRect.left;
    const y1 = qRect.top + qRect.height / 2 - containerRect.top;

    // 终点：右侧卡片的左边缘中心
    const x2 = aRect.left - containerRect.left;
    const y2 = aRect.top + aRect.height / 2 - containerRect.top;

    // 贝塞尔曲线控制点 (让线弯曲一点更优雅)
    const c1x = x1 + 50;
    const c1y = y1;
    const c2x = x2 - 50;
    const c2y = y2;

    const pathString = `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;
    
    activeLines.push({ path: pathString });
};

// 滚动监听
const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

// 窗口大小改变时，线条位置会错乱，简单处理：清空连线重置 (实际项目中可以重新计算)
const handleResize = () => {
    // 简单起见，这里不做复杂的重绘逻辑，保持连线存在但位置可能微偏
    // 完美方案是重新调用 drawLine 对所有 solvedPairs 遍历
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* 配色：
   Eye Green: #4caf50
   Mint: #e8f5e9
   Dark Text: #1b5e20
*/

:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.nav-container {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.4s ease;
    background: rgba(255, 255, 255, 0);
}
.nav-container.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    height: 4rem;
}
.dark .nav-container.scrolled { background: rgba(20, 30, 20, 0.95); }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}
.nav-title { font-weight: 800; font-size: 1.4rem; display: flex; align-items: center; gap: 8px; }
.brand-text { color: #2e7d32; }
.care-text { color: #fff; background: #2e7d32; padding: 2px 6px; border-radius: 4px; font-size: 1rem; }

.nav-links { display: flex; gap: 2rem; }
.nav-link { text-decoration: none; color: #555; font-weight: 500; transition: color 0.3s; }
.nav-link:hover { color: #2e7d32; }

/* Hero Section */
.hero-section {
    position: relative; height: 90vh; display: flex; align-items: center; justify-content: center;
    background: #000; overflow: hidden;
}
.hero-bg {
    position: absolute; width: 100%; height: 100%; object-fit: cover; opacity: 0.7;
}
.hero-overlay {
    position: absolute; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
}
.hero-content {
    position: relative; z-index: 2; color: #fff; text-align: center; max-width: 800px;
}
.main-title { font-size: 4rem; margin: 0; line-height: 1.2; font-weight: 900; }
/* 模糊文字特效 */
.blur-text {
    color: rgba(255,255,255,0.8);
    text-shadow: 0 0 10px rgba(255,255,255,0.8);
    animation: clearUp 3s infinite alternate;
}
@keyframes clearUp {
    0% { filter: blur(5px); opacity: 0.5; }
    100% { filter: blur(0px); opacity: 1; }
}

.sub-title { font-size: 1.2rem; margin: 2rem 0; color: #e8f5e9; }
.action-btn {
    padding: 1rem 3rem; background: #4caf50; color: #fff; text-decoration: none;
    border-radius: 50px; font-weight: bold; transition: all 0.3s;
}
.action-btn:hover { background: #66bb6a; transform: scale(1.05); }

/* Common Section */
.section-block { padding: 6rem 2rem; max-width: 1000px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; color: #1b5e20; margin-bottom: 0.5rem; }
.dark .section-header h2 { color: #81c784; }
.section-header p { color: #888; letter-spacing: 2px; }

/* 1. 危机部分 */
.warning-section { background: #fff5f5; border-radius: 20px; margin-top: -50px; position: relative; z-index: 10; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.dark .warning-section { background: #2c2020; }

.warning-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
.warning-card { text-align: center; padding: 2rem; }
.icon-box { font-size: 4rem; margin-bottom: 1rem; }
.warning-card h3 { color: #c62828; margin-bottom: 1rem; }
.warning-card p { color: #555; line-height: 1.6; margin-bottom: 1rem; text-align: justify; }
.dark .warning-card p { color: #bbb; }
.ref-link { color: #c62828; font-size: 0.9rem; text-decoration: underline; }

/* 2. 方案部分 */
.method-list { display: flex; flex-direction: column; gap: 2rem; }
.method-item {
    display: flex; gap: 2rem; background: #e8f5e9; padding: 2rem; border-radius: 12px;
    transition: transform 0.3s;
}
.dark .method-item { background: #1b2e1b; }
.method-item:hover { transform: translateX(10px); }

.method-num {
    font-size: 3rem; font-weight: 900; color: #a5d6a7; line-height: 1;
}
.method-content h3 { color: #2e7d32; margin: 0 0 0.5rem 0; }
.dark .method-content h3 { color: #81c784; }
.method-content p { color: #444; margin-bottom: 1rem; }
.dark .method-content p { color: #ccc; }
.source-badge {
    display: inline-block; background: #fff; color: #2e7d32; padding: 4px 10px;
    border-radius: 4px; font-size: 0.8rem; text-decoration: none; border: 1px solid #2e7d32;
}

/* 3. 游戏部分 (核心交互) */
.game-section { padding-bottom: 8rem; }
.game-instruction { text-align: center; margin-bottom: 2rem; color: #666; }
.highlight { color: #4caf50; font-weight: bold; }

.match-game-container {
    position: relative; padding: 2rem; background: #f9f9f9; border-radius: 20px;
    border: 2px dashed #ddd; min-height: 400px;
}
.dark .match-game-container { background: #1a1a1a; border-color: #333; }

/* SVG 层 */
.connections-layer {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 1; /* 在卡片下面，背景上面 */
}
.animated-line {
    stroke-dasharray: 1000; stroke-dashoffset: 1000;
    animation: drawLine 1s forwards;
}
@keyframes drawLine { to { stroke-dashoffset: 0; } }

.columns-wrapper {
    display: flex; justify-content: space-between; position: relative; z-index: 2;
}
.column { width: 40%; display: flex; flex-direction: column; gap: 2rem; }

/* 游戏卡片 */
.game-card {
    background: #fff; padding: 1.5rem; border-radius: 10px; cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05); transition: all 0.3s;
    border: 2px solid transparent; font-weight: 500; color: #333;
    display: flex; align-items: center; justify-content: space-between;
}
.dark .game-card { background: #2d2d2d; color: #eee; }

.game-card:hover { transform: translateY(-3px); box-shadow: 0 8px 15px rgba(0,0,0,0.1); }

/* 选中状态 */
.game-card.selected { border-color: #4caf50; background: #e8f5e9; }
.dark .game-card.selected { background: #1b2e1b; }

/* 已解决状态 */
.game-card.solved {
    background: #4caf50; color: #fff; border-color: #4caf50; cursor: default;
}
.dot { font-size: 0.8rem; color: #ccc; }
.game-card.solved .dot { color: #fff; }

.success-message {
    text-align: center; margin-top: 3rem; font-size: 1.5rem; color: #2e7d32;
    font-weight: bold; animation: popIn 0.5s;
}
@keyframes popIn { from { transform: scale(0); } to { transform: scale(1); } }

.health-footer { text-align: center; padding: 3rem; background: #1b5e20; color: #a5d6a7; }

@media (max-width: 768px) {
    .warning-grid { grid-template-columns: 1fr; }
    .method-item { flex-direction: column; gap: 1rem; }
    /* 移动端游戏调整：可能需要改为上下排列或简化，这里保持左右但字体缩小 */
    .game-card { padding: 1rem; font-size: 0.9rem; }
}
</style>