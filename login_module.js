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

let login = {};
installEvent(login);


setTimeout(() => {
    let data = {
        createTime: '2018-5-17',
        avatar: 'www.1.gif'
    }
    login.trigger('loginSucc', data)
}, 1000);


var header = (function(){
    login.listen('loginSucc', function(data) {
        header.setAvatar(data.avatar)
    });
    return {
        setAvatar: function(data) {
            console.log('coding header module...')
        }
    }
})

var nav = (function() {
    login.listen('loginSucc', function(data) {
        nav.setAvatar(data.avatar)
    });
    return {
        setAvatar: function(avatar) {
            console.log('setting nav module...')
        }
    }
})