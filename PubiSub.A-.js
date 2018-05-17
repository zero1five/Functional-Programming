/**
 ********************- 发布订阅模式 - 推送模型 -***************************
 *  1. 不具有命名空间
 *  2. 可以进行模块化开发
 *  3. 发布 => 订阅
 */

/** eg
 * login.success => trigger
 *  - header.setAvatar => listen
 *  - nav.setAvatar => listen
 *  - message.refresh => listen => trigger
 *   - cart.refresh => listen
 */

var Event = (function() {
    var clientList = {},
        listen,
        trigger,
        remove;
    
    listen = function( key, fn ) {
        if ( !clientList[ key ] ) {
            clientList[ key ] = []
        }
        clientList[ key ].push( fn );
    };

    trigger = function() {
        var key = Array.prototype.shift.call( arguments ),
            fns = clientList[ key ];
            if ( !fns || fns.length === 0 ) {
                return false
            }
            for ( var i = 0, fn; fn = fns[ i++ ]; ) {
                fn.apply(this,arguments)
            }
    };
    
    remove = function( key, fn ) {
        var fns = clientList[ key ];
        if ( !fns ) {
            return false
        }
        if ( !fn ) {
            fns && (fns.length = 0);
        } else {
            for ( var l = fns.length - 1; l >= 0; l-- ) {
                var _fn = fns[ l ];
                if ( _fn === fn ) {
                    fns.splice( l, 1 );
                }
            }
        }
    };
    
    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    }

})();


Event.listen('leaves', age => {
    console.log(age)
})

Event.trigger('leaves', 19)



