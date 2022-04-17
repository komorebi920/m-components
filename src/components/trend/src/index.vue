<template>
  <div class="trend">
    <div class="text">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <el-icon-arrow-up
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      />
      <el-icon-arrow-down
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'

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
  // 颜色反转，只对默认颜色生效
  // 如果同时使用了颜色反转和自定义颜色，则自定义颜色不生效
  reverseColor: {
    type: Boolean,
    default: false,
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

const slots = useSlots()
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
