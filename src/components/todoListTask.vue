<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';

onMounted(() => {
  fetchTodos();
});

async function fetchTodos() {
  try {
    // response get 🔻
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    todoList.value = response.data.slice(0, 200).map((todo) => ({
      id: id++,
      title: todo.title,
    }));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}


let id = 0;

const newTodo = ref('');
const todoList = ref([
  {
    id: id++, title: "Sample 1",
  },
  {
    id: id++, title: "Sample 2",
  },
  {
    id: id++, title: "Sample 3",
  }
]);

function createTodo() {
  console.log(newTodo.value)
  todoList.value.push({id: id++, title: newTodo.value});
  newTodo.value = '';
}

function removeTodo(todo) {
  todoList.value =  todoList.value.filter((t) => t !== todo);
}


</script>

<template>
  <form @submit.prevent="createTodo">
    <input v-model="newTodo" placeholder="Add Todo">
    <button>Add Task</button>
  </form>

  <ol>
    <li v-for="todo in todoList" :key="todo.userId">
      {{ todo.title }}
      <button @click="removeTodo(todo)">
        X
      </button>
    </li>
  </ol>

</template>

<style lang="scss" scoped>

</style>