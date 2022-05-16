const Code = require('../models/block.model')

async function getBlocks() {
    //find all blocks and return them
    const codeBlocks = await Code.find();
    return codeBlocks;   
}

async function getBlockById(id) {
    //find block by id and return
    const codeBlock = await Code.findOne({ _id:id });
    return codeBlock;
}

module.exports = {
    getBlocks,
    getBlockById
}