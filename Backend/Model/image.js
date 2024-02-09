const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    image: {
        type: String
    },
    image2:{
        type: Array
    }
})

const imageModel = mongoose.model('images', imageSchema)
module.exports = imageModel