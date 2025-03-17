<template>
  <ul>
    <li v-for="(item, index) in todoitems" :key="index">
      <span>
        {{ item }}
      </span>
      <button @click="removeTodo(item, index)">삭제</button>
    </li>
  </ul>
</template>

<script>
import { watch } from "vue";

export default {
  props: ["todoitems"],
  /* props: {
    todoitems : Array
  }, */
  setup(props, context) {
    function removeTodo(item, index) {
      context.emit("remove", item, index);
    }

    watch(props.todoitems, (newValue) => {
      console.log(newValue);
    });
    return { removeTodo };
  },
};
</script>

<style scoped></style>
