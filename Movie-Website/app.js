const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')

app.use(express.urlencoded())
app.use('/css', express.static('css'))

const moviesRouter = require('./routes/movies')
app.use('/', moviesRouter)

// setting up mustache template pages
app.engine('mustache', mustacheExpress())
// pages located in the views directory
app.set('views', './views')
// extension will be mustache
app.set('view engine', 'mustache')

// movies array availale for all routes
global.movies = [
    {movieId: 1, title: "The Suicide Squad", description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.", genre: "Action", posterURL: "https://m.media-amazon.com/images/M/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_FMjpg_UX1000_.jpg"},
    {movieId: 2, title: "Free Guy", description: "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.", genre: "Comedy", posterURL: "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"},
    {movieId: 3, title: "Fear Street: Part One", description: "A circle of teenage friends accidentally encounter the ancient evil responsible for a series of brutal murders that have plagued their town for over 300 years. Welcome to Shadyside.", genre: "Horror", posterURL: "https://m.media-amazon.com/images/M/MV5BNzQzYjIyZDQtMjBhZS00MzU3LTk0MTQtNTVmMDI3ZWY0ZWU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"}
]



app.listen(3000, () => {
    console.log("Server is running...")
})

