<script setup lang="ts">
import { instance } from "../typescript/AxiosInstance.ts";
import { ref, watch } from "vue";

const todoId = ref<number>(1);
const todoData = ref<null>(null);

async function fetchTodos() {
  todoData.value = null;
  const response = await instance.get(`/todos/${todoId.value}`);
  todoData.value = await response.data;
}

watch(todoId, fetchTodos);

fetchTodos();
</script>

<template>
  <h1>TODO ID IS= {{ todoId }}</h1>

  <button @click="todoId++" :disabled="!todoData">Fetch to next todo</button>

  <hr />

  <p v-if="!todoData">
    Loading...
    <br />
  </p>
  <pre v-else>
     {{ todoData }}
  </pre>
</template>

<style scoped>
pre {
  background: #000;
  color: #fff;
  width: 100%;
}
</style>
