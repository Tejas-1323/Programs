function findMinMax(arr) {
  let max = arr[0],
    min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return { max, min };
}
console.log(findMinMax([4, 7, 1, 9, 3])); // Output: { max: 9, min: 1 }
