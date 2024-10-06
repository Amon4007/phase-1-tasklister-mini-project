document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");


  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();


    const newTaskDescription = document.getElementById("new-task-description").value;

    if (newTaskDescription === "") return;

    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = newTaskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "10px";


    deleteButton.addEventListener("click", () => {
      newTaskItem.remove();
    });


    newTaskItem.appendChild(deleteButton);


    taskList.appendChild(newTaskItem);


    event.target.reset();
  });
});

