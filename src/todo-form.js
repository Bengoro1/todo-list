import createTodo from "./todo-factory.js";
import displayTodos from './display-todos.js';

const todoForm = (i) => {
  const array = JSON.parse(localStorage.getItem('projects'));
  const todoContainer = document.querySelector('.todo-container');
  const form = document.createElement('form');
  form.classList.add('todo-form');
  form.setAttribute('method', 'get');
  todoContainer.appendChild(form);

  const cancel = document.createElement('button');
  cancel.textContent = '×';
  cancel.classList.add('cancel-button');
  cancel.setAttribute('type', 'button');
  form.appendChild(cancel);
  cancel.addEventListener('click', () => {
    if (todoContainer.contains(form)) {
      todoContainer.removeChild(form);
    }
  });

  const title = document.createElement('h1');
  title.textContent = 'Create to-do';
  title.classList.add('title');
  form.appendChild(title);

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'todo-name');
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.id = 'todo-name';
  nameInput.setAttribute('name', 'todo-name');
  form.appendChild(nameInput);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'todo-description');
  form.appendChild(descriptionLabel);

  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.id = 'todo-description';
  descriptionInput.setAttribute('name', 'todo-description');
  form.appendChild(descriptionInput);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute('for', 'due-date');
  form.appendChild(dueDateLabel);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.id = 'due-date';
  dueDateInput.setAttribute('name', 'due-date');
  form.appendChild(dueDateInput);

  const priority = document.createElement('button');
  priority.id = 'priority';
  form.appendChild(priority);
  priority.textContent = 'Low';
  priority.classList.add('low');
  priority.setAttribute('type', 'button');
  priority.addEventListener('click', () => {
    if (priority.textContent === 'Low') {
      priority.textContent = 'Medium';
      priority.classList.add('medium');
      priority.classList.remove('low');
    } else if (priority.textContent === 'Medium') {
      priority.textContent = 'High';
      priority.classList.add('high');
      priority.classList.remove('medium');
    } else if (priority.textContent === 'High') {
      priority.textContent = 'Low';
      priority.classList.add('low');
      priority.classList.remove('high');
    }
  });

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Add to-do';
  form.appendChild(submit);
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    array[i].todos.push(createTodo(nameInput.value, descriptionInput.value, dueDateInput.value, priority.textContent));
    localStorage.setItem('projects', JSON.stringify(array));
    displayTodos(i);
    if (todoContainer.contains(form)) {
      todoContainer.removeChild(form);
    }
  });
}

export default todoForm;
