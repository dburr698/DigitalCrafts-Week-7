// import express into app so we can run the server
const express = require('express')
const app = express()

// import cors to avoid cors error
const cors = require('cors')
app.use(cors()) // CORS enabled on server

// tell express how to parse json body 
app.use(express.json())

// hard coded tasks
let tasks = [
    {title: "Feed Dog", priority: "High" },
    {title: "Empty/Load Dish Washer", priority: "Medium"},
    {title: "Wipe Kitchen Counters", priority: "Low"}
]

app.get("/tasks", (req, res) => {
    res.json(tasks)
})

app.post("/tasks", (req, res) =>{
    const title = req.body.title
    const priority = req.body.priority

    const task = {title: title, priority: priority}
    tasks.push(task)

    res.json({success: true, message: "New task added!"})
})


// start the server
app.listen(3000, () => {
    console.log("Server is running...")
})