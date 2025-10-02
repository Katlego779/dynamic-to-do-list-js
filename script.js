// Wait until the DOM is fully loaded before running script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get trimmed input value
        const taskText = taskInput.value.trim();

        // If empty, prompt the user and do nothing
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the list item and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // When remove button is clicked, remove this li from the taskList
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the li, then append li to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add task when the Add Task button is clicked
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing Enter while focused in the input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});