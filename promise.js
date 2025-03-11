// const promise = new Promise((resolve,reject) => {
//   let x = true;
//   if (x) {
//     resolve("i am resolve")
//   } else {
//     reject(" i am reject")
//   }
// })

// promise
//   .then((result) => {
// console.log(result);
//   }).catch((error) => {
// console.log(error);
//   }).finally(() => {
//   console.log(" i am run any condition!!!")
// })

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am resolve after 5 sec");
    // reject("rejected.......");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am resolve after 2 sec");
    // reject("rejected.......!!!");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am resolve after 3 sec");
    // reject("rejected.......");
  }, 3000);
});

// it will be show all setteled promise result at a time and suppose one promise is faild so it will be show sunddaly.

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// it will be show all promises result at a time it is resolve or reject.

// Promise.allSettled([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// it will be show 1st reslove or reject promise like resolve after 2sec.

// Promise.race([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// it will be show first resolve promise. suppose all promise are rejected so it can be show aggregate error and reject

//  Promise.any([p1, p2, p3])
//    .then((result) => {
//      console.log(result);
//    })
//    .catch((error) => {
//      console.log(error);
//    });
