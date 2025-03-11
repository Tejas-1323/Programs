
// How setTimeout() Uses a Callback
// setTimeout() takes two parameters:

// A function (callback function) → This function runs after the specified delay.
// A delay (in milliseconds) → Specifies how long to wait before executing the function.

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// ➡️ Here, () => { console.log("This runs after 2 seconds"); } is the callback function passed to setTimeout().
// ➡️ It does not run immediately but executes after 2 seconds.

// function myCallback() {
//   console.log("Hello, I am a callback!");
// }
// setTimeout(myCallback, 3000);
// in above
// ➡️ Here, myCallback is passed as an argument, and setTimeout() executes it after 3 seconds.
// ✅ setTimeout() is NOT a callback function
// ✅ It ACCEPTS a callback function as an argument
// ✅ The callback function runs asynchronously after the specified delay




// console.log("Start");

// function sum(a, b, callback) {
//   let result = a + b;
//   setTimeout(() => {
//     console.log("Executes a function once after a specified delay");
//     callback(result);
//   }, 2000);
// }

// function callback(result) {
//   console.log(" the result is : ", result);
// }

// sum(10, 10, callback);

//   console.log("END");



console.log("start");
setImmediate(() => {
  console.log("hello i tejas")
})
process.nextTick(() => {
  console.log("hello i tejas wagh");

})
console.log("end");
