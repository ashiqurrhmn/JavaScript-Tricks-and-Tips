//flatter a multidimensional array

let arr = [1, [2, 3], [4, [5, 6]]];
let flattenedArr = arr.flat(Infinity);
console.log(flattenedArr); // [1, 2, 3, 4, 5, 6]

let arr2 = [1, [2, 3], [4]];

console.log(arr2.flat());