var salesOffices = {};
salesOffices.clientList = {};

salesOffices.listen = function(key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}

salesOffices.trigger = function() {
    var key = Array.prototype.shift.call(arguments),
        fns = this.clientList[key]

    if (!fns || fns.length === 0) {
        return false
    }
    for ( var i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments);
    }
}

/* 第一个订阅者 */
salesOffices.listen('squareMetor88', function( price,squareMeter) {
    console.log(price)

})

/* 第二个订阅者 */
salesOffices.listen('squareMetor120', function( price, squareMeter) {
    console.log(price)

})

salesOffices.trigger('squareMetor120', 20000)
