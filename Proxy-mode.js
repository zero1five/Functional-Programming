var myImage = (function() {
    var imgNodes = document.querySelectorAll('img');
    
    return {
        setSrc: function( src ) {
            for ( let i = 0, l = imgNodes.length; i < l; i++ ) {
                imgNodes[i].src = src
            }
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
            myImage.setSrc('./loading.gif');
            setTimeout(() =>  img.src = src, 1000)
        }
    }
})();

proxyImage.setSrc('http://zero1five.gitee.io/pic/M/004.png')