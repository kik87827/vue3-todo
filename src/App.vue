<template>
  <TodoHeader />
  <TodoInput />
  <TodoList :todoitems="todoitems" />
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  setup() {
    // data
    const todoitems = ref([]);

    // methods
    function fetchTodos() {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        // items.value.push(todoItem);
        result.push(todoItem);
      }
      return result;
    }
    todoitems.value = fetchTodos();

    return { todoitems };
  },
};
</script>

<style></style>
