Vue.component('todo-item',{
    props: ['todo'],
    template: 
    '<li><div class="todo_wrap"><p class="todo_item">{{todo.title}}</p><button @click="$emit(\'remove\')" class="rm_btn">Remove</button></div></li>'
});
const vm = new Vue({
  el: ".wrapper",
  data: {
    myTodos: [],
    myTodo: "",
    todoInd: "",
    nextId: 0
  },
  methods: {
    pushTodo: function () {
      // if(this.myTodo != 0) {
      //     this.myTodos.push({'title':this.myTodo});    Using if statement
      //     this.myTodo="";
      // }
      this.myTodo != 0 ? this.myTodos.push({ title: this.myTodo, id: this.nextId++ }) : null;
      this.myTodo = "";
    },
  },
});
