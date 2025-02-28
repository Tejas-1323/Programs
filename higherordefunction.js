
function myFun(n, action) {
  for (let i = 0; i < n;i++){
  action(i)
}
}


function number(data) {
  console.log("the output is :",data);
}

myFun(5,number)


const object = {
  name: "tejas",
  age: 28,
  number: 9999,
  myFunc: function() {
    console.log(`hello ${this.name}`);
  }
}
object.myFunc()
// console.log(object.name,object.number);
