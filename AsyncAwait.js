
// const fetchData = async () => {

//   try {

//     let result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData()







function sum(a) {
  return function (b) {
    return a+b
  }
}

console.log(sum(10)(10));


// const person = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// person.greet(); //


function data(a, b) {
  console.log(`${a},${b}`);
}


// data.call(null, 10, 10)
// data.apply(null,[10,10])

const newData = data.bind(null, 10, 10)

newData()




