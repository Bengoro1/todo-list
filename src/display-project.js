import {projects} from './index.js';
import todoForm from './todoForm.js';

export default function displayProject() {
  const content = document.querySelector('.content');
  while (content.childNodes.length > 1) {
    content.removeChild(content.lastChild);
  }
  for (let i = 0; i < projects.length; i++) {
    const proj = document.createElement('div');
    proj.classList.add('project');
    content.appendChild(proj);
    const div = document.createElement('div');
    div.classList.add('project-title');
    div.textContent = projects[i].projectName;
    div.style.cursor = 'pointer';
    proj.appendChild(div);
    div.dataset.index = i;
    div.addEventListener('click', () => { 
    });
  }
    
  const addToDo = document.createElement('button');
  addToDo.textContent = 'Create new to-do';
  content.appendChild(addToDo);
  addToDo.addEventListener('click', () => {
    if(!document.querySelector('.todo-form')) {
      todoForm();
    }
  });
}
