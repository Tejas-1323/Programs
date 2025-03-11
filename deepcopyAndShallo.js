


// shallo copy

// it can be copy only first level of the  obj or array
// nested obj are not copy only share the reference
// if you are made the chages is nested objt that affected to the both copy

const obj1 = {
  name: "tejas",
  details:{age:20}
}
const obj2 = { ...obj1 }

obj2.details.age = 30

console.log(obj1.details.age);
console.log(obj2.details.age);


// deep copy

// it can be create a complet new obj including the nested obj
// it does not share the reference with the original obj
// you can made the changes in the copy object not affected to the original obj

const object1 = {
  name: "tejas",
  detailes:{age:20}
}

const object2 = JSON.parse(JSON.stringify(object1))
// JSON.stringify(object1) it can be breck the all references and agein convert the json obj createin the new obj with same struchure
object2.detailes.age = 40
console.log(object2);
console.log(object1);
