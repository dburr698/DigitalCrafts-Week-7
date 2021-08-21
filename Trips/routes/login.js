const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/log-in', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const persistedUser = users.find(user => {
        return user.username == username && user.password == password
    })

    if (persistedUser) {
        if (req.session) {
            req.session.username = persistedUser.username
        }
        res.redirect('trips')
    }
    else {
        res.render('login', {errorMessage: 'Username or Password was incorrect.'})
    }
})



module.exports = router