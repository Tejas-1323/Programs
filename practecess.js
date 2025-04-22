
//shallo copy

// const obj = {
//   name: "tejas",
//   detailes:{
//      age:20
//   }
// }


// const obj1 = { ...obj }
// obj1.detailes.age = 30

// console.log(obj1);
// console.log(obj);



// const obj2 = JSON.parse(JSON.stringify(obj))
// obj2.detailes.age=99
// console.log(obj2);
// console.log(obj);


// timer function

// setTimeout(() => {
// console.log("i am settimeout");
// },2000)

// setInterval(() => {
// console.log("i am setInterval");
// },2000)

// process.nextTick(() => {
// console.log("i am nextTick");
// })

// setImmediate(() => {
// console.log("i am setImmediate");
// })


// closer

// function outer() {
// let x=10
//   return function inner() {
//       x++
//      console.log(`the count of`,x);
//   }
// }

// const myfun = outer()

// myfun()
// myfun();




// function createCounter() {
//   let count = 0; // This variable is closed over

//   return function () {
//     count++;
//     console.log(`Current count: ${count}`);
//   };
// }

// const counter = createCounter();

// counter(); //  Current count: 1
// counter(); //  Current count: 2
// counter(); //  Current count: 3


// promise


// const promise = new Promise((resolve,reject) => {
//   let x = false;
//   if (x) {
//       resolve(`i am resolve`)
//   } else {
//       reject(`i am reject`)
//   }
// })

// promise.then((result) => {
//    console.log(result);

// }).catch((error) => {
// console.log(error);
// })


// callback


// function sum(a,b,callback) {
//   let result = a + b
//   setTimeout(() => {
//     callback(result)
//   }, 1000)
// }

// function callback(result) {
// console.log("the result is",result);

// }

// sum(10,10,callback)


//HOF

// function sum(a,b,callback) {
//   let result = a + b
//   return callback(result)
// }

// function callback(result) {
// console.log("the result is",result);
// }

// sum(10,10,callback)


// calback hell


// function callbackhell(data) {
//   newResult(() => {
//     data(() => {

//      })
//    })
// }


// const data = async () => {
//   try {
//        let result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//       let mydata = await result.json()
//       console.log(mydata);
//    } catch (error) {
//       console.log(error);
//    }
// }
// data()

// destruchure

// const [a, b] = [10, 10]
// console.log(a);
// console.log(b);

// const { name, age } = { name: "tej", age: 88 }

// console.log(name);
// console.log(age);


// rest

// function data(...a) {
//   console.log(a);

// }
// data(1,2,3)


// spred

// const array=[1, 2, 3]
// const array0=[9,0,7]
// const str = 'tejas'
// const newArray = [...array,...array0,...str,0,0,0,0]

// console.log(newArray);


// var x
// console.log(x);

// var y = null
// console.log(null);


// map filter reduces foreach

// const array = [1, 2, 3, 4]

// const data = array.map(num => num * 2)
// console.log(data)

// const fil = array.filter(num => num % 2 === 0)
// console.log(fil);

// const redu = array.reduce((acc, num) =>acc+num,0)
// console.log(redu);

// let datas = array.forEach((num) => console.log(num * 2))


// curring

// function data(a) {
//   return function myfunction(b) {
//     console.log(a+b);

//   }
// }

// data(10)(10)


// const obj = {
//   name: 'tejas',
//   data: function () {
//     console.log(`hello i am kumar`);
//   }
// }

// const newObject = Object.create(obj)

// newObject.name='jayesh'
// newObject.mydata = function () {
//   console.log('i am lalit');

// }
// console.log(newObject.name);
// newObject.mydata()
// newObject.data()


// hosting
// console.log(x);
// var x = 10

// data()

// function data() {
//   console.log('i am tejas');

// }


// const data = {
//   name: "tejas",
//   myfunc() {
//     console.log(`i am ${this.name}`);
//   }
// }
// data.myfunc()


// slice

// const array = ['apple', 'tejas', 'jayesh', 'ravi', 'kumar', 'lalit']

// const data =  array.slice(2,5)

// console.log(data);
// console.log(array)


// call apply bind

// const obj = {
//   name:"tejas"
// }
// function data(city) {
//   console.log(`i am ${this.name} i am from ${city}`);
// }

// data.call(obj,'pune')
// data.apply(obj,['chopda'])
// const xyz = data.bind(obj,'nashik')
// xyz()


// select emp.name,product.name
// form emp
// left join product
// on emp.id=product.eid


// db.collection.aggregate([{
//   $lookup: {
//     from: 'target',
//     localField: 'customerid',
//     foreignField: 'customerId',
//     as:'result'
//   }
// }])



// select MAX(salary) as secondhigestsalary
// from employee where salary <
// (select MAX(salary) from employee)
