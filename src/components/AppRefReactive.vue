<script setup lang="ts">
import { ref, reactive } from 'vue';

const counter = reactive({ count: 0 });
const message = ref('Hellllo World');
</script>

<template>
 <div>
   <h2>
     {{ message }}
   </h2>
   <p>
     Your Count is: {{ counter.count }}
   </p>
 </div>
</template>

<style scoped>

</style>