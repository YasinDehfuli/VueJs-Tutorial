<script setup lang="ts">
import { ref } from "vue";
// import AppRefReactive from "./components/AppRefReactive.vue";
// import DynamicGreen from "./components/DynamicGreen.vue";
// import NumCount from "./components/NumCount.vue";
// import InputBind from "./components/InputBind.vue";
// import ConditionalRendering from "./components/ConditionalRendering.vue";
// import ListRendering from "./components/ListRendering.vue";
// import ComputedProperty from "./components/ComputedProperty.vue";
// import LifecyclAndTemplateRefs from "./components/LifecyclAndTemplateRefs.vue";
// import TodoListTask from "./components/todoListTask.vue";
// import InputIrt from "./components/input-irt.vue";
// import TodoListTask from "./components/todoListTask.vue";
import VueEmit from "./components/VueEmit.vue";
// import VueProps from "./components/VueProps.vue";
// import VueWatchers from "./components/VueWatchers.vue";

// const checkProps = ref<string>("GREETING FROM APP VUE");
const childMsg = ref<string>("No Child Massage Here Yet!");

const responseHandler = (text: string) => {
  childMsg.value = text;
};

// import { ref } from "vue";
// const isVisible = ref<boolean>(true);
// function unVisible() {
//   isVisible.value = !isVisible.value;
// }
</script>

<template>
  <!--  <hr>-->
  <!--  <AppRefReactive></AppRefReactive>-->
  <!--  <hr>-->
  <!--  <DynamicGreen></DynamicGreen>-->
  <!--  <hr>-->
  <!--  <num-count></num-count>-->
  <!--  <hr>-->
  <!--  <input-bind></input-bind>-->
  <!--  <hr>-->
  <!--  <ConditionalRendering></ConditionalRendering>-->
  <!--  <hr>-->
  <!--    <list-rendering></list-rendering>-->
  <!--  <hr>-->
  <!--  <computed-property></computed-property>-->
  <!--  <hr>-->
  <!--    <lifecycl-and-template-refs></lifecycl-and-template-refs>-->
  <!--  <input-irt></input-irt>-->
  <!--  <todo-list-task v-if="isVisible"></todo-list-task>-->
  <!--  <button @click="unVisible">onUnmounted Test</button>-->
  <!--  <VueWatchers></VueWatchers>-->
  <!--  <vue-props :msg="checkProps" />-->
  <VueEmit @response="responseHandler" />
  <p>
    {{ childMsg }}
  </p>
</template>

<style scoped></style>
