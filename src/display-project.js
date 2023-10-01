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
    div.addEventListener('click', (e) => {
      for (let i = 0; i < arr.length; i++) {
        if (e.currentTarget.dataset.index === i) {
          const todoContainer = document.querySelector('.todo-container');
          while (todoContainer.firstChild) {
            todoContainer.removeChild(todoContainer.firstChild);
          }
          
          if (!document.querySelector('.add-to-do')) {
            const addToDo = document.createElement('button');
            addToDo.textContent = 'Create new to-do';
            addToDo.classList.add('add-to-do');
            todoContainer.appendChild(addToDo);
            addToDo.addEventListener('click', () => {
              if(!document.querySelector('.todo-form')) {
                todoForm(arr[i]);
              }
            });
          }
          
          const ti = document.createElement('h1');
          arr[i].projectName === '' ? ti.textContent = 'Title was not entered' : ti.textContent = arr[i].projectName;
          todoContainer.appendChild(ti);
          const d = document.createElement('p');
          arr[i].dueDate === '' ? d.textContent = 'Due date was not entered' : d.textContent = arr[i].dueDate;
          todoContainer.appendChild(d);
          const p = document.createElement('p');
          arr[i].priority === '' ? p.textContent = 'Priority was not entered' : p.textContent = arr[i].priority;
          todoContainer.appendChild(p);
          
          arr[i].todos.forEach(elem => {
            const todoCard = document.createElement('div');
            todoCard.classList.add('todo-card');
            todoContainer.appendChild(todoCard);
            for (const obj in elem) {
              const p = document.createElement('p');
              p.textContent = elem[obj];
              todoCard.appendChild(p);
            }
          });
        }
      }
    });
  }
}
