const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => {
    console.log('Listener called.', arg);
});

const log = require('./9_logger');
log('message');


// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\9_app.js
// message

// here, did not get Listener called. because messageLogged is not
// available in the 9_logger.js file. It can't see any emitter
// with messageLogged. messageLogged is only defined in this file
// and not in the 9_logger file.