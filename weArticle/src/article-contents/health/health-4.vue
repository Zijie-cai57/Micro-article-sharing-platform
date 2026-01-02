<template>
    <nav class="nav-container" :class="{ 'scrolled': isScrolled }">
        <div class="nav-content">
            <div class="nav-title">
                <span class="icon">🎐</span>
                <span class="brand-text">INNER</span>
                <span class="care-text">PEACE</span>
            </div>

            <div class="nav-links">
                <a href="#hero" class="nav-link">心境</a>
                <a href="#emotions" class="nav-link">识别情绪</a>
                <a href="#strategies" class="nav-link">解压百宝箱</a>
                <a href="#ai-friend" class="nav-link">聆心小开</a>
            </div>

            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <header id="hero" class="hero-section">
        <div class="hero-overlay"></div>
        <img src="../../assets/image/health/health-4/mental-hero.jpg" alt="心理健康" class="hero-bg">
        
        <div class="hero-content">
            <h1 class="main-title">给心灵🩶<br><span class="soft-highlight">放个假</span>💖</h1>
            <p class="sub-title">在绩点、保研和就业的洪流中，<br>允许自己偶尔停下来，深呼吸。</p>
            <a href="#emotions" class="action-btn">开始情绪体检 ↓</a>
        </div>
    </header>

    <main class="main-container">
        
        <section id="emotions" class="section-block emotion-section">
            <div class="section-header">
                <h2>此刻，你的心情是？</h2>
                <p>Identify Your Emotions</p>
            </div>

            <div class="emotion-grid">
                <div class="emotion-card" v-for="(item, index) in emotions" :key="index">
                    <div class="emoji-bubble">{{ item.emoji }}</div>
                    <h3>{{ item.name }}</h3>
                    <p class="symptom">{{ item.desc }}</p>
                    <div class="hover-tip">
                        <span>典型想法：</span>
                        <p>“{{ item.thought }}”</p>
                    </div>
                </div>
            </div>
            <p>当负面情绪乘虚而入时😣，你需要做的就是<span class="rotato">调整</span>😊</p>
        </section>

        <section id="strategies" class="section-block strategy-section">
            <div class="section-header">
                <h2>自我调节 · 解压百宝箱</h2>
                <p>Coping Strategies Deck</p>
            </div>

            <div class="stack-container">
                <div class="stack-info">
                    <h3>{{ strategies[activeStrategy].title }}</h3>
                    <p class="strategy-desc">{{ strategies[activeStrategy].desc }}</p>
                    <div class="action-area">
                        <button class="nav-btn prev" @click="prevCard">← 上一个</button>
                        <button class="nav-btn next" @click="nextCard">下一个解压法 →</button>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" :style="{ width: ((activeStrategy + 1) / strategies.length) * 100 + '%' }"></div>
                    </div>
                </div>

                <div class="card-deck">
                    <transition-group name="card-flip" tag="div" class="deck-wrapper">
                        <div 
                            v-for="(card, index) in visibleStrategies" 
                            :key="card.id"
                            class="strategy-card"
                            :class="getCardPositionClass(index)"
                            :style="{ backgroundImage: 'url(' + card.bgImage + ')' }"
                        >
                            <div class="card-overlay">
                                <span class="card-num">No.0{{ card.id }}</span>
                                <h4>{{ card.subTitle }}</h4>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </section>

        <section id="ai-friend" class="ai-section">
            <div class="ai-container">
                <div class="phone-mockup">
                    <div class="phone-screen">
                        <div class="chat-header">
                            <div class="avatar">🤖</div>
                            <div class="name">聆心小开<br><span class="status">在线 | 24h陪伴</span></div>
                        </div>
                        <div class="chat-body">
                            <div class="message received">
                                <p>你好呀！我是<strong>聆心小开</strong>，你的专属情绪陪伴助手。👋</p>
                            </div>
                            <div class="message received">
                                <p>最近是不是感觉压力有点大？没关系，我会一直在这里听你说。</p>
                            </div>
                            <div class="message sent">
                                <p>听说软件学院考试非常难，最近复习周太焦虑了，睡不着觉...</p>
                            </div>
                            <div class="message received typing">
                                <div class="dots"><span>.</span><span>.</span><span>.</span></div>
                            </div>
                        </div>
                        <div class="chat-input-bar">
                            <div class="input-fake">输入消息...</div>
                            <div class="send-btn">➤</div>
                        </div>
                    </div>
                </div>

                <div class="ai-info">
                    <div class="tech-tag">NKU AI LAB</div>
                    <h2>你的专属 AI 树洞<br>“聆心小开”</h2>
                    <p class="ai-desc">
                        这是南开大学软件学院提供技术为NKUer打造的情绪支持大模型。它不像冷冰冰的搜索引擎，而是像一位温柔的学长学姐，为你提供全天候的心理陪伴。
                    </p>
                    
                    <ul class="feature-list">
                        <li>
                            <span class="f-icon">🔒</span>
                            <div>
                                <strong>隐私加密</strong>
                                <p>所有对话本地加密处理，无需担心隐私泄露，这是只属于你的秘密空间。</p>
                            </div>
                        </li>
                        <li>
                            <span class="f-icon">🧠</span>
                            <div>
                                <strong>共情计算</strong>
                                <p>基于先进的自然语言处理技术，它能读懂你文字背后的情绪，而非机械回复。</p>
                            </div>
                        </li>
                        <li>
                            <span class="f-icon">🚑</span>
                            <div>
                                <strong>危机干预</strong>
                                <p>当检测到极端情绪风险时，会自动推送校心理中心紧急联系方式。</p>
                            </div>
                        </li>
                    </ul>

                    <div class="guide-box">
                        <h4>📱 如何找到小开？</h4>
                        <p>1. 打开飞书 / 微信小程序</p>
                        <p>2. 搜索<strong>“南开聆心”</strong>或<strong>“NKU AI”</strong></p>
                        <p>3. 使用统一身份认证登录即可免费使用</p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="health-footer">
        <p>你并不孤单，世界爱着你 | NKU Mental Health Center</p>
    </footer>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

