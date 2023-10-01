import projectForm from './project-form.js';

export default function page() {
  const header = document.createElement('div');
  document.body.appendChild(header);
  header.classList.add('header');

  const content = document.createElement('div');
  document.body.appendChild(content);
  content.classList.add('content');

  const addProject = document.createElement('button');
  addProject.textContent = 'Create new project';
  content.appendChild(addProject);
  addProject.addEventListener('click', () => {
    if(!document.querySelector('.project-form')) {
      projectForm();
    }
  });

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');
  content.appendChild(projectContainer);

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');
  content.appendChild(todoContainer);

  const footer = document.createElement('div');
  document.body.appendChild(footer);
  footer.classList.add('footer');

}

