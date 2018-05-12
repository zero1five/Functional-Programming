let arr = [1,23,19,5,56,23,123.5,-10,98,56,10,10,0,-20,123,201,123];


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

/**
 * 
 * @param {*} arr 桶排序
 */
function Bucket_sort(arr) {
    if (arr.length === 0) {
        return arr;
      }
   
    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
        minValue = arr[i];                //输入数据的最小值
    } else if (arr[i] > maxValue) {
        maxValue = arr[i];                //输入数据的最大值
    }
    }

    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5;            //设置桶的默认数量为5
    var bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;   
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertion(buckets[i]);                      //对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                      
        }
    }

    return arr;
  
}
console.time('h')
console.log(Bucket_sort(arr))
console.timeEnd('h')

function BucketSort(arr) {
    let buckets = [];
    let anotherBuckets = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            anotherBuckets.push(arr[i])
        }
        buckets[Math.floor(arr[i])] = []
    }

    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor(arr[i])].push(arr[i]);
    }

    return insertion(([].concat.apply(anotherBuckets, buckets)).filter(ele => ele !== undefined))
}
console.time('t')
console.log(BucketSort(arr))
console.timeEnd('t')