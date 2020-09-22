const mongoose = require('mongoose')
const dbname = "cocktails-proyect-DB"
mongoose.connect(`mongodb://localhost/${dbname}`)

const Glass = require('../models/bottle.model.js')
//[Parfait glass", "Pint glass", "Pitcher", "Pousse cafe glass", "Punch bowl", "Shot glass", "Whiskey sour glass", "White wine glass", "Wine Glass"]
const glasses = [
    {
    name: 'Balloon Glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/baloon-wine-glass_ybgntu.png'
    },
    {
    name: 'Beer Glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719662/cocktails/glasses/beer_kj4szx.png'
    },
    {
    name: 'Beer mug',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/beer-mug_gt3cpl.png'
    },
    {
    name: 'Beer pilsner',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719662/cocktails/glasses/pilsner_naonpg.png'
    },
    {
    name: 'Brandy snifter',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/brandy-shiffer_yfj9oa.png'
    },
    {
    name: 'Champagne flute',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/champagne-flute_t4ctog.png'
    },
    {
    name: 'Cocktail glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/martini_ycyr1t.png'
    },
    {
    name: 'Coffee mug',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719662/cocktails/glasses/coffee-mug_zkynae.png'
    },
    {
    name:'Collins glass',
    image:'https://res.cloudinary.com/cocktailerie/image/upload/v1600719662/cocktails/glasses/collin_b7xjq6.png'
    },
    {
    name: 'Copper Mug',
    image:'https://res.cloudinary.com/cocktailerie/image/upload/v1600719662/cocktails/glasses/copper_w85tbj.png'
    },
    {
    name: 'Cordial glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/cordial_pjfubw.png'
    },
    {
    name: 'Coupe Glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/couple_sjvysi.png'     
    },
    {
    name:'Highball glass',
    image:'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/high-ball_ixytfg.png' 
    },
    {
    name: 'Hurricane glass',
    image:'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/hurricane_kjinen.png'
    },
    {
    name: 'Irish coffee cup',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/irish-coffee_qoq7ng.png'
    },
    {
    name: 'Jar',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/jar_oafwbt.png'
    },
    {
    name: 'Margarita glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/margarita_fdo9rl.png'
    },
    {
    name: 'Coupette glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/margarita_fdo9rl.png'
    },
    {
    name: 'Martini Glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/martini_ycyr1t.png'
    },
    {
    name: 'Mason jar',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/jar_oafwbt.png'
    },
    {
    name: 'Nick and Nora Glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/nick-and-nora_rz49vp.png'
    },
    {
    name: 'Old-fashioned glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/old_fashioned_pgff6o.png'
    },
    {
    name: 'Parfait glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/parfait_j1xnqj.png'
    },
    {
    name: 'Pint glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/pint_lxc4me.png'
    },
    {
    name: 'Pitcher',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719662/cocktails/glasses/Pitcher_of9orc.png'
    },
    {
    name: 'Pousse cafe glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/pousse-cafe_yolrbl.png'
    },
    {
    name: 'Punch bowl',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/punchbowl_zxg2vn.png'
    },
    {
    name: 'Shot glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719663/cocktails/glasses/shot-glass_w7kght.png'
    },
    {
    name: 'Whiskey sour glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/whiskey_sour_glass_izlmbp.png'
    },
    {
    name: 'White wine glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/white-wine_tlu9qs.png'
    },
    {
    name: 'Wine Glass',
    image: 'https://res.cloudinary.com/cocktailerie/image/upload/v1600719664/cocktails/glasses/red_wine_glass_jkls20.png'
    }
  ]
  
  mongoose.connection.collections['glasses'].drop()

  Glass.create(glasses)
    .then(allGlassesCreated => console.log('Se han creado', allGlassesCreated.length, 'glasses en la BBDD'))
    .catch(err => console.log('ERROR: ', err))