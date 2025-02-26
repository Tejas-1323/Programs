const isSubset = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                found = true;
                break;
            }
        }
        if (!found) return false;
    }
    return true;
};
console.log(isSubset([1, 2, 3, 4], [2, 3])); // Output: true
console.log(isSubset([1, 2, 3, 4], [5]));    // Output: false
