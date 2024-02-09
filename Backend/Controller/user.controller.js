const {userService} = require('../Services')


exports.users = async (req, res) => {
    // console.log("cwec")
    try{
    const response = await userService.users(req)
    return res.status(201).json(response)
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}
