const { validationResult } = require('express-validator');
const AuthHandler = require('../handlers/auth.handler');

async function login(req, res) {
    //check for errors and returning them
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }
    
    try {
        //login procces
        const loginRes =await AuthHandler.login(req.body.email, req.body.password);
        if(!loginRes){
            //Eror handling
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials'}]});
        }
        //success process
        return res.send( loginRes );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }   
}

module.exports = {
    login
}