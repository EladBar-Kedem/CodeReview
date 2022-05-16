const CodeHandler = require('../handlers/code.handler')

async function getBlocks(req, res) {
    // todo - add try and catch phrases
    //start get blocks process
    try {
        const codeRes = await CodeHandler.getBlocks();
        return res.send( codeRes );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }    
}

async function checkAnswer(req, res) {
    try {
        //start checkAnswer process
        const codeRes = await CodeHandler.checkAnswer(req.params.blockId, req.body.content);
        return res.send( codeRes );
    } catch (err) {
        return res.status(500).send('Server Error');
    }  
}

module.exports = {
    getBlocks,
    checkAnswer
}