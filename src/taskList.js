class TaskList {
    constructor(container){
      this.container = container;
    }
  
    addTask(taskItem){
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task-item');
  
      taskDiv.appendChild(taskItem.render());
      this.container.appendChild(taskDiv)
    }
  }
