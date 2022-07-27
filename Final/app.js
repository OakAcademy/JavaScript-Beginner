// DATA CONTROLLER

// Store tasks
var taskStore = [];

// Constructor for task
var Task = function (id, description) {
    this.id = id;
    this.description = description;
};

// Add task
function addTask(des) {
    var newTask, ID;



    //taskStore.length + 1;

    //[1,2,3,4,5] id=6
    //[1,2,5,6,8] id=9

    // Create new ID
    if (taskStore.length > 0) {
        ID = taskStore[taskStore.length - 1].id + 1;
    } else {
        ID = 0;
    }

    // Create new task
    newTask = new Task(ID, des);

    // Push it into data structure
    taskStore.push(newTask);

    // Return the new task
    return newTask;

}

// Delete Task
function deleteTask(id) {

    var ids, index;

    //taskStore[2]
    //[1,2,5,6,8] id=5

    // Create array for ids
    ids = taskStore.map(function (current) {
        return current.id;
    });

    // Find ids index
    index = ids.indexOf(parseInt(id));

    // Delete task
    if (index !== -1) {
        taskStore.splice(index, 1);
    }


};

// UI CONTROLLER

// Gather DOM strings same place
var DOMStrings = {
    addBtn: document.querySelector('.add__btn'),
    taskDescription: document.querySelector('.add__description'),
    taskContainer: document.querySelector('.task__list'),
};

//Add task to UI
function addListTask(task) {

    var html, newHtml, element;

    // Create HTML string with placeholder text
    html = '<div class="item clearfix" id="%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__done"> <button class="item__done--btn"> <i class="ion-ios-checkmark-outline"></i> </button> </div> <div class="item__delete"> <button class="item__delete--btn"> <i class="ion-ios-close-outline"></i> </button> </div> </div> </div>';

    // Replace the placeholder text with some actual data
    newHtml = html.replace('%id%', task.id);
    newHtml = newHtml.replace('%description%', task.description);

    // Insert the HTML into The DOM
    element = DOMStrings.taskContainer;
    element.insertAdjacentHTML('beforeend', newHtml);

};

// Delete task from UI
function deleteListTask(selectorID) {

    var el;

    el = document.getElementById(selectorID);

    // Remove HTML from DOM
    el.remove();

}

// Done button
function doneListTask(selectorID) {
    
    var el;

    el = document.getElementById(selectorID);

    // Add new class for description
    el.firstElementChild.classList.toggle("item__description__done");

    // Add new class for done button
    el.children[1].children[0].children[0].classList.toggle("item__done--btn--done");

}

// APP CONTROLLER

function ctrlAddTask() {
    var input, text, newTask;


    // Get input data from DOM
    input = DOMStrings.taskDescription;
    text = input.value;

    // Check for text
    if (text) {

        // Add the task to the data structure
        newTask = addTask(text);

        // Add the task to the UI
        addListTask(newTask);

        // Clear the field
        input.value = '';
        input.focus();

    };

};

function ctrlDeleteTask(event) {
    var taskID, doneBtn, clickedElement;

    doneBtn = "ion-ios-checkmark-outline";
    clickedElement = event.target.className;

    // Find id
    taskID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    // Check done button
    if (clickedElement === doneBtn) {
        
        // Change UI
        doneListTask(taskID);

    // Check is there any ID
    } else if (taskID) {

        // Delete the task from the data structure
        deleteTask(taskID);

        // Delete the task from the UI
        deleteListTask(taskID);

    }

};

DOMStrings.addBtn.addEventListener('click', ctrlAddTask);

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        ctrlAddTask();
    }
});

DOMStrings.taskContainer.addEventListener('click', ctrlDeleteTask);