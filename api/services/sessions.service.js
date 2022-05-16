const Session = require ('../models/Session.model')
const {ObjectId} = require('mongodb');

async function createSession(blockId, mentorId) {
    //create id
    const id = ObjectId();
    const host = process.env.host || 'http://localhost';
    const port = process.env.port || 3000;

    //build url
    const url = `${host}:${port}/sessions/${id}`;

    var session = new Session({
        block_id : blockId,
        mentor_id : mentorId,
        _id:id,
        url
    },{ _id: false })

    //create session
    await session.save();
    return session;
}

async function getcodeBlockBySession(sessionId) {
    //find session populate for codeblock by codeblock id inside session
    const codeBlock = await Session.findOne({ _id:sessionId }).populate("block_id").exec();
    return codeBlock.block_id;
}

module.exports = {
    createSession,
    getcodeBlockBySession
}