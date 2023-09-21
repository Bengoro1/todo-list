import page from './page.js';
//
import createProject from "./project-factory.js";
import displayProject from './display-project.js';
//
export const projects = [];
export const todos = [];

page();
//
projects.push(createProject('a', 'b', 'c'));
projects.push(createProject('hi', 'word', 'bro'));
projects.push(createProject('yes', 'no', 'nvm'));
displayProject();
//
