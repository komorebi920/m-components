<template>
  <el-progress :percentage="p" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  // 进度条的进度
  percentage: {
    type: Number,
    default: 0,
  },
  // 进度条是否有动画效果
  isAnimation: {
    type: Boolean,
    default: false,
  },
  // 动画时长（毫秒）
  time: {
    type: Number,
    default: 3000,
  },
})

const p = ref(0)

onMounted(() => {
  if (props.isAnimation) {
    const t = Math.ceil(props.time / props.percentage)
    const timer = setInterval(() => {
      p.value += 1

      if (p.value >= props.percentage) {
        p.value = props.percentage
        clearInterval(timer)
      }
    }, t)
  } else {
    p.value = props.percentage
  }
})
</script>

<style scoped></style>
