import createProject from "./project-factory.js";
import displayProject from "./display-project.js";

const projectForm = () => {
  const arr = JSON.parse(localStorage.getItem('projects'));
  const content = document.querySelector('.content');
  const form = document.createElement('form');
  form.classList.add('project-form');
  form.setAttribute('method', 'get');
  content.appendChild(form);

  const cancel = document.createElement('button');
  cancel.textContent = '×';
  cancel.classList.add('cancel-button');
  cancel.setAttribute('type', 'button');
  form.appendChild(cancel);
  cancel.addEventListener('click', () => {
    if (content.contains(form)) {
      content.removeChild(form);
    }
  });

  const title = document.createElement('h1');
  title.textContent = 'Create project';
  title.classList.add('title');
  form.appendChild(title);

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'project-name');
  form.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.id = 'project-name';
  nameInput.setAttribute('name', 'project-name');
  form.appendChild(nameInput);

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

  // const priorityLabel = document.createElement('label');
  // priorityLabel.setAttribute('for', 'priority');
  // form.appendChild(priorityLabel);

  // const priorityInput = document.createElement('input');
  // priorityInput.setAttribute('type', 'text');
  // priorityInput.id = 'priority';
  // priorityInput.setAttribute('name', 'priority');
  // form.appendChild(priorityInput);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Add project';
  form.appendChild(submit);
  submit.addEventListener('click', (e) => {
    e.preventDefault();   
    arr.push(createProject(nameInput.value, dueDateInput.value, priority.textContent));
    localStorage.setItem('projects', JSON.stringify(arr));
    displayProject();
    if (content.contains(form)) {
      content.removeChild(form);
    }
  });
}

export default projectForm;
