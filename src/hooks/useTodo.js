import { ref } from "vue";

function useTodo() {
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
    
    function addTodoItem(todo) {
        todoitems.value.push(todo);
        localStorage.setItem(todo, todo);
    }
  
    
  return { todoitems, fetchTodos, addTodoItem };
}

export { useTodo }