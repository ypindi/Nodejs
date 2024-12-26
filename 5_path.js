const path = require('path');
// call the 'path' module using require function and then store
// it in path constant which is an Object.

var pathObj = path.parse(__filename);

console.log(pathObj);

// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\5_path.js
// {
//   root: 'D:\\',
//   dir: 'D:\\Yashwanth\\HTW_Berlin\\Self_Learnings\\Nodejs',
//   base: '5_path.js',
//   ext: '.js',
//   name: '5_path'
// }


// easier to work with path object rather than strings.