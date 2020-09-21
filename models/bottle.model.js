const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bottlesSchema = new Schema ({

    name:String,
    image: String,
    
    },
    {timestamp: true}
)

const Bottle = mongoose.model('Bottle', bottlesSchema)

module.exports = Bottle