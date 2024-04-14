<script setup lang="ts">

import {ref} from "vue";

let id = 0;

const newTodo = ref('');

const todos = ref([
  {
    id: id++, text: "Learn Javascript!"
  },
  {
    id: id++, text: "Learn HTML!"
  },
  {
    id: id++, text: "Learn CSS!"
  },
]);

function addTodo() {
todos.value.push({id: id++, text: newTodo.value});
}

function removeTodo(todo) {
todos.value = todos.value.filter((t) => t !== todo)
}

</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" placeholder="Add Todo">
    <button>Add Task</button>
  </form>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">
        X
      </button>
    </li>
  </ul>

</template>

<style scoped>

</style>