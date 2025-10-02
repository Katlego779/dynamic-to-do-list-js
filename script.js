// Select DOM elements in global scope
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task to the list (global scope)
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

// Wait until DOM is loaded to attach event listeners
document.addEventListener('DOMContentLoaded', function () {
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});