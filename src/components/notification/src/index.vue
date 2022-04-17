<template>
  <el-badge style="cursor: pointer;" :value="value" :max="max" :is-dot="isDot">
    <component :is="`el-icon-${kebabCase(icon)}`" class="icon" />
  </el-badge>
</template>

<script setup lang="ts">
import { kebabCase } from 'lodash'

const props = defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: 'Bell',
  },
  // 通知的数量
  value: {
    type: [String, Number],
    default: '',
  },
  // 最大值
  max: {
    type: Number,
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="less" scoped>
.icon {
  width: 1.2em;
  height: 1.2em;
}
</style>
