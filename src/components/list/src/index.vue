<template>
  <div>list</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ListOptions, ActionOptions } from './types'

const props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
})
</script>

<style lang="less" scoped></style>
