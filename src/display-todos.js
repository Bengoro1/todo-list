import todoForm from './todo-form.js';

export default function displayTodos(e) {
  const arr = JSON.parse(localStorage.getItem('projects'));
  const todoContainer = document.querySelector('.todo-container');
  while (todoContainer.firstChild) {
    todoContainer.removeChild(todoContainer.firstChild);
  }
  if (!document.querySelector('.add-to-do')) {
    const todoContainer = document.querySelector('.todo-container');
    const addToDo = document.createElement('button');
    addToDo.textContent = 'Create new to-do';
    addToDo.classList.add('add-to-do');
    todoContainer.appendChild(addToDo);
    addToDo.addEventListener('click', () => {
      if(!document.querySelector('.todo-form')) {
        todoForm(e);
      }
    });
  }
  const ti = document.createElement('h1');
  arr[e].projectName === '' ? ti.textContent = 'Title was not entered' : ti.textContent = arr[e].projectName;
  todoContainer.appendChild(ti);
  const d = document.createElement('p');
  arr[e].dueDate === '' ? d.textContent = 'Due date was not entered' : d.textContent = arr[e].dueDate;
  todoContainer.appendChild(d);
  const p = document.createElement('p');
  arr[e].priority === '' ? p.textContent = 'Priority was not entered' : p.textContent = arr[e].priority;
  todoContainer.appendChild(p);
  
  for (let i = 0; i < arr[e].todos.length; i++) {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');
    todoContainer.appendChild(todoCard);
    const cancel = document.createElement('button');
    cancel.textContent = '×';
    cancel.classList.add('remove-button');
    todoCard.appendChild(cancel);
    cancel.addEventListener('click', () => {
      arr[e].todos.splice(i, 1);
      localStorage.setItem('projects', JSON.stringify(arr));
      displayTodos(e);
    });
    for (const obj in arr[e].todos[i]) {
      const p = document.createElement('p');
      arr[e].todos[i][obj] === '' ? p.textContent = 'Value was not entered' : p.textContent = arr[e].todos[i][obj];
      todoCard.appendChild(p);
    }
  }
}
