const once = (fn) => {
    let done = false;
    return function () {
        return done ? void 0 : ((done = true), fn.apply(this, arguments))
    }
}

let send = once(() => {
    console.log(1)
})

send();
send();
send(); 

/* 函数节流 */