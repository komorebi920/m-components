<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item, i) in data" :key="i">
      <el-menu-item
        v-if="!item.children || !item.children.length"
        :index="item.index"
      >
        <div class="icon">
          <component v-if="item.icon" :is="`el-icon-${kebabCase(item.icon)}`" />
        </div>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu
        v-if="item.children && item.children.length"
        :index="item.index"
      >
        <el-menu-item
          v-for="(child, j) in item.children"
          :key="j"
          :index="child.index"
        >
          <div class="icon">
            <component
              v-if="child.icon"
              :is="`el-icon-${kebabCase(child.icon)}`"
            />
          </div>
          <span>{{ child.name }}</span>
        </el-menu-item>
        <template #title>
          <div class="icon">
            <component
              v-if="item.icon"
              :is="`el-icon-${kebabCase(item.icon)}`"
            />
          </div>
          <span>{{ item.name }}</span>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { kebabCase } from 'lodash'
import { MenuItem } from './types'

const props = defineProps({
  // 导航菜单的数据
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: '',
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="less" scoped>
.icon {
  position: relative;
  bottom: 1px;

  & * {
    vertical-align: middle;
  }

  svg {
    width: 1em;
    height: 1em;
    margin-right: 4px;
  }
}
</style>
