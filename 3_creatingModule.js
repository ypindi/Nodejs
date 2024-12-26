var url = 'https://example.com'

function log(message){
    // send a HTTP request;
    console.log(message);
}

// For exporting functions from this file/module to other files/modules.
module.exports.functionLog = log;
// this is an object.

// module.exports.endPointUrl = url;



// 2nd METHOD---------------------------------------------
// can also do
// module.exports = log;
// This is not an object but a function now.
// So wherever you call it, can call directly.
// -------------------------------------------------------









// console.log(module);
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\3_creatingModule.js
// {
//   id: '.',
//   path: 'D:\\Yashwanth\\HTW_Berlin\\Self_Learnings\\Nodejs',
//   exports: { functionLog: [Function: log] },
//   filename: 'D:\\Yashwanth\\HTW_Berlin\\Self_Learnings\\Nodejs\\3_creatingModule.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'D:\\Yashwanth\\HTW_Berlin\\Self_Learnings\\Nodejs\\node_modules',
//     'D:\\Yashwanth\\HTW_Berlin\\Self_Learnings\\node_modules',
//     'D:\\Yashwanth\\HTW_Berlin\\node_modules',
//     'D:\\Yashwanth\\node_modules',
//     'D:\\node_modules'
//   ],
//   [Symbol(kIsMainSymbol)]: true,
//   [Symbol(kIsCachedByESMLoader)]: false,
//   [Symbol(kIsExecuting)]: true