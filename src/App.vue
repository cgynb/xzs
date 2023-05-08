<template>
    <div>
        <a-layout>
            <a-layout-header>
                <Header />
            </a-layout-header>
            <a-layout>
                <a-layout-sider :style="{ width: '20%' }"></a-layout-sider>
                <a-layout-content>
                    <Body/>
                </a-layout-content>
                <a-layout-sider :style="{ width: '20%' }"></a-layout-sider>
            </a-layout>
        </a-layout>
    </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
</script>
