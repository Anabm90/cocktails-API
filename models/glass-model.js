const mongoose = require('mongoose')
const Schema = mongoose.Schema

const glassesSchema = new Schema ({

    name:String,
    image: String,
    
    },
    {timestamp: true}
)

const Glass = mongoose.model('Bottle', glassesSchema)

module.exports = Glass