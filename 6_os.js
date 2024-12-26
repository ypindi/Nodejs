const os = require('os');

var osMem = os.freemem();
console.log(osMem);

var osTotal = os.totalmem();
console.log(osTotal);


console.log('Total Memory: ' + osTotal);
// or
console.log(`Free Memory: ${osMem}`);