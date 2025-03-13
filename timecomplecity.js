// This function TimeComplexcity is N because only one loop executed.

// function printNumbers(n) {
//   for (let i = 0; i < n; i++) {
//     // Runs n times
//     console.log(i);
//   }
// }

// printNumbers(5)

// this function TimeComplecity is n^2

// function printPairs(n) {
//   for (let i = 0; i < n; i++) {
//     // Runs n times
//     for (let j = 0; j < n; j++) {
//       // Runs n times inside each i
//       console.log(i, j);
//     }
//   }
// }

// printPairs(5)


//  Logarithmic Complexity (O(log n))
// Time Complexity Analysis
// The number of steps is equal to how many times you can divide n by 2 before reaching 1.
// This follows log base 2 (log₂ n).
// Time Complexity: O(log n).

function reduceNumber(n) {
  while (n > 1) {
    console.log(n); // Log the value of n at each step
    n = Math.floor(n / 2);
  }
  console.log(n); // Log the final value
}

reduceNumber(16);


//  4: Recursion (O(2ⁿ))

// What is Fibonacci?
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
// F(n)=F(n-1)+F(n-2)
// start from F(0)=0,F(1)=1
//Fibonacci Sequence Example
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// F(2) = 1 + 0 = 1
// F(3) = 1 + 1 = 2
// F(4) = 2 + 1 = 3
// F(5) = 3 + 2 = 5
// F(6) = 5 + 3 = 8

// Uses only a loop (O(n) time complexity, O(1) space complexity).
function fibonacci(n) {
    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;  // Compute next Fibonacci number
        a = b;         // Move `a` to the next number
        b = temp;      // Move `b` to the next number
    }

    return n === 0 ? a : b;
}

console.log(fibonacci(6)); // Output: 8
