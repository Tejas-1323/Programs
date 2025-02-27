
// Spred
// expand the array in to the individual elements.

array1 = [1, 2, 3, 4]
array2=[5,6,7,8,9]

const result = [...array1, ...array2]

console.log(result);


// rest
//collect the argument into an array

function data(...a) {
    console.log(a);
}
data(1,2,3)
