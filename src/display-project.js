import displayTodos from './display-todos.js';

export default function displayProject() {
  const projectContainer = document.querySelector('.project-container');
  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.firstChild);
  }
  const arr = JSON.parse(localStorage.getItem('projects'));
  for (let i = 0; i < arr.length; i++) {
    const proj = document.createElement('div');
    proj.classList.add('project');
    projectContainer.appendChild(proj);
    const div = document.createElement('div');
    div.classList.add('project-title');
    div.textContent = arr[i].projectName;
    div.style.cursor = 'pointer';
    proj.appendChild(div);
    div.dataset.index = i;
    const remove = document.createElement('button');
    remove.classList.add('remove-button');
    remove.textContent = '×';
    div.appendChild(remove);
    remove.addEventListener('click', () => {
      arr.splice(i, 1);
      localStorage.setItem('projects', JSON.stringify(arr));
      displayProject();
    });
    div.addEventListener('click', () => { 
      if (arr[i]) {
        displayTodos(i);
      }
    });
  }
}
