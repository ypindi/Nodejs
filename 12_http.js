const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World!');
        res.end();
    }

    // you want to return an array of objects using JSON.
    if (req.url === '/courses'){
        res.write("I am learning So many courses!!");
        res.write(JSON.stringify([1,2,3]));
        // will convert array to a string.
        res.end();
    }
});
// callback function.

server.on('connection', (socket) => {
    // console.log('New Connection', socket);
    console.log('New Connection');
});

server.listen(3000);



// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\12_http.js
// New Connection
// New Connection

// Refresh the http://localhost:3000/ 
// It will display the Hello World! message.

// Refresh the http://localhost:3000/courses
// I am learning So many courses!![1,2,3]



// ----------------------------------------------------------------
// We use ExpressJS framework that is built on top of HTTP Module
// in NodeJS since it gives a cleaner structure for our web server.
// ----------------------------------------------------------------