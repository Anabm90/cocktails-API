# Cocktails Web

A Cocktails Web using the CocktailDB API


# Endpoints table

| Id        | Method        | Path                               | Description                |
| :---      |     :---      |    :---                            |  :---                      |
| 1         | Get           | /login                             |    Login                   |
| 2         | Get           |  /signup                           |    Sign up                  |
|3          | Get           | /logout                           | Log out
| 4         |  Get          |  /random                          |  Get a random cocktail     |
| 5         |  Get          |  /ingredients                      |  Search cocktails by ingredient |
| 6         | Get           |  /cocktails                        |  All cocktails             |
| 7         | Get           |  /cocktails/profile                |  User profile              |
| 8         | Get/post      | /cocktails/profile/new-cocktail            |   Create a new cocktail    |
| 9         |Get/post       | /cocktails/profile/edit-cocktail/:id      |   Edit a cocktail          |
|10         |Post           |  /cocktails/profile/:id/delete       |     Delete recipe                      |
| 11        |  Get          | /cocktails/:id                   |  Cocktail details          |
|12         | Get         |  /cocktails/advanced-search          | Advanced search form        |
|13         | Get           |  /cocktails/list                   |  Advanced search results      |      
| 14        | Get/post     |  /admin     |   Admin zone          |
| 15         |  Post         |    /admin/userdl/:id                | Deleting users by admin          |
| 16         |   Post         |    /admin/recipedel/:id            |    Deleting recipes by admin   |

```bash
the-cocktail-app/
├── .gitignore
├── app.js
├── bin
│   └── www
│   └──seed.js
├── models
│   ├── cocktail-model.js
│   ├── user.model.js
│   ├── value.model.js
│   ├── picture.model.js
│   ├── glass.model.js
│   └── bottle.model.js
│    
├── package.json
├── package-lock.json
├── public
│   └── stylesheets
│   │   └── style.css
│   ├──javascripts
│   │   └── APIHandler.js
│   │   └── index.js
│   │   └── script.js
│   └── images
│       
├── routes
│   ├── index.js
│   ├── auth.routes.js
│   ├── cocktail.routes.js
│   ├── base.routes.js
│   └── admin.routes.js
│
└── views
    ├── auth
    │   ├── login.hbs
    │   └── signup.hbs
    │
    ├── error.hbs
    ├── not-found.hbs
    ├── index.hbs
    ├── ingredients.hbs
    ├── random-cocktail.hbs
    ├── layout.hbs
    ├── signLayout.hbs
    │
    └── cocktails
        ├── admin.hbs
        ├── advanced-search.hbs
        ├── details.hbs
        ├── edit-cocktail.hbs
        ├── list-search.hbs
        ├── new-cocktail.hbs
        ├── search.hbs
        └── user-profile.hbs
        
     
```
# Built With

HTML5, CSS, JavaScript (ES6), Node.js

# Authors

Cynthia Gorosito && Ana Bermúdez
