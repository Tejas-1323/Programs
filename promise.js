
const promise = new Promise((resolve,reject) => {
  let x = true;
  if (x) {
    resolve("i am resolve")
  } else {
    reject(" i am reject")
  }
})

promise
  .then((result) => {
console.log(result);

  }).catch((error) => {
console.log(error);
  }).finally(() => {
  console.log(" i am run any condition!!!")
})
