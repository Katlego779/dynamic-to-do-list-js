// Wait for the DOM to be fully loaded, then run the script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // If empty, prompt the user and exit
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Assign an onclick event to remove the li from the taskList
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the li, then append li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = "";
    }

    // Attach event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);

    // Attach event listener to taskInput for 'keypress' to allow Enter key adding
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});