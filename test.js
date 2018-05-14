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

let arr = [2,1,423432,4,4342342,1231,3232,123123,1231]

function insertion(arr) {
    for( let i = 1; i < arr.length; i++ ) {
        key = arr[i]
        j = i - 1
        
        while (j > -1 && arr[j] > key) {
            arr[j + 1] = arr[j] // a[i] = arr[j]
            j--
            arr[j + 1] = key
        }
    }
    return arr
}

console.log(insertion(arr))

function Bubble(arr) {
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = 0; j < arr.length; j++ ) {
            if( arr[j] > arr[j + 1]) {
                key = arr[j + 1]
                arr[j] = key
                arr[j + 1] = arr[j]
            }
        }
    }
    return arr
}

let arr2 = [2,1,423432,4,4342342,1231,3232,123123,1231,9,0,999]

function Bubble_reverse(arr) {
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = 0; j < arr.length; j++ ) {
            if ( arr[j] < arr[j + 1]) {
                let key = arr[j + 1];
                arr[j + 1] = arr[j]
                arr[j] = key
            }
        }
    }
    return arr
}


console.log(Bubble(arr))

console.log(Bubble_reverse(arr2))

let a = {};
    b = {},
    c = {};

a[b] = 123;
a[c] = 456;

console.log(a[b]) // 以方括号来设置属性, key必须是计算结果为string的表达式.

let attr = {};
a[attr] = 'string'
a[c] = 456; // 也就是JS内部会想尽办法将[attr]中的attr转为字符串, 这里JS内部调用了tostring.

console.log(a[attr])

var data = [
    {
        "img": "",
        "img": [
            {
                "num": 1
            },
            {
                "num": 2
            }
        ]
    }
]

data.forEach(v=>v.imgs=v.img.reduce((a,b)=>a.num+b.num))

console.log(data)

var cost = (function() {
    var args = [];

    return function() {
        if(arguments.length === 0) {
            var money = 0;
            for (let i = 0, l = args.length; i < l; i++) {
                money += args[i]
            }
            return money;
        } else {
            [].push.apply(args, arguments)
        }
    }
})()

cost(100);
cost(200);
cost(300);

console.log(cost());

var currying = function(fn) {
    var args = [];
    
    return function() {
        if (arguments.length === 0) {
           return fn.apply(this, args) 
        } else {
            [].push.apply(args, arguments);
            return arguments.callee
        }
    }
}

var cost = (function() {
   var money = 0;
    return function() {
        for ( let i = 0, l = arguments.length; i < l; i++ ) {
            money += arguments[i]
        }
        return money
    } 
})();

var cost = currying(cost);

cost(100);
cost(200);
cost(300);

console.log(cost())