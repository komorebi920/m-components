<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        :disabledDate="startDisabledDate"
        :placeholder="startPlaceholder"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        :disabledDate="endDisabledDate"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  // 开始日期占位符
  startPlaceholder: {
    type: String,
    default: '开始时间',
  },
  // 结束日期占位符
  endPlaceholder: {
    type: String,
    default: '结束时间',
  },
  // 是否禁用今天之前的日期
  disableToday: {
    type: Boolean,
    default: true,
  },
})

// 开始日期
const startDate = ref<Date | null>(null)

// 结束日期
const endDate = ref<Date | null>(null)

// 禁用结束日期
const endDateDisabled = ref<boolean>(true)

// 禁用开始日期
const startDisabledDate = (time: Date) => {
  if (props.disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
  }
}

// 禁用结束日期
const endDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
  }
}

const emits = defineEmits(['startChange', 'endChange'])

// 监听开始日期变化
watch(
  () => startDate.value,
  (val) => {
    if (val === null) {
      endDate.value = null
      endDateDisabled.value = true
    } else {
      endDateDisabled.value = false
      emits('startChange', val)
    }
  }
)

// 监听结束时间变化
watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits('endChange', {
        startDate: startDate.value,
        endDate: val,
      })
    }
  }
)
</script>

<style lang="less" scoped></style>
