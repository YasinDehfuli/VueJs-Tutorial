<script setup lang="ts"></script>

<template>
  <button>
    <slot name="btn1"> Click Me 1 </slot>
  </button>
  <button>
    <slot> Default Click </slot>
  </button>
  <button>
    <slot name="btn2"> Click Me 2 </slot>
  </button>
</template>

<style scoped>
button {
  color: white;
  background: gray;
  border: none;
  border-radius: 15px;
  padding: 16px;
  width: 20%;
  text-align: center;
  margin: 20px;
  cursor: pointer;
}
</style>
