// prototype inheritances

const pObject = {
  name: "tejas",
  age: 22,
  info: function () {
    console.log(`my name is ${this.name} and my age is ${this.age}`);
  },
};

// child obj
const cObject = Object.create(pObject);
cObject.name = "jayesh";
cObject.newFun = function () {
  console.log(`i am ${this.name}`);
};
cObject.newFun();
cObject.info();
console.log(cObject.name);

console.log(pObject.name);
