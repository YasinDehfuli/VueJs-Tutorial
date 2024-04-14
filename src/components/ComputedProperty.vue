<script setup lang="ts">
import {ref, computed} from "vue";

let id = 0;

const newTodo = ref('');
const hideComplete = ref(false);
const todos = ref([
  {
    id: id++, text: "Learn Javascript!", done: true
  },
  {
    id: id++, text: "Learn HTML!", done: true
  },
  {
    id: id++, text: "Learn CSS!", done: false
  },
]);

const filteredTodos = computed(() => {
  return hideComplete.value ? todos.value.filter(todo => !todo.done) : todos.value;
});

function addTodo() {
  todos.value.push({id: id++, text: newTodo.value, done: false});
  newTodo.value = '';
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" placeholder="Add Todo">
    <button>Add Task</button>
  </form>

  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">

      <span :class="{doneTask: todo.done }"> {{ todo.text }} </span>

      <button @click="removeTodo(todo)">
        X
      </button>
    </li>
  </ul>

  <button @click="hideComplete = !hideComplete">
    {{ hideComplete ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style scoped>
.doneTask {
  text-decoration: line-through;
  color: red;
}
</style>
