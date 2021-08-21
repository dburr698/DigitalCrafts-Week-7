const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    let username = req.session.username
    let userTrips = trips.filter((trip) => {
        return trip.username == username
    })
    res.render('trips', {allTrips: userTrips})
})

router.post('/delete-trip',  (req, res) => {
    const tripId = parseInt(req.body.tripId)

    trips = trips.filter((trip) => {
        return trip.tripId != tripId
    })

    res.redirect('/trips')
})

router.post('/add-trip', (req, res) => {
    const cityName = req.body.cityName
    const image = req.body.image
    const departureDate = req.body.departureDate
    const returnDate= req.body.returnDate
    const username = req.session.username

    let newTrip = {tripId: trips.length+1, username: username, title: cityName, imageURL: image, departureDate: departureDate, returnDate: returnDate}

    trips.push(newTrip)

    res.redirect('/trips') 
})

router.post('/sign-out',  (req, res) => {
    req.session.destroy(error => {
        res.clearCookie('connect.sid')
        res.redirect('/')
    })
    
})

module.exports = router
