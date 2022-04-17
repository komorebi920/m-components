<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(item, i) in list" :key="i" :label="item.title">
        <el-scrollbar max-height="300px">
          <div
            class="container"
            v-for="(content, j) in item.content"
            :key="j"
            @click="clickItem(content, j)"
          >
            <div class="avatar" v-if="content.avatar">
              <el-avatar :src="content.avatar" />
            </div>
            <div class="content">
              <div v-if="content.title" class="title">
                <div>{{ content.title }}</div>
                <el-tag :type="content.tagType" v-if="content.tag" size="small">
                  {{ content.tag }}
                </el-tag>
              </div>
              <div v-if="content.desc" class="time">{{ content.desc }}</div>
              <div v-if="content.time" class="time">{{ content.time }}</div>
            </div>
          </div>
          <div class="actions">
            <div
              v-for="(action, k) in actions"
              :key="k"
              class="action-item"
              :class="{ border: k !== actions.length - 1 }"
              @click="clickAction(action, k)"
            >
              <div class="action-icon" v-if="action.icon">
                <component :is="`el-icon-${kebabCase(action.icon)}`" />
              </div>
              <div class="action-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { kebabCase } from 'lodash'
import { ListOptions, ListItem, ActionOptions } from './types'

const props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
})

const emits = defineEmits(['clickItem', 'clickAction'])

const clickItem = (item: ListItem, index: number) => {
  emits('clickItem', item, index)
}
const clickAction = (action: ActionOptions, index: number) => {
  emits('clickAction', action, index)
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    background-color: #e6f6ff;
  }

  .avatar {
    flex: 1;
    display: flex;
    align-items: center;

    * {
      background-color: #fff;
    }
  }

  .content {
    flex: 3;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}

.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;

  .action-item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 50px;
    cursor: pointer;

    &:hover {
      background-color: #e6f6ff;
    }

    .action-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;

      svg {
        width: 1em;
        height: 1em;
      }
    }
  }
}

.border {
  border-right: 1px solid #eee;
}
</style>
