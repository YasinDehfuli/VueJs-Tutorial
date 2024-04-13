<script setup lang="ts">
import { ref } from 'vue';

const text= ref('')
const otherText= ref('')
// Another Way ------------------
function onInput(e) {
otherText.value = e.target.value
}
</script>

<template>
<!-- For tracking VueJS -->
  <input v-model="text" placeholder="Type Something...!">
  <p> {{ text }} </p>

<!--  Other Way ----------------- -->
  <input @input="onInput" placeholder="Other Way...">
  <p> {{ otherText }} </p>
</template>

<style scoped>

</style>