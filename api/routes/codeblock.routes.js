const express = require('express');
const router = express.Router();
const {validateUser} = require('../middelwares/auth/auth.middelware');
const CodeblocksController = require('../controllers/code.controller');

//@route    GET api/codeblock
//@desc     Get all blocks
//@access   Private
router.get('/', 
validateUser, 
CodeblocksController.getBlocks);

//@route    Post api/codeblock
//@desc     check answer
//@access   Public
router.post('/:blockId', 
CodeblocksController.checkAnswer);

module.exports = router;
