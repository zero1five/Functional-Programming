function Foo(name) {
    this.name = name
}

function Bar() {
    
}
/* 1 */
Bar.prototype = Object.create( Foo.prototype );

/* 2 args[0] target args[1] current */
Object.setPrototypeOf( Bar.prototype, Foo.prototype );