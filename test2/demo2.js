//removeListener 对匿名回调函数不起作用
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

function listener1() {
    console.log('listener1');

}
function listener2() {
    console.log('listener2');

}
event.addListener('some_event', listener1);
event.on('some_event', listener2);
event.emit('some_event');

event.removeListener('some_event', listener1);
event.emit('some_event');
