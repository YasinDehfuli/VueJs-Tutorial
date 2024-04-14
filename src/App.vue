<script setup lang="ts">

import AppRefReactive from "./components/AppRefReactive.vue";
import DynamicGreen from "./components/DynamicGreen.vue";
import NumCount from "./components/NumCount.vue";
import InputBind from "./components/InputBind.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import ListRendering from "./components/ListRendering.vue";
import ComputedProperty from "./components/ComputedProperty.vue";
import LifecyclAndTemplateRefs from "./components/LifecyclAndTemplateRefs.vue";
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
  <hr>
  <list-rendering></list-rendering>
  <hr>
  <computed-property></computed-property>
  <hr>
  <lifecycl-and-template-refs></lifecycl-and-template-refs>


</template>

<style scoped>

</style>
