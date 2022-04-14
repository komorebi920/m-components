<template>
  <m-choose-area @change="changeArea" />
</template>

<script setup lang="ts">
import mChooseArea from '../../components/chooseArea/src/index.vue'

function changeArea(val: any) {
  console.log(val)
}
</script>

<style lang="less" scoped></style>
