
function printUniqueElements(arr) {
    var array = [];
    for(var i = 0; i < arr.length; i++) {
        if(!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array; 
}
export {printUniqueElements}