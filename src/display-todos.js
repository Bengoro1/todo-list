import todoForm from "./todoForm";

export default function displayTodos(e) {
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
        todoForm(e);
      }
    });
  }

  const ti = document.createElement('h1');
  e.projectName === '' ? ti.textContent = 'Title was not entered' : ti.textContent = e.projectName;
  todoContainer.appendChild(ti);
  const d = document.createElement('p');
  e.dueDate === '' ? d.textContent = 'Due date was not entered' : d.textContent = e.dueDate;
  todoContainer.appendChild(d);
  const p = document.createElement('p');
  e.priority === '' ? p.textContent = 'Priority was not entered' : p.textContent = e.priority;
  todoContainer.appendChild(p);

  e.todos.forEach(elem => {
    console.log(elem);
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');
    todoContainer.appendChild(todoCard);
    for (const obj in elem) {
      const p = document.createElement('p');
      console.log(elem[obj]);
      p.textContent = elem[obj];
      todoCard.appendChild(p);
    }
  });
}
