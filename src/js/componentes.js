import { Todo } from '../classes';
import { todoList } from '../index';

// Referencias de HTML
const divTodoList           = document.querySelector('.todo-list');
const txtInput              = document.querySelector('.new-todo');
const borrarNoCompletados   = document.querySelector('.clear-completed');
const ulFilters             = document.querySelector('.filters');

export const crearTodoHtml = ( todo ) => {
  const htmlTodo = `
  <li class="${todo.completed ? 'completed' : ''}" data-id="${ todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${
              todo.completed ? 'checked' : ''
            }>
            <label> ${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template"/>
    </li>`;

  // Creo un div para poder insertar todo el elemento HTML
  const div = document.createElement('div');
  div.innerHTML = htmlTodo;

  // Una vez insertado el html, solo adjunto el elemento li que me interesa con el metodo firstElementChild
  divTodoList.append(div.firstElementChild);
  return div;
};



// Eventos
txtInput.addEventListener('keyup', (event) => {
    if( event.keyCode === 13 && txtInput.value.length > 0) {
        
        console.log(txtInput.value);
        const newTaskTodo = new Todo(txtInput.value);    
        todoList.newTodo(newTaskTodo);
        crearTodoHtml(newTaskTodo);
        txtInput.value= '';
    }
    
});


divTodoList.addEventListener('click', (event) => {
    
    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')){
        todoList.toggleTodo(todoId);
        todoElemento.classList.toggle('completed');
    }
    else { 
        if (nombreElemento.includes('button')) {
            todoList.eliminarTodo(todoId);
            divTodoList.removeChild(todoElemento);
        }
    }

    // Si la clase esta asignada, entonces la quita, caso contrario la agrega
    

    console.log(todoList);
    console.log(todoElemento);

});

borrarNoCompletados.addEventListener('click', ()=> {
    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length-1 ; i >= 0 ; i--) {
        const element = divTodoList.children[i];
        
        if( element.classList == 'completed' ){
            divTodoList.removeChild(element);
            console.log(element);
        }

        
    }

})


ulFilters.addEventListener('click', (event) => {
  console.log(event.target.text);
  const filterEl = event.target.text;
  if( !filterEl ) { return;}
  for (const element of divTodoList.children) {
    
    element.classList.remove('hidden');
    const completedEl = element.classList.contains('completed');

    switch (filterEl) {
      case 'Pendings':
        if (completedEl) {
          element.classList.add('hidden');
        }
        break;

      case 'Completed':
        if (!completedEl) {
          element.classList.add('hidden');
        }
        break;

      default:
        break;
    }

  }

});