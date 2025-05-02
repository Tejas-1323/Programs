console.log("hello do somthing with you !!!!")


// var

// console.log(x); //undefined
// var x = 10
// console.log(x);

// var x = 20
// console.log(x);

// function testVAr() {
//   if (true) {
//     var age = 99 // function scope
//   }
//   console.log(age); // access the out side of block of scope

// }

// testVAr();


// // let
// // console.log(name);

// let name = 'tejas'

// name = 'jayesh'
// console.log(name);

// if (true) {
//   let y = 10
//   console.log(y);
// }
// // console.log(y);


// // const


// const data = 20

// // data = 66

// // console.log(data);

// if (true) {
//   const l = 20
//   console.log(l);

// }
//   // console.log(l);


// closer

// function outer() {
//   let data = ' i am tejas';

//    return function  innerfun() {
//     console.log(data);
//   }
// }
// const myfun = outer()
// myfun()

//promised

// let promise = new Promise((resolved, reject) => {
//   let x = false
//   if (x) {
//     resolved(' i am resolved')
//   } else {
//     reject('i am reject')
//   }
// })

// promise
//   .then((result) => {
// console.log(result);

//   })
//   .catch((error) => {
// console.log(error);

// })


// promise.all

// const p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     // resolve('i am resolved in 4000');
//     reject("i am reject");
//   },2000)
// })

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("i am resolved in 3000");
//     reject('i am reject')

//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//         // resolve("i am resolved in 1000");
// reject("i am reject");
//   }, 1000);
// });

// Promise.any([p1, p2, p3])
//   .then((result) => {
//   console.log(result);

//   }).catch((error) => {
//   console.log(error);
// })


// function sum(a, b, callback) {
//   let result = a + b
//   setTimeout(() => {
//       callback(result)
//   },1000)
// }

// function callback(result) {
//   console.log('the result is',result);

// }

// sum(10,20,callback)


// rest

// function data(...a) {
//   console.log(a);
// }
// data(1, 2, 3)

// let array = [1,2.3]
// let array1 = [4,5,6]

// const result = [...array, ...array1]
// console.log(result);


// const fetchData = async () => {
//   try {
//     let x = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Example URL
//     let y = await x.json();
//     console.log(x);
//     console.log(y);

//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();



// function sum(a, b, data) {
//   let result = a + b
//    data(result)
// }
// function data(result) {
//   console.log(result);
// }

// sum(10,10,data)


// const [a, b] = [10, 20]
// console.log(a, b);

// const { x, y } = { x: 'tejas', y: 26 }
// console.log(x,y);



// function x(a) {
//   return function y(b) {
//     return a+b
//   }
// }

// console.log(x(10)(10))
