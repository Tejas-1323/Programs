
function outer() {
  let x = 'hello i am tejas!!!!'

   function inner() {
     console.log(x)
  }
  return inner
}
// outer()
const myData = outer();
myData()
