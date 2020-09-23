const express = require('express')
const router = express.Router()

const Cocktail = require('../models/cocktail-model')
const User = require('../models/user.model')
const Value = require('../models/value.model')




const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { message: 'you have to login to continue' })


const checkRole = rolesToCheck => {
    return (req, res, next) => {
        if (req.isAuthenticated() && rolesToCheck.includes(req.user.role)) {
            next()
        }
        else {
            res.render('auth/login', { message: 'You are not allowed to see this part' })
        }
    }
}


// Endpoints
router.get('/', (req, res) => res.render('index'))
//router.get('/cocktails/profile', checkLoggedIn, (req, res, next) => res.render('cocktails/user-profile', req.user))
router.get('/cocktails/profile', checkLoggedIn, (req, res, next) => {

            //.populate('strOwner')
            Cocktail.find({strOwner: req.user._id}, (err, myCocktails) => {
                
                if(err){ return next(err)}
            
           res.render('cocktails/user-profile', { cocktails: myCocktails }) 
            })
            
       
})

router.get('/cocktails/admin', checkRole(['Admin']), (req, res, next) => {
   /* 
    Cocktail.find()
    .then(allcocktails => res.render('cocktails/search', { allcocktails }))
    
    */
    
    res.render('cocktails/admin', { user: req.user, isAdmin: req.user.role === 'Admin' })


})
/*
const cocktailPromise = Cocktail.find()
const valuePromise = Value.find()
const usersPromise = User.find()
const glassesPromise = Glasses.find()


Promise.all([cocktailPromise, valuePromise,usersPromise,glassesPromise])
.then(allData => res.render('cocktails/edit-cocktail', {cocktail: allData[0], value: allData[1]}))
.catch(err => next(new Error(err)))
*/

//     Cocktail
//         .find({strOwner: req.user._id}, (err, myCocktails))
//         .populate('strOwner')
//         .then(cocktails => {
//             if (err) { 
//                 return next(err)}
//             res.render('cocktails/user-profile', { cocktails: myCocktails })
           
//         })
        
// })
                
  

//router.get('/profile/new-cocktail', checkLoggedIn, (req, res) => res.render('cocktails/new-cocktail'))


//No sé donde poner el random endpoint
router.get('/random', (req, res) => res.render('random-cocktail'))


module.exports = router
