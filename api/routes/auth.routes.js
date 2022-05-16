const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const AuthController = require('../controllers/auth.controller')

//@route    Post api/auth
//@desc     authenticate user & get Token
//@access   Public
router.post('/',[
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
] , AuthController.login )

module.exports = router;
