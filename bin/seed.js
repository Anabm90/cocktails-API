const mongoose = require('mongoose');
const Cocktail = require('../models/cocktail-model');
const dbname = "cocktails-proyect-DB"


mongoose.connect('mongodb+srv://cocktailDB:sehdus-9sumki-toWzoq@cluster0.d8m9h.mongodb.net/cocktail-app-db')



//Cocktail.collection.drop()

const cocktails = [

{
    strDrink:'Chrysanthemum',

    strCategory: 'Cocktail' ,

    strAlcoholic:'Alcoholic' ,
        
    strGlass: 'Coupe Glass' , 
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600720038/cocktails/recipes/crisan_istdcf.jpg", 

    strInstructions : "Pour ingredients into a mixing glass with ice and stir until cold. Strain into a chilled coupe. Garnish with an orange twist." ,

    strIngredients :['2 ounces of Dry Vermouth', '1 ounce of Benedictine', '3 dashes of Absinthe' ],

    strTags:['Dry Vermouth','Absinthe','Benedictine']
},

{   strDrink:'Blood & Sand',

    strCategory: 'Cocktail' ,

    strAlcoholic:'Alcoholic' ,
        
    strGlass: 'Cocktail glass' , 
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600720038/cocktails/recipes/bloodsand_jgsu5z.jpg", 

    strInstructions : "Add all ingredients into a shaker with ice and shake. Strain into a chilled coupe or cocktail glass. Garnish with an orange peel." ,

    strIngredients :['3/4 ounce of Scotch','3/4 ounce of Sweet Vermouth','3/4 ounce of Cherry liqueur','3/4 ounce of Orange juice' ],

    strTags:['Scotch','Vermouth','Orange','Cherry']
},
{   strDrink:'Lâ€™Alligator Câ€™Est Vert',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Champagne flute' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600720038/cocktails/recipes/LAlligator_ca9nxx.jpg", 

    strInstructions : "Add all ingredients into a shaker and dry-shake (without ice) vigorously. Add ice and shake again until well-chilled. Strain into a chilled fluted glass. Garnish with grated nutmeg",

    strIngredients :["1 ounce Pernod absinthe","1 ounce coconut milk","1 ounce pandan syrup","1 whole egg", "Garnish: grated nutmeg"],

    strTags:["Pernod","Coconut milk","Pandan syrup","Egg","Grated nutmeg"]
},
{   strDrink:'Singapura',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Highball glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600754899/cocktails/recipes/singapura_oemmoc.jpg", 

    strInstructions : "Add all ingredients into a shaker with ice and shake until well-chilled. Strain into a highball glass over fresh ice. Garnish with a pandan leaf tucked down the side of the glass.",

    strIngredients :["1 1/2 ounces Monopolowa dry gin (or other citrus-forward gin)","1/2 ounce Cherry Heering","3/4 ounce pineapple juice", "1/2 ounce lime juice, freshly squeezed","1/2 ounce orange juice","1/2 ounce pandan syrup","2 dashes Angostura bitters","Garnish: pandan leaf"],

    strTags:[ "Gin","Cherry Heering","Pineapple","Lime","Orange","Pandan syrup"]
},
{   strDrink:'Pandan-Coconut Kaki-tail',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Collins glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600756145/cocktails/recipes/kali-tail_tijju0.jpg", 

    strInstructions : "Add the gin and lychee liqueur into a carafe and set aside. Fill a Collins glass with finely shaved or very finely crushed ice. Drizzle 1/3 of coconut milk syrup and pandan syrup onto ice. Add more ice to top the cup again and repeat drizzling the syrups over the ice. Add a final layer of ice to mound over the top of the glass to resemble a snow cone. Drizzle with both syrups a final time. Place a sliced pandan leaf in the top middle of the ice mound. Slowly pour the gin and lychee liqueur mixture over the top in a circular motion. Serve with a spoon and a straw." ,

    strIngredients :["1/2 ounce Ki No Bi gin (or other herbaceous dry gin)","1/2 ounce Soho lychee liqueur","2 1/2 ounces pandan syrup","2 1/2 ounces sweetened coconut milk syrup","Garnish: pandan leaf, sliced"],

    strTags:["Gin","Kychee Liqueur","Pandan Syrup","Coconut"]
},
{   strDrink:'Don Quixote',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Old-fashioned glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600756618/cocktails/recipes/quixote_n9zq82.jpg", 

    strInstructions : "Add the Don Q rum, mango-pandan syrup and lime juice into a shaker with ice and shake until well-chilled. Strain into a rocks glass over crushed ice. Float the Appleton Estate rum on top. Garnish with the dehydrated lime wheel.",

    strIngredients :["1 1/2 ounces Don Q Cristal rum","1 ounce mango-pandan syrup","1/2 ounce lime juice, freshly squeezed","1/2 ounce Appleton Estate 12 Year rum","Garnish: dehydrated lime wheel"],

    strTags:["Rum","Lime"]
},
{   strDrink:'Leeward Negroni',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Old-fashioned glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600756848/cocktails/recipes/negroni_gvspbd.jpg", 

    strInstructions : "Rinse a rocks glass with the Tiki bitters, then discard excess and set glass aside. Add all ingredients into a mixing glass with ice and stir until well-chilled. Strain into the prepared rocks glass over one large cube. Garnish with a pandan leaf." ,

    strIngredients :["1 ounce coconut oil-washed Campari", "1/2 ounce Sipsmith VJOP gin","3/4 ounce pandan cordial", "Rinse: Bittermens Tiki bitters","Garnish: pandan leaf"],

    strTags:["Coconut","Pandan cordial","Tiki bitters"]
},
{   strDrink:'Bourbon Sweet Tea',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Highball glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600757220/cocktails/recipes/BourbonSweetTea_nrltrf.jpg", 

    strInstructions : "Combine the boiling water and sugar in a heatproof container and stir until sugar is dissolved. Add the tea bags and steep for 5 minutes. Remove tea bags and discard. Pour the tea mixture into a heatproof pitcher or serving jar. Add the cold water, ice and bourbon. Stir well, and refrigerate until serving. To serve, divide between 16 ice-filled highball or Old Fashioned glasses. Garnish each glass with a mint sprig and a lemon slice." ,

    strIngredients :["4 cups boiling water","1 cup sugar","12 black tea bags","6 cups cold water","3 cups crushed ice, plus more for serving","24 ounces bourbon (approximately one 750mL bottle)","Garnish: 16 mint sprigs", "Garnish: 16 lemon slices"],

    strTags:["Tea","Bourbon","Mint", "Lemon"]
},
{   strDrink:'Transfusion',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Old-fashioned glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600758621/cocktails/recipes/transfusion_h2bkuk.jpg", 

    strInstructions : "In advance: Fill an ice cube tray with Concord grape juice and place in the freezer for several hours until frozen. Add the vodka, ginger syrup and lime juice into a cocktail shaker with ice and shake. Strain into a rocks glass over Concord grape juice ice cubes. Top with the club soda. Garnish with Concord grapes and a piece of crystallized ginger." ,

    strIngredients :["Concord grape juice, for ice cubes","2 ounces vodka","1/2 ounce ginger syrup","1/2 ounce fresh lime juice","2 ounces club soda","Garnish: concord grapes","Garnish: crystallized ginger"],

    strTags:['Vodka','Ginger Ale','Grapes']
},
{   strDrink:'Green Beast',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Punch bowl' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600763399/cocktails/recipes/green-beast_utklov.jpg", 

    strInstructions : "Muddle cucumbers and simple syrup in a Collins glass. Add absinthe, lime juice and ice. Top with chilled water, and garnish with additional cucumber slices." ,

    strIngredients :["3 slices seedless cucumber, peeled","1 ounce simple syrup","1 ounce Pernod absinthe","1 ounce lime juice, freshly squeezed","4 ounces chilled water","Garnish: cucumber slices"],

    strTags:["cucumber","Absinthe"]
},
{   strDrink:'Peach Me',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Old-fashioned glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600764512/cocktails/recipes/peach-me_u4rt4e.jpg", 

    strInstructions : "Muddle the cherry, orange slice and bitters in a mixing glass. Add the bourbon, schnapps and ice and stir until well-chilled. Strain into a rocks glass over a large ice sphere. Garnish with a dehydrated or fresh orange slice." ,

    strIngredients :["1 Luxardo maraschino cherry","1 orange slice","3 dashes Angostura orange bitters","2 1/2 ounces Woodford Reserve bourbon","1/2 ounce peach schnapps","Garnish: orange slice"],

    strTags:['Cherry','Orange','Angostura','Bourbon','Peach']
},
{   strDrink:'Spicy Mint Avocado Margarita',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Old-fashioned glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600764780/cocktails/recipes/mintmargarita_n9fzno.jpg", 

    strInstructions : "Rim a double rocks glass with salt and set aside. Add the avocado, jalapeÃ±o, mint and lime juice into a shaker and muddle until the avocado is mashed. Add the tequila, orange liqueur, simple syrup and salt. Fill the shaker with ice, and shake until well-chilled. Strain into the prepared rocks glass over fresh ice. Garnish with a mint sprig." ,

    strIngredients :[ "1 slice avocado (approximately 2 Tbsp)","3 slices jalapeÃ±o pepper (seeds removed)", "4 fresh mint leaves","2 ounces blanco tequila","1 ounce orange liqueur","1 ounce fresh lime juice","1/2 ounce simple syrup","1 pinch salt","Garnish: salt rim","Garnish: mint sprig"],

    strTags:["Avocado","JalapeÃ±o","Mint",'Tequila',"Lime","Orange"]
},
{   strDrink:'Amaretto Sour',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Old-fashioned glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600765106/cocktails/recipes/amarettosour_rlk0f0.jpg", 

    strInstructions : "Add all ingredients into a shaker and dry-shake (no ice). Add ice and shake again until chilled. Strain into a rocks glass over fresh ice. Garnish with a lemon twist and 2 skewered brandied cherries." ,

    strIngredients :["1 1/2 ounces amaretto liqueur","3/4 ounce cask-proof bourbon","1 ounce lemon juice, freshly squeezed","1 teaspoon rich simple syrup","1/2 ounce egg white, beaten","Garnish: lemon twist", "Garnish: 2 brandied cherries"],

    strTags:["Amaretto","Bourbon","Lemon"]
},
{   strDrink:'Last Word',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Coupe Glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600765301/cocktails/recipes/lastword_ygecor.jpg", 

    strInstructions : "Add all ingredients into a shaker with ice and shake. Strain into a chilled coupe glass." ,

    strIngredients :["3/4 ounce gin","3/4 ounce green Chartreuse","3/4 ounce maraschino liqueur","3/4 ounce fresh lime juice"],

    strTags:["Gin","Lime","Maraschino liqueur","Chartreuse"]
},
{   strDrink:'Sloe Gin Fizz',

    strCategory: 'Cocktail' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'Alcoholic' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: 'Collins glass' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "https://res.cloudinary.com/cocktailerie/image/upload/v1600765716/cocktails/recipes/sloe-gin_zfjwts.jpg", 

    strInstructions : "Add all the ingredients except the club soda into a cocktail shaker with ice and shake until well-chilled. Strain into a highball or Collins glass filled with fresh ice. Top with the club soda. Garnish with a lemon wedge and a cherry." ,

    strIngredients :["1 1/2 ounces sloe gin","1 ounce lemon juice, freshly squeezed","3/4 ounce simple syrup","club soda, to top","Garnish: lemon wedge","Garnish: cherry"],

    strTags:['Gin','Syrup','Lemon']
}/*,
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
},
{   strDrink:'',

    strCategory: '' , //["Beer", "Cocktail", "Cocoa", "Coffee / Tea", "Homemade Liqueur", "Milk / Float / Shake", "Ordinary Drink", "Other / Unknown", "Punch / Party Drink", "Shot", "Soft Drink / Soda"]

    strAlcoholic:'' , //["Alcoholic", "Non alcoholic", "Optional Alcohol"],
        
    strGlass: '' , //["Balloon Glass", "Beer Glass", "Beer mug", "Beer pilsner", "Brandy snifter", "Champagne flute", "Cocktail glass", "Coffee mug", "Collins glass", "Copper Mug", "Cordial glass", "Coupe Glass", "Highball glass", "Hurricane glass", "Irish coffee cup", "Jar", "Margarita glass", "Margarita/Coupette glass", "Martini Glass", "Mason jar", "Nick and Nora Glass", "Old-fashioned glass", "Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
    
    strDrinkThumb : "", 

    strInstructions : "" ,

    strIngredients :[ ],

    strTags:[ ]
}*/
]


Cocktail.create(cocktails)
  .then(allCocktailsCreated => console.log('There are', allCocktailsCreated.length, 'cocktails in BBDD'))
  .catch(err => console.log('ERROR: ', err))
