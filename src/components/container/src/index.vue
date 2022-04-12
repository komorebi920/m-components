<template>
  <el-container>
    <el-aside style="width: auto;">
      <el-menu
        :collapse="isCollapse"
        default-active="2"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1">
          <el-icon-menu />
          <span>Navigator One</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon-menu />
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon-menu />
          <span>Navigator Three</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggle">
          <el-icon-expand v-if="isCollapse" />
          <el-icon-fold v-else />
        </span>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let isCollapse = ref(false)
let toggle = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
