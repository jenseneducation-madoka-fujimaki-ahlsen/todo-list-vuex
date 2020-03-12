import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addThisTodo(state, todo) {
      state.todos.push(todo);
    },
    removeThisTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    },
    toggleThisTodo(state, todo) {
      state.todos.filter(t => (t.id = todo.id))[0].done = !todo.done;
    },
    updateThisTodo(state, { todo, newContent }) {
      state.todos.filter(t => (t.id = todo.id))[0].content = newContent;
    }
  },
  actions: {
    addTodo(context, todo) {
      context.commit("addThisTodo", todo);
    },
    removeTodo(context, id) {
      context.commit("removeThisTodo", id);
    },
    toggleTodo(context, todo) {
      context.commit("toggleThisTodo", todo);
    },
    updateTodo(context, { todo, newContent }) {
      context.commit("updateThisTodo", { todo, newContent });
    }
  }
});
