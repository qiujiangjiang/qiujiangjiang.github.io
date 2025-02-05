<script setup lang="ts">
import { ref } from 'vue'

const qrCodes = [
  {
    src: 'https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI3NjQxNjQ1MQ==&mid=2247484439&idx=1&sn=dad7326d8cb601a45b8b3adb8fa068e2&send_time=1736657150',
    alt: '微信公众号',
    label: '微信公众号'
  },
  // 支付宝二维码配置
]

const showQR = ref(false)
</script>

<template>
  <div class="floating-container">
    <!-- 悬浮按钮 -->
    <div class="float-button" @click="showQR = !showQR">
      <span class="icon">{{ showQR ? '×' : '➕' }}</span>
      <span class="text">{{ showQR ? '关闭' : '关注我' }}</span>
    </div>

    <!-- 二维码容器  @error="(e) => e.target.classList.add('error')"-->
    <div class="qr-container" v-show="showQR">
      <div v-for="(qr, index) in qrCodes" 
           :key="index" 
           class="qr-code">
        <div class="qr-wrapper">
          <img 
            :src="qr.src" 
            :alt="qr.alt"
           
          />
        </div>
        <span class="qr-label">{{ qr.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.floating-container {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
}

.float-button {
  background: var(--vp-c-brand);
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  transition: transform 0.3s;
}

.float-button:hover {
  transform: scale(1.1);
}

.icon {
  font-size: 24px;
  line-height: 1;
}

.text {
  font-size: 12px;
  margin-top: 2px;
}

.qr-container {
  position: absolute;
  right: 70px;
  bottom: 0;
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: slideIn 0.3s ease;
}

.qr-code {
  text-align: center;
}

.qr-wrapper {
  width: 150px;
  height: 150px;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-code img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.qr-code img.error {
  width: 40px;
  height: 40px;
  opacity: 0.5;
}

.qr-label {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 响应式处理 */
@media (max-width: 768px) {
  .qr-container {
    right: 0;
    bottom: 70px;
  }
}
</style>