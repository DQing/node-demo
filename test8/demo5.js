function printHello() {
    console.log('Hello');
}
var t = setInterval(printHello, 2);

clearInterval(t);