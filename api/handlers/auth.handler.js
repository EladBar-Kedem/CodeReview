const AuthService = require('../services/auth.service');

async function login(email,password) {
    //login process
    const loginRes = await  AuthService.loginUserGetToken(email, password);
    //Erorr handling
    if(!loginRes){
        return null
    }
    const { user, token } = loginRes;
    return {user, token};
}


module.exports = {
    login   
}