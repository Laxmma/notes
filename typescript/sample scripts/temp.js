function f({ a, b = 1000 } = { a: "test", b: 2000 }) {
    console.log(a);
    console.log(b);
}
f();
