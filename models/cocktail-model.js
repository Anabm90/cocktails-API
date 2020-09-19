const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cocktailSchema = new Schema ({

    strDrink: {
        type: String, 
        required: true
    },

    strCategory: {
        type: String,
        enum: ["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other/Unknown", "Punch / Party Drink", "Shot", "Soft Drink/ Soda"]
    },

    strAlcoholic: {
        type: String,
        enum: ["Alcoholic", "Non alcoholic", "Optional Alcohol"]
    },
    strGlass: {
        type: String,
        enum: ["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    },

    strDrinkThumb : {
        type: String
    }, 

    strInstructions : {
        type: String
    },

    strIngredients : {
        type: [String],
    },

    strOwner:{
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    strTags: {
        type: Array
    },
},
    {timestamp: true}
)

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

module.exports = Cocktail