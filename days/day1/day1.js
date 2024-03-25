// Function to save task to local storage
function saveTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput !== "") {
        let task = { name: taskInput, link: "tutorials/" + taskInput.toLowerCase().replace(/\s+/g, '') + ".html", checked: false }; // Create a JSON object for the task with link based on task name
        let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Retrieve tasks from local storage
        tasks.push(task); // Add the new task to the array
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks back to local storage
        updateTaskList(); // Update the task list on the page
    }
}

// Function to update the task list on the page
function updateTaskList() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the current task list
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.checked;
        checkbox.addEventListener("change", function () {
            tasks[index].checked = this.checked;
            localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated tasks to local storage
        });
        li.appendChild(checkbox);
        let a = document.createElement("a");
        a.textContent = task.name;
        a.href = task.link;
        li.appendChild(a);
        taskList.appendChild(li);
    });
}

// Function to delete all tasks from local storage
function deleteAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) { // Display confirmation dialog
        localStorage.removeItem("tasks"); // Remove tasks from local storage
        updateTaskList(); // Update the task list on the page
    }
}

// Call updateTaskList function when the page loads
window.onload = updateTaskList;
