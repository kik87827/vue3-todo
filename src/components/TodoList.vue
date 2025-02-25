<template>
  <ul>
    <li v-for="(item, index) in todoitems" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  props: ["todoitems"],
};
</script>

<style scoped></style>
