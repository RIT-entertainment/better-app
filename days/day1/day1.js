// Function to save task to local storage
function saveTask() {
    let taskInput = document.getElementById("taskInput").value;
    let taskLink = document.getElementById("taskLink").value;
    if (taskInput !== "" && taskLink !== "") {
        let task = { name: taskInput, link: taskLink }; // Create a JSON object for the task
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
    tasks.forEach(task => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = task.name;
        a.href = task.link;
        li.appendChild(a);
        taskList.appendChild(li);
    });
}

// Call updateTaskList function when the page loads
window.onload = updateTaskList;
