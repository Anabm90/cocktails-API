const express = require('express')
const router = express.Router()


const cdnUploader = require('./../configs/cloudinary.config')

const Picture = require('./../models/picture.model')
const Cocktail = require('../models/cocktail-model')
const User = require('../models/user.model')
const Value = require('../models/value.model')



//Lista de ingredientes
router.get('/ingredients', (req, res) => res.render('ingredients'))
//Create cocktails
router.get('/profile/new-cocktail', (req, res) => {
    
    Value.find()
    .then(allValues => res.render('cocktails/new-cocktail', {values: allValues}))
    .catch(err => console.log('Error', err))

})
    
router.post('/profile/new-cocktail', cdnUploader.single('imageInput'), (req, res, next) => {

    const { nameInput } = req.body
        Picture
            .create({
                name: nameInput,
                path: req.file.path,                    
                originalName: req.file.originalname
             }) 

    const {strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb, strInstructions, strIngredients, strOwner, strTags} = req.body
    
    Cocktail
    .create({strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb, strInstructions, strIngredients, strOwner: req.user._id, strTags})
    .then(()=> res.redirect('/'))
    .catch(err =>next(err))   
})

// strOwner

// Hecho con promise.all pero da error
//     const createPictureCoktail = Cocktail.create({strDrinkThumb})
//     const createCocktail = Cocktail.create({strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb, strInstructions, strIngredients, strOwner, strTags})

//     Promise.all([ createPicture, createCocktail])
//     .then(results => res.redirect('/', { picture: results[0], cocktail: results[1]}))
//     .catch(err => next(new Error(err)))

// })



//Listar todos los cocktails
router.get('/', (req, res) => {
    
    Cocktail.find()
    .then(allcocktails => res.render('cocktails/search', { allcocktails }))
    .catch(err => console.log('ERROR', err))
})


//Busqueda por ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    
    Cocktail
        .findById(id)
        .populate('value')
        .then(cocktailDetails => res.render('cocktails/details', { cocktailDetails } ))
        .catch(err => console.log('Error:', err))
})

// Editar cocktail
router.get('/profile/edit/:cocktail_id', (req, res) => {
    const id = req.params.cocktail_id

    Cocktail.findById(id)
        .then(editCocktail => res.render('cocktails/edit-cocktail', editCocktail))
        .catch(err => console.log('ERROR', err))
    
})
// router.get('/list', (req, res) => {
    
//     Cocktail.find()
//    // .populate('StrOwner')
//     .then(allCocktails => res.render('cocktails/list', allCocktails ))
//     .catch(er => ('Error:', err))

// })
//Listar cocktails por usuario

router.get('/profile/:id', (req, res) => {

    const id= req.params.id

    Cocktail.find({strOwner : id})
    .populate('user')
    .then(allDrinks => res.render('cocktails/user-profile', { allDrinks }))
    .catch(err => console.log('ERROR', err))
})


module.exports = router

