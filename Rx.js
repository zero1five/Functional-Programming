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

/**
 * @param {*} fn 实际上执行的函数
 */
let curry = (fn) => {
    if (typeof fn !== 'function') throw Error('[Functional] no function provided')
    return function curriedFn (...args) {
        if (args.length < fn.length) return function() {
            return curriedFn.apply(null, args.concat(
                [].slice.call(arguments)
            ))
        }
        return fn.apply(null, args)
    }
}

/**
 * function add(x, y) {
 *     return x * y
 * }
 * 
 * console.log(curry(add)(2)(5)) // 10
 */

/**
 * @param {*} array 需要拆分为块的数组
 * @param {*} size 每次拆分的个数
 */
function chunk(array, size) {
    size = Math.max(size, 0)
    const length = array == null ? void 0 : array.length
    if (!length || size < 1) {
        return []
    }
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))

    while (index < length) {
        result[resIndex++] = slice(array, index, (index += size))
    }
    return result
}


