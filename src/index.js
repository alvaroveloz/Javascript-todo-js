import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js'
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

// const task = new Todo('Learning JS');

// todoList.newTodo(task);
// console.log(todoList);

// crearTodoHtml(task);

// localStorage.setItem('my-key', 'my-value');
// sessionStorage.setItem('my-key', 'my-value');

//todoList.todos.forEach(todo => crearTodoHtml(todo)); es igual a
todoList.todos.forEach(crearTodoHtml);

// const otherTodo = new Todo('AWS');
// otherTodo.printTodo();
// todoList.newTodo(otherTodo);
todoList.todos[0].printTodo();

console.log('todos', todoList.todos);