const http=require('http');
const app = require('./index');

//port number
const PORT=8080;


//server connection
const server=http.createServer(app);

server.listen(PORT);