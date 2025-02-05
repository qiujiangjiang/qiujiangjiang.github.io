<script setup lang="ts">
import { ref } from 'vue'
import { useData, useRouter } from 'vitepress'

interface SidebarItem {
  text: string
  icon?: string
  collapsed: boolean
  items: (SubItem | NestedItem)[]
}

interface SubItem {
  text: string
  link: string
}

interface NestedItem {
  text: string
  collapsed: boolean
  items: SubItem[]
}

const isCollapsed = ref(false)

const sidebarItems: SidebarItem[] = [
  {
    text: '指南',
    icon: '📚',
    collapsed: false,
    items: [
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '基础配置', link: '/guide/configuration' }
    ]
  },
  {
    text: '组件',
    icon: '🧩',
    collapsed: false,
    items: [
      { text: '按钮', link: '/components/button' },
      { text: '表单', link: '/components/form' },
      {
        text: '数据展示',
        collapsed: true,
        items: [
          { text: '表格', link: '/components/table' },
          { text: '列表', link: '/components/list' }
        ]
      }
    ]
  }
]
</script>

<template>
  <div class="sidebar-container" :class="{ 'is-collapsed': isCollapsed }">
    <!-- 折叠按钮 -->
    <div class="collapse-trigger" @click="isCollapsed = !isCollapsed">
      <div class="trigger-dot">
        <span class="trigger-arrow">
          {{ isCollapsed ? '→' : '←' }}
        </span>
      </div>
    </div>
    <!-- 侧边栏内容 -->
    <aside class="custom-sidebar">
      <div class="sidebar-content" v-show="!isCollapsed">
        <div class="menu-content">
          <div v-for="(item, index) in sidebarItems" :key="index" class="menu-group">
            <div class="menu-group-title" @click="item.collapsed = !item.collapsed">
              <span class="menu-icon">{{ item.icon }}</span>
              <span>{{ item.text }}</span>
            </div>
            <div class="menu-group-items" v-show="!item.collapsed">
              <template v-for="(subItem, subIndex) in item.items" :key="subIndex">
                <!-- 处理嵌套菜单 -->
                <template v-if="'items' in subItem">
                  <div class="submenu-title" @click="subItem.collapsed = !subItem.collapsed">
                    {{ subItem.text }}
                  </div>
                  <div class="submenu-items" v-show="!subItem.collapsed">
                    <a v-for="(child, childIndex) in subItem.items" 
                       :key="childIndex"
                       :href="child.link"
                       class="menu-item">
                      {{ child.text }}
                    </a>
                  </div>
                </template>
                <!-- 处理普通菜单项 -->
                <a v-else :href="subItem.link" class="menu-item">
                  {{ subItem.text }}
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.sidebar-container {
  position: fixed;
  left: 0;
  top: var(--vp-nav-height);
  bottom: 0;
  z-index: 10;
  transition: all 0.3s ease;
  display: flex;
}

.sidebar-container.is-collapsed {
  width: 24px;
}

.custom-sidebar {
  width: 280px;
  height: 100%;
  background-color: var(--vp-c-bg);
  border-right: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  overflow: hidden;
}

.sidebar-container.is-collapsed .custom-sidebar {
  width: 0;
  border-right: none;
}

/* 折叠触发器样式 */
.collapse-trigger {
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 11;
  cursor: pointer;
}

.trigger-dot {
  width: 24px;
  height: 24px;
  background-color: var(--vp-c-brand);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.trigger-dot:hover {
  background-color: var(--vp-c-brand-light);
  transform: scale(1.1);
}

.trigger-arrow {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.sidebar-content {
  height: 100%;
  overflow-y: auto;
  padding: 16px;
}

.menu-group {
  margin-bottom: 16px;
}

.menu-group-title {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 0;
}

.menu-icon {
  margin-right: 8px;
}

.menu-group-items {
  padding-left: 24px;
}

.menu-item {
  display: block;
  padding: 6px 0;
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.menu-item:hover {
  color: var(--vp-c-brand);
}

.submenu-title {
  padding: 6px 0;
  cursor: pointer;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.submenu-items {
  padding-left: 16px;
}

/* 响应式处理 */
@media (max-width: 768px) {
  .sidebar-container {
    display: none;
  }
}
</style>