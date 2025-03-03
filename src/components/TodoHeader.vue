<template>
  <div>
    <h1>{{ appTitle }}</h1>
    <h4>{{ newTitle }}</h4>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
      appTitle : String
  },
  setup(props) {
    const newTitle = computed(() => {
      return props.appTitle + "!!";
    })

    return {newTitle}
  }
}
  
</script>