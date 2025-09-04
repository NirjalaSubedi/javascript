let i,sum=0,n=2;
for(i=0;i<n;i++){
    sum+=i+1;
}
console.log("Sum of first",n,"natural number is:",sum);
//for in loop
let employee={
    name:"nirjala",//name=
    age:20,
    address:"jhumka"
};
for(let k in employee){
    console.log(k,":",employee[k]);
}

//for of loop
let str="nirjala";
for(let value of str){
    console.log(value);
}
let arr=["apple","fruit"];
for(let value of arr){
    console.log(value);
}
sum=0;
let arr2=[1,2,3];
for(let val of arr2){
    sum+=val;
}
console.log("sum of array is:",sum);
