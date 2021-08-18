const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('movies', {allMovies: movies})
})

router.post('/add-movie', (req, res) => {
    const movieName = req.body.movieName
    const movieDesc = req.body.movieDesc
    const movieGenre = req.body.movieGenre
    const posterImage = req.body.posterImage

    let newMovie = {movieId: movies.length+1, title: movieName, description: movieDesc, genre: movieGenre, posterURL: posterImage}

    movies.push(newMovie)

    res.redirect('/')
})

router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId

    let movie = movies.find((flick) => flick.movieId == movieId)

    res.render('movie-details', movie)
})

router.post('/delete-movie', (req, res) => {
    const movieId = parseInt(req.body.movieId)

    movies = movies.filter((movie) => {
        return movie.movieId != movieId
    })

    res.redirect('/')

})

module.exports = router