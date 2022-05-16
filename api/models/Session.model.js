const mongoose = require ('mongoose');
const { Schema } = mongoose;
const blocks = require('./block.model');

const Sessionchema = new mongoose.Schema({
    block_id:{
        type: Schema.Types.ObjectId,
        ref: blocks,
        required: true
    },
    mentor_id:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
})

module.exports = Auth = mongoose.model('session', Sessionchema);