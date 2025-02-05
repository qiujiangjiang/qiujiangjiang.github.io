<script setup>
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { NLayoutSider, NMenu } from 'naive-ui'
import CustomSidebar from './components/CustomSidebar.vue'
import FloatingQRCode from './components/FloatingQRCode.vue'
import ho from './components/HomeLayout.vue'
const { Layout } = DefaultTheme
const { frontmatter } = useData()
const route = useRoute()

// 判断是否是首页
const isHome = route.path === '/'
</script>

<template>
    <Layout>
        <template #layout-bottom>
            <FloatingQRCode />
            <ho />
        </template>
        <!-- 首页使用自定义布局 -->
        <template #home-features-before v-if="isHome">
            <div class="home-sidebar">
                <CustomSidebar />
            </div>
        </template>

        <!-- 其他页面使用常规侧边栏 -->
        <template #sidebar v-else>
            <CustomSidebar />
        </template>
    </Layout>
</template>

<style scoped>
.home-sidebar {
    position: fixed;
    left: 0;
    top: var(--vp-nav-height);
    bottom: 0;
    width: 280px;
    /* border-right: 1px solid var(--vp-c-divider); */
    background-color: var(--vp-c-bg);
    z-index: 1;
}

/* 为首页内容添加左边距 */
.VPHome {
    padding-left: 280px;
}

/* 响应式处理 */
@media (max-width: 960px) {
    .home-sidebar {
        display: none;
    }

    .VPHome {
        padding-left: 0;
    }
}
</style>