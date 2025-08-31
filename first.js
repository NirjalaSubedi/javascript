console.log("hello world");
console.log("nirjala");
//using var as global variable
var a=29;
{
    var a=80;
}
console.log("using var:", a);
//using let as block scope variable
let b=10;
{
    let b=20;
}
b=50;
console.log("using let:", b);
//using const as block scope variable
const c=30;
{
    const c=40;
}
c=67;
console.log("using const:", c);

