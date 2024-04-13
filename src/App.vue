<script setup lang="ts">

import AppRefReactive from "./components/AppRefReactive.vue";
import DynamicGreen from "./components/DynamicGreen.vue";
import NumCount from "./components/NumCount.vue";
import InputBind from "./components/InputBind.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
</script>

<template>
  <h1>
    HELLO WORLD
  </h1>

  <hr>
  <AppRefReactive></AppRefReactive>
  <hr>
  <DynamicGreen></DynamicGreen>
  <hr>
  <num-count></num-count>
  <hr>
  <input-bind></input-bind>
  <hr>
  <ConditionalRendering></ConditionalRendering>


</template>

<style scoped>

</style>
