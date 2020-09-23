const express = require('express')
const router = express.Router()


const Cocktail = require('../models/cocktail-model')
const User = require('../models/user.model')


const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { message: 'you have to login to continue' })


const checkRole = rolesToCheck => {
    return (req, res, next) => {
        if (req.isAuthenticated() && rolesToCheck.includes(req.user.role)) {
            next()
        }
        else {
            res.render('auth/login', { message: 'Desautorizado, no tienes permisos para ver eso.' })
        }
    }
}


// Endpoints
router.get('/', (req, res) => res.render('index'))
//router.get('/cocktails/profile', checkLoggedIn, (req, res, next) => res.render('cocktails/user-profile', req.user))
router.get('/cocktails/profile', checkLoggedIn, (req, res, next) => {

            Cocktail.find({strOwner: req.user._id}, (err, myCocktails) => {
                if(err){ return next(err)}
            
           res.render('cocktails/user-profile', { cocktails: myCocktails }) 
            })
       
}) 

//router.get('/profile/new-cocktail', checkLoggedIn, (req, res) => res.render('cocktails/new-cocktail'))


//No sé donde poner el random endpoint
router.get('/random', (req, res) => res.render('random-cocktail'))


module.exports = router
