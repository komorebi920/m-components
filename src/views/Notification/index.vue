<template>
  <m-notification :value="50">
    <template #default
      ><m-list
        :list="list"
        :actions="actions"
        @clickItem="clickItem"
        @clickAction="clickAction"
    /></template>
  </m-notification>
</template>

<script setup lang="ts">
import { list, actions } from './data'
import { ListItem, ActionOptions } from '../../components/list/src/types'

const clickItem = (item: ListItem, index: number) => {
  console.log(item, index)
}

const clickAction = (action: ActionOptions, index: number) => {
  console.log(action, index)
}
</script>

<style lang="less" scoped></style>
