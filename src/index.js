document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener ("DOMContentLoaded", () => {
    const taskList = new taskList();
    const listContainer = document.getElementById("list");
    const taskForm = document.getElementById("create-task-form");
 
 const renderApp = () => (listContainer.innerHTML = taskList.render());
 
 taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
 
 
    const taskDescription = document.getElementById("new-task-description").value;
 
 
    if(taskDescription.trim() !== "") {
       const newTask = new taskListItem(taskDescription);
       taskList.addTask(newTask);
 
       renderApp();
 
       taskForm.reset();
    }
 })
 });
 

  renderApp()
});
