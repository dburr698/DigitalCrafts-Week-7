const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('register')
})

router.post('/sign-up', (req, res) => {
    const username = req.body.userName
    const password = req.body.password

    let newUser = {username: username, password: password}

    users.push(newUser)

    res.redirect('/')
})





module.exports = router