import page from './page.js';
//
import createProject from "./project-factory.js";
import displayProject from './display-project.js';
//
export const projects = [];
export const todos = [];

page();

//
projects.push(createProject('a', '2023-08-09', 'c'));
projects.push(createProject('hi', '2021-1-5', 'bro'));
projects.push(createProject('yes', '2027-9-12', 'nvm'));
displayProject();
//
