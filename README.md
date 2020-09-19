# Cocktails Web

A Cocktails Web usin the CocktailDB API

ENDPOINTS

| Id        | Method        | Path      | Description   |
| :---      |     :---      |    :---   |  :---         |
| 1         | Get/post      |  /signup  |    allow users to signup           |
| 2         | Get/post      |  /login   |     allow users to login         |
| 3         | Get    |  /profile |       users profile        |
| 4         |    Get           |   /cocktails        |   List of all cocktails            |
| 5         |       Get/post      | /cocktails/new-cocktail          |   Create a new cocktail            |
| 6         |        Get/post       |  /cocktails/edit         |   Edit a cocktail            |
| 7         |               |           |               |
| 8         |               |           |               |



```bash
the-cocktail-app/
├── .gitignore
├── app.js
├── bin
│   └── www
│   └──seed.js
├── models
│   ├── cocktail-model.js
│   └── user.js
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
│       └── favicon.ico
├── routes
│   ├── index.js
│   ├── cocktail.routes.js
│   └── base.routes.js
└── views
    ├── auth
    │   ├── login.hbs
    │   └── signup.hbs
    ├── error.hbs
    ├── index.hbs
    │      └── search.routes.js
    │
    ├── cocktails
    │   └── users.hbs
    |        ├── user-profile.hbs
    |        ├── new-cocktail.hbs  
    |        └── edit.hbs
    │    
    ├── admin.hbs
    |    └── dashboard.hbs
    │                      
    └── layout.hbs
```
