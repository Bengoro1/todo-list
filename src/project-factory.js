const createProject = (projectName, dueDate, priority) => {
  const todos = [];
  return {projectName, dueDate, priority, todos};
};

export default createProject;
