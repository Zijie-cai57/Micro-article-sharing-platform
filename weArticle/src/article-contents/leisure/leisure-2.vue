<template>
    <nav class="game-nav" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="player-info">
                <div class="avatar">P1</div>
                <div class="status-bar">
                    <span class="name">PLAYER ONE</span>
                    <div class="hp-bar"><div class="hp-fill"></div></div>
                </div>
            </div>

            <div class="game-menu">
                <a href="#start" class="menu-item">START</a>
                <a href="#party" class="menu-item">BOARD</a>
                <a href="#roulette" class="menu-item active-btn">LUCK</a>
                <a href="#immersive" class="menu-item">REALITY</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="start" class="hero-section">
        <div class="hero-bg-pattern"></div>
        
        <div class="hero-content">
            <div class="pixel-bubble">IT'S GAME TIME!</div>
            <h1 class="game-title">
                <span class="color-r">桌</span>
                <span class="color-y">游</span>
                <span class="color-b">派</span>
                <span class="color-g">对</span>
            </h1>
            <p class="sub-title">放下手机，回归面对面的快乐。<br>不论是互坑还是合作，这里有属于你们的欢乐局。</p>
            
            <div class="dice-container">
                <div class="dice">
                    <div class="face front">
                        <span class="dot"></span>
                    </div>
                    <div class="face back">
                        <div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                        <div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                    </div>
                    <div class="face right">
                        <span class="dot" style="align-self: flex-start"></span>
                        <span class="dot" style="align-self: flex-end"></span>
                    </div>
                    <div class="face left">
                        <div class="column"><span class="dot"></span><span class="dot"></span></div>
                        <div class="column" style="justify-content: center"><span class="dot"></span></div>
                        <div class="column"><span class="dot"></span><span class="dot"></span></div>
                    </div>
                    <div class="face top">
                        <span class="dot" style="align-self: flex-start"></span>
                        <span class="dot" style="align-self: center"></span>
                        <span class="dot" style="align-self: flex-end"></span>
                    </div>
                    <div class="face bottom">
                        <div class="column"><span class="dot"></span><span class="dot"></span></div>
                        <div class="column"><span class="dot"></span><span class="dot"></span></div>
                    </div>
                </div>
            </div>
            
            <a href="#party" class="start-btn">掷骰子开始 (ROLL)</a>
        </div>
    </header>

    <main class="main-container">
        <svg class="path-line" viewBox="0 0 100 1000" preserveAspectRatio="none">
            <path d="M50,0 Q50,50 50,100 T50,200 T50,300 T50,400 T50,500 T50,600 T50,700 T50,800 T50,900" 
                  fill="none" stroke="#e0e0e0" stroke-width="3" stroke-dasharray="15,15" />
        </svg>

        <section id="party" class="game-station station-left">
            <div class="station-side info-side">
                <div class="fun-fact">
                    <h4>💡 友情提示</h4>
                    <p>玩这游戏请剪指甲，防止按铃时发生流血事件！</p>
                </div>
            </div>
            <div class="station-center">
                <div class="station-marker">01</div>
            </div>
            <div class="station-side content-side">
                <div class="game-card card-uno">
                    <div class="text-box">
                        <span class="tag tag-red">破冰·反应</span>
                        <h3>德国心脏病 / Uno</h3>
                        <p class="meta">👥 2-8人 | 🔥 欢乐爆表</p>
                        <p class="desc">看到相同水果按铃，或者打出+4牌友尽。规则简单粗暴，是聚会开场迅速炒热气氛的神器。</p>
                    </div>
                    <div class="img-box tilt-left">
                        <img src="../../assets/image/leisure/leisure-2/uno.jpg" alt="Uno">
                    </div>
                </div>
            </div>
        </section>

        <section class="game-station station-right">
            <div class="station-side content-side">
                <div class="game-card card-werewolf">
                    <div class="img-box tilt-right">
                        <img src="../../assets/image/leisure/leisure-2/werewolf.jpg" alt="阿瓦隆">
                    </div>
                    <div class="text-box">
                        <span class="tag tag-blue">身份·推理</span>
                        <h3>阿瓦隆 / 狼人杀</h3>
                        <p class="meta">👥 5-10人 | 🧠 极度烧脑</p>
                        <p class="desc">比狼人杀参与感更强，<strong>无人出局</strong>。好人需找出梅林，坏人要伪装并破坏任务。</p>
                    </div>
                </div>
            </div>
            <div class="station-center">
                <div class="station-marker">02</div>
            </div>
            <div class="station-side info-side">
                <div class="fun-fact blue-fact">
                    <h4>🎭 演技时刻</h4>
                    <p>“我真的是好人！”<br>—— 此时他的心跳 180。</p>
                </div>
            </div>
        </section>

        <section class="game-station station-left">
            <div class="station-side info-side">
                <div class="fun-fact green-fact">
                    <h4>🤐 沉默是金</h4>
                    <p>队长只能说一个词！多说一个字算犯规哦。</p>
                </div>
            </div>
            <div class="station-center">
                <div class="station-marker">03</div>
            </div>
            <div class="station-side content-side">
                <div class="game-card card-codenames">
                    <div class="text-box">
                        <span class="tag tag-green">联想·默契</span>
                        <h3>行动代号 (Codenames)</h3>
                        <p class="meta">👥 4-8人 | 🤝 团队合作</p>
                        <p class="desc">特工接头暗号游戏。队长给出一个词，队员要猜出所有相关词汇。脑洞大开的联想，往往能创造爆笑名场面。</p>
                    </div>
                    <div class="img-box tilt-left">
                        <img src="../../assets/image/leisure/leisure-2/codenames.jpg" alt="行动代号">
                    </div>
                </div>
            </div>
        </section>

        <section class="game-station station-right">
            <div class="station-side content-side">
                <div class="game-card card-catan">
                    <div class="img-box tilt-right">
                        <img src="../../assets/image/leisure/leisure-2/catan.jpg" alt="卡坦岛">
                    </div>
                    <div class="text-box">
                        <span class="tag tag-yellow">策略·交易</span>
                        <h3>卡坦岛 (Catan)</h3>
                        <p class="meta">👥 3-4人 | 🏰 经营建设</p>
                        <p class="desc">德式桌游入门神作。采集资源、修路建房。精髓在于<strong>“交易”</strong>——用羊毛换砖头。</p>
                    </div>
                </div>
            </div>
            <div class="station-center">
                <div class="station-marker">04</div>
            </div>
            <div class="station-side info-side">
                <div class="fun-fact yellow-fact">
                    <h4>🐑 羊毛党</h4>
                    <p>“谁有麦子？我用两只羊换！”<br>“不换，我有港口。”</p>
                </div>
            </div>
        </section>

        <section class="game-station station-left">
            <div class="station-side info-side">
                <div class="fun-fact red-fact">
                    <h4>💎 攒钱买房</h4>
                    <p>为了贵族分，我忍辱负重攒了三回合的红宝石。</p>
                </div>
            </div>
            <div class="station-center">
                <div class="station-marker">05</div>
            </div>
            <div class="station-side content-side">
                <div class="game-card card-splendor">
                    <div class="text-box">
                        <span class="tag tag-red">策略·精算</span>
                        <h3>璀璨宝石 (Splendor)</h3>
                        <p class="meta">👥 2-4人 | 💎 收集竞速</p>
                        <p class="desc">扮演文艺复兴时期的富商，收集宝石，招募工匠。每一回合的决策都至关重要，手感极佳的筹码是亮点。</p>
                    </div>
                    <div class="img-box tilt-left">
                        <img src="../../assets/image/leisure/leisure-2/splendor.jpg" alt="璀璨宝石">
                    </div>
                </div>
            </div>
        </section>

        <section id="roulette" class="roulette-section">
            <div class="section-header">
                <h2>输了怎么办？</h2>
                <p>Punishment Roulette</p>
            </div>
            
            <div class="roulette-container">
                <div class="arrow-down">▼</div>
                
                <div class="wheel" :style="{ transform: `rotate(${wheelRotation}deg)`, transition: isSpinning ? 'transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none' }">
                    <div 
                        class="sector"
                        v-for="(item, index) in punishments" 
                        :key="index"
                        :style="{ 
                            transform: `rotate(${index * 45}deg) skewY(-45deg)`,
                            backgroundColor: getSectorColor(index)
                        }"
                    >
                        <div class="sector-content">
                            <span class="item-text">{{ item }}</span>
                        </div>
                    </div>
                </div>

                <button class="spin-btn" @click="spinWheel" :disabled="isSpinning">
                    {{ isSpinning ? '...' : 'GO!' }}
                </button>
            </div>
            
            <div class="result-box" :class="{ 'show': result }">
                <p class="result-label">👉 惩罚结果</p>
                <p class="result-content">{{ result }}</p>
            </div>
        </section>

        <section id="immersive" class="immersive-section">
            <div class="section-header-dark">
                <h2>进阶：沉浸式体验</h2>
                <p>BEYOND THE TABLE</p>
            </div>

            <div class="files-container">
                <div class="file-folder">
                    <div class="folder-tab">ESCAPE ROOM</div>
                    <div class="folder-content">
                        <div class="stamp-icon">🔒 LOCKED</div>
                        <h3>密室逃脱</h3>
                        <p class="folder-desc">
                            <strong>实景解谜 · 机关 · 合作</strong><br>
                            如果你觉得坐着玩不过瘾，那就被关进密室吧！分为“机械解谜类”和“恐怖剧情类”。
                        </p>
                        <div class="rec-tags">
                            <span>盗墓笔记</span><span>哈利波特</span><span>病院惊魂</span>
                        </div>
                    </div>
                </div>

                <div class="file-folder folder-red">
                    <div class="folder-tab">SCRIPT KILL</div>
                    <div class="folder-content">
                        <div class="stamp-icon">🕵️‍♂️ TOP SECRET</div>
                        <h3>剧本杀 (LARP)</h3>
                        <p class="folder-desc">
                            <strong>角色扮演 · 沉浸 · 情感</strong><br>
                            每个人拿到一个剧本，扮演其中角色。不仅是推理凶手，更是体验另一种人生。
                        </p>
                        <div class="rec-tags">
                            <span>情感本</span><span>硬核推理</span><span>古风</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="game-footer">
        <p>GAME OVER | Play Again Next Weekend</p>
    </footer>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

