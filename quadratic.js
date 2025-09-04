//wap to find the roots of a quadratic equation ax^2 + bx + c = 0
let a=1,b=-3,c=2;
let d=b*b-4*a*c;
if(d>0){
    let r1=(-b+Math.sqrt(d))/(2*a);
    let r2=(-b-Math.sqrt(d))/(2*a);
    console.log("Roots are real and different");
    console.log("Roots are:",r1,r2);
}
