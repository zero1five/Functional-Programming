let arr = [1,23,19,5,56,23,98,56,10,10,0,123,201,123];

/**
 * 
 * @param {*} arr 桶排序
 */
function Bucket_sort(arr) {
    let newArr = []
    arr.forEach(ele => {
        newArr[ele] = ele
    });
    return newArr.filter(ele => ele !== undefined)
}

console.log(Bucket_sort(arr))