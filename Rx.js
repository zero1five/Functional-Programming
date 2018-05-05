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

/**
 * 
 * @param {*} array 需要遍历的数组
 * @param {*} fn 遍历每个item的函数
 */
const map = (array, fn) => {
    let results = [];
    for (const value of array) {
        results.push(fn(value))
    }
    return results
}

/**
 * 
 * @param {*} array 需要遍历的数组
 * @param {*} fn 遍历每个item的函数
 */
const filter = (array, fn) => {
    let results = []
    for (const value of array) {
        (fn(value)) ? results.push(value) : void 0
    }
    return results
}

/**
 * 
 * @param {*} array 需要遍历的数组
 * @param {*} fn 遍历每个item的函数
 */
const concatAll = (array, fn) => {
    let results = []
    for (const value of array) {
        results.push.apply(results, value)
    }
    return results
}

