const taskTitleTextBox = document.getElementById("taskTitleTextBox")
const prioritySelect = document.getElementById("prioritySelect")
const submitButton = document.getElementById("submitButton")
const taskUL = document.getElementById("taskUL")

submitButton.addEventListener("click", () => {
    const title = taskTitleTextBox.value
    const priority = prioritySelect.value

    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            priority: priority
        })
    }).then(response => response.json())
        .then(result => {
            getAllTasks()
        })
})

function getAllTasks() {
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => {
        const taskItems = tasks.map((task) => {
            return `<li>${task.title} - ${task.priority}</li>`
        })
        taskUL.innerHTML = taskItems.join("")
    })
}

getAllTasks()

