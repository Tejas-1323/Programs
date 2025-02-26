
/*
find the max element in array
 inpute array[1,2,3,4,5]
 o/p  5
*/

const maxElement = (array) => {

    let max = array[0]
    for(let i=1;i<array.length;i++){
        if(array[i] > max)
            max = array[i]
    }
    return max

}

console.log(maxElement([1,2,3,4,5,6]))