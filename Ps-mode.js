/**
 ********************- 发布订阅模式 -***************************
 *  1. 如何拥有多个Event事件总线
 *  2. 如何管理多个模块
 *  3. 如何先发布后订阅
 */

var event = {
    clientList: [],
    listen: function(key, fn) {
        if ( !this.clientList[ key ] ) {
            this.clientList[ key ] = []
        }
        this.clientList[ key ].push(fn)
    },
    trigger: function() {
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[ key ];

        if ( !fns || fns.length === 0 ) {
            return false
        }
        
        for ( var i = 0, fn; fn = fns[i++]; ) {
            fn.apply(this, arguments)
        }
    },
    remove: function(key, fn) {
        var fns = this.clientList[ key ];
        if (!fns) {
           return false 
        }
        if (!fn) {
            fns && (fns.length = 0)
        } else {
            for ( var l = fns.length - 1; l >= 0; l-- ) {
                var _fn = fns[l]
                if(_fn === fn) {
                    fns.splice(l, 1)
                }
            }
        }
    }
}

var installEvent = function(obj) {
    for ( var i in event ) {
        obj[i] = event[i]
    }
}

var salesOffices = {};
installEvent(salesOffices);


salesOffices.listen('square', function(price) {
    console.log('change: ' + price)
})

salesOffices.listen('square', function(price) {
    console.log('square: ' + price)
})

salesOffices.trigger('square', 3000)

let Event = require('./PubiSub.A-.js')


var header = (function(){
    Event.listen('loginSucc', data => {
        console.log(data)
    })
})();

var login = (function(){
    var count = 0;
    Event.trigger('loginSucc', count)
})();
