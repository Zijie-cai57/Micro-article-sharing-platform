<template>
  <canvas ref="canvasRef" class="mouse-trail-canvas" :style="{ zIndex: zIndex }"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 接收 props，方便你在不同页面调整层级
defineProps({
  zIndex: {
    type: Number,
    default: 3 // 默认为 1，放在背景之上，内容之下
  }
})

const canvasRef = ref(null)
let ctx = null
let particles = []
let animationFrameId = null

// --- 粒子类定义 ---
class Particle {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    // 初始大小范围
    this.size = Math.random() * 8 + 3 
    // 速度
    this.speedX = Math.random() * 2 - 1
    this.speedY = Math.random() * 2 - 1
    this.color = color
    this.opacity = 1
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    
    // 变小速度 (数值越小，拖尾越长)
    if (this.size > 0.2) this.size -= 0.03 
    // 消失速度 (数值越小，消失越慢)
    if (this.opacity > 0) this.opacity -= 0.008 
  }

  draw() {
    const alpha = Math.max(0, this.opacity)
    ctx.fillStyle = this.color.replace('rgb', 'rgba').replace(')', `,${alpha})`)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

// --- 初始化与事件 ---
const initCanvas = () => {
  if (!canvasRef.value) return
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const handleResize = () => {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
}

const handleMouseMove = (e) => {
  // 每次移动添加几个粒子
  for (let i = 0; i < 1; i++) {
    const color = `rgb(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255)`
    particles.push(new Particle(e.clientX, e.clientY, color))
  }
}

const animate = () => {
  if (!ctx) return
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].draw()
    
    if (particles[i].size <= 0.3 || particles[i].opacity <= 0) {
      particles.splice(i, 1)
      i--
    }
  }
  animationFrameId = requestAnimationFrame(animate)
}

// --- 生命周期 ---
onMounted(() => {
  initCanvas()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
.mouse-trail-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* 关键：不阻挡鼠标点击 */
  display: block;
}
</style>