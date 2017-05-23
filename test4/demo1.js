var buf = new Buffer(256);
var len=buf.write('hello my name is douqing');
console.log(len);
console.log(buf);
console.log(buf.toString('utf-8'));
console.log(buf.toString('utf-8',0,5));