// --- 数据：情绪识别 ---
const emotions = [
    { 
        emoji: '🤯', 
        name: '学业焦虑', 
        desc: '面对GPA、考研或Deadline时的紧迫感与无助感。',
        thought: '完了，这门课要挂了，我的人生全毁了。'
    },
    { 
        emoji: '🎭', 
        name: '冒充者综合症', 
        desc: '总觉得自己不够好，现在的成绩只是运气，害怕被识破。',
        thought: '大家都很优秀，只有我是混进来的。'
    },
    { 
        emoji: '🍂', 
        name: '人际孤独', 
        desc: '即使身处热闹的宿舍或社团，内心依然感到疏离和被误解。',
        thought: '没有人真正理解我，我不想社交。'
    },
    { 
        emoji: '🕯️', 
        name: '耗竭感 (Burnout)', 
        desc: '长期压力下的情感枯竭，对什么都提不起兴趣，只想躺平。',
        thought: '好累，什么都不想做，这有什么意义呢？'
    }
];

// --- 数据：解压方案 (用于堆叠卡片) ---
import bgImg1 from '../../assets/image/health/health-4/01.jpg'
import bgImg2 from '../../assets/image/health/health-4/02.jpg'
import bgImg3 from '../../assets/image/health/health-4/03.jpg'
import bgImg4 from '../../assets/image/health/health-4/04.jpg'
import bgImg5 from '../../assets/image/health/health-4/05.jpg'
const activeStrategy = ref(0);
const strategies = [
    { 
        id: 1, 
        title: '正念呼吸 (Mindfulness)', 
        subTitle: '4-7-8 呼吸法',
        desc: '当你感到焦虑心慌时，尝试这个动作：吸气4秒，憋气7秒，缓慢呼气8秒。重复4次。这能强制让你的副交感神经兴奋，让身体“物理冷静”下来。',
        bgImage: bgImg1
    },
    { 
        id: 2, 
        title: '书写疗愈 (Journaling)', 
        subTitle: '情绪垃圾桶',
        desc: '准备一个本子，不加思考地写下此刻所有的愤怒、委屈和恐惧。写完后撕掉或烧掉它。将情绪具象化为文字，能有效降低大脑杏仁核的活跃度。',
        bgImage: bgImg2
    },
    { 
        id: 3, 
        title: '蝴蝶拥抱 (Butterfly Hug)', 
        subTitle: '自我安抚技术',
        desc: '双臂交叉在胸前，双手交替轻拍肩膀，像蝴蝶扇动翅膀一样。这种双侧刺激能模拟婴儿在母亲怀抱中的感觉，带来极大的安全感。',
        bgImage: bgImg3
    },
    { 
        id: 4, 
        title: '自我暗示 (Autosuggestion)', 
        subTitle: '特殊心理疗法',
        desc: '当烦恼无法消去时，不断对自己施加心里暗示“一切都会过去”、“破财免灾”、“知足常乐”等。让大脑慢下来，使心情轻松。',
        bgImage: bgImg4
    },
    { 
        id: 5, 
        title: '专业求助 (Help)', 
        subTitle: '这不是软弱的表现',
        desc: '如果负面情绪持续超过2周且影响生活，请前往学校心理健康指导中心（学生活动中心4楼）。专业咨询师会为你提供保密且专业的支持。',
        bgImage: bgImg5
    }
];

