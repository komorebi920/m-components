<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-time-select
        v-model="startTime"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        :placeholder="startPlaceholder"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :placeholder="endPlaceholder"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  // 开始时间占位符
  startPlaceholder: {
    type: String,
    default: '开始时间',
  },
  // 开始时间的最小值
  startTimeStart: {
    type: String,
    default: '08:00',
  },
  // 开始时间的最大值
  startTimeEnd: {
    type: String,
    default: '24:00',
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: '00:30',
  },
  // 结束时间占位符
  endPlaceholder: {
    type: String,
    default: '结束时间',
  },
  // 结束时间的最小值
  endTimeStart: {
    type: String,
    default: '08:00',
  },
  // 结束时间的最大值
  endTimeEnd: {
    type: String,
    default: '24:00',
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: '00:30',
  },
})

// 开始时间
const startTime = ref<string>('')

// 结束时间
const endTime = ref<string>('')

// 禁用结束时间
const endTimeDisabled = ref<boolean>(true)

const emits = defineEmits(['startChange', 'endChange'])

// 监听开始时间变化
watch(
  () => startTime.value,
  (val) => {
    if (val === '') {
      endTime.value = ''
      endTimeDisabled.value = true
    } else {
      endTimeDisabled.value = false
      emits('startChange', val)
    }
  }
)

// 监听结束时间变化
watch(
  () => endTime.value,
  (val) => {
    if (val !== '') {
      emits('endChange', {
        startTime: startTime.value,
        endTime: val,
      })
    }
  }
)
</script>

<style lang="less" scoped></style>
Î
