<template>
  <div style="width: 240px">
    <h4>普通菜单</h4>
    <br />
    <m-menu
      :data="normal_data"
      defaultActive="1"
      name="a"
      index="b"
      icon="c"
      children="d"
    ></m-menu>
    <br />
    <h4>无限层级菜单</h4>
    <br />
    <m-infinity-menu
      :data="infinity_data"
      defaultActive="3-2-1-1-1"
      name="a"
      index="b"
      icon="c"
      children="d"
    ></m-infinity-menu>
  </div>
</template>

<script setup lang="ts">
const normal_data = [
  { a: '导航1', b: '1', c: 'Document' },
  { a: '导航2', b: '2', c: 'Document' },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      { a: '导航3-1', b: '3-1', c: 'Document' },
      { a: '导航3-2', b: '3-2', c: 'Document' },
    ],
  },
]

const infinity_data = [
  { a: '导航1', b: '1', c: 'Document' },
  { a: '导航2', b: '2', c: 'Document' },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      { a: '导航3-1', b: '3-1', c: 'Document' },
      {
        a: '导航3-2',
        b: '3-2',
        c: 'Document',
        d: [
          {
            a: '导航3-2-1',
            b: '3-2-1',
            c: 'Document',
            d: [
              {
                a: '导航3-2-1-1',
                b: '3-2-1-1',
                c: 'Document',
                d: [
                  {
                    a: '导航3-2-1-1-1',
                    b: '3-2-1-1-1',
                    c: 'Document',
                  },
                ],
              },
            ],
          },
          { a: '导航3-2-2', b: '3-2-2', c: 'Document' },
        ],
      },
    ],
  },
]
</script>

<style lang="less" scoped></style>
