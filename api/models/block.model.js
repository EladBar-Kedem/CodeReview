const mongoose = require ('mongoose');

const BlockSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
},{
    //override
    toJSON: {
    transform: function (doc, ret) {
      delete ret.answer;
    }
  }}
)

module.exports = Auth = mongoose.model('block', BlockSchema);