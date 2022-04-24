<template>
  <div class="header">
    <span @click="toggle" class="icon">
      <el-icon-expand v-if="collapse" />
      <el-icon-fold v-else />
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()

// 分发事件
const emits = defineEmits(['update:collapse'])

const toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;

  .icon {
    cursor: pointer;
    padding: 12px;
    transition: color linear 0.3s;

    &:hover {
      color: #409eff;
    }

    svg {
      width: 1em;
      height: 1em;
    }
  }
}
</style>
