<script setup lang="ts">
const props = defineProps<{
  msg: string;
}>();
</script>

<template>
  <h6>
    {{ props.msg || "Some Text Here " }}
  </h6>
</template>

<style scoped></style>
