//If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.
//
// On the backend side, Node.js offers us the option to build a similar system using the events module.
//
// This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on('greet',(name)=>{
    console.log(name);
});
eventEmitter.emit('greet','Rahul V S');