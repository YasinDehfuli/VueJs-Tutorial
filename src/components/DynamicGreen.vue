<script setup lang="ts">
import { ref } from 'vue';

const changeColor = ref('makeGreen')
</script>

<template>
<h3 :class="changeColor">
  Make Me green
</h3>
</template>

<style scoped>
.makeGreen{
  color: green;
}
</style>