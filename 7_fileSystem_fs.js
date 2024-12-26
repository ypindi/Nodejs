const fs = require('fs');


// every operation from fs is either:
// 1. synchronous: blocking
// 2. asynchronous: non-blocking.

// const files = fs.readdirSync('./');
// console.log(files);
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\7_fileSystem_fs.js 
// [
//   '1_app.js',
//   '2_moduleSystem.js',
//   '3_creatingModule.js',
//   '4_notes',
//   '5_path.js',
//   '6_os.js',
//   '7_fileSystem_fs.js',
//   'creatingModules_3.js',
//   'notes'
// ]








// Always use asynchronous because you will have
// several 1000 clients trying to connect to your 
// backend.

// all asynchronous methods take function as their last argument
// node will call this function when the asynchronous operation
// completes. This is called a callback function.
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
    // files is a string array.
});

// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\7_fileSystem_fs.js
// Result [
//   '1_app.js',
//   '2_moduleSystem.js',
//   '3_creatingModule.js',
//   '4_notes',
//   '5_path.js',
//   '6_os.js',
//   '7_fileSystem_fs.js',
//   'creatingModules_3.js',
//   'notes'
// ]