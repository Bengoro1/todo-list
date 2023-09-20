import {projects} from './index.js';
import todoForm from './todoForm.js';

export default function displayProject() {
  const proj = document.createElement('div');
  const content = document.querySelector('.content');
  while (content.childNodes.length > 1) {
    content.removeChild(content.lastChild);
  }
  proj.classList.add('project');
  content.appendChild(proj);
  projects.forEach((el) => {
    for (const obj in el) {
      const div = document.createElement('div');
      div.classList.add(obj);
      div.textContent = `${obj}: ${el[obj]}`;
      proj.appendChild(div);
    }
  });

  const addToDo = document.createElement('button');
  addToDo.textContent = 'Create new to-do';
  content.appendChild(addToDo);
  addToDo.addEventListener('click', () => {
    if(!document.querySelector('.todo-form')) {
      todoForm();
    }
  });
}
