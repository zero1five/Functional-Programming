function throttle(method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(() => {
        method.call(context)
    },1000)
}

var each = function( ary, callback ) {
    for ( var i = 0, l = ary.length; i < l; i++ ) {
        callback.call(ary[i], i, ary[i])
    }
}

/* each([1,2,3,4], function( i, n ) {
    console.log([i,n])
}) */

let arr = [1,2,34,5,6,1231];

Array.prototype.cycle = function(callback) {
    for ( var i = 0, l = this.length; i < l; i++ ) {
        callback.call(this, i, this[i])
    }
}

arr.cycle((i, n) => {
    console.log([i, n])
})

var reverseEach = function( ary, callback) {
    for ( var l = ary.length - 1; l >= 0; l-- ) {
        callback(l, ary[l])
    }
}

reverseEach([1,23,4,56], function(i, n) {
    console.log(n)
})