<template>
    <nav class="frisbee-nav" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="brand">
                <span class="icon spin-icon">🥏</span>
                <span class="text">ULTIMATE<span class="highlight">CAMPUS</span></span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="link">开场</a>
                <a href="#intro" class="link">规则</a>
                <a href="#skills" class="link">技巧</a>
                <a href="#game" class="link">挑战</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-bg-pattern"></div>
        <img src="../../assets/image/leisure/leisure-4/frisbee-hero.jpg" alt="校园飞盘" class="hero-bg">
        
        <div class="hero-content">
            <div class="tag-badge">ZERO BARRIER SPORTS</div>
            <h1 class="main-title">盘不落地<br><span class="outline-text">永不放弃</span></h1>
            <p class="sub-title">没有裁判，拒绝身体接触。<br>这不仅仅是一项运动，更是一种社交语言。</p>
            <a href="#game" class="action-btn">进入投掷训练 ⚡️</a>
        </div>

        <div class="floating-disc d1"></div>
        <div class="floating-disc d2"></div>
    </header>

    <main class="main-container">
        
        <section id="intro" class="section-block intro-section">
            <div class="section-header">
                <h2>为什么风靡校园？</h2>
                <p>The Spirit of the Game</p>
            </div>

            <div class="feature-grid">
                <div class="feature-card">
                    <div class="card-icon">🤝</div>
                    <h3>极强社交属性</h3>
                    <p>男女混合组队，没有激烈的身体对抗。一场比赛下来，你可能会认识隔壁班甚至隔壁学校的新朋友。</p>
                </div>
                <div class="feature-card">
                    <div class="card-icon">🕊️</div>
                    <h3>飞盘精神</h3>
                    <p><strong>自我裁决 (Self-Officiating)</strong> 是飞盘的核心。没有裁判，争议由双方球员友好协商解决，这里只有尊重。</p>
                </div>
                <div class="feature-card">
                    <div class="card-icon">🏃</div>
                    <h3>高效燃脂</h3>
                    <p>这是一项结合了足球的跑位、篮球的跳跃和美式足球得分的运动。不知不觉中，你已经跑了5公里。</p>
                </div>
            </div>
        </section>

        <section id="skills" class="section-block skill-section">
            <div class="section-header">
                <h2>新手两招鲜</h2>
                <p>Core Techniques</p>
            </div>

            <div class="skill-container">
                <div class="skill-box backhand">
                    <div class="skill-img">
                        <img src="../../assets/image/leisure/leisure-4/backhand.jpg" alt="反手投掷">
                        <div class="skill-tag">Backhand</div>
                    </div>
                    <div class="skill-info">
                        <h3>反手投掷</h3>
                        <p>最基础的动作。侧身站立，手腕向内卷曲，利用腰部旋转带动手臂，像抽鞭子一样将飞盘甩出。</p>
                        <div class="key-point">💡 要点：手腕发力，保持飞盘水平。</div>
                    </div>
                </div>

                <div class="skill-box forehand">
                    <div class="skill-info">
                        <h3>正手投掷</h3>
                        <p>进阶必备。类似打水漂的动作。主要靠中指和食指扣住盘沿，手腕向外发力，动作隐蔽且出手快。</p>
                        <div class="key-point">💡 要点：肘部贴近身体，靠手腕抖动。</div>
                    </div>
                    <div class="skill-img">
                        <img src="../../assets/image/leisure/leisure-4/forehand.jpg" alt="正手投掷">
                        <div class="skill-tag">Forehand</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="game" class="section-block game-section">
            <div class="section-header">
                <h2>极限投掷挑战</h2>
                <p>Ultimate Tosser Mini-Game</p>
            </div>

            <div class="game-container">
                <div class="field-board">
                    <div class="score-board">
                        <div class="score-item">SCORE: <span class="val">{{ score }}</span></div>
                        <div class="score-item">COMBO: <span class="val highlight">x{{ combo }}</span></div>
                    </div>

                    <div class="target-zone">
                        <div class="teammate" :class="{ 'catching': gameState === 'success' }">🙋‍♂️</div>
                        <div class="target-ring"></div>
                    </div>

                    <div 
                        class="game-disc" 
                        :class="discClass"
                        :style="discStyle"
                    >
                        🥏
                    </div>

                    <div class="player-zone">
                        <div class="player">🏃</div>
                    </div>

                    <div class="game-message" v-if="message" :class="messageType">
                        {{ message }}
                    </div>
                </div>

                <div class="control-panel">
                    <p class="instruction">👇 点击 <span class="btn-text">THROW</span> 让光标停在绿色区域！</p>
                    
                    <div class="power-bar-wrapper">
                        <div class="power-bar">
                            <div class="zone zone-bad-left"></div>
                            <div class="zone zone-ok-left"></div>
                            <div class="zone zone-perfect"></div> <div class="zone zone-ok-right"></div>
                            <div class="zone zone-bad-right"></div>
                        </div>
                        <div class="cursor" :style="{ left: cursorPosition + '%' }">▼</div>
                    </div>

                    <button 
                        class="throw-btn" 
                        @mousedown="handleAction" 
                        @touchstart.prevent="handleAction"
                        :disabled="gameState === 'flying'"
                    >
                        {{ gameState === 'idle' ? 'THROW!' : 'RESET...' }}
                    </button>
                </div>
            </div>
        </section>

    </main>

    <footer class="frisbee-footer">
        <p>Spirit of the Game | 友谊第一，比赛第二</p>
    </footer>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue';

