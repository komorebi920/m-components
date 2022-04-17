<template>
  <div style="width: 240px">
    <h4>普通菜单</h4>
    <br />
    <m-menu :data="normal_data" defaultActive="1"></m-menu>
    <br />
    <h4>无限层级菜单</h4>
    <br />
    <m-infinity-menu
      :data="infinity_data"
      defaultActive="3-2-1-1-1"
    ></m-infinity-menu>
  </div>
</template>

<script setup lang="ts">
const normal_data = [
  { name: '导航1', index: '1', icon: 'document' },
  { name: '导航2', index: '2', icon: 'document' },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      { name: '导航3-1', index: '3-1', icon: 'document' },
      { name: '导航3-2', index: '3-2', icon: 'document' },
    ],
  },
]

const infinity_data = [
  { name: '导航1', index: '1', icon: 'document' },
  { name: '导航2', index: '2', icon: 'document' },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      { name: '导航3-1', index: '3-1', icon: 'document' },
      {
        name: '导航3-2',
        index: '3-2',
        icon: 'document',
        children: [
          {
            name: '导航3-2-1',
            index: '3-2-1',
            icon: 'document',
            children: [
              {
                name: '导航3-2-1-1',
                index: '3-2-1-1',
                icon: 'document',
                children: [
                  {
                    name: '导航3-2-1-1-1',
                    index: '3-2-1-1-1',
                    icon: 'document',
                  },
                ],
              },
            ],
          },
          { name: '导航3-2-2', index: '3-2-2', icon: 'document' },
        ],
      },
    ],
  },
]
</script>

<style lang="less" scoped></style>
