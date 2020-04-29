
let arr=[6,[23,4],2,[6,[4,9]],8,6,9];
console.log("OriginalArray",arr);
function flatten(arr){
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
}
console.log(flatten(arr));