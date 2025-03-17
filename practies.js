// shallo copy

const { response } = require("express")

const obj1 = {
  name: "tejas",
  data:{age:20}
}

const obj2 = { ... obj1}

obj2.data.age = 21

// console.log(obj2.data.age);
// console.log(obj1.data.age);


// deep copy

obj3 = {
  name: "raj",
  data:{age:33}
}

const obj4 = JSON.parse(JSON.stringify(obj3))

obj4.data.age = 44

// console.log(obj4.data.age);
// console.log(obj3.data.age);


//timer function

// setTimeout(() => {
//   console.log("hello i am tejas");
// },2000)

// setInterval(() => {
// console.log("how r yyyy");
// }, 1000)

// setImmediate(() => {
//   console.log("whwre r u going");

// })

// process.nextTick(() => {
//   console.log("my name is don");

// })



// var


// var x = "tejas"
// console.log(x);


// var x = "raj";
// console.log(x);

// function test() {
//   var y = true
//   if (y) {
//     var age = 25
//   }
//   console.log(age);
// }

// test()


// let


// let x = 10
// console.log(x);
//   x = 100;
// console.log(x);

// if (true) {
//   let data = "tejas"
//   console.log(data);

// }


// const


// const x = 10

// console.log(x);

// if (true) {
//   const data = "tejas"
//   console.log(data);

// }


//

// console.log("Start");
// setTimeout(() => {
//   console.log("hello");
// },2000)
// console.log("End");


//colser

// function outer() {
// let data = " hello i am tejas"
//   return function inner() {
//     console.log(data);

//   }
// }

// const myfun = outer()

// myfun()


//promise

// const promise = new Promise((resolve, reject) => {
//   let x = true
//   if (x) {
//     resolve('i am resolve')
//   } else {
//     reject('i am reject')
//   }
// })

// promise
//   .then((data) => {
// console.log(data);

// })
//   .catch((error) => {
// console.log(error);

// })


// callback



// function sum(a, b, callback) {
//   console.log('this function is calculet the sum');

//   let result = a + b

//   setTimeout(() => {
//      callback(result)
//   },2000)
// }

// function callback(result) {
// console.log(result);

// }

// sum(10,10,callback)

// callback hell

// function callbackhell(data) {
//   dosomethingAsyn(() => {
//     secondtask(() => {
//       theredtask(() => {
//     })
//   })
// })
// }




// const myData = async () => {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const mydata = await data.json()
//     console.log(mydata);
//   } catch (error) {
//     console.log(error);

//   }
// }

// myData()


// const [a,b] = [10,10]
// console.log(a);
// console.log(b);

// const { name, age } = { name: "tejas", age: 20 }

// console.log(name,age);


//rest

// function data(...a) {
//   console.log(a);
// }
// data(1,2,3)


// const array1 = [1,2,3]
// const array2 = [4, 5, 6]

// const mydata = [...array1, ...array2]
// console.log(mydata);

// undefined and null
// var x
// console.log(x);
// let y = null
// console.log(y);


// map filter reduces foreach


// const array = [1, 2,3, 4]

// const data = array.map((num)=>num*2)
// console.log(data);

// const filter = array.filter((num)=>num%2 ===0)
// console.log(filter)

// const reduces = array.reduce((acc,num)=>acc+num,0)
// console.log(reduces)

// const mydat = array.forEach((num)=> console.log(num*3)
// )

// HOF
function sum(a, b, callback) {
  let result = a + b
   callback(result)

}

function callback(result) {
  console.log(result);
}

sum(10,10,callback)