// 计算当前显示的卡片队列 (保持3张在视图中)
const visibleStrategies = computed(() => {
    const list = [];
    const len = strategies.length;
    // 取当前、下一个、下下个
    for (let i = 0; i < 3; i++) {
        list.push(strategies[(activeStrategy.value + i) % len]);
    }
    return list;
});

const nextCard = () => {
    activeStrategy.value = (activeStrategy.value + 1) % strategies.length;
};

const prevCard = () => {
    activeStrategy.value = (activeStrategy.value - 1 + strategies.length) % strategies.length;
};

// 获取卡片样式的类名
const getCardPositionClass = (index) => {
    if (index === 0) return 'card-top';
    if (index === 1) return 'card-middle';
    return 'card-bottom';
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
/* 配色：
   Healing Purple: #a29bfe (主色)
   Mint Green: #55efc4 (辅色)
   Dark Text: #2d3436
   AI Dark: #1e1e2e
*/

:global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
}

/* 导航栏 */
.nav-container {
    position: fixed; top: 0; left: 0; width: 100%; height: 5rem;
    z-index: 1000; transition: all 0.4s ease;
    background: rgba(255,255,255,0);
}
.nav-container.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(162, 155, 254, 0.2);
    height: 4rem;
}
.dark .nav-container.scrolled { background: rgba(30, 30, 40, 0.95); }

