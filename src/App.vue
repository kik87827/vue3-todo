<template>
  <TodoHeader :appTitle="title" />
  <TodoInput @add="addTodoItem" />
  <TodoList :todoitems="todoitems" @remove="removeTodoTake" />
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import { onBeforeMount, ref } from "vue";
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

    //console.log('1 : setup called');

    // 라이프 사이클 API
    onBeforeMount(() => {
      //console.log('2 : onBeforeMount called');
      // 라이프 사이클 API 적용된 구간
      todoitems.value = fetchTodos();
    });
    /* onMounted(() => {
      console.log('3 :');
    });
    onUnmounted(() => {
      console.log('4 :');
    }); */

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
