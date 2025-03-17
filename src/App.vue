<template>
  <TodoHeader :appTitle="title" />
  <TodoInput @add="addTodoItem" />
  <TodoList :todoitems="todoitems" @remove="removeTodoTake" />
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import { useTodo } from "./hooks/useTodo";
import { onBeforeMount } from "vue";
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      title: "할일 앱",
    };
  },
  setup() {
    const { addTodoItem, todoitems, fetchTodos } = useTodo();
    function removeTodoTake(item, index) {
      todoitems.value.splice(index, 1);
      localStorage.removeItem(item);
    }
    // 라이프 사이클 API
    onBeforeMount(() => {
      //console.log('2 : onBeforeMount called');
      // 라이프 사이클 API 적용된 구간
      todoitems.value = fetchTodos();
    });
    return { todoitems, addTodoItem, removeTodoTake };
  },
};
</script>

<style></style>
