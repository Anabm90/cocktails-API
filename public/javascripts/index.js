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
                      <div class="id">Id: <strong style="color:orange;">${cocktail.idDrink}</strong></div>
                      <div class="name">Name: <strong style="color:orange;">${cocktail.strDrink} </strong></div>
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





//Listar todos los cocktails
  
      charactersAPI.getAllCocktails()
      
          .then(allCocktails => {

            let text = ''
              console.log(allCocktails)

        
            allCocktails.data.drinks.forEach(cocktail => {
                
              text+=  ` <div class="cocktail-info">
                <div class="image"><img src="${cocktail.strDrinkThumb}" alt="imagen"></div>
                 <div class="name">Name: ${cocktail.strDrink}</div>`


            document.querySelector('.cocktail-info').innerHTML = text

            
            })
        
      })
  
     .catch(err => console.log('error', err))
  




