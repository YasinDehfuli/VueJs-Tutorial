<script setup lang="ts">
import {ref} from 'vue';

const awesome = ref(true);

function toggle() {
awesome.value = !awesome.value;
}

</script>

<template>
  <button @click="toggle">
    Click Me~!
  </button>
  <h1 v-if="awesome">
    Awesome Vue 🚀
  </h1>
  <h1 v-else>
    Oops! 👾
  </h1>
</template>

<style scoped>

</style>