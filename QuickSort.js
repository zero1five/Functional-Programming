let arr = [1,23,19,5,56,23,123.5,-10,98,56,10,10,0,-20,123,201,123];
/**
 * 快速排序优化
 *  1. 对于元素较少的或接近有序的数组, 切换成插入排序
 *  2. 双枢轴(大于枢轴, 等于枢轴, 小于枢轴)
 *  3. 划分策略优化(划分成更小的区块)
 */
var quickSort = function(arr) {
    if ( arr.length < 15 ) {
        insertion(arr)
        return arr
    }
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

function insertion(arr) {
    for ( let i = 1; i < arr.length; i++ ) {
        key = arr[i]
        j = i - 1
        
        while( j > -1 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
            arr[j + 1] = key
        }
    }
    return arr
}