<script setup lang="ts">
import { ref, watch } from "vue";

const data = ref<number | string>(0);

const total = ref<number>(0);
watch(data, () => {
  total.value = data.value + 2;
});
</script>

<template>
  <input v-model="data" type="text" />

  {{ data }} {{ total }}
</template>

<style scoped></style>
