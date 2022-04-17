<template>
  <div>
    <div class="flex">
      <div>
        <m-trend text="营业额" />
      </div>
      <div>
        <m-trend text="销售额" type="down" />
      </div>
    </div>
    <br />
    <div class="flex">
      <div>
        <m-trend text="营业额（自定义图标颜色）" upIconColor="blue" />
      </div>
      <div>
        <m-trend
          text="销售额（自定义图标颜色）"
          type="down"
          downIconColor="orange"
        />
      </div>
    </div>
    <br />
    <div class="flex">
      <div>
        <m-trend>营业额（插槽文字）</m-trend>
      </div>
      <div>
        <m-trend text="营业额（text 文字）" />
      </div>
    </div>
    <br />
    <div class="flex">
      <div>
        <m-trend text="营业额（颜色反转）" reverseColor />
      </div>
      <div>
        <m-trend text="销售额（颜色反转）" reverseColor type="down" />
      </div>
      <div>
        <m-trend
          text="测试（颜色反转 + 自定义颜色）"
          type="down"
          reverseColor
          downIconColor="blue"
        />
      </div>
    </div>
    <br />
    <div class="flex">
      <div>
        <m-trend text="营业额（自定义文字颜色）" upTextColor="blue" />
      </div>
      <div>
        <m-trend
          text="销售额（自定义文字颜色）"
          type="down"
          downTextColor="orange"
        />
      </div>
    </div>
    <br />
    <div class="flex">
      <div>
        <m-trend text="营业额（自定义图标）" upIcon="CaretTop" />
      </div>
      <div>
        <m-trend
          text="销售额（自定义图标）"
          type="down"
          downIcon="CaretBottom"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
