// Function to save task and create a reflective page
function saveTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput !== "") {
        let task = { name: taskInput }; // Create a JSON object for the task
        let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Retrieve tasks from local storage
        tasks.push(task); // Add the new task to the array
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks back to local storage
        createReflectivePage(taskInput); // Create a reflective page
        updateTaskList(); // Update the task list on the page
    }
}

// Function to create a reflective page
function createReflectivePage(taskName) {
    let pageName = taskName.toLowerCase().replace(/\s+/g, '-'); // Convert task name to lowercase and replace spaces with hyphens
    let pageTitle = taskName + " Page";
    let pageContent = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>" + pageTitle + "</title></head><body><h1>" + pageTitle + "</h1><p>This is the page for task: " + taskName + "</p><a href='../day1.html'>Back</a></body></html>";
    localStorage.setItem(pageName, pageContent); // Save page content to local storage
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
        let pageName = task.name.toLowerCase().replace(/\s+/g, '-');
        a.href = "pages/" + pageName + ".html";
        li.appendChild(a);
        taskList.appendChild(li);
    });
}

// Call updateTaskList function when the page loads
window.onload = updateTaskList;
