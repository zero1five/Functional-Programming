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

