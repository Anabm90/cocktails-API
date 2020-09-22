const mongoose = require('mongoose')
const dbname = "cocktails-proyect-DB"
mongoose.connect(`mongodb://localhost/${dbname}`)

const Value = require('../models/value.model')

const values = [
    {
    category: ["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"],
    alcohol: ["Alcoholic", "Non alcoholic", "Optional Alcohol"],
    glass: ["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    }
]

    mongoose.connection.collections['values'].drop()

    Value.create(values)
    .then(allValuesCreated => console.log('Se han creado', allValuesCreated.length, 'values en la BBDD'))
    .catch(err => console.log('ERROR: ', err))