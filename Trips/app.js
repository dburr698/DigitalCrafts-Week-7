const express = require('express')
const app = express()

const session = require('express-session')
app.use(session({
    secret: 'THISISSECRETKEY',
    saveUninitialized: true,
    resave: true
}))

app.use(express.urlencoded())
app.use(express.static('public'))

const tripRouter = require('./routes/trips')
app.use('/trips', tripRouter)

const loginRouter = require('./routes/login')
app.use('/', loginRouter)

const registerRouter = require('./routes/register')
app.use('/register', registerRouter)

const mustacheExpress = require('mustache-express')

// setting mustache as the template engine
app.engine('mustache', mustacheExpress())
// pages located in the views directory
app.set('views', './views')
// extension for all pages
app.set('view engine', 'mustache')

global.trips = [
    {tripId: 1, username: "User1", title: "Atlanta", imageURL: "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80", departureDate: "08/12/2021", returnDate: "08/14/2021"},
    {tripId: 2, username: "User2", title: "Denver", imageURL: "https://images.unsplash.com/photo-1586740070162-41777c99457f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80", departureDate: "11/22/2021", returnDate: "11/28/2021"}
]

global.users = [
    {username: "User1", password: "password1"},
    {username: "User2", password: "password2"}
]



app.listen(3000, () => {
    console.log("Server is running...")
})