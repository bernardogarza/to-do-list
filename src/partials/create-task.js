let createTaskButton = document.querySelector('.fa-plus');
let newTask = document.querySelector('.new-task');
let n = 0;

let createTask = () => {
  createTaskButton.addEventListener('click', ()=> {
    let taskContainer = document.createElement('div');
    let input = document.createElement('input');
    let delIcon = document.createElement('i');
    delIcon.setAttribute('class', 'fas fa-minus-square');
    input.setAttribute('type', 'text');
    input.classList.add('task-input')
    taskContainer.appendChild(input);
    taskContainer.appendChild(delIcon);
    newTask.appendChild(taskContainer);
    n++;
    delIcon.addEventListener('click', () => {
      delIcon.parentElement.remove()
    })
  });
}

let counter = () =>{
  n = 0;
}

export { createTask, counter }