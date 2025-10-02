// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText; // Only the task text

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append remove button separately
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

// Attach event listeners after DOM loads
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});