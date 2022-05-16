const SessionsService = require('../services/sessions.service');

async function create(blockId,mentorId) {
    //create session process 
    const sessionRes =await  SessionsService.createSession(blockId,mentorId);   
    return sessionRes;
}

async function get(sessionId) {
    //get block by session id
    const codeblockRes =await  SessionsService.getcodeBlockBySession(sessionId);    
    return codeblockRes;
}


module.exports = {
    create,
    get    
}