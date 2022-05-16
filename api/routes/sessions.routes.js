const express = require('express');
const router = express.Router();
const SessionsController = require('../controllers/sessions.controller')

//@route    Post api/sessions
//@desc     Create new session
//@access   Private
router.post('/',
SessionsController.create
)

//@route    Post api/sessions/:id/codeblock
//@desc     Get codeblock by session id
//@access   Private
router.post('/:id/codeblock',
SessionsController.get
)

module.exports = router;
