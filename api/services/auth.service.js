const Auth = require('../models/Auth.model');
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

async function loginUserGetToken(email, password) {
    try {
        //find user to check password from diffrent collection
        var user = await Auth.findOne({ email });
        //find user to update global state with user
        var userData = await User.findOne({ email });
        
        if(!user){
            return null;
        }
        
        //check password for this user
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return null;
        }

         //create token
         const payload = {
            user: {
                id : user.id
            }
        }
        const token = await jwt.sign(payload, config.get('jwtSecret'),{expiresIn : 360000});
        //Return jwt and user
        return {token,user:userData}
                 
    } catch (err) {
        return null;
    }  
}

module.exports = {
    loginUserGetToken,
}