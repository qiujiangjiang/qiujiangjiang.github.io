<script setup lang="ts">
import { ref } from 'vue'

const floatingImages = ref([
  {
    src: 'https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI3NjQxNjQ1MQ==&mid=2247484439&idx=1&sn=dad7326d8cb601a45b8b3adb8fa068e2&send_time=1736657150',
    alt: '微信公众号',
    label: '微信公众号'
  },
  {
    src: '/public/meituran_25n.png',
    alt: '美团领劵',
     label: '美团领劵'
  }
  // 可以添加更多图片
])

const isVisible = ref(true)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div class="floating-images-container" v-show="isVisible">
    <div class="floating-images-wrapper">
      <div v-for="(image, index) in floatingImages" 
           :key="index" 
           class="floating-image">
        <div class="image-wrapper">
          <img :src="image.src" :alt="image.alt">
        </div>
        <span class="image-label">{{ image.label }}</span>
      </div>
      <button class="close-button" @click="toggleVisibility">×</button>
    </div>
  </div>
</template>

<style scoped>
.floating-images-container {
  position: fixed;
  right: 20px;
  bottom: 100px;
  z-index: 99;
}

.floating-images-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  animation: float 3s ease-in-out infinite;
}

.floating-image {
  text-align: center;
}

.image-wrapper {
  width: 150px;
  height: 150px;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.image-label {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: background-color 0.3s;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.7);
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* 响应式处理 */
@media (max-width: 768px) {
  .image-wrapper {
    width: 120px;
    height: 120px;
  }
}
</style>
