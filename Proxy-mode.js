var myImage = (function() {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setSrc: function( src ) {
            imgNode.src = src;
        }
    }
})();

var proxyImage = (function(){
    var img = new Image;
    img.onload = function(){
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function( src ) {
            myImage.setSrc('./loading.gif')
            setTimeout(() => {
                img.src = src
            }, 1000);
        }
    }
})();

proxyImage.setSrc('http://zero1five.gitee.io/pic/M/004.png')


/**
 ***************** 虚拟代理 - 惰性加载 **********************
 */

var miniConsole = (function() {
    var cache = [];
    var handler = function( ev ) {
        if ( ev.keyCode === 113 ) {
            var script = document.createElement( 'script' );
            script.onload = function(){
                for ( let i = 0, fn; fn = cache[ i++ ]; ) {
                    fn();
                }
            };
            script.scr = 'Ps-mode.js';
            document.getElementsByName( 'head' )[0].appendChild( script );
            document.body.removeEventListener( 'keydown', handler );
        }
    };
    
    document.body.addEventListener( 'keydown', handler, false );

    return {
        log: function() {
            var args = arguments;
                cache.push( function() {
                    
                })
        }
    }
})();

