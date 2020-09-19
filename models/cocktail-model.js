const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cocktailSchema = new Schema ({

    strDrink: {
        type: String, 
        required: true
    },

    strCategory: {
        type: [String],
        enum: ['Ordinary Drink', 'Cocktail', 'Milk / Float / Shake', 'Other/Unknown', 'Cocoa','Shot', 'Coffee / Tea', 'Homemade Liqueur', 'Punch / Party Drink', 'Beer', 'Soft Drink/ Soda' ]
    },

    strAlcoholic: {
        type: [String],
        enum: ['Alcoholic', 'Optional Alcohol', 'Non alcoholic']
    },

    strDrinkThumb : {
        type: String
    }, 

    strInstructions : {
        type: String
    },

    strIngredient1 : {
        type: String
    },

    strIngredient2 : {
        type: String
    },

    strIngredient3 : {
        type: String
    },

    strIngredient4 : {
        type: String
    },

    strIngredient5 : {
        type: String
    },

    strIngredient6 : {
        type: String
    },

    strIngredient7 : {
        type: String
    },

    strIngredient8 : {
        type: String
    },

    strIngredient9 : {
        type: String
    },

    strIngredient10 : {
        type: String
    },

    strIngredient11 : {
        type: String
    },

    strIngredient12 : {
        type: String
    },

    strIngredient13 : {
        type: String
    },

    strIngredient14 : {
        type: String
    },

    strIngredient15 : {
        type: String
    },

    strMeasure1 : {
        type: String
    },

    strMeasure2 : {
        type: String
    },

    strMeasure3 : {
        type: String
    },

    strMeasure4 : {
        type: String
    },

    strMeasure5 : {
        type: String
    },

    strMeasure6 : {
        type: String
    },

    strMeasure7 : {
        type: String
    },

    strMeasure8 : {
        type: String
    },

    strMeasure9 : {
        type: String
    },

    strMeasure10 : {
        type: String
    },

    strMeasure11 : {
        type: String
    },

    strMeasure12 : {
        type: String
    },

    strMeasure13 : {
        type: String
    },

    strMeasure14 : {
        type: String
    },

    strMeasure15 : {
        type: String
    }

})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

module.exports = Cocktail