
function authenticate(req, res, next) {
    console.log('AUTHENTICATE MIDDLEWARE') 
    if (req.session) {
        if (req.session.username) {
            next()
        }
        else {
            res.redirect('/')
        }
    }
    else {
        res.redirect('/')
    }
}


module.exports = authenticate