import {projects} from './index.js';
import displayTodos from './display-todos.js';

export default function displayProject() {
  const projectContainer = document.querySelector('.project-container');
  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.firstChild);
  }
  for (let i = 0; i < projects.length; i++) {
    const proj = document.createElement('div');
    proj.classList.add('project');
    projectContainer.appendChild(proj);
    const div = document.createElement('div');
    div.classList.add('project-title');
    div.textContent = projects[i].projectName;
    div.style.cursor = 'pointer';
    proj.appendChild(div);
    div.dataset.index = i;
    const remove = document.createElement('button');
    remove.classList.add('remove-button');
    remove.textContent = '×';
    div.appendChild(remove);
    remove.addEventListener('click', () => {
      projects.splice(i, 1);
      displayProject();
    });
    div.addEventListener('click', () => {
      displayTodos(projects[i]);
    });
  }
}
