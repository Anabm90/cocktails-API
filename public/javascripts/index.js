const charactersAPI = new APIHandler();
 
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
  




