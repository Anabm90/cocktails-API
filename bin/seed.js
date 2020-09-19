const mongoose = require('mongoose');
const Cocktail = require('../models/cocktail-model');
const dbname = "cocktails-project-DB"


mongoose.connect(`mongodb://localhost/${dbname}`)
const Cockstail = require('../models/cocktail-model');

//Cocktail.collection.drop()

const cocktails = [

{
    strDrink:'Chrysanthemum',

    strCategory: 'Cocktail' ,

    strAlcoholic:'Alcoholic' ,
        
    strGlass: 'Coupe Glass' , 
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600512978/cocktails/crisan_h2v1fn.jpg", 

    strInstructions : "Pour ingredients into a mixing glass with ice and stir until cold. Strain into a chilled coupe. Garnish with an orange twist." ,

    strIngredients :['2 ounces of Dry Vermouth', '1 ounce of Benedictine', '3 dashes of Absinthe' ],

    strOwner: "Le cocktailerie ",

    strTags:['Dry Vermouth','Absinthe','Benedictine']
},

{   strDrink:'Blood & Sand',

    strCategory: 'Cocktail' ,

    strAlcoholic:'Alcoholic' ,
        
    strGlass: 'Cocktail glass' , 
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600510761/cocktails/bloodandsand_jdfunx.jpg", 

    strInstructions : "Add all ingredients into a shaker with ice and shake. Strain into a chilled coupe or cocktail glass. Garnish with an orange peel." ,

    strIngredients :['3/4 ounce of Scotch','3/4 ounce of Sweet Vermouth','3/4 ounce of Cherry liqueur','3/4 ounce of Orange juice' ],

    strOwner: "Le cocktailerie ",

    strTags:['Scotch','Vermouth','Orange','Cherry']
}

]


Cocktail.create(cocktails)
  .then(allCocktailsCreated => console.log('There are', allCocktailsCreated.length, 'cocktails in BBDD'))
  .catch(err => console.log('ERROR: ', err))