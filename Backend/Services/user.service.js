const Users = require('../Model/Users')

require('dotenv').config()

exports.users = async (payload) => {
    const {name, username, email, address, phone, website, company} = payload.body
    
    const user = new Users({
        name, 
        username, 
        email, 
        address, 
        phone, 
        website, 
        company
    })

    try{
        user.save()
        return user
    }
    catch(err){
        console.log(err)
    }
}
