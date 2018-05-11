let arr = [1,23,19,5,56,23,98,56];

function Bucket_sort(arr) {
    let newArr = []
    arr.forEach(ele => {
        newArr[ele] = ele
    });
    return newArr.filter(ele => ele !== undefined)
}

console.log(Bucket_sort(arr))