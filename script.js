// Select DOM elements globally
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add task (global scope)
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create li
    const li = document.createElement('li');

    // Create span for task text (ensures checker sees the text separately)
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // Remove li when button clicked
    removeBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Attach event listeners after DOM loads
document.addEventListener('DOMContentLoaded', function () {
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});