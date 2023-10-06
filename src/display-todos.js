import todoForm from './todo-form.js';

export default function displayTodos(e) {
  const arr = JSON.parse(localStorage.getItem('projects'));
  const todoContainer = document.querySelector('.todo-container');
  while (todoContainer.firstChild) {
    todoContainer.removeChild(todoContainer.firstChild);
  }
  if (!document.querySelector('.add-to-do')) {
    const addToDo = document.createElement('button');
    addToDo.textContent = 'Create new to-do';
    addToDo.classList.add('create-to-do');
    todoContainer.appendChild(addToDo);
    addToDo.addEventListener('click', () => {
      if(!document.querySelector('form')) {
        todoForm(e);
      }
    });
  }
  const ti = document.createElement('h1');
  arr[e].projectName === '' ? ti.textContent = 'Title was not entered' : ti.textContent = 'Title: ' + arr[e].projectName;
  todoContainer.appendChild(ti);
  const d = document.createElement('p');
  arr[e].dueDate === '' ? d.textContent = 'Due date was not entered' : d.textContent = 'Due date:' + arr[e].dueDate;
  todoContainer.appendChild(d);
  const p = document.createElement('p');
  p.textContent = 'Priority:' + arr[e].priority;
  todoContainer.appendChild(p);
  
  const todoGrid = document.createElement('div');
  todoGrid.classList.add('todo-grid');
  todoContainer.appendChild(todoGrid);

  for (let i = 0; i < arr[e].todos.length; i++) {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');
    if (arr[e].todos[i].priority === 'Low') {
      todoCard.classList.add('low');
    } else if (arr[e].todos[i].priority === 'Medium') {
      todoCard.classList.add('medium');
    } else if (arr[e].todos[i].priority === 'High') {
      todoCard.classList.add('high');
    }
    todoGrid.appendChild(todoCard);
    const cancel = document.createElement('button');
    cancel.textContent = '×';
    cancel.classList.add('remove-todo');
    todoCard.appendChild(cancel);
    cancel.addEventListener('click', () => {
      arr[e].todos.splice(i, 1);
      localStorage.setItem('projects', JSON.stringify(arr));
      displayTodos(e);
    });
    for (const obj in arr[e].todos[i]) {
      const h4 = document.createElement('h4');
      h4.textContent = obj.charAt(0).toUpperCase() + obj.split(/(?=[A-Z])/).join(' ').slice(1)
      todoCard.appendChild(h4);
      const p = document.createElement('p');
      arr[e].todos[i][obj] === '' ? p.textContent = 'Value was not entered' : p.textContent = arr[e].todos[i][obj];
      todoCard.appendChild(p);
    }
  }
}
