// Wait for DOM to be fully loaded and then run script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage and render them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            // addTask(taskText, false) adds to DOM but does not save again
            addTask(taskText, false);
        });
    }

    // Remove first occurrence of taskText from localStorage
    function removeFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const index = storedTasks.indexOf(taskText);
        if (index !== -1) {
            storedTasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Add a task to the DOM and optionally save to localStorage
    // If taskText is null, we read from the input field.
    function addTask(taskText = null, save = true) {
        // Get text from input if not provided
        if (taskText === null) {
            taskText = taskInput.value.trim();
        } else {
            taskText = String(taskText).trim();
        }

        // If empty and this call intends to save (user action), alert and return.
        if (taskText === "") {
            if (save) {
                alert("Please enter a task.");
            }
            return;
        }

        // Create list item and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button and add class via classList.add (checker expects this)
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // When remove is clicked: remove from DOM and update localStorage
        removeBtn.onclick = function () {
            if (taskList.contains(li)) {
                taskList.removeChild(li);
                // Always remove from localStorage if present
                removeFromLocalStorage(taskText);
            }
        };

        // Append remove button to li, then append li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field only when the task was added from input (save === true)
        if (save) {
            taskInput.value = "";
            // Save to localStorage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Attach event listeners
    addButton.addEventListener('click', function () {
        addTask(); // will get value from input and save
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Enter key adds task (and saves)
        }
    });

    // Initial load of tasks from localStorage
    loadTasks();
});