const isScrolled = ref(false);

// --- 游戏逻辑 ---
const score = ref(0);
const combo = ref(0);
const gameState = ref('idle'); // idle, flying, success, fail
const cursorPosition = ref(50); // 0 - 100
const moveDirection = ref(1); // 1 (right) or -1 (left)
const moveSpeed = ref(1.5); // 速度
let gameLoopId = null;

const message = ref('');
const messageType = ref('');

// 飞盘动画样式
const discStyle = ref({});
const discClass = ref('');

// 启动光标循环
const startGameLoop = () => {
    if (gameState.value !== 'idle') return;
    
    // 简单的往返运动
    cursorPosition.value += moveSpeed.value * moveDirection.value;
    
    if (cursorPosition.value >= 98 || cursorPosition.value <= 2) {
        moveDirection.value *= -1;
    }
    
    gameLoopId = requestAnimationFrame(startGameLoop);
};

// 玩家点击按钮
const handleAction = () => {
    if (gameState.value === 'idle') {
        throwDisc();
    } 
    // 如果正在飞行，按钮禁用，等待动画结束自动重置或手动重置逻辑(这里简化为动画后自动重置)
};

const throwDisc = () => {
    cancelAnimationFrame(gameLoopId);
    gameState.value = 'flying';
    
    // 计算结果 (50是中心)
    // 完美区间: 45 - 55 (10%)
    // 良好区间: 35 - 65 (30%)
    // 失败区间: 其他
    const pos = cursorPosition.value;
    const deviation = pos - 50; // 偏差值
    
    let result = ''; // perfect, good, miss
    
    if (Math.abs(deviation) <= 5) {
        result = 'perfect';
    } else if (Math.abs(deviation) <= 15) {
        result = 'good';
    } else {
        result = 'miss';
    }
    
    // 触发动画
    animateDisc(result, deviation);
};

