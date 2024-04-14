<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import axios from 'axios';

onMounted(() => {
  fetchTodos();
});

const perPage = 10;
let id = 0;
let currentPage = ref(1);

const newTodo = ref('');
const todoList = ref([]);
const totalPages = computed(() => Math.ceil(todoList.value.length / perPage));

async function fetchTodos() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    todoList.value = response.data.slice(0, 200).map((todo) => ({
      id: id++,
      title: todo.title,
    }));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

function createTodo() {
  todoList.value.push({id: id++, title: newTodo.value});
  newTodo.value = '';
}

function removeTodo(todo) {
  todoList.value = todoList.value.filter((t) => t !== todo);
}

function goToPage(page) {
  currentPage.value = page;
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

const paginatedTodos = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return todoList.value.slice(start, end);
});

</script>

<template>
  <form @submit.prevent="createTodo">
    <input v-model="newTodo" placeholder="Add Todo">
    <button>Add Task</button>
  </form>

  <ol>
    <li v-for="todo in paginatedTodos" :key="todo.id">
      {{ todo.title }}
      <button @click="removeTodo(todo)">
        X
      </button>
    </li>
  </ol>

  <div>
    <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 5px;
  padding: 0.2em;
  margin: 7px;
}

li {
  line-height: 20px;
}

input {
  border: none;
  background: #e9e9ed;
  padding: 3.5px;
  border-radius: 5px;
}
</style>
