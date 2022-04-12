<template>
  <el-menu
    :collapse="collapse"
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon-menu />
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu />
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu />
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
