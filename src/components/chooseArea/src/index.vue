<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
    <el-select
      clearable
      :disabled="!province"
      style="margin: 0 10px"
      placeholder="请选择城市"
      v-model="city"
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
    <el-select
      clearable
      :disabled="!province || !city"
      placeholder="请选择区域"
      v-model="area"
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import allAreas from '../lib/pca-code.json'
import { AreaItem, Data } from '../types'

const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
const areas = ref(allAreas)
const selectCity = ref<AreaItem[]>([])
const selectArea = ref<AreaItem[]>([])

// 分发事件
const emits = defineEmits(['change'])

watch(
  () => province.value,
  (val) => {
    if (val) {
      selectCity.value = areas.value.find(
        (item) => item.code === province.value
      )!.children
    }
    city.value = ''
    area.value = ''
  }
)

watch(
  () => city.value,
  (val) => {
    if (val) {
      selectArea.value = selectCity.value.find(
        (item) => item.code === city.value
      )!.children!
    }
    area.value = ''
  }
)

watch(
  () => area.value,
  (val) => {
    if (val) {
      const provinceData: Data = {
        code: province.value,
        name: areas.value.find((item) => item.code === province.value)!.name,
      }
      const cityData: Data = {
        code: city.value,
        name: selectCity.value.find((item) => item.code === city.value)!.name,
      }
      const areaData: Data = {
        code: area.value,
        name: selectArea.value.find((item) => item.code === val)!.name,
      }
      emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData,
      })
    }
  }
)
</script>

<style lang="less" scoped></style>
