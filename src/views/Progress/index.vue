<template>
  <m-progress :percentage="60" isAnimation />
  <m-progress :percentage="75" isAnimation type="circle" />
  <m-progress
    :text-inside="true"
    :stroke-width="22"
    :percentage="80"
    status="warning"
    isAnimation
  />
</template>

<script setup lang="ts"></script>

<style scoped></style>
