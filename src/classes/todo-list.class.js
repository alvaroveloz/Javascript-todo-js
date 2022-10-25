import { Todo } from './todo.class';

export class TodoList {
  constructor() {
    //this.todos = [];
    this.loadLocalStorage();
  }

  newTodo(todo) {
    this.todos.push(todo);
    this.saveLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.saveLocalStorage();
  }

  toggleTodo(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completed = !todo.completed;
        break;
      }
    }
    this.saveLocalStorage();
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  loadLocalStorage() {
      this.todos = localStorage.getItem('todo') 
                    ? JSON.parse(localStorage.getItem('todo')) 
                    : [];
     //this.todos = this.todos.map(obj => Todo.fromJSON(obj));
     this.todos = this.todos.map(Todo.fromJSON);
  }
}
