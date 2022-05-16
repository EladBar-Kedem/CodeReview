const SessionsHandler = require('../handlers/sessions.handler')

async function create(req, res) {
    //start create session process
    const sessionRes = await SessionsHandler.create(req.body.blockId, req.body.mentorId);
    return res.send( sessionRes );
}

async function get(req, res) {
    //start get block by session id process
    const codeblock = await SessionsHandler.get(req.params.id);
    return res.send( codeblock );
}


module.exports = {
    create,
    get
}