//program to find all prime numbers between 1 to 100 using for loop
for(let i=2;i<100;i++){
    let c=0;
    for(let j=2;j<=i;j++){
        if(i%j==0){
           c++; 
        }
        }
        if(c==1){
            console.log(i,"is a prime number");
        }
 }