const animateDisc = (result, deviation) => {
    // 设置飞盘飞出的终点
    // X轴偏移：deviation * 系数 (放大偏差效果)
    const xOffset = Math.PI/180*deviation*300;
     
    
    // 基础飞行样式
    discStyle.value = {
        transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: `translate(${xOffset}px, -300px) scale(0.5) rotate(720deg)`,
        opacity: 1
    };
    
    if (result === 'miss') {
        // 失败：飞得更远或更偏，最后掉落
        discClass.value = 'fly-miss';
        message.value = 'MISS... 偏出界外!';
        messageType.value = 'msg-bad';
        combo.value = 0;
        
        setTimeout(() => {
            gameState.value = 'fail';
        }, 1000);
        
    } else {
        // 成功
        discClass.value = 'fly-success';
        if (result === 'perfect') {
            score.value += 10 + combo.value * 2;
            combo.value++;
            message.value = 'PERFECT THROW! 完美传球!';
            messageType.value = 'msg-perfect';
            // 速度加快，增加难度
            if (moveSpeed.value < 3.5) moveSpeed.value += 0.2;
        } else {
            score.value += 5;
            combo.value = 0; // 普通球断连击 (或者保留，看设计，这里断一下)
            message.value = 'GOOD! 接到了!';
            messageType.value = 'msg-good';
        }
        
        setTimeout(() => {
            gameState.value = 'success';
        }, 1500);
    }
    
    // 2秒后重置
    setTimeout(resetGame, 2000);
};

const resetGame = () => {
    gameState.value = 'idle';
    discStyle.value = { transform: 'translate(0, 0) scale(1) rotate(0deg)' };
    discClass.value = '';
    message.value = '';
    // 重新开始循环
    startGameLoop();
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    startGameLoop();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    cancelAnimationFrame(gameLoopId);
});
</script>

<style scoped>
/* 配色：活力运动
   Grass Green: #76c893
   Track Red: #ff4d4d
   Sky Blue: #38b6ff
   Dark: #1a1a1a
*/

:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.frisbee-nav {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.4s ease;
    background: transparent;
}
.frisbee-nav.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    height: 4rem;
}
.dark .frisbee-nav.scrolled { background: rgba(30, 30, 30, 0.95); }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}
.brand { font-weight: 900; font-size: 1.4rem; display: flex; align-items: center; gap: 8px; }
.spin-icon { animation: spin 5s linear infinite; display: inline-block; }
.brand .text { color: #333; letter-spacing: 1px; font-style: italic; }
.dark .brand .text { color: #eee; }
.brand .highlight { color: #76c893; }

.nav-links { display: flex; gap: 2rem; }
.link { text-decoration: none; color: #555; font-weight: bold; transition: color 0.3s; }
.link:hover { color: #38b6ff; }

/* Hero Section */
.hero-section {
    position: relative; height: 90vh; display: flex; align-items: center; justify-content: center;
    background: #000; overflow: hidden;
}
.hero-bg {
    position: absolute; width: 100%; height: 100%; object-fit: cover; opacity: 0.8;
}
.hero-overlay {
    position: absolute; width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(56, 182, 255, 0.3) 0%, rgba(118, 200, 147, 0.3) 100%);
    z-index: 1;
}
.hero-content {
    position: relative; z-index: 3; text-align: center; color: #fff;
}
.tag-badge {
    background: #ff4d4d; color: #fff; padding: 5px 15px; border-radius: 50px;
    font-size: 0.9rem; font-weight: bold; display: inline-block; margin-bottom: 1.5rem;
    letter-spacing: 2px;
}
.main-title { font-size: 5rem; line-height: 1.1; font-weight: 900; margin-bottom: 1.5rem; text-shadow: 0 4px 20px rgba(0,0,0,0.3); }
.outline-text {
    -webkit-text-stroke: 2px #fff; color: transparent;
}
.sub-title { font-size: 1.2rem; margin-bottom: 3rem; color: #f0f0f0; }
.action-btn {
    padding: 1rem 3rem; background: #fff; color: #333; text-decoration: none;
    font-weight: bold; border-radius: 30px; transition: all 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
.action-btn:hover { background: #76c893; color: #fff; transform: translateY(-3px); }

/* 装饰飞盘 */
.floating-disc {
    position: absolute; width: 150px; height: 40px; background: rgba(255,255,255,0.2);
    border: 2px solid rgba(255,255,255,0.6); border-radius: 50%;
    z-index: 2; pointer-events: none;
}
.d1 { top: 20%; left: 10%; animation: floatDisc 8s infinite ease-in-out; }
.d2 { bottom: 20%; right: 10%; animation: floatDisc 10s infinite ease-in-out reverse; width: 100px; height: 30px; }

/* 通用 */
.section-block { padding: 6rem 2rem; max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; color: #333; margin-bottom: 0.5rem; font-weight: 900; font-style: italic; }
.dark .section-header h2 { color: #eee; }
.section-header p { color: #76c893; letter-spacing: 2px; font-weight: bold; text-transform: uppercase; }

/* 1. Intro Feature */
.intro-section { background: #fff; }
.dark .intro-section { background: #1a1a1a; }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.feature-card {
    background: #f9f9f9; padding: 2rem; border-radius: 16px; text-align: center;
    transition: transform 0.3s; border-bottom: 4px solid transparent;
}
.dark .feature-card { background: #222; }
.feature-card:hover { transform: translateY(-5px); border-bottom-color: #38b6ff; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
.card-icon { font-size: 3rem; margin-bottom: 1rem; }
.feature-card h3 { margin-bottom: 1rem; color: #333; }
.dark .feature-card h3 { color: #ddd; }
.feature-card p { color: #666; line-height: 1.6; }
.dark .feature-card p { color: #aaa; }

/* 2. Skills */
.skill-section { background: #f0fdf4; } /* 浅绿背景 */
.dark .skill-section { background: #112211; }
.skill-container { display: flex; flex-direction: column; gap: 4rem; }
.skill-box { display: flex; align-items: center; gap: 4rem; }
.skill-box.forehand { flex-direction: row-reverse; }

.skill-img {
    flex: 1; height: 350px; border-radius: 20px; overflow: hidden; position: relative;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}
.skill-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.skill-img:hover img { transform: scale(1.05); }
.skill-tag {
    position: absolute; top: 20px; left: 20px; background: #ff4d4d; color: #fff;
    padding: 5px 15px; font-weight: bold; border-radius: 4px;
}

.skill-info { flex: 1; }
.skill-info.text-right { text-align: right; }
.skill-info h3 { font-size: 2rem; margin-bottom: 1.5rem; color: #333; }
.dark .skill-info h3 { color: #eee; }
.skill-info p { color: #555; line-height: 1.8; margin-bottom: 1.5rem; font-size: 1.1rem; }
.dark .skill-info p { color: #ccc; }
.key-point {
    background: #fff; border-left: 4px solid #76c893; padding: 1rem; color: #333;
    display: inline-block; border-radius: 0 8px 8px 0; box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.dark .key-point { background: #222; color: #ddd; }

/* 3. Game Section (Core) */
.game-section { background: #fff; padding-bottom: 8rem; }
.dark .game-section { background: #1a1a1a; }

.game-container {
    max-width: 800px; margin: 0 auto; border: 4px solid #333; border-radius: 20px;
    overflow: hidden; background: #81c784; /* 草地绿 */
    position: relative;
}

/* 游戏场地 */
.field-board {
    height: 400px; position: relative;
    background-image: 
        repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.2) 50px),
        repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.2) 50px);
    overflow: hidden;
}

.score-board {
    position: absolute; top: 15px; left: 15px; background: rgba(0,0,0,0.5);
    color: #fff; padding: 10px 15px; border-radius: 8px; font-family: monospace; z-index: 10;
}
.score-item { margin-bottom: 5px; font-weight: bold; }
.score-item .val { color: #ffeb3b; }
.highlight { color: #ff4d4d !important; }

/* 目标区 */
.target-zone {
    position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
    width: 60px; height: 60px; display: flex; justify-content: center; align-items: center;
}
.teammate { font-size: 3rem; transition: transform 0.2s; }
.teammate.catching { transform: scale(1.3) rotate(-10deg); }
.target-ring {
    position: absolute; width: 80px; height: 20px; background: rgba(255,255,255,0.3);
    border-radius: 50%; bottom: 0; z-index: -1; animation: pulse 2s infinite;
}

/* 玩家区 */
.player-zone {
    position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
    z-index: 10;
}
.player { font-size: 3rem; }

/* 飞盘 */
.game-disc {
    position: absolute; bottom: 50px; left: 50%; width: 40px; height: 20px;
    font-size: 2rem; line-height: 1; text-align: center; margin-left: -20px; /* 居中修正 */
    z-index: 5;
    /* 默认状态 */
}

/* 消息弹窗 */
.game-message {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.9); padding: 1rem 2rem; border-radius: 10px;
    font-weight: bold; font-size: 1.5rem; text-align: center; box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    animation: popUp 0.3s; z-index: 20; white-space: nowrap;
}
.msg-perfect { color: #76c893; border: 3px solid #76c893; }
.msg-good { color: #38b6ff; border: 3px solid #38b6ff; }
.msg-bad { color: #ff4d4d; border: 3px solid #ff4d4d; }

/* 控制台 */
.control-panel {
    background: #333; padding: 1.5rem; text-align: center; color: #fff;
    border-top: 4px solid #222;
}
.instruction { margin-bottom: 1rem; font-size: 0.9rem; color: #ccc; }
.btn-text { background: #ff4d4d; padding: 2px 6px; border-radius: 4px; color: #fff; font-weight: bold; font-size: 0.8rem; }

.power-bar-wrapper {
    position: relative; width: 100%; height: 30px; background: #444;
    border-radius: 15px; margin-bottom: 1.5rem; overflow: hidden;
    border: 2px solid #555;
}
.power-bar { width: 100%; height: 100%; display: flex; }
.zone { height: 100%; }
.zone-bad-left { width: 35%; background: #ff4d4d; }
.zone-ok-left { width: 10%; background: #ffeb3b; }
.zone-perfect { width: 10%; background: #76c893; box-shadow: 0 0 10px #76c893; z-index: 1; }
.zone-ok-right { width: 10%; background: #ffeb3b; }
.zone-bad-right { width: 35%; background: #ff4d4d; }

.cursor {
    position: absolute; top: -5px; width: 4px; height: 40px; background: #fff;
    box-shadow: 0 0 5px #fff; transform: translateX(-50%);
    /* 箭头 */
}
.cursor::after {
    content: '▼'; color: #fff; position: absolute; top: -12px; left: -6px; font-size: 12px;
}

.throw-btn {
    padding: 0.8rem 4rem; background: #ff4d4d; color: #fff; border: none;
    border-radius: 50px; font-weight: 900; font-size: 1.2rem; cursor: pointer;
    box-shadow: 0 5px 0 #c0392b; transition: all 0.1s;
}
.throw-btn:active { transform: translateY(5px); box-shadow: 0 0 0 #c0392b; }
.throw-btn:disabled { background: #555; box-shadow: none; cursor: not-allowed; transform: translateY(5px); }

.frisbee-footer {
    text-align: center; padding: 3rem; background: #38b6ff; color: #fff;
    font-weight: bold;
}

/* 动画定义 */
@keyframes spin { 100% { transform: rotate(360deg); } }
@keyframes floatDisc { 
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
}
@keyframes pulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }
@keyframes popUp { from { transform: translate(-50%, -40%) scale(0.5); opacity: 0; } to { transform: translate(-50%, -50%) scale(1); opacity: 1; } }

@media (max-width: 900px) {
    .skill-box, .skill-box.forehand { flex-direction: column; gap: 2rem; }
    .skill-info.text-right { text-align: left; }
    .skill-img { height: 250px; width: 100%; }
    .main-title { font-size: 3.5rem; }
    .power-bar-wrapper { height: 20px; }
}
</style>