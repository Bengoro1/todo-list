import page from './page.js';
import displayProject from './display-project.js';


page();

if (!localStorage.getItem('projects')) {
  const arr = [];
  localStorage.setItem('projects', JSON.stringify(arr));
} else {
  displayProject();
  const project = document.querySelectorAll('.project-title');
  project[0].click();
}

