/* 单例模式 - Proxy代理实现单例 */
/**
 * 
 * @description 单例模式
 * 单例模式的核心是确保只有一个实例, 并开放给全局, 供全局访问.
 * 不只是创建对象,绑定事件, 函数运行都可以使用单例模式.
 */
var CreateDiv = function(name) {
    this.name = name;
    this.init()
}

CreateDiv.prototype.init = function() {
    console.log(this.name)
}
/* mixin 代理模式 */
var ProxySinglentonCreateDiv = (function() {
    var instance;
    return function(name) {
        if (!instance) {
            instance = new CreateDiv(name)
        }
        return instance
    }
})();

var a = new ProxySinglentonCreateDiv('leaves');
var b = new ProxySinglentonCreateDiv('zero');

console.log(a === b)

/**
 * 单例模式的实例
 */

var getSingle = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments))
    }
}

var createLoginLayer = function() {
    var div = document.createElement('div')
    div.innerHTML = "I'm login layer"
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
}

var createSingleLoginLayer = getSingle(createLoginLayer)

document.querySelector('loginBtn').onclick = function() {
    var loginLayer = createLoginLayer();
    loginLayer.style.display = 'block'
}