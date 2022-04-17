<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(name, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(name)"
        >
          <div class="icon">
            <component :is="`el-icon-${kebabCase(name)}`" />
          </div>
          <div class="text">{{ name }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import * as ElIcons from '@element-plus/icons'
import { watch, ref } from 'vue'
import { kebabCase } from 'lodash'
import { useCopy } from '../../../hooks/useCopy'

const props = defineProps<{
  // 弹出框的标题
  title: string
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
const emits = defineEmits(['update:visible'])
// 拷贝一份父组件传递过来的 visible
const dialogVisible = ref<boolean>(props.visible)

// 点击按钮显示弹出框
const handleClick = () => {
  // 修改父组件数据
  emits('update:visible', !props.visible)
}

// 点击图标
const clickItem = (name: string) => {
  const text = `<el-icon-${kebabCase(name)} />`
  useCopy(text)
  dialogVisible.value = false
}

// 监听父组件 visible 变化
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
  }
)
// 监听组件内部 dialogVisible 变化
watch(
  () => dialogVisible.value,
  (val) => {
    emits('update:visible', val)
  }
)
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    width: 25%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    .icon {
      svg {
        width: 2em;
        height: 2em;
      }
    }

    .text {
      font-size: 14px;
      height: 40px;
    }
  }
}
</style>
