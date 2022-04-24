<template>
  <el-container>
    <el-aside style="width: auto">
      <nav-sider :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavSider from './navSider.vue'
import NavHeader from './navHeader.vue'

const isCollapse = ref(false)
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
