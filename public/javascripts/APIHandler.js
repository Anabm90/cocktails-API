class APIHandler {

    constructor () {
      this.BASE_URL = axios.create({baseURL:'https://www.thecocktaildb.com/api/json/v1/1/'})
    }
  
    getRandomCocktail = () => this.BASE_URL.get('random.php') 
    getAllAlcoholicCocktails = () => this.BASE_URL.get('filter.php?c=Cocktail') 
    // getAllIngredients = () => this.BASE_URL.get('list.php?i=list')

  }