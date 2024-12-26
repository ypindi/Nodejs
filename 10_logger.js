// logger module emits the signals.


const EventEmitter = require('events');
// const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

// EventEmitter is parent/base class.
class Logger extends EventEmitter{
    // don't need class keyword for functions inside classes (methods).
    log(message){
        console.log(message);
    
        this.emit('messageLogged', {id:1, url: 'http://...'});
    }
}


module.exports = Logger;