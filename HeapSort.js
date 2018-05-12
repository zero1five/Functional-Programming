let arr = [1,23,19,5,56,23,123.5,-10,98,56,10,10,0,-20,123,201,123];

let len;

function buildHeap(arr) {
    len = arr.length;
    for ( let i = Math.floor(len / 2); i >=0; i-- ) { /* 父节点的位置为 => Math.floor(len / 2) */
        heapify(arr, i)
    }
}

function heapify(arr, i) { /* 描述一个有序的堆 */
    let left = 2 * i + 1,  /* 左子节点的位置 */
        right = 2 * i + 2, /* 右子节点的位置 */
        largest = i; /* 当前子节点的父节点的位置 */
    
    if (left < len && arr[left] > arr[largest]) {
        largest = left; /* 当前的左子节点要是大于父节点, 便替换位置 */
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right; /* 当前的右子节点要是大于父节点, 便替换位置 */
    }
    if (largest != i) {
        swap(arr, i, largest); /* 调整数组的顺序, heapify函数描述的是堆, swap才是实际的修改数组 */
        heapify(arr, largest); /* 递归进行调整 */
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

function heapSort(arr) {
    buildHeap(arr);
    
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--
        heapify(arr, 0);
    }
    return arr;
}

console.log(heapSort(arr))