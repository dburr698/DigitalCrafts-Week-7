const express = require('express')
const app = express()
app.use(express.urlencoded())
app.use(express.static('css'))

const mustacheExpress = require('mustache-express')

// setting mustache as the template engine
app.engine('mustache', mustacheExpress())
// pages located in the views directory
app.set('views', './views')
// extension for all pages
app.set('view engine', 'mustache')

let trips = [
    {tripId: 1, title: "Atlanta", imageURL: "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80", departureDate: "08/12/2021", returnDate: "08/14/2021"},
    {tripId: 2, title: "Denver", imageURL: "https://images.unsplash.com/photo-1586740070162-41777c99457f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80", departureDate: "11/22/2021", returnDate: "11/28/2021"}
]

app.get('/trips', (req, res) => {
    res.render('trips', {allTrips: trips})
})

app.post('/delete-trip', (req, res) => {
    const tripId = parseInt(req.body.tripId)

    trips = trips.filter((trip => {
        return trip.tripId != tripId
    }))

    res.redirect('/trips')
})

app.post('/trips', (req, res) => {
    const cityName = req.body.cityName
    const image = req.body.image
    const departureDate = req.body.departureDate
    const returnDate= req.body.returnDate

    let newTrip = {tripId: trips.length+1, title: cityName, imageURL: image, departureDate: departureDate, returnDate: returnDate}

    trips.push(newTrip)

    res.redirect('/trips') 
})

app.listen(3000, () => {
    console.log("Server is running...")
})