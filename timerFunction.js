//Executes a function once after a specified delay
console.log("Start");
setTimeout(() => {
  console.log("hello after 2 sec");
}, 2000);

//Repeatedly executes a function at specified intervals until cleared
setInterval(() => {
  console.log("execute after 2 sec");
}, 2000);

//Executes a function immediately after the current event loop phase
setImmediate(() => {
  console.log("Execute Immediate");
});
console.log("End");


