// For creating Networking applications.
// Can create a web server that listenes to HTTP requests
// on a given port. Mainly used for creating a backend 
// service for our client applications.

const http = require('http');

const server = http.createServer();
// this will create a web server.
// This server is an event emitter - has all the capabilities
// of an event emitter from previous files.

// It inherits from the net.Server module............................
// and net.Server is an event emitter................................

server.on('connection', (socket) => {
    // console.log('New Connection', socket);
    console.log('New Connection');
});

server.listen(3000);
// console.log('listening on port 3000...');
// every time there is a new connection or a request, this server
// raises an event.