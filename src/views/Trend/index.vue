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
        <m-trend text="营业额" upIconColor="blue" />
      </div>
      <div>
        <m-trend text="销售额" type="down" upIconColor="#123456"  />
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
