let arr = [1,23,19,5,56,23,123.5,-10,98,56,10,10,0,-20,123,201,123];
/**
 * 
 */
var quickSort = function(arr) {
    function swap( arr, i, k ) {
        var temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }

    function partion( arr, left, right ) {
        var storeIndex = left;
        var pivot = arr[right];
        for ( let i = left; i < right; i++ ) {
            if ( arr[i] < pivot ) {
                swap(arr, storeIndex, i);
                storeIndex++;
            }
        }
        swap(arr, right, storeIndex);
        return storeIndex
    }

    function sort(arr, left, right) {
        if ( left > right ) return
        var storeIndex = partion(arr, left, right);
        sort(arr, left, storeIndex - 1);
        sort(arr, storeIndex + 1, right)
    }
    
    sort(arr, 0, arr.length - 1);
    return arr
}

console.log(quickSort(arr))
console.log(arr)