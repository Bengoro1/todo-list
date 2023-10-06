import projectForm from './project-form.js';

export default function page() {
  const header = document.createElement('div');
  document.body.appendChild(header);
  header.classList.add('header');
  header.textContent = 'To Do List';

  const content = document.createElement('div');
  document.body.appendChild(content);
  content.classList.add('content');

  const addProject = document.createElement('button');
  addProject.textContent = 'Create new project';
  addProject.classList.add('create-project');
  content.appendChild(addProject);
  addProject.addEventListener('click', () => {
    if(!document.querySelector('form')) {
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

  const signature = document.createElement('div');
  let d = new Date();
  let year = d.getFullYear();
  signature.textContent = `Copyright © Bengoro1 ${year}`;
  signature.setAttribute('class', 'signature');
  footer.appendChild(signature);
  const gitLogo = document.createElement('img');
  gitLogo.setAttribute('src', './github.jpg');
  gitLogo.setAttribute('alt', 'Logo');
  gitLogo.setAttribute('class', 'git-logo');
  gitLogo.setAttribute('onclick', "window.open('https://github.com/Bengoro1','_newtab');");
  signature.appendChild(gitLogo);
}
