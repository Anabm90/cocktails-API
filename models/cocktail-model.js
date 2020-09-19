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

    strIngredient1 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]
    },

    strIngredient2 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient3 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient4 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient5 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient6 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient7 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient8 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient9 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient10 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries","Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient11 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries", "Benedictine","Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient12 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries", "Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient13 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries", "Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient14 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries", "Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

    },

    strIngredient15 : {
        type: String,
        enum:["7-Up", "Absinthe", "Absolut Citron", "Ale", "Amaretto", "Angelica root", "Apple brandy", "Apple cider", "Apple juice", "Applejack", "Apricot brandy", "Añejo rum", "Berries", "Benedictine", "Bitters", "Blackberry brandy", "Blended whiskey", "Bourbon", "Brandy", "Cantaloupe", "Carbonated water", "Champagne", "Cherry brandy","Cherry liqueur", "Chocolate", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cocoa powder", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cranberries", "Cranberry juice", "Creme de Cacao", "Creme de Cassis", "Dark rum", "Demerara Sugar", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg yolk", "Espresso", "Everclear", "Firewater", "Galliano", "Gin", "Ginger", "Grape juice", "Grapefruit juice", "Grapes", "Grenadine", "Heavy cream", "Irish cream", "Irish whiskey", "Johnnie Walker", "Kahlua", "Kiwi", "Lager", "Lemon", "Lemon juice", "Lemon vodka", "Lemonade", "Light rum", "Lime", "Lime juice", "Mango", "Midori melon liqueur", "Milk", "Orange juice", "Orange bitters", "Ouzo", "Peach Vodka", "Peach nectar", "Peppermint schnapps", "Pineapple juice", "Pisco", "Port", "Red wine", "Ricard", "Rum", "Sambuca", "Scotch", "Sherry", "Sloe gin", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Sweet Vermouth", "Tea", "Tequila", "Tomato juice", "Triple sec", "Vodka", "Water", "Watermelon", "Whiskey", "Yoghurt"]

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
    },
    StrOwner:{
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
//Cocktail.collection.drop()
module.exports = Cocktail