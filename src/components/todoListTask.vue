<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
import axios from "axios";

const perPage: number = 10;
const currentPage = ref<number>(1);
let interval: ReturnType<typeof setInterval> | undefined = undefined;

type TodoItem = { id: number; title: string };

// TODO: add type system
const newTodo = ref<string>("");
const todoList = ref<TodoItem[]>([]);

const totalPages = computed<number>(() =>
  Math.ceil(todoList.value.length / perPage),
);

async function fetchTodos() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    todoList.value = response.data;
  } catch (error) {
    // TODO: error handling
    console.error("Error fetching todos:", error);
  }
}

function createTodo() {
  todoList.value.push({ id: todoList.value.length + 1, title: newTodo.value });
  newTodo.value = "";
}

function removeTodo(todo: TodoItem): void {
  todoList.value = todoList.value.filter((t) => t !== todo);
}

function nextPage() {
  console.log(currentPage.value, totalPages.value);
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
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

onMounted(() => {
  fetchTodos();
  interval = setInterval(fetchTodos, 5000);
  //TODO: add interval to fetch todos every 5s ✅
});

onUnmounted(() => {
  //TODO: clearInterval onUnmount 🚨
  if (interval !== undefined) clearInterval(interval);
});
</script>

<template>
  <form @submit.prevent="createTodo">
    <input v-model="newTodo" placeholder="Add Todo" />
    <button>Add Task</button>
  </form>

  <ol>
    <li v-for="todo in paginatedTodos" :key="todo.id">
      {{ todo.title }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ol>

  <div>
    <button :disabled="currentPage === 1" @click="prevPage">Prev</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button :disabled="currentPage === totalPages" @click="nextPage">
      Next
    </button>
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
