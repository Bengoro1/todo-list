const projectForm = () => {
  const content = document.querySelector('.content');
  const form = document.createElement('form');
  form.classList.add('project-form');
  content.appendChild(form);

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

  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'priority');
  form.appendChild(priorityLabel);

  const priorityInput = document.createElement('input');
  priorityInput.setAttribute('type', 'text');
  priorityInput.id = 'priority';
  priorityInput.setAttribute('name', 'priority');
  form.appendChild(priorityInput);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Add project';
  form.appendChild(submit);
}

export default projectForm;
