/**
 * 策略模式 - JS
 */

 /* JS 回路控制 */
var strategies = {
    "S": function(salary) {
        return salary * 4
    },
    "A": function(salary) {
        return salary * 3
    },
    "B": function(salary) {
        return salary * 2
    }
}

var calculateBonus = function( level, salary ) {
    return strategies[level](salary)
}

console.log(calculateBonus("S", 100))


/* 策略模式 - 表单验证 */
var strategies = {
    isNonEmpty: function( value, errorMsg ) {
        if ( value === '' ) {
            return errorMsg
        }
    },
    minLength: function( value, length, errorMsg ) {
        if ( value.length < length ) {
            return errorMsg
        }
    },
    isMobile: function( value, errorMsg ) {
        if ( !/(^1[3][5][8][0-9]{9}$)/,test( value ) ) {
            return errorMsg
        }
    }
}

var validataFunc = function() {
    var validator = new validator();
    validator.add( registerForm.userName, 'isNonEmpty', '用户名不能为空')
    var errorMsg = validator.start();
    return errorMsg
}

registerForm.onsubmit= function() {
    var errorMsg = validataFunc();
    if ( errorMsg ) {
        alert(errorMsg)
        return false
    }
}

var Vaildator = function() {
    this.cache = []
}

Vaildator.prototype.add = function(dom, rule, errorMsg) {
    var ary = rule.split(':');
    this.cache.push(function() {
        var strategy = ary.shift();
        ary.unshift(dom.value);
        ary.push(errorMsg);
        return strategies[strategy].apply(dom, ary)
    })
}

validator.prototype.start = function() {
    for ( var i = 0; validataFunc; validataFunc = this.cache[i++]) {
        var msg = validatorFunc();
        if (msg) {
            return msg;
        }
    } 
}

/**
 * @description 策略模式
 * 利用组合、委托和多态等技术和思想, 可以有效的避免多重条件选择语句.
 * 开放 — 封闭原则
 */