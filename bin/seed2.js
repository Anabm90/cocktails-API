const mongoose = require('mongoose')
const dbname = "cocktails-proyect-DB"
mongoose.connect('mongodb+srv://cocktailDB:sehdus-9sumki-toWzoq@cluster0.d8m9h.mongodb.net/cocktail-app-db')

const Bottle = require('../models/bottle.model')

const bottles = [
    {
    name: 'Gin',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649650/cocktails/bottles/gin_l1mvsv.png'
    },
    {
    name: 'Scotch',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649651/cocktails/bottles/scotch_csi8cl.png'
    },
    {
    name: 'Brandy',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649649/cocktails/bottles/brandy_rob2qb.png'
    },
    {
    name: 'Champagne',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649649/cocktails/bottles/champagne_uxnscg.png'
    },
    {
    name: 'Bourbon',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649649/cocktails/bottles/bourbon_g86afg.png'
    },
    {
    name: 'Tequila',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649651/cocktails/bottles/tequila_y8sheb.png'
    },
    {
    name: 'Vodka',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649651/cocktails/bottles/vodka_z507zf.png'
    },
    {
    name: 'Baileys%20Irish%20Cream',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649649/cocktails/bottles/baileys_nsyxod.png'
    },
    {
    name:'Rum',
    image:'https://res.cloudinary.com/cocktailerie/image/upload/v1600649650/cocktails/bottles/rum_tliybr.png'
    },
    {
    name: 'Cognac',
    image:'https://res.cloudinary.com/cocktailerie/image/upload/v1600649650/cocktails/bottles/cognac_hgah24.png'
    },
    {
    name: 'Jack%20Daniels',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649650/cocktails/bottles/jack-daniels_xpjknf.png'
    },
    {
    name: 'Whiskey',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600650298/cocktails/bottles/whiskey_m04cl5.png'     
    },
    {
    name:'Cider',
    image:'https://res.cloudinary.com/cocktailerie/image/upload/v1600649649/cocktails/bottles/cider_ctfoz8.png' 
    },
    {
    name: 'Light%20rum',
    image:'https://res.cloudinary.com/cocktailerie/image/upload/v1600649650/cocktails/bottles/light-rum_robpjz.png'
    },
    {
    name: 'Malibu%20Rum',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649650/cocktails/bottles/malibu_xhpz0h.png'
    },
    {
    name: 'Cointreau',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649650/cocktails/bottles/cointreau_hdruaw.png'
    },
    {
    name: 'Absolut%20citron',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649648/cocktails/bottles/absolut_dvsjyf.png'
    },
    {
    name: 'Amaretto',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649649/cocktails/bottles/amaretto_x1acfz.png'
    },
    {
    name: 'Irish%20whiskey',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649650/cocktails/bottles/irish-whiskey_kucsv7.png'
    },
    {
    name: 'Sambuca',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600649651/cocktails/bottles/sambuca_uwdyyj.png'
    }
  ]
  
  //mongoose.connection.collections['bottles'].drop()

  Bottle.create(bottles)
    .then(allBottlesCreated => console.log('Se han creado', allBottlesCreated.length, 'bottles en la BBDD'))
    .catch(err => console.log('ERROR: ', err))

