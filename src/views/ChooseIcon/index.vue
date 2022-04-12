<template>
  <div>
    <m-choose-icon title="选择图标" v-model:visible="visible">
      选择图标
    </m-choose-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import mChooseIcon from '../../components/chooseIcon/src/index.vue'
const visible = ref<boolean>(false)
</script>

<style lang="less" scoped></style>
