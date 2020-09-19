const charactersAPI = new APIHandler();

window.addEventListener('load', () => { 

    document.getElementById('random-cocktail').addEventListener('click', function (event) {
        event.preventDefault()
        
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
                      <div class="id">Id: <strong style="color:orange;">${cocktail.idDrink}</strong></div>
                      <div class="name">Name: <strong style="color:orange;">${cocktail.strDrink}</strong></div>
                      <div class="category">Categoria: <strong style="color:orange;">${cocktail.strCategory}</strong></div>`
                    text+=`<div class="ingredients">Ingredientes:`  
                         ingredientArray.forEach((ingredient) => {
                          text += `<li>${ingredient.amount} of ${ingredient.name}</li>`
                         })
  
                    text+=` </div><div class="instructions">Instrucciones: ${cocktail.strInstructions}</div>
                      <div class="image"><img src="${cocktail.strDrinkThumb}" alt="imagen"></div>
                    </div>`

                    document.querySelector('.cocktail-container').innerHTML = text

             })            
                  
          })      
        
          .catch(err => console.log('error!', err))     
      })
})


window.addEventListener('load', () => { 

    document.getElementById('all-ingredients').addEventListener('click', function (event) {
        event.preventDefault()
        
        charactersAPI.getAllIngredients()
          .then(allIngredients => {
           console.log(allIngredients)
            let text = ''
            allIngredients.data.drinks.forEach(cocktail => {
              text+=` <section class="ingredients">
              <div class="name">Ingredients: ${cocktail.strIngredient1}</div>
               </section>`
              })
              document.querySelector('.cocktail-container').innerHTML = text
              
            })
            .catch(err => console.log('error!', err))     
          })
        
        
})        
