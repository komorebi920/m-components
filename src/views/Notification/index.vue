<template>
  <m-notification :value="50" />
  <br />
  <br />
  <m-notification :value="50" :max="30" />
  <br />
  <br />
  <m-notification :value="50" :isDot="true" />
  <br />
  <br />
  <m-notification :value="50" icon="chatRound" />
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
