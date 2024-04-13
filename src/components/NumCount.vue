<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

// Other Way
// function increment(): void {
//   count.value++;
// }
</script>

<template>
  <button @click="count++">
    Click To Change Number: {{ count }}
  </button>
</template>

<style scoped>
button{
  background-color: gray;
  border: 1px solid black;
  color: white;
  border-radius: 15px;
  padding: 16px;
  width: 20%;
}
</style>