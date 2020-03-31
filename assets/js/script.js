console.dir(window.document);

var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var CreateTaskHandler = function() {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name = 'task-name']").value;
    var taskTypeInput = document.querySelector("select[name = 'task-type']").value;
    console.dir(taskTypeInput);
    // Create List Item
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    // Create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    taskInfoE1.className = "task-info"
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemE1.appendChild(taskInfoE1);
    // Add entire list item to list
    tasksToDoE1.appendChild(listItemE1);
};

formE1.addEventListener("submit", CreateTaskHandler);

