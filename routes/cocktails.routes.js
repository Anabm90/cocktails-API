const express = require('express')
const router = express.Router()


const cdnUploader = require('./../configs/cloudinary.config')

const Picture = require('./../models/picture.model')
const Cocktail = require('../models/cocktail-model')
const User = require('../models/user.model')
const Value = require('../models/value.model')
const Bottle = require('../models/bottle.model')


//Lista de ingredientes
router.get('/ingredients', (req, res) => {
    Bottle.find()
    .then(allBottles => res.render('ingredients', {allBottles}))
    .catch(err => console.log('Error', err))

})


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
    .create({strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb: req.file.path, strInstructions, strIngredients, strOwner: req.user._id, strTags})
    .then(()=> res.redirect('/cocktails/profile'))
    .catch(err =>next(err))   
})




//Para buscar
router.get('/advanced-search', (req, res) => res.render('cocktails/advanced-search'))

router.get('/list', (req, res) => {
    
    //const valueDrink = req.query.strDrink
   
    Cocktail.find({$or: [{strDrink: req.query.strDrink},{strTags: req.query.strTags}]},
        
        (err, myCocktails) => {

        if(err){

             return next(err) }

               
             {cocktails: myCocktails}
    })
    .populate('value')
    .then(myCocktails => res.render('cocktails/list-search', {cocktails: myCocktails }))
    
})


//     Cocktail.find({strDrink: valueDrink})
//     .then(cocktailsFind => res.render('cocktails/list-search', {cocktails: cocktailsFind }))
//     .catch(err => console.log('ERROR', err))
// })

//Busqueda por ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    
    Cocktail
    .findById(id)
    .populate('strOwner')
    .then(cocktailDetails => res.render('cocktails/details', { cocktailDetails } ))
    .catch(err => console.log('Error:', err))
})

// function search_cocktail(){
// let input= document.getElementById('searchbar').value




// Editar cocktail
router.get('/profile/edit-cocktail/:id', (req, res, next) => {

    //const cocktail_id = req.query.cocktail_id

    //Cocktail.findById(cocktail_id)
    //.populate('value')

    //.then(allCocktailDetails => res.render('cocktails/edit-cocktail', allCocktailDetails))
    //.catch(err => console.log("ERRORR", err))

     const id = req.params.id

     const { nameInput } = req.body
   
     const cocktailPromise = Cocktail.findById(id)
     const valuePromise = Value.find()

     Promise.all([cocktailPromise, valuePromise])
    .then(results => res.render('cocktails/edit-cocktail', {cocktail: results[0], value: results[1]}))
    .catch(err => next(new Error(err)))
    
 })

 //ESTE COMENTADO ES EL QUE FALTABA...

router.post('/profile/edit-cocktail',cdnUploader.single('imageInput'), (req, res) => {
    const cocktail_id = req.query.id
    const theOwner = req.user.id
    const thePicture = req.file.path
    const { nameInput } = req.query.id
    const filter = {path: req.file.path}
    const update = 

    Picture
    .findByIdAndUpdate({
        name: nameInput,
        path: req.file.path,                    
        originalName: req.file.originalname
    }) 

    const {strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb, strInstructions, strIngredients, strTags} = req.body

    Cocktail.findByIdAndUpdate(cocktail_id, {strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb:thePicture, strInstructions, strIngredients, strOwner:theOwner, strTags}) 
        .then(() => res.redirect('/cocktails/profile'))
        .catch(err => console.log('ERROR', err))


/*
router.post('/profile/edit-cocktail/:id', cdnUploader.single('imageInput'), (req, res, next) => {

    const cocktail_id = req.params.cocktail_id
    const { nameInput } = req.body
        Picture
            .create({
                name: nameInput,
                path: req.file.path,                    
                originalName: req.file.originalname
             }) 

    const {strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb, strInstructions, strIngredients, strOwner, strTags} = req.body
    
    Cocktail
    .findByIdAndUpdate({strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb: req.file.path, strInstructions, strIngredients, strOwner: req.user._id, strTags})
    .then(()=> res.redirect('/cocktails/profile'))
    .catch(err =>next(err))   
})
*/



/*
    $lookup:
      {
        from: cocktails,
        localField: strAlcoholic,
        foreignField: <field from the documents of the "from" collection>,
        as: <output array field>
      } 
 }
*/

//ADMIN VIEW



// Eliminar cocktail
router.post('/profile/:cocktail_id/delete', (req, res) => {

    const id = req.params.cocktail_id

    Cocktail.findByIdAndRemove(id)
        .then(() => res.redirect('/cocktails'))
        .catch(err => console.log('ERROR', err))
})


// Eliminar cocktail
router.post('/profile/:cocktail_id/delete', (req, res) => {
    
    const id = req.params.cocktail_id
    
    Cocktail.findByIdAndRemove(id)
    .then(() => res.redirect('/cocktails'))
    .catch(err => console.log('ERROR', err))
})

//Listar todos los cocktails
router.get('/', (req, res) => {
    
    Cocktail.find()
    .then(allcocktails => res.render('cocktails/search', { allcocktails }))
    .catch(err => console.log('ERROR', err))
})
module.exports = router



//Listar todos los cocktails
router.get('/', (req, res) => {

    
    Cocktail.find()
    .then(allcocktails => res.render('cocktails/search', { allcocktails }))
    .catch(err => console.log('ERROR', err))
})

