<template>
  <m-menu
    :data="data"
    router
    :defaultActive="$route.path"
    :collapse="collapse"
  ></m-menu>
</template>

<script setup lang="ts">
defineProps<{
  collapse: boolean
}>()

const data = [
  { name: '首页', index: '/', icon: 'HomeFilled' },
  { name: '图标选择器', index: '/chooseIcon', icon: 'Check' },
  { name: '省市区选择器', index: '/chooseArea', icon: 'Location' },
  { name: '趋势标记', index: '/trend', icon: 'Sort' },
  { name: '时间选择', index: '/chooseTime', icon: 'Timer' },
  { name: '导航菜单', index: '/menu', icon: 'Menu' },
  { name: '通知菜单', index: '/notification', icon: 'Bell' },
  { name: '城市选择', index: '/chooseCity', icon: 'TurnOff' },
  { name: '进度条', index: '/progress', icon: 'DArrowRight' },
  { name: '日历', index: '/calendar', icon: 'ScaleToOriginal' },
  { name: '表单', index: '/form', icon: 'Setting' },
  { name: '表格', index: '/table', icon: 'ShoppingBag' },
]
</script>

<style lang="less" scoped></style>
