console.dir(window.document);

var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskE1 = function(taskDataObj) {
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    // Create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    taskInfoE1.className = "task-info"
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemE1.appendChild(taskInfoE1);
    // Add entire list item to list
    tasksToDoE1.appendChild(listItemE1);

};

var taskFormHandler = function(event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name = 'task-name']").value;
    var taskTypeInput = document.querySelector("select[name = 'task-type']").value;
    //check if input values are empty strings
    if(!taskNameInput || !taskTypeInout) {
        alert("You need to fill out the task form!");
        return false;
    }
    formE1.reset();

    // package u data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // sent it as an argument to createTaskE1
    createTaskE1(taskDataObj);
};

formE1.addEventListener("submit", taskFormHandler);

