const mongoose = require('mongoose')
const dbname = "cocktails-proyect-DB"
mongoose.connect('mongodb+srv://cocktailDB:sehdus-9sumki-toWzoq@cluster0.d8m9h.mongodb.net/cocktail-app-db')

const User = require('../models/user.model')

const users = [
    {
    username: 'admin',
    password: '12345',
    role: 'Admin'
    },
    {
    username: 'usuario',
    password: '12345',
    role: 'Suscriptor'
    }
 ]

 // mongoose.connection.collections['users'].drop()

  User.create(users)
    .then(allUsersCreated => console.log('Se han creado', allUsersCreated.length, 'usuarios en la BBDD'))
    .catch(err => console.log('ERROR: ', err))
