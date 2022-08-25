/////////////////////////////////////////////
// DATA CONTROLLER  /////////////////////////
/////////////////////////////////////////////

// Store task
var taskStore = [];

// Task Constructor
var Task = function (id, description) {
    this.id = id;
    this.description = description;
};

//// ADD a task ////
function addTask(des) {
    var newTask, ID;

    // ID consctruction

    // Create new ID
    if (taskStore.length > 0) {
        ID = taskStore[taskStore.length - 1].id + 1;
    } else {
        ID = 0;
    }

    // Create newTask
    newTask = new Task(ID, des);

    // Add new task to task Store
    taskStore.push(newTask);

    // Return
    return newTask;
}

//// DELETE a task ////
function deleteTask(id) {

    var ids, index;

    //taskStore[2]
    //[1,2,5,6,8] id=5

    // 1. Create array for ids
    ids = taskStore.map(function (current) {
        return current.id;
    });

    // 2. Find ids index
    index = ids.indexOf(parseInt(id));

    // 3. Delete task
    if (index !== -1) {
        taskStore.splice(index, 1);
    }
}

/////////////////////////////////////////////
// UI CONTROLLER  ///////////////////////////
/////////////////////////////////////////////

// Gather DOM strings same place
var DOMStrings = {
    addBtn: document.querySelector('.add__btn'),
    taskDescription: document.querySelector('.add__description'),
    taskContainer: document.querySelector('.task__list'),
};

//// ADD task to UI ////
function addListTask(task) {
    var html, newHtml, element;

    // Create HTML string with placeholder text
    html =
        '<div class="item clearfix" id="%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__done"><button class="item__done--btn"><i class="ion-ios-checkmark-outline"></i></button></div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

    // Replace placeholder text with some actual data
    newHtml = html.replace('%id%', task.id);
    newHtml = newHtml.replace('%description%', task.description);

    // Insert HTML into the DOM
    element = DOMStrings.taskContainer;
    element.insertAdjacentHTML('beforeend', newHtml);
}

//// DELETE task from UI ////
function deleteListTask(selectorID) {
    var el;

    el = document.getElementById(selectorID);

    // Remove html from DOM
    el.remove();
}

//// DONE task in UI ////
function doneListTask(selectorID) {
    var el;

    el = document.getElementById(selectorID);

    // Add new class for description
    el.firstElementChild.classList.toggle("item__description__done");

    // Add new class for done button
    el.children[1].children[0].children[0].classList.toggle("item__done--btn--done");

}

/////////////////////////////////////////////
// APP CONTROLLER  //////////////////////////
/////////////////////////////////////////////

//// Control ADD task ////
function ctrlAddTask() {
    var input, text, newTask;

    // GET INPUT DATA FROM DOM
    input = DOMStrings.taskDescription;
    text = input.value;

    // check if text exist
    if (text) {
        // ADD THE TASK TO DATA STRUCTURE
        newTask = addTask(text);

        // ADD THE TASK TO THE UI
        addListTask(newTask);

        // CLEAR THE CONSOLE
        input.value = '';
        input.focus();
    }
}

//// Control DELETE task ////
function ctrlDeleteTask(event) {
    var taskID, doneBtn, clickedElement;

    doneBtn = 'ion-ios-checkmark-outline';
    clickedElement = event.target.className;

    // Find id
    taskID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    // Check DONE button
    if (clickedElement === doneBtn) {

        // Change UI
        doneListTask(taskID);

        // Check if there is id
    } else if (taskID) {

        // Delete the task from the data structure
        deleteTask(taskID);

        // Delete the task from the UI
        deleteListTask(taskID);
    }
}

// Add task event listener
DOMStrings.addBtn.addEventListener('click', ctrlAddTask); //{

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        ctrlAddTask();
    }
});

// Delete task event listener
DOMStrings.taskContainer.addEventListener('click', ctrlDeleteTask);
