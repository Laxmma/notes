function f({ a, b=1000 }:{ a: string, b?: number } = { a: "test", b: 2000 }): void {
    console.log(a);
    console.log(b);
}
f();