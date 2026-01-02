<template>
    <nav class="nav-container">
        <div class="nav-content">
        <div class="nav-title">
            <span class="macaw-text">MACAW</span>
            <span class="rainforest-text">WORLD</span>
        </div>

        <div class="nav-links">
            <a href="#home" class="nav-link">首页</a>
            <a href="#species" class="nav-link">品种图鉴</a>
            <a href="#habits" class="nav-link">生存智慧</a>
            <a href="#culture" class="nav-link">文化象征</a>
            <a href="#protection" class="nav-link">更多知识</a>
        </div>

        <div class="nav-button-area">
            <ThemeButton></ThemeButton>
        </div>
        </div>
    </nav>
    
    <div id="home" class="hero-section">
    <img src="../../assets/image/animal/animal-2/forest.png" alt="背景图" class="hero-bg">
    
    <div class="hero-text">
        <h1>雨林彩虹</h1>
        <p>智商与美丽的化身。探索金刚鹦鹉——亚马逊丛林中最喧闹、最深情且最聪明的色彩精灵。</p >
        <a href="#species" class="explore-btn">探索族群</a>
    </div>
    </div>

    <div id="species" class="desk">
        <p class="section-header">金刚鹦鹉家族成员</p>
        <div class="card-container">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-2/yellow.png" alt="琉璃金刚鹦鹉" class="card-img">
                        </div>
                        <h3 class="card-title">琉璃金刚鹦鹉</h3>
                        <p class="card-desc">雨林中的 “经典蓝黄” 配色</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">最常见的金刚鹦鹉品种，体长约86cm。背部呈亮蓝色，腹部为金黄色，这种配色在雨林树冠层是绝佳的伪装（从下往上看像天空，从上往下看像植物光影）。
                            性格温顺且极度亲人，是知名度最高的宠物鹦鹉之一，但其叫声响亮刺耳，原本是为了在嘈杂的雨林中呼唤同伴。
                        </p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-2/red.png" alt="五彩金刚鹦鹉" class="card-img">
                        </div>
                        <h3 class="card-title">五彩金刚鹦鹉</h3>
                        <p class="card-desc">丛林里的 “火焰舞者”</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">体色以鲜红色为主，翅膀点缀黄、蓝、绿色，像一团飞行的火焰。
                            性格比琉璃金刚更为敏感且具有攻击性，野性更强。它们通常终身一夫一妻制，飞行时总是成双成对，翅膀展开可达1米以上，是南美洲文化中太阳神的象征。
                        </p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-2/blue.png" alt="紫蓝金刚鹦鹉" class="card-img">
                        </div>
                        <h3 class="card-title">紫蓝金刚鹦鹉</h3>
                        <p class="card-desc">珍稀的 “鹦鹉界巨人”</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">世界上最大的飞行鹦鹉，体长可达1米，通体钴蓝色，眼周有标志性的黄色裸皮。
                            它们的鸟喙咬合力惊人，能轻易咬碎坚硬的椰子壳甚至铁丝网。由于非法盗猎和栖息地破坏，一度濒临灭绝，是极为珍贵的保育物种。
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-2/baby-macaw.png" alt="幼鸟与智力" class="card-img">
                        </div>
                        <h3 class="card-title">幼鸟（The Future）</h3>
                        <p class="card-desc">拥有 “五岁孩童” 般的智商</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">金刚鹦鹉是极高智商的鸟类，拥有自我意识和丰富的情感。
                            幼鸟需要父母长达半年的喂养，并在此期间学习复杂的生存技能和社会规则。如果你饲养它们，它们会像“长不大的孩子”一样，需要大量的陪伴、玩具和互动，否则会患上抑郁症并拔掉自己的羽毛。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <main class="content">
      <section class="intro-section">
        <p class="intro-text">
          金刚鹦鹉（Macaw）是色彩最艳丽、体型最大的鹦鹉科成员，原产于美洲热带地区。它们不仅是雨林中的颜值担当，更是拥有惊人智商和情感深度的“长寿智者”，其寿命可与人类相当，能陪伴主人走过半个世纪。
        </p>
      </section>

      <section id="structure" class="chapter-section">
        <h3 class="chapter-title">一、天生装备：适应雨林的顶级设计</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            金刚鹦鹉拥有自然界最强壮的鸟喙之一，这把“多功能钳子”不仅能作为攀爬树木的第三只手，更能轻易咬开巴西坚果等硬壳果实。它们的舌头内含骨头，灵活有力，能精准地取出果肉。
          </p>
          
          <div class="img-card">
            <img src="../../assets/image/animal/animal-2/beak-detail.jpg" alt="强壮的鸟喙" class="content-img">
            <p class="img-caption">足以咬碎坚果的强力鸟喙</p>
          </div>
        </div>

        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
             它们的脚趾呈“对趾型”（两趾向前，两趾向后），这种结构赋予了它们像灵长类动物一样抓握食物的手部功能。无论是在风中倒挂金钩，还是单脚拿着食物进食，都游刃有余。
          </p>
        </div>
      </section>

      <section id="habits" class="chapter-section">
        <h3 class="chapter-title">二、生存智慧：为什么它们要吃土？</h3>
        
        <div class="two-column-layout">
          <div class="column left-column">
            <h4 class="subchapter-title">雨林中的解毒剂</h4>
            <p class="custom-paragraph">
              在亚马逊雨林，每天早晨都会出现壮观的“鹦鹉舔黏土”景象。数百只金刚鹦鹉聚集在河岸的黏土壁上进食。这不是因为饥饿，而是因为它们日常食用的未成熟种子和果实中含有生物碱毒素。
            </p>
            <p class="custom-paragraph">
              黏土中的矿物质能中和这些毒素，保护鹦鹉的肠胃。这是一种代代相传的古老生存智慧。
            </p>
          </div>
          
          <div class="column right-column">
            <h4 class="subchapter-title">挑剔的美食家</h4>
            <p class="custom-paragraph">
              金刚鹦鹉的食谱非常广泛，包括水果、坚果、昆虫和蜗牛。它们强大的记忆力能记住雨林中数百棵果树的果实成熟时间，每天飞行数十公里去寻找最完美的食物。
            </p>
            <p class="custom-paragraph">
              作为种子传播者，它们进食时掉落的果屑和排泄物，对雨林的植被更新起到了至关重要的作用。
            </p>
          </div>
        </div>

        <div class="img-card full-width">
          <img src="../../assets/image/animal/animal-2/carve.png" alt="鹦鹉舔食黏土" class="content-img">
          <p class="img-caption">秘鲁坦博帕塔国家保护区的“舔泥壁”奇观</p>
        </div>
      </section>

      <section id="social" class="chapter-section">
        <h3 class="chapter-title">三、情感生活：忠贞不渝的伴侣</h3>
        
        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            金刚鹦鹉以其对伴侣的忠诚而闻名。一旦结对，它们通常会相伴终生。在飞行时，你会发现它们总是两两靠近，甚至翅膀尖几乎相碰。它们会花费大量时间为对方梳理羽毛，这不仅是清洁，更是增进感情的亲密仪式。
          </p>
        </div>

        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            如果伴侣死亡，幸存的鹦鹉往往会表现出极度的悲伤，甚至绝食。这种深厚的情感连接，加上长达50-80年的寿命，使得它们在作为宠物时，往往被视为“传家宝”——因为它们很可能比主人活得更长。
          </p>
          <div class="img-card">
            <img src="../../assets/image/animal/animal-2/couple.png" alt="恩爱的鹦鹉伴侣" class="content-img">
            <p class="img-caption">相互理毛是金刚鹦鹉表达爱意的方式</p>
          </div>
        </div>
      </section>

      <section id="culture" class="chapter-section">
        <h3 class="chapter-title">四、文化象征：从海盗到电影明星</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            在影视作品中，金刚鹦鹉早已成为热带风情的代名词。最著名的莫过于动画电影《里约大冒险》（Rio），主角“布鲁”正是一只稀有的斯皮克斯金刚鹦鹉。电影生动还原了它们被走私的困境，以及想要回归自然的渴望。
          </p>
        </div>

        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            在西方航海文化中，鹦鹉常停在海盗船长的肩膀上，这源于大航海时代水手们将艳丽且能学舌的鹦鹉视为珍贵的异域战利品。而在古玛雅文明中，金刚鹦鹉红色的羽毛被视为火焰和太阳的象征，是沟通神灵的使者。
          </p>
          
          <div class="img-card">
            <img src="../../assets/image/animal/animal-2/movie.png" alt="里约大冒险剧照" class="content-img" style="width: 65%;">
            <p class="img-caption">《里约大冒险》让更多人关注到了濒危鹦鹉的命运</p>
          </div>
        </div>
      </section>

      <section id="protection" class="chapter-section">
        <h3 class="chapter-title">五、生存危机：美丽的代价</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            金刚鹦鹉的美丽成为了它们的诅咒。由于宠物贸易的暴利，大量野生幼鸟被非法盗猎。此外，亚马逊雨林的砍伐导致它们失去了筑巢的树洞（金刚鹦鹉不会自己打洞，依赖天然树洞）。
          </p>
          <p class="custom-paragraph">
             斯皮克斯金刚鹦鹉（小蓝金刚鹦鹉）已被宣布在野外灭绝。保护这些雨林精灵，不仅需要严厉打击走私，更需要保护它们赖以生存的雨林生态系统。
          </p>
        </div>
      </section>
      
