<template>
  <div id="app">
    <h1>Teflon</h1>
    <h2>När det inte fastnar</h2>
    <todo-list />
  </div>
</template>
<script>
import TodoList from "@/components/TodoList";
export default {
  components: { TodoList }
};
</script>

<style>
p,
h1,
h2 {
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
}
h1 {
  font-size: 2rem;
  text-transform: uppercase;
}

h2 {
  font-size: 0.75rem;
  color: rgb(100, 100, 100);
}
</style>
