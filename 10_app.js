const EventEmitter = require('events');
// const emitter = new EventEmitter();


const Logger = require('./10_logger');
const logger = new Logger();
// Here, we are using an instance of the custom class that we defined.

logger.on('messageLogged', (arg) => {
    console.log('Listener called.', arg);
});


logger.log('message');



// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\10_app.js
// message
// Listener called. { id: 1, url: 'http://...' }

// we see the listener called part too because we are using the same
// logger object.