.nav-content {
    max-width: 1200px; margin: 0 auto; padding: 0 2rem;
    height: 100%; display: flex; justify-content: space-between; align-items: center;
}
.nav-title { font-weight: 800; font-size: 1.4rem; display: flex; align-items: center; gap: 8px; }
.brand-text { color: #6c5ce7; }
.care-text { color: #00b894; font-weight: 300; }

.nav-links { display: flex; gap: 2rem; }
.nav-link { text-decoration: none; color: #636e72; font-weight: 500; transition: color 0.3s; }
.nav-link:hover { color: #6c5ce7; }

/* Hero Section */
.hero-section {
    position: relative; height: 90vh; display: flex; align-items: center; justify-content: center;
    background: #f0f3f8; overflow: hidden;
}
.hero-bg {
    position: absolute; width: 100%; height: 100%; object-fit: cover; opacity: 0.8;
    animation: fade 2s ease-in-out infinite;
}
@keyframes fade {
    0% {opacity: 1;}
    50% {opacity: 0.3;}
    100% {opacity: 1;}
}
.rotato {
    display: inline-block;
    animation: rotate 2s ease-in-out infinite;
}
@keyframes rotate {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}
.hero-overlay {
    position: absolute; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.9));
}
.hero-content {
    position: relative; z-index: 2; text-align: center; color: #2d3436;
}
.main-title { font-size: 4.5rem; margin: 0; line-height: 1.2; font-weight: 900; letter-spacing: -1px; }
.soft-highlight { 
    background: linear-gradient(120deg, #a29bfe 0%, #74b9ff 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.sub-title { font-size: 1.2rem; margin: 2rem 0; color: #636e72; line-height: 1.8; }
.action-btn {
    padding: 1rem 3rem; background: linear-gradient(135deg, #a29bfe, #6c5ce7);
    color: #fff; text-decoration: none; border-radius: 50px; 
    font-weight: bold; box-shadow: 0 10px 20px rgba(108, 92, 231, 0.3);
    transition: transform 0.3s;
}
.action-btn:hover { transform: translateY(-3px); }

/* 通用板块 */
.section-block { padding: 6rem 2rem; max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; color: #2d3436; margin-bottom: 0.5rem; }
.dark .section-header h2 { color: #dfe6e9; }
.section-header p { color: #b2bec3; letter-spacing: 2px; text-transform: uppercase; }

/* 1. 情绪识别墙 */
.emotion-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
.emotion-card {
    background: #fff; padding: 2rem; border-radius: 20px; text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative; overflow: hidden;
    transition: all 0.3s ease; border: 1px solid rgba(0,0,0,0.02);
}
.dark .emotion-card { background: #2d2d2d; }

.emotion-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(162, 155, 254, 0.2); }

.emoji-bubble {
    font-size: 4rem; margin-bottom: 1rem; transition: transform 0.3s;
}
.emotion-card:hover .emoji-bubble { transform: scale(1.2); }

.emotion-card h3 { color: #6c5ce7; margin-bottom: 1rem; }
.emotion-card .symptom { color: #636e72; line-height: 1.6; font-size: 0.95rem; }
.dark .emotion-card .symptom { color: #b2bec3; }

/* 悬停显示的提示 */
.hover-tip {
    position: absolute; bottom: 0; left: 0; width:77%; height: 100%;
    background: rgba(108, 92, 231, 0.95); color: #fff;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    padding: 2rem; opacity: 0; transition: opacity 0.3s; transform: translateY(100%);
}
.emotion-card:hover .hover-tip { opacity: 1; transform: translateY(0); }
.hover-tip span { font-size: 0.8rem; opacity: 0.8; margin-bottom: 0.5rem; }
.hover-tip p { font-size: 1.1rem; font-weight: bold; line-height: 1.5; font-style: italic; }

/* 2. 解压百宝箱 (堆叠交互) */
.stack-container {
    display: flex; align-items: center; gap: 4rem; min-height: 500px;
}
.stack-info { flex: 1; }
.stack-info h3 { font-size: 2.5rem; color: #2d3436; margin-bottom: 1rem; }
.dark .stack-info h3 { color: #fff; }
.strategy-desc { font-size: 1.1rem; line-height: 1.8; color: #636e72; margin-bottom: 2rem; min-height: 100px; }
.dark .strategy-desc { color: #b2bec3; }

.action-area { display: flex; gap: 1rem; margin-bottom: 2rem; }
.nav-btn {
    padding: 0.8rem 1.5rem; border: 2px solid #a29bfe; background: transparent;
    color: #6c5ce7; border-radius: 30px; cursor: pointer; font-weight: bold;
    transition: all 0.2s;
}
.nav-btn:hover { background: #a29bfe; color: #fff; }
.nav-btn.next { background: #6c5ce7; color: #fff; border-color: #6c5ce7; }
.nav-btn.next:hover { background: #5649c0; }

.progress-bar { width: 100%; height: 4px; background: #dfe6e9; border-radius: 2px; }
.progress-fill { height: 100%; background: #6c5ce7; transition: width 0.5s ease; border-radius: 2px; }

/* 右侧卡片堆叠区 */
.card-deck { flex: 1; position: relative; height: 400px; perspective: 1000px; }
.deck-wrapper { position: relative; width: 100%; height: 100%; }

.strategy-card {
    position: absolute; width: 300px; height: 420px;
    background-size: cover; background-position: center;
    border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
    left: 50%; top: 50%;
    /* 初始状态：所有卡片居中 */
}

/* 卡片层级动画类 */
/* 1. 最上层卡片 */
.card-top {
    z-index: 3;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
}
/* 2. 中间卡片 */
.card-middle {
    z-index: 2;
    transform: translate(-40%, -50%) scale(0.9) rotate(5deg);
    opacity: 0.7;
    filter: blur(1px);
}
/* 3. 底层卡片 */
.card-bottom {
    z-index: 1;
    transform: translate(-30%, -50%) scale(0.8) rotate(10deg);
    opacity: 0.4;
    filter: blur(2px);
}

.card-overlay {
    position: absolute; bottom: 0; left: 0; width: 100%; padding: 2rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: #fff; border-radius: 0 0 20px 20px;
}
.card-num { font-family: monospace; font-size: 0.9rem; opacity: 0.8; }
.card-overlay h4 { font-size: 1.5rem; margin: 5px 0 0 0; }

/* Vue列表过渡动画 */
.card-flip-move { transition: transform 0.6s; }
.card-flip-enter-active, .card-flip-leave-active { transition: all 0.6s ease; }
/* 离开的卡片：向左飞出并淡出 */
.card-flip-leave-to {
    transform: translate(-150%, -50%) rotate(-20deg);
    opacity: 0;
}
/* 进入的卡片：从底部浮现 */
.card-flip-enter-from {
    transform: translate(-30%, -40%) scale(0.7);
    opacity: 0;
}

/* 3. AI 专区 */
.ai-section {
    background: #1e1e2e; color: #fff; padding: 6rem 2rem;
    position: relative; overflow: hidden;
}
.ai-container {
    max-width: 1100px; margin: 0 auto; display: flex; gap: 5rem; align-items: center;
    position: relative; z-index: 2;
}

/* 手机模拟器 */
.phone-mockup {
    flex: 0 0 320px; height: 600px; background: #000; border-radius: 40px;
    padding: 10px; box-shadow: 0 0 50px rgba(108, 92, 231, 0.2); border: 4px solid #333;
}
.phone-screen {
    width: 100%; height: 100%; background: #2d2d3a; border-radius: 30px;
    display: flex; flex-direction: column; overflow: hidden;
}
.chat-header {
    padding: 1.5rem; background: #37374a; display: flex; align-items: center; gap: 10px;
    border-bottom: 1px solid #444;
}
.chat-header .avatar { font-size: 2rem; background: #6c5ce7; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.chat-header .name { font-weight: bold; font-size: 1rem; line-height: 1.2; }
.chat-header .status { font-size: 0.7rem; color: #00b894; }

.chat-body { flex: 1; padding: 1rem; display: flex; flex-direction: column; gap: 1rem; }
.message { max-width: 80%; padding: 10px 15px; border-radius: 15px; font-size: 0.9rem; line-height: 1.4; }
.message.received { background: #3f3f50; align-self: flex-start; border-bottom-left-radius: 2px; }
.message.sent { background: #6c5ce7; align-self: flex-end; border-bottom-right-radius: 2px; }
.message.typing .dots { display: flex; gap: 3px; }
.dots span { width: 6px; height: 6px; background: #aaa; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out; }
.dots span:nth-child(1) { animation-delay: -0.32s; }
.dots span:nth-child(2) { animation-delay: -0.16s; }

.chat-input-bar {
    padding: 1rem; background: #37374a; display: flex; align-items: center; gap: 10px;
}
.input-fake { flex: 1; background: #222; padding: 8px 15px; border-radius: 20px; color: #777; font-size: 0.8rem; }
.send-btn { color: #6c5ce7; font-size: 1.2rem; }

/* AI 信息 */
.ai-info { flex: 1; }
.tech-tag {
    background: rgba(108, 92, 231, 0.2); color: #a29bfe; padding: 5px 12px;
    border-radius: 4px; font-family: monospace; font-size: 0.9rem; display: inline-block; margin-bottom: 1rem;
    border: 1px solid #6c5ce7;
}
.ai-info h2 { font-size: 3rem; margin-bottom: 1rem; line-height: 1.1; }
.ai-desc { color: #b2bec3; line-height: 1.6; margin-bottom: 2rem; font-size: 1.1rem; }

.feature-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1.5rem; }
.feature-list li { display: flex; gap: 1rem; align-items: flex-start; }
.f-icon { font-size: 1.5rem; background: #333; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; }
.feature-list strong { color: #fff; font-size: 1.1rem; display: block; margin-bottom: 0.3rem; }
.feature-list p { color: #a4b0be; font-size: 0.95rem; margin: 0; }

.guide-box {
    margin-top: 3rem; background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px;
    border-left: 4px solid #00b894;
}
.guide-box h4 { margin: 0 0 1rem 0; color: #00b894; }
.guide-box p { color: #ccc; margin: 0.5rem 0; font-size: 0.9rem; font-family: monospace; }

.health-footer { text-align: center; padding: 3rem; background: #f0f3f8; color: #6c5ce7; font-weight: bold; }
.dark .health-footer { background: #121212; color: #a29bfe; }

@keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }

@media (max-width: 900px) {
    .emotion-grid { grid-template-columns: 1fr; }
    .stack-container { flex-direction: column; gap: 2rem; }
    .card-deck { width: 100%; height: 350px; }
    .strategy-card { width: 260px; height: 360px; }
    
    .ai-container { flex-direction: column; }
    .phone-mockup { width: 100%; height: 500px; }
    .ai-info h2 { font-size: 2.2rem; }
}
</style>