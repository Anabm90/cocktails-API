const charactersAPI = new APIHandler();


//UN COCKTAIL RANDOM...
       charactersAPI.getRandomCocktail()
          .then(randomCocktail => {
            let text = ''
            randomCocktail.data.drinks.forEach(cocktail => {
              let index = 1
                  let ingredientArray = []
                  while (cocktail['strIngredient' + index]) {
                      ingredientArray.push({name: cocktail['strIngredient' + index], amount: cocktail['strMeasure' + index] ? cocktail['strMeasure' + index]: "A dash "});
                      index++;
                    }
          
                    text+=` <div class="cocktail-info">
                      <div class="row">
                      <div class="col-sm-12 col-md-6 col-lg-8">
                      <div class="name text-center"> <h1>${cocktail.strDrink}</h1> </div>
                      <div class="category"><strong><p>${cocktail.strCategory}</p></strong></div>`
                    text+=`<div class="ingredients"><h4>Ingredientes:</h4>`  
                        ingredientArray.forEach((ingredient) => {
                          text += `<li>${ingredient.amount} of ${ingredient.name}</li>`
                        })
  
                    text+=` </div><div class="instructions">Instrucciones: ${cocktail.strInstructions}</div>
                    </div><div class="col-sm-12 col-md-6 col-lg-4">
                      <div id="centered"><img class="image-random" src="${cocktail.strDrinkThumb}" alt="imagen"></div>
                      </div></div>`

                    document.querySelector('.cocktail-container').innerHTML = text

            })            
                  
          })      
        
          .catch(err => console.log('error!', err))     



    
  

/*
let arrayBottles = ['Tequila','Champagne','Brandy','Gin','Scotch','Jack%20Daniels','Rum','Baileys%20Irish%20Cream','Bourbon','Vodka','Cointreau','Cognac','Whiskey','Cider','Light%20rum','Malibu%20Rum','Absolut%20citron','Amaretto','Irish%20whiskey','Sambuca']
let arrayRecipes = []
arrayBottles.map(elem => 
charactersAPI.getCocktailByIngredient(elem)
.then(recipe => {recipe.data.drinks.forEach(elem => {arrayRecipes.push(elem.idDrink)})})
.catch(err => console.log('error!', err))
)
*/

let arrayBottles = ['Tequila','Champagne','Brandy','Gin','Scotch','Jack%20Daniels','Rum','Baileys%20Irish%20Cream','Bourbon','Vodka','Cointreau','Cognac','Whiskey','Cider','Light%20rum','Malibu%20Rum','Absolut%20citron','Amaretto','Irish%20whiskey','Sambuca']

arrayBottles.map(elem =>
  document.getElementById(elem).addEventListener('click', function (event) {
            event.preventDefault()
      
              charactersAPI.getCocktailByIngredient(this.id)
              .then(ingredient => {
                let text = ''
                ingredient.data.drinks.forEach(cocktails => {
                  text+=` 
                            <input id='${cocktails.idDrink}' type="image" width="200px" src="${cocktails.strDrinkThumb}" onClick="reply_click()" />
                            
                        `})
                        document.querySelector('.cocktail-ingredients').innerHTML = text
      
              }) .catch(err => console.log('error!', err))
              
            
      
            })        ) 

 let bottleRecipes

 function reply_click()
 {
    //SoluciÃ³n non-sancta. Los de ING dirÃ­a..."la soluciÃ³n NO-SOLUCIÃ“N"
      bottleRecipes = event.target.id

 document.getElementById(bottleRecipes).addEventListener('click', function (event) {
          event.preventDefault()

 charactersAPI.getCocktailById(this.id)
          .then(detailedCocktail => {
            let text = ''
            let ingredients = ''
            let instructions = ''
            detailedCocktail.data.drinks.forEach(recipe => {
              let index = 1
                  let ingredientArray = []
                  while (recipe['strIngredient' + index]) {
                      ingredientArray.push({name: recipe['strIngredient' + index], amount: recipe['strMeasure' + index] ? recipe['strMeasure' + index]: "A dash "});
                      index++;
                    }
          
                    text+=` <div class="cocktail-details">
                      <div class="row">
                      <div class="col-sm-12 col-md-6 col-lg-8">
                      <div class="nameDetails text-center"> <h1>${recipe.strDrink}</h1> </div>
                      <div class="categoryDetails"><strong><p>${recipe.strCategory}</p></strong></div>`
                    text+=`<div class="ingredientsDetails"><h4>Ingredientes:</h4>`  
                        ingredientArray.forEach((ingredient) => {
                          text += `<li>${ingredient.amount} of ${ingredient.name}</li>`
                        })
  
                        text+=` </div><div class="instructions">Instrucciones: ${recipe.strInstructions}</div>
                    </div><div class="col-sm-12 col-md-6 col-lg-4">
                      <div id="centered"><img class="image-random" src="${recipe.strDrinkThumb}" alt="imagen"></div>
                      </div></div>`

                    document.querySelector('.cocktail-recipe').innerHTML = text

            })            
                  
          })      
        
          .catch(err => console.log('error!', err))               
        })    
      }
//Listar todos los cocktails
  
    //   charactersAPI.getAllCocktails()
      
    //       .then(allCocktails => {

    //         let text = ''
              
        
    //         allCocktails.data.drinks.forEach(cocktail => {
                
    //           text+=` <div class="cocktail-info">
    //             <div class="image"><img src="${cocktail.strDrinkThumb}" alt="imagen"></div>
    //              <div class="name">Name: ${cocktail.strDrink}</div>`


    //         document.querySelector('.cocktail-info').innerHTML = text

            
    //         })
        
    //   })
  
    //  .catch(err => console.log('error', err))
  



