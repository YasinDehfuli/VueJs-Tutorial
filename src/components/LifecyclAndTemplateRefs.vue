<script setup lang="ts">
import {ref ,onMounted} from "vue";

const pElementOnMount = ref(null);
onMounted(() => {
  pElementOnMount.value.textContent = 'Text Mounted!!!!!';
})
</script>

<template>
  <p ref="pElementOnMount">
    Hello World
  </p>
</template>