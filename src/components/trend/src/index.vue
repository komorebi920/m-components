<template>
  <div class="trend">
    <div class="text">{{ text }}</div>
    <div class="icon">
      <el-icon-arrow-up :style="{ color: upIconColor }" v-if="type === 'up'" />
      <el-icon-arrow-down :style="{ color: downIconColor }" v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // 标记当前的趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: 'up',
  },
  // 趋势显示的文字
  // 1. 父组件传递过来
  // 2. 插槽
  text: {
    type: String,
    default: '文字',
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d',
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a',
  },
})
</script>

<style lang="less" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }

  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
