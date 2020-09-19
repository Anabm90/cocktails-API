class APIHandler {

    constructor () {
      this.BASE_URL = axios.create({baseURL:"https://www.thecocktaildb.com/api/json/v1/1/"})
    }
  
    getRandomCocktail = () => this.BASE_URL.get("random.php") 
    getAllCocktails = () => this.BASE_URL.get("filter.php?c=Cocktail")

}

