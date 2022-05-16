const CodeService = require('../services/code_blocks.service');

async function getBlocks() {
    //get blocks process
    const codeRes = await  CodeService.getBlocks();   
    return codeRes; 
}
async function checkAnswer(id,content) {
    //get block process
    const codeRes =await  CodeService.getBlockById(id);
    //check if answer correct 
    return codeRes._doc.answer === content;
}


module.exports = {
    getBlocks,
    checkAnswer  
}