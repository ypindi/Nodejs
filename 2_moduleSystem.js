// OS system
// File System
// Events
// HTTP







// Global Objects available everywhere:
// console.log();
// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// In browser, can call all objects using:
// window.console.log(); in this manner. Same for the above 5.
// You can either call directly or put window at the start.
// JS engine automatically prefixes them with window if you don't put.

// But in node.js, instead of window, it is global object.
// var message = 'Hello';
// console.log(global.message);
// console.log(globalThis.message);
// But these 2 won't work because message is specific to this file only.

// Output
// undefined
// undefined


// Every file in nodejs is a module. or in OOP terms they are private.
// Every node application has at least one main module - app.js usually.










// console.log(module);
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Nodejs> node .\2_moduleSystem.js
// {
//   id: '.',
//   path: 'D:\\Yashwanth\\HTW_Berlin\\Self_Learnings\\Nodejs',
//   exports: {},
//   filename: 'D:\\Yashwanth\\HTW_Berlin\\Self_Learnings\\Nodejs\\2_moduleSystem.js',
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
// }