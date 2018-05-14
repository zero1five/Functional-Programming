let arr = [1,23,19,5,56,23,123.5,-10,98,56,10,10,0,-20,123,201,123];
/**
 * 
 */
var quickSort = function(arr) {
    if ( arr.length <= 1) return arr
    let pivotIndex = Math.floor(arr.length / 2),
        pivot = arr.splice(pivotIndex, 1)[0],
        left = [],
        right = [];

    for ( let i = 0, l = arr.length; i < l; i++ ) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(arr))