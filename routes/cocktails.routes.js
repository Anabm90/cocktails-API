const express = require('express')
const router = express.Router()

const Cocktail = require('../models/cocktail-model')
const User = require('../models/user.model')





//Create cocktails
router.get('/profile/new-cocktail', (req, res) => res.render('cocktails/new-cocktail'))
router.post('/profile/new-cocktail', (req, res) => {
    
    const {strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb, strInstructions, strIngredients, strOwner, strTags} = req.body

   Cocktail.create({strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb, strInstructions, strIngredients, strOwner, strTags})
    .then(()=> res.redirect('/'))
    .catch(err => console.log('error', err))
})


//Listar todos los cocktails






router.get('/:id', (req, res) => {
    
    Cocktail.findbyId(req.params.id)
   // .populate('StrOwner')
    .then(theCocktail => res.render('cocktails/details',theCocktail ))
    .catch(er => ('Error:', err))

})


router.get('/list', (req, res) => {
    
    Cocktail.find()
   // .populate('StrOwner')
    .then(allCocktails => res.render('cocktails/list',allCocktails ))
    .catch(er => ('Error:', err))

})



module.exports = router

