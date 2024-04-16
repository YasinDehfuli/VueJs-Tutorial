<script setup lang="ts">
// Our Pure Emit Here

import { onMounted } from "vue";

const emit = defineEmits<{
  (event: "response", text: string): void;
}>();

onMounted(() => {
  emit("response", "Emmit component Here!!!!!");
});
</script>

<template>
  <h2>Child Component Here As Vue Emit</h2>
</template>

<style scoped></style>
