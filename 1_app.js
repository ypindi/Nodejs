function sayHello(){
    console.log("Hello World!");
}

sayHello();

// node sends this .js file to V8 for execution.

// console.log(window);
// document.getElementById();
// These 2 objects are not available as they are part
// of the run-time envs specific for browsers.
// 
// Here, we have objects to work with files, OS, and networks.


console.log(__filename);
console.log(__dirname);