<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props,context) {
    // data
    const todoInput = ref("");

    // methods
    function addTodo() {
      const todo = todoInput.value;
      //localStorage.setItem(todo, todo);
      context.emit('add',todo);
      clearTodo();
    }

    const clearTodo = () => todoInput.value = "";

    return { todoInput, addTodo };
  },
};
</script>

<style scoped></style>
