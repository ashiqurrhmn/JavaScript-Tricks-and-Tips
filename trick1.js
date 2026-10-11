//Remove false values from an array

let arr = [0, 1, false, 2, '', 3, null, undefined, NaN];

let filteredArr = arr.filter(Boolean);

console.log(filteredArr); // [1, 2, 3]