</main>
<a id="knowledge" href="https://www.iucnredlist.org/" target="_blank" class="external-link primary-link">
  查看IUCN红色名录，关注濒危物种 →
</a>
</template>

<script setup>
    import ThemeButton from '../../components/ThemeButton.vue'
    import { onMounted } from 'vue';

    onMounted(() => {
    // 平滑滚动到锚点
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
    });
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* 导航栏容器 */
    .nav-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px); 
        z-index: 999; 
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        transition: all 0.5s ease;
    }
    .dark .nav-container {
        background-color: rgba(30, 50, 60, 0.7);
    }

    .nav-content {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        height: 4rem;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        gap: 2rem;
    }

    /* 标题样式 */
    .nav-title {
        margin-left: 30px;
        display: flex;
        gap: 10px;
        font-size: 1.9rem;
        font-weight: 700;
        font-family: 'Segoe UI', 'Inter', sans-serif;
    }
    
    .macaw-text {
        color: #007bff;
        transition: all 0.8s ease;
    }
    .dark .macaw-text {
        color: #4facfe;
    }

    .rainforest-text {
        color: #28a745;
        margin-left: 0.3rem;
        transition: all 1.0s ease;
    }
    .dark .rainforest-text {
        color: #00f260;
    }

    /* 导航链接样式 */
    .nav-links {
        display: flex;
        gap: 2.0rem;
    }

    .nav-link {
        color: #1a1a1a;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Segoe UI', 'Inter', sans-serif;
        transition: color 0.5s ease;
        position: relative;
    }
    .dark .nav-link {
        color: #e1e0e0;
    }

    .nav-link:hover {
        color: #dc3545; 
    }
    .dark .nav-link:hover {
        color: #ff6b6b;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -0.3rem;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #dc3545;
        transition: width 0.3s ease;
    }
    .dark .nav-link::after {
        background-color: #ff6b6b;
    }

    .nav-link:hover::after {
        width: 100%;
    }

    .nav-button-area {
        width: 6rem;
    }

    @media (max-width: 768px) {
        .nav-content { padding: 0 1rem; gap: 1rem; }
        .nav-links { gap: 1.5rem; }
        .nav-title { font-size: 1.2rem; }
        .nav-link { font-size: 0.9rem; }
    }

    /* Hero Section */
    .hero-section {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .hero-bg {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.8);
    }

    .hero-text {
        position: absolute;
        top: 35%;
        right: 50%;
        transform: translateX(50%);
        color: white;
        text-align: center;
        max-width: 600px;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.9);
    }

    .hero-text h1 {
        font-size: clamp(2rem, 5vw, 4rem);
        margin-bottom: 1rem;
    }

    .hero-text p {
        font-size: clamp(1rem, 2vw, 1.3rem);
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .section-header {
        margin: 0 0;
        display: block;
        font-size: 2rem;
        font-family: serif;
        font-weight: 600;
        color: #0d5e32;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.5);
        /* 确保文字居中 */
        text-align: center; 
    }
    .dark .section-header {
        color: #76c7c0;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    /* 按钮样式 */
    .explore-btn {
        padding: 0.8rem 2.5rem;
        background: linear-gradient(45deg, #007bff, #28a745);
        border: none;
        color: white;
        border-radius: 2rem;
        cursor: pointer;
        font-size: 1.1rem;
        font-weight: bold;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .explore-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 0 15px rgba(40, 167, 69, 0.6);
    }

    /* 卡片容器：内部卡片的排列 */
    .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        max-width: 1300px;
        width: 100%; /* 占满 desk 宽度 */
        padding-top: 10px;
    }
    
    /* 桌面背景：已修复布局方向 */
    .desk {
        width: 100%;
        background-color: #dcedc8;
        border-radius: 20px;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.08);
        padding: 40px 20px;
        
        /* 核心修改：改为垂直布局，确保标题在上方 */
        display: flex;
        flex-direction: column; 
        align-items: center; 
    }
    .dark .desk {
        background-color: #1b3a28;
    }

    /* 卡片基础样式 */
    .flip-card {
        box-sizing: border-box;
        width: 300px;
        height: 400px;
        perspective: 2000px;
        cursor: pointer;
    }
    .flip-card-inner {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        border-radius: 16px;
        transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 6px 12px rgba(0,0,0,0.08);
    }
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg) scale(1.1) translateY(-10px);
        box-shadow: 0 20px 30px rgba(0,0,0,0.15);
    }
    .dark .flip-card:hover .flip-card-inner {
        transform: rotateY(-180deg) scale(1.1) translateY(-10px);
    }

    /* 卡片正面 */
    .flip-card-front {
        box-sizing: border-box;
        background: #ffffff;
        color: #2d3748;
        border: 1px solid #f5f5f5;
    }
    .dark .flip-card-front {
        background: #2d3748;
        color: #a0aec0;
        border: 1px solid #1a202c;
    }

    /* 卡片背面 */
    .flip-card-back {
        box-sizing: border-box;
        background: linear-gradient(135deg, #a8e6cf 0%, #3498db 100%);
        color: #1a252f;
        transform: rotateY(180deg);
        border: 1px solid #81c784;
    }
    .dark .flip-card-back {
        background: linear-gradient(135deg, #2c3e50 0%, #000000 100%);
        color: #d1d5db;
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 16px;
        overflow: hidden;
        padding: 24px;
        display: flex;
        flex-direction: column;
    }

    .card-img-container {
        width: 100%;
        height: 50%;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s ease;
    }
    .flip-card:hover .card-img {
        transform: scale(1.05);
    }
    .card-title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
        line-height: 1.3;
    }
    .card-desc {
        font-size: 15px;
        line-height: 1.6;
        opacity: 0.9;
        flex: 1;
    }

    /* 内容区 */
    .content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .intro-section { margin-bottom: 5rem; }
    .intro-text {
        font-size: 1.2rem;
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
        color: #4a5568;
        line-height: 2;
    }

    /* 章节标题 */
    .chapter-section { margin-bottom: 6rem; position: relative; }
    .chapter-title {
        font-size: 2rem;
        color: #2c3e50;
        margin-bottom: 2.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #28a745;
        position: relative;
    }

    .chapter-title::first-letter {
        float: left;
        font-size: 4rem;
        line-height: 1;
        margin-right: 0.5rem;
        color: #28a745;
        font-weight: 800;
    }

    .subchapter-title {
        font-size: 1.5rem;
        color: #2c3e50;
        margin-bottom: 1.5rem;
        padding-left: 1rem;
        border-left: 4px solid #007bff;
    }

    /* 段落布局 */
    .paragraph-group { margin-bottom: 2rem; }
    .left-offset { margin-left: 1rem; }
    .right-offset { margin-right: 1rem; }

    .two-column-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-bottom: 3rem;
    }
    .left-column { margin-right: 1rem; }
    .right-column { margin-left: 1rem; }

    .custom-paragraph {
        font-size: 1.05rem;
        color: #4a5568;
        margin-bottom: 1.5rem;
        text-align: justify;
    }
    .custom-paragraph::first-letter {
        float: left;
        font-size: 2.5rem;
        line-height: 0.8;
        margin-right: 0.8rem;
        color: #007bff;
        font-weight: 700;
        padding-top: 0.2rem;
    }

    /* 图片容器 */
    .img-card { margin: 2rem 0; text-align: center; }
    .img-card.full-width {
        max-width: 100%;
        margin-left: -1rem;
        margin-right: -1rem;
    }
    .content-img {
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-width: 100%;
        height: auto;
        transition: transform 0.3s ease;
    }
    .content-img:hover { transform: scale(1.02); }
    .img-caption {
        margin-top: 0.8rem;
        font-size: 0.9rem;
        color: #718096;
        font-style: italic;
    }

    /* 链接样式 */
    .external-link {
        display: inline-block;
        color: #28a745;
        text-decoration: none;
        font-weight: 500;
        margin-top: 0.5rem;
        transition: all 0.3s ease;
    }
    .external-link:hover {
        color: #1e7e34;
        transform: translateX(5px);
    }

    .primary-link {
        background-color: #28a745;
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: 4px;
        margin-top: 1rem;
    }
    .primary-link:hover {
        background-color: #1e7e34;
        transform: translateX(0) scale(1.05);
    }
</style>