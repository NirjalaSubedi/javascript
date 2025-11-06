//write a function that takes number as an arguments and returns its factorial, test the functions with different numbers
function factorial(n){
    if(n<0)
        return `factorial of ${n} doesn't exist`;
    else if(n===0)
        return 1;
    else{
        let fact=1;
        for(let i=n;i>=1;i--){
            fact=fact*i;
        }
        return fact;
    }
    
}
console.log(factorial(5));
console.log(factorial(2));