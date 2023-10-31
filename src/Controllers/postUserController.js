const { User } = require('../db.js')

const postUserController = async (user) => {
    try {
        const [oldUser, created] = await User.findOrCreate({where: {email:user.email} || {username: user.username}, defaults: {email: user.email, password: user.password, username: user.username}})
        
        if(created){
            return(true)
        }
        return new Error('Usuario o email ya existe')
    } catch (error) {
        return error.message
    }
}

module.exports = postUserController