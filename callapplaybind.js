const person1 = { name: "Tejas" };

function sayHello(city) {
  console.log(`Hello, my name is ${this.name} and I am from ${city}.`);
}

// Calling with different objects
sayHello.call(person1, "Mumbai"); // Hello, my name is Tejas and I am from Mumbai.

sayHello.apply(person1,['pune'])

const greetTejas = sayHello.bind(person1, "chopda");

greetTejas()
// ✅ The first argument of call sets the this value inside the function.
// ✅ This allows reusing a function with different objects.
// ✅ If this is not needed, null or undefined can be passed instead.
