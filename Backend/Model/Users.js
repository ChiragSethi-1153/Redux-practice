const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: Object,
        street: {
            type: String
        },
        suite: {
            type: String
        },
        city:{
            type: String
        },
        zipcode: {
            type: String
        },
        geo: {
            type: Object,
            lat:{
                type: Number
            },
            lng: {
                type: Number
            }
        }
    },
    phone: {
        type: Number
    },
    website: {
        type: String
    },
    company: {
        type: Object,
        name: {
            type: String
        },
        catchPhrase: {
            type: String
        },
        bs: {
            type: String
        }
    }

})

const Users = mongoose.model('users' , userSchema)

module.exports = Users