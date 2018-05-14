function throttle(method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(() => {
        method.call(context)
    },1000)
}

