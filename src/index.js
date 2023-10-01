import page from './page.js';
//
import displayProject from './display-project.js';
//
if (!localStorage.getItem('projects')) {
  const arr = [];
  localStorage.setItem('projects', JSON.stringify(arr));
}

console.log(localStorage.getItem('projects'));

page();

//
displayProject();
//
