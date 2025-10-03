// Wait until the DOM is fully loaded before running script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements once
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
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

    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});