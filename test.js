// // this is HOF
// function data(a, b, callback) {
//   let resukt = a + b;
//  return  callback(resukt);
// }

// function callback(result) {
//   console.log("the result is", result);
// }

// data(10, 10, callback);


// // Curring function

// function sum(a) {
//   return function (b) {
//     return a+b

//   }
// }
// console.log(sum(10)(10))


// // closer function

// function outer() {
// let string="i am tejas"
//    return function inner() {
//     console.log(string);

//   }
// }

// let myData = outer()
// myData()


// // call back
// console.log("start");

// function multi(a, b, callback) {
//   let results = a * b
//   setTimeout(() => {
//       callback(results)
//   },2000)

// }

// function callback(result) {
// console.log("the result is multi :",result);

// }


// multi(2,2,callback)

// console.log("end")



// // promise
// let promise = new Promise((resolve, reject) => {

//   let x = false;

//   if (x) {
//     resolve(" i am good")
//   } else {
//     reject(" i am not good")
//   }

// })

// promise
//   .then((data) => {
//     console.log(data);


//   }).catch((err) => {
//     console.log(err);

// })


// // map,filter,reduces
// const array = [1, 2, 3, 4, 5]

// const newArray = array.map(num => num * 2)
// console.log(newArray);

// const filter = array.filter(num => num % 2 === 0)
// console.log(filter);

// const reduces = array.reduce((acc, num) => acc + num, 0)
// console.log(reduces);



// // call,apply,bind
// function myDatas(name,surname) {
//   console.log(`${name} ${surname}`);

// }

// myDatas.call(null,'tejas','wagh')

// myDatas.apply(null,['tejas','patil'])

// const aBind = myDatas.bind(null,'tejas','kumar')
// aBind()


// rest

// function rEst(...a) {
//   console.log(a);

// }
// rEst(2, 2, 2, 3)

// // spred

// const array1 = [1, 2, 3], array2 = [4, 5, 6]

// const newResult = [...array1, ...array2]
// console.log(newResult);


// const myResult = async () => {
//   try {

//     let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(data);

//   } catch (error) {
//     console.log(error);

//   }
// }

// myResult()


// const [a, b] = [10, 10]
// console.log(a,b);

// const { name, age } = { name: "tejas", age: 27 }
// console.log(name,age);


// const obj = {
//   name: "tejas",
//   info:function() {
//     console.log(`hello ${this.name}`);

//   }
// }

// obj.info()



