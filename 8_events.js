// in node, we have a class called HTTP that can be used to build
// a web server. We listen on a given port, and every time we
// receive a request on that port, the HTTP class raises an event.
// An Event is a signal that something happened. We should read the
// event and return the right response.

// Several classes in node raise different kinds of events.

const EventEmitter = require('events');
// it is a class. so we have to create an instance of this class to use.
const emitter = new EventEmitter();
// emitter - object.


// now we have to register a listener that is interested
// in that event. Listener is a function that will be called
// when that event is raised.
// REGISTERING A LISTENER HERE.
// emitter.addListener - same as emitter.on.
emitter.on('messageLogged', function(){
    console.log('Listener called.');
});


emitter.emit('messageLogged')
// to raise an event. Making a noise in application, signalling
// that an event has happened.
// every time we log a message, we raise an event.

// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\8_events.js
// Listener called.








// arg / e / eventArg is used usuallly.
emitter.on('messageLogged2', function(arg){
    console.log('Listener2 called.' + arg);
    console.log('Listener2 called.', arg);
});

emitter.emit('messageLogged2', {id:1, url:'http://example.com'});

// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\8_events.js
// Listener called.
// Listener2 called.[object Object]
// Listener2 called. { id: 1, url: 'http://example.com' }

// Same as an arrow function instead.
// emitter.on('messageLogged2', (arg) => {
//     console.log('Listener2 called.' + arg);
//     console.log('Listener2 called.', arg);
// });