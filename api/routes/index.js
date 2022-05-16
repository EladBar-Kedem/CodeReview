const express = require('express');
const router = express.Router();
const AuthRoutes = require('../routes/auth.routes');
const CodeblockRoutes = require('../routes/codeblock.routes');
const SessionsRoutes = require('../routes/sessions.routes');


//Define Api Routes
router.use("/api/auth", AuthRoutes);
router.use("/api/codeblock", CodeblockRoutes);
router.use("/api/sessions", SessionsRoutes);

module.exports = router;
