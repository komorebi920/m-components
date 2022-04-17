<template>
  <div style="width: 200px">
    <m-menu :data="data" defaultActive="1"></m-menu>
  </div>
</template>

<script setup lang="ts">
const data = [
  { name: '导航1', index: '1', icon: 'document' },
  { name: '导航2', index: '2', icon: 'document' },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      { name: '导航3-1', index: '3-1', icon: 'document' },
      { name: '导航3-2', index: '3-2', icon: 'document' },
    ],
  },
]
</script>

<style lang="less" scoped></style>
