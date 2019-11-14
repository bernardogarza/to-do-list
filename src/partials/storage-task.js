import { Task } from "./task-class";
import { DataBase } from "./storage";

let taskName = document.querySelector('#task-form-title');
let taskDescription = document.querySelector('#task-form-description');
let taskDate = document.querySelector('#date');
let taskPriority = document.querySelector('#priority');
let project = document.querySelector('#project-list')

const storageTask = () => {
  const newTask = new Task(taskName.value, taskDescription.value, taskDate.value, taskPriority.value);
  let allProjects = DataBase.getProjects();
  for (let i = 0; i < allProjects.length; i++) {
    if (project.value === allProjects[i].title) {
      console.log('true');
    }
  }
  // console.log(newTask);
  // DataBase.addProject(newProject);
};

export { storageTask };