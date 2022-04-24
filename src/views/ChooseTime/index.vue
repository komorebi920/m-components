<template>
  <m-choose-time
    @startChange="startTimeChange"
    @endChange="endTimeChange"
    :endOptions="endOptions"
  />
  <br />
  <br />
  <m-choose-date
    @startChange="startDateChange"
    @endChange="endDateChange"
    :disableToday="false"
    :endOptions="endOptions"
  />
</template>

<script setup lang="ts">
const startTimeChange = (startTime: string) => {
  console.log(startTime)
}

const endTimeChange = ({
  startTime,
  endTime,
}: {
  startTime: string
  endTime: string
}) => {
  console.log(startTime, endTime)
}

const startDateChange = (startDate: string) => {
  console.log(startDate)
}

const endDateChange = ({
  startDate,
  endDate,
}: {
  startDate: Date
  endDate: Date
}) => {
  console.log(startDate, endDate)
}

const endOptions = {
  clearable: false,
}
</script>

<style lang="less" scoped></style>
