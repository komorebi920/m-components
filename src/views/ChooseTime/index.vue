<template>
  <m-choose-time
    @startChange="startChange"
    @endChange="endChange"
    :endOptions="endOptions"
  />
</template>

<script setup lang="ts">
const startChange = (startTime: string) => {
  console.log(startTime)
}

const endChange = ({
  startTime,
  endTime,
}: {
  startTime: string
  endTime: string
}) => {
  console.log(startTime, endTime)
}

const endOptions = {
  clearable: false,
}
</script>

<style lang="less" scoped></style>
