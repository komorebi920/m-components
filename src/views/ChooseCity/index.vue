<template>
  <m-choose-city @change="change" />
</template>

<script setup lang="ts">
import { City } from '../../components/chooseCity/types'

const change = (city: City) => {
  console.log(city)
}
</script>

<style lang="less" scoped></style>