// --- 转盘逻辑 ---
const isSpinning = ref(false);
const wheelRotation = ref(0);
const result = ref('');

const punishments = [
    '丢人事发朋友圈',
    '真心话一个',
    '5×n+10个俯卧撑',
    '喝30mL苦瓜汁',
    '学狗🐕叫一声',
    '才艺展示🎤🕺💃',
    '发红包(10~30元)',
    '服务大家一次'
];

const colors = ['#ff5252', '#34ace0', '#33d9b2', '#ffda79'];
const getSectorColor = (index) => colors[index % 4];

const spinWheel = () => {
    if (isSpinning.value) return;
    
    isSpinning.value = true;
    result.value = '';

    // 1. 随机索引
    const winningIndex = Math.floor(Math.random() * punishments.length);
    
    // 2. 计算角度 (扇区中心对齐)
    // 每个扇区45度，中心偏移22.5度
    const targetRotation = -(winningIndex * 45 + 22.5);
    
    // 3. 计算总旋转 (当前角度 + 5圈 + 目标偏移)
    const currentRot = wheelRotation.value;
    // 将当前角度归零到 360 的倍数，保证每次旋转视觉一致
    const baseRot = Math.floor(currentRot / 360) * 360; 
    const finalRot = baseRot + 360 * 5 + targetRotation;

    // 防止倒转修正
    wheelRotation.value = finalRot < currentRot ? finalRot + 360 : finalRot;

    setTimeout(() => {
        isSpinning.value = false;
        result.value = punishments[winningIndex];
    }, 4000);
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
:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.game-nav {
    position: fixed; top: 0; left: 0; width: 100%; height: 4.5rem;
    z-index: 1000; transition: all 0.4s;
    background: #2c3e50; border-bottom: 4px solid #1e272e; color: #fff;
}
.game-nav.scrolled {
    background: rgba(44, 62, 80, 0.95); backdrop-filter: blur(10px);
}
.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}
.player-info { display: flex; align-items: center; gap: 10px; }
.avatar {
    width: 40px; height: 40px; background: #ff5252; border: 2px solid #fff;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-weight: bold; font-family: monospace;
}
.status-bar { display: flex; flex-direction: column; }
.name { font-size: 0.8rem; font-weight: bold; }
.hp-bar { width: 100px; height: 6px; background: #555; border-radius: 3px; overflow: hidden; }
.hp-fill { width: 80%; height: 100%; background: #33d9b2; }
.game-menu { display: flex; gap: 1.5rem; }
.menu-item {
    color: #ccc; text-decoration: none; font-family: 'Arial Black', sans-serif;
    font-size: 0.9rem; transition: color 0.3s;
}
.menu-item:hover { color: #ffda79; text-shadow: 0 0 5px #ffda79; }
.active-btn { background: #ff5252; color: #fff; padding: 2px 8px; border-radius: 4px; }

/* Hero */
.hero-section {
    position: relative; height: 90vh; display: flex; align-items: center; justify-content: center;
    background: #f7f1e3; overflow: hidden;
}
.hero-bg-pattern {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-image: radial-gradient(#d1ccc0 15%, transparent 16%);
    background-size: 30px 30px; opacity: 0.5;
}
.hero-content {
    position: relative; z-index: 2; text-align: center;
    display: flex; flex-direction: column; align-items: center;
}
.pixel-bubble {
    background: #2c3e50; color: #fff; padding: 5px 15px; border-radius: 20px;
    font-family: monospace; margin-bottom: 1rem; position: relative;
}
.pixel-bubble::after {
    content: ''; position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%);
    border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid #2c3e50;
}
.game-title {
    font-size: 5rem; font-weight: 900; margin: 0; letter-spacing: 5px;
    text-shadow: 4px 4px 0px #2c3e50; font-family: 'Arial Black', sans-serif;
}
.color-r { color: #ff5252; } .color-y { color: #ffda79; }
.color-b { color: #34ace0; } .color-g { color: #33d9b2; }
.sub-title { margin: 2rem 0; color: #7f8c8d; font-size: 1.1rem; }
.start-btn {
    margin-top: 2rem; padding: 1rem 3rem; background: #2c3e50; color: #fff;
    text-decoration: none; font-weight: bold; border-radius: 10px;
    box-shadow: 0 6px 0 #1e272e; transition: transform 0.1s, box-shadow 0.1s;
}
.start-btn:active { transform: translateY(6px); box-shadow: 0 0 0 #1e272e; }

/* 3D 骰子 (完美修复版) */
.dice-container { perspective: 1000px; width: 100px; height: 100px; margin: 20px auto; }
.dice {
    width: 100%; height: 100%; position: relative; transform-style: preserve-3d;
    animation: rotateDice 5s infinite linear;
}
.face {
    position: absolute; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.95);
    border: 3px solid #2c3e50; border-radius: 15px; box-sizing: border-box;
    display: flex; padding: 10px; gap: 5px;
}
.dot {
    display: block; width: 18px; height: 18px; background: #2c3e50; border-radius: 50%;
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.5);
}
.front  { transform: translateZ(50px); justify-content: center; align-items: center; }
.back   { transform: rotateY(180deg) translateZ(50px); flex-direction: row; justify-content: space-between; }
.right  { transform: rotateY(90deg) translateZ(50px); justify-content: space-between; }
.left   { transform: rotateY(-90deg) translateZ(50px); justify-content: space-between; }
.top    { transform: rotateX(90deg) translateZ(50px); justify-content: space-between; }
.bottom { transform: rotateX(-90deg) translateZ(50px); flex-direction: row; justify-content: space-between; }

.column { display: flex; flex-direction: column; justify-content: space-between; height: 100%; }

@keyframes rotateDice {
    0% { transform: rotateX(0) rotateY(0); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
}

/* Main Layout */
.main-container {
    background: #fff; position: relative; overflow: hidden; padding-bottom: 6rem;
}
.path-line {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
    z-index: 0; pointer-events: none; opacity: 0.3;
}

/* 游戏卡片站点 */
.game-station {
    max-width: 1100px; margin: 0 auto; padding: 2rem 1rem; /* 间距适中 */
    position: relative; z-index: 2; display: flex; align-items: center;
}
.station-side { flex: 1; display: flex; justify-content: center; }
.station-center { width: 80px; display: flex; justify-content: center; }

/* 卡片 */
.game-card {
    background: #fff; padding: 1.5rem; border-radius: 20px;
    box-shadow: 8px 8px 0px #2c3e50; border: 3px solid #2c3e50;
    display: flex; gap: 1.5rem; align-items: center; width: 100%;
    transition: transform 0.3s;
}
.game-station:hover .game-card { transform: translateY(-8px); }
.game-station:hover .station-marker { transform: scale(1.2); background: #ffda79; border-color: #2c3e50; color: #2c3e50; }

.text-box { flex: 1; }
.tag { padding: 4px 10px; color: #fff; border-radius: 4px; font-size: 0.8rem; font-weight: bold; display: inline-block; margin-bottom: 5px; }
.tag-red { background: #ff5252; }
.tag-blue { background: #34ace0; }
.tag-yellow { background: #ffda79; color: #2c3e50; }
.tag-green { background: #33d9b2; }

.game-card h3 { margin: 0 0 0.5rem 0; color: #2c3e50; font-size: 1.2rem; }
.meta { font-size: 0.8rem; color: #888; margin-bottom: 0.8rem; font-weight: bold; }
.desc { font-size: 0.9rem; color: #555; line-height: 1.5; margin: 0; }

.img-box { width: 110px; height: 150px; flex-shrink: 0; overflow: hidden; border-radius: 10px; border: 2px solid #2c3e50; }
.img-box img { width: 100%; height: 100%; object-fit: cover; }
.tilt-left { transform: rotate(-3deg); }
.tilt-right { transform: rotate(3deg); }
.hexagon-mask { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); border: none; width: 130px; height: 130px; }

/* 中间标记 */
.station-marker {
    width: 50px; height: 50px; background: #2c3e50; color: #fff;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-weight: bold; font-size: 1.2rem; border: 4px solid #fff; box-shadow: 0 0 0 4px #2c3e50;
    transition: all 0.3s;
}

/* 装饰性侧边 (Fact Box) */
.fun-fact {
    background: #f7f1e3; padding: 1.5rem; border-radius: 20px; border: 2px dashed #ccc;
    width: 80%; text-align: center; position: relative;
}
.fun-fact h4 { margin: 0 0 0.5rem 0; color: #2c3e50; font-size: 1rem; }
.fun-fact p { font-size: 0.9rem; color: #666; font-style: italic; margin: 0; }
.blue-fact { background: #e7f5fd; border-color: #34ace0; }
.green-fact { background: #eafaf5; border-color: #33d9b2; }
.yellow-fact { background: #fffbe6; border-color: #ffda79; }
.red-fact { background: #ffebeb; border-color: #ff5252; }

/* 转盘 */
.roulette-section { text-align: center; padding: 6rem 0; background: #2c3e50; color: #fff; position: relative; z-index: 5; margin-bottom: 0; }
.section-header h2 { color: #ffda79; margin-bottom: 0.5rem; }
.section-header p { color: #aaa; margin-bottom: 3rem; }

.roulette-container { position: relative; width: 340px; height: 340px; margin: 0 auto; }
.arrow-down { position: absolute; top: -25px; left: 50%; transform: translateX(-50%); font-size: 2.5rem; color: #ff5252; z-index: 10; text-shadow: 0 2px 0 rgba(0,0,0,0.3); }

.wheel {
    box-sizing: border-box;
    width: 100%; height: 100%; border-radius: 50%; 
    border: 8px solid #fff; box-shadow: 0 0 0 4px #2c3e50, 0 10px 20px rgba(0,0,0,0.3);
    position: relative; overflow: hidden; background: #fff;
}

/* 扇区 (Skew) */
.sector {
    position: absolute; top: 0; right: 0; width: 50%; height: 50%;
    transform-origin: 0% 100%; border: 1px solid rgba(0,0,0,0.05);
}
.sector-content {
    position: absolute; left: -100%; width: 200%; height: 190%;
    text-align: center; transform: skewY(45deg) rotate(22.5deg);
    padding-top: 20px; pointer-events: none;
}
.item-text {
    display: block; width: 60px; margin: 0 auto; font-size: 0.8rem; font-weight: bold; color: #2c3e50;
    text-shadow: 0 1px 0 rgba(255,255,255,0.5); transform: translateY(10px);
}

.spin-btn {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 70px; height: 70px; border-radius: 50%; border: 5px solid #fff;
    background: #2c3e50; color: #fff; font-weight: bold; cursor: pointer;
    z-index: 5; box-shadow: 0 0 10px rgba(0,0,0,0.2); font-size: 1.1rem;
    display: flex; align-items: center; justify-content: center;
}
.spin-btn:disabled { background: #555; cursor: not-allowed; }

.result-box { margin-top: 3rem; min-height: 4rem; opacity: 0; transition: opacity 0.5s; }
.result-box.show { opacity: 1; }
.result-label { font-size: 0.9rem; color: #aaa; margin-bottom: 0.5rem; }
.result-content { font-size: 2rem; color: #ffda79; font-weight: 900; }

/* 进阶板块 */
.immersive-section { padding: 6rem 0; background: #1e272e; color: #fff; position: relative; z-index: 5; border-top: 2px dashed #555; }
.section-header-dark { text-align: center; margin-bottom: 3rem; }
.section-header-dark h2 { color: #34ace0; margin-bottom: 0.5rem; }
.section-header-dark p { color: #555; letter-spacing: 3px; }

.files-container { max-width: 900px; margin: 0 auto; display: flex; gap: 3rem; justify-content: center; padding: 0 2rem; }
.file-folder { width: 100%; position: relative; transition: transform 0.3s; cursor: pointer; }
.file-folder:hover { transform: translateY(-10px); }

.folder-tab { width: 120px; height: 30px; background: #33d9b2; border-radius: 10px 10px 0 0; color: #2c3e50; font-weight: bold; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; }
.folder-red .folder-tab { background: #ff5252; color: #fff; }

.folder-content { background: #f7f1e3; color: #2c3e50; padding: 2rem; border-radius: 0 10px 10px 10px; border-top: 4px solid #33d9b2; position: relative; height: 100%; }
.folder-red .folder-content { border-top-color: #ff5252; }

.stamp-icon { position: absolute; top: 10px; right: 10px; border: 2px solid #555; padding: 2px 5px; font-family: monospace; font-size: 0.7rem; color: #555; transform: rotate(-10deg); }
.file-folder h3 { margin: 0 0 1rem 0; font-size: 1.5rem; }
.folder-desc { font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; }
.rec-tags span { display: inline-block; background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 5px; }

.game-footer { background: #111; padding: 2rem; text-align: center; color: #555; font-family: monospace; position: relative; z-index: 5; }

@media (max-width: 900px) {
    .game-station { flex-direction: column; width: 100%; gap: 1rem; }
    .station-side { width: 100%; }
    .station-center { margin: 1rem 0; }
    .info-side { order: -1; }
    .game-card { flex-direction: column; text-align: center; }
    .img-box { order: -1; margin: 0 auto; }
    .files-container { flex-direction: column; align-items: center; }
}
</style>