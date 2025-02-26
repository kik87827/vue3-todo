<template>
  <TodoHeader />
  <TodoInput @add="addTodoItem" />
  <TodoList :todoitems="todoitems" @remove="removeTodoTake" />
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

    function addTodoItem(todo) {
      todoitems.value.push(todo);
      localStorage.setItem(todo, todo);
    }

    function removeTodoTake(item, index) {
      todoitems.value.splice(index, 1);
      localStorage.removeItem(item);
    }

    return { todoitems, addTodoItem, removeTodoTake };
  },
};
</script>

<style></style>
