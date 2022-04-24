<template>
  <el-popover
    placement="bottom-start"
    trigger="click"
    v-model:visible="visible"
    :width="460"
  >
    <template #reference>
      <div class="result" @click="toggleVisible">
        <div>{{ result }}</div>
        <div :class="{ icon: true, rotate: visible }">
          <el-icon-arrow-down />
        </div>
      </div>
    </template>
    <el-row>
      <el-col :span="8">
        <el-radio-group v-model="radioValue">
          <el-radio-button label="按城市" />
          <el-radio-button label="按省份" />
        </el-radio-group>
      </el-col>
      <el-col :span="16">
        <el-select
          v-model="selectValue"
          filterable
          placeholder="请搜索城市"
          :filterMethod="filterMethod"
          @change="onSelectChange"
        >
          <el-option
            v-for="city in options"
            :key="city.id"
            :label="city.name"
            :value="city.id"
          />
        </el-select>
      </el-col>
    </el-row>
    <!-- 按城市 start -->
    <template v-if="radioValue === '按城市'">
      <!-- 字母 start -->
      <div class="city-key">
        <div
          v-for="(_, key) in cityData"
          :key="key"
          class="city-key-item"
          @click="clickKey(key)"
        >
          {{ key }}
        </div>
      </div>
      <!-- 字母 end -->
      <!-- 城市列表 start -->
      <el-scrollbar max-height="300px">
        <template v-for="(city, key) in cityData" :key="key">
          <el-row class="city" :id="key">
            <el-col :span="2">{{ key }}：</el-col>
            <el-col :span="22" class="city-name">
              <div
                v-for="item in city"
                :key="item.id"
                class="city-name-item"
                @click="clickCity(item)"
              >
                {{ item.name }}
              </div>
            </el-col>
          </el-row>
        </template>
      </el-scrollbar>
      <!-- 城市列表 end -->
    </template>
    <!-- 按城市 end -->
    <!-- 按省份 start -->
    <template v-else>
      <!-- 省份 start -->
      <div class="province-key">
        <template v-for="(_, key) in provinceData" :key="key">
          <template v-for="(province, i) in provinceData[key]" :key="i">
            <div class="province-key-item" @click="clickKey(province.name)">
              {{ province.name }}
            </div>
          </template>
        </template>
      </div>
      <!-- 省份 end -->
      <!-- 城市列表 start -->
      <el-scrollbar max-height="300px">
        <template v-for="(_, key) in provinceData" :key="key">
          <template v-for="(province, i) in provinceData[key]" :key="i">
            <el-row class="province" :id="province.name">
              <el-col :span="3">{{ province.name }}：</el-col>
              <el-col :span="21" class="province-name">
                <div
                  v-for="(city, j) in province.data"
                  :key="j"
                  class="city-name-item"
                  @click="clickCity({ name: city })"
                >
                  {{ city }}
                </div>
              </el-col>
            </el-row>
          </template>
        </template>
      </el-scrollbar>
      <!-- 城市列表 end -->
    </template>
    <!-- 按省份 end -->
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import cityData from '../lib/city'
import provinceData from '../lib/province'
import { City } from '../types'

// 所有城市
const allCities: City[] = Object.values(cityData).flat(2)

const result = ref<string>('请选择')
const visible = ref<boolean>(false)
const radioValue = ref<string>('按城市')
const selectValue = ref<string>('')
const options = ref<City[]>(allCities)

// 分发事件
const emits = defineEmits(['change'])

// 控制弹出层的显示
const toggleVisible = () => {
  visible.value = !visible.value
}

/**
 * 点击城市
 */
const clickCity = (city: City) => {
  result.value = city.name
  visible.value = false
  emits('change', city)
}

/**
 * 点击首字母
 */
const clickKey = (key: string) => {
  const el = document.getElementById(key)

  if (el) {
    el.scrollIntoView()
  }
}

/**
 * 自定义搜索城市
 */
const filterMethod = (val: string) => {
  if (val === '') {
    options.value = allCities
  } else {
    // 中文、拼音同时过滤
    options.value = allCities.filter(
      (v) => v.name.includes(val) || v.spell?.includes(val)
    )
  }
}

const onSelectChange = (val: number) => {
  clickCity(allCities.find((city) => city.id === val)!)
}
</script>

<style lang="less" scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  transition: color linear 0.3s;

  &:hover {
    color: #409eff;
  }

  .icon {
    display: flex;
    align-items: center;
    margin-left: 4px;
    position: relative;
    top: 2px;
    transition: transform linear 0.3s;

    &.rotate {
      transform: rotate(180deg);
    }

    svg {
      width: 1em;
      height: 1em;
    }
  }
}

.city-key,
.province-key {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-bottom: 6px;

  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #eee;
    cursor: pointer;
    transition: all linear 0.3s;

    &:hover {
      color: #409eff;
      border-color: #409eff;
    }
  }
}

.city,
.province {
  margin-bottom: 12px;

  &-name {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &-item {
      margin-right: 6px;
      margin-bottom: 6px;
      cursor: pointer;
      transition: color linear 0.3s;

      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>
