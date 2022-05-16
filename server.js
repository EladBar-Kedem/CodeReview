const express = require("express");
const connectDB = require('./config/db');
const http = require("http");
const socketIO = require("socket.io");
const routes = require('./api/routes');
const path = require('path');

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'http://localhost';
//Create app
const app = express();
//create socket server
const server = http.createServer(app);
//alow cors
const io = socketIO(server, {
    cors: {
        origin: '*'
    }
});

//Connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

//Define Api Routes
app.use(routes);

//Define socket routes
io.on("connection", socket => {
// codeChange, gets called from clients
    socket.on("codeChange", async (changedCodeBlock) => {
        // Emit CODE_CHANGED event:
        io.sockets.emit("CODE_CHANGED", changedCodeBlock);
    });
// disconnect is fired when a client leaves the server
    socket.on("disconnect", () => {

    });
});

//Serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve( __dirname, 'client', 'build', 'index.html' ))
    })
}

server.listen(port, () => console.log(`Listening on port ${port}`));