<template>
  <m-choose-area @change="changeArea" />
</template>

<script setup lang="ts">
function changeArea(val: any) {
  console.log(val)
}
</script>

<style lang="less" scoped></style>
