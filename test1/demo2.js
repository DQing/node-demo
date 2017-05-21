var fs = require("fs");

console.log('hello');
fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.log('current err');
    } else {
        console.log(data.toString());
    }
});

console.log('world');