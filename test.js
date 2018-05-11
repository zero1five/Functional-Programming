const once = (fn) => {
    let done = false;
    return function () {
        return done ? void 0 : ((done = true), fn.apply(this, arguments))
    }
}

let send = once(() => {
    console.log(1)
})

send();
send();
send(); 

/* 函数节流 */

let arr = [2,1,423432,4,4342342,1231,3232,123123,1231]

function insertion(arr) {
    for( let i = 1; i < arr.length; i++ ) {
        key = arr[i]
        j = i - 1
        
        while (j > -1 && arr[j] > key) {
            arr[j + 1] = arr[j] // a[i] = arr[j]
            j--
            arr[j + 1] = key
        }
    }
    return arr
}

console.log(insertion(arr))

function Bubble(arr) {
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = 0; j < arr.length; j++ ) {
            if( arr[j] > arr[j + 1]) {
                key = arr[j + 1]
                arr[j] = key
                arr[j + 1] = arr[j]
            }
        }
    }
    return arr
}

console.log(Bubble(arr))