/**
 * @param {*} prop - key
 * @param {*} obj[prop] - value
 */
const forEachObject = (obj, fn) => {
    for ( let prop in obj ) {
        if ( obj.hasOwnProperty(prop) ) {
            fn(prop, obj[prop])
        }
    }
}

/**
 * @param {*} value - 返回的函数的参数
 */
const tap = (value) => 
    (fn) => {
        typeof(fn) === 'function' && fn(value)
    }

/**
 * @param {*} fn - 只执行一次的函数
 */
const once = (fn) => {
    let done = false;
    return function () {
        return done ? void 0 : ((done = true), fn.apply(this, arguments))
    }
}

/**
 * @param {*} fn - 多次递归的函数, 缓存每次计算的结果
 */
const memoized = (fn) => {
    const lookupTable = {};
    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
}