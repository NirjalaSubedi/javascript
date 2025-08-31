//check armstrong number or not
let num=153,sum=0,rem,c=0;
let orginal=num;
while(orginal!=0){
    orginal=Math.floor(orginal/10);
    c++;
}
orginal=num;
while(orginal>0){
    rem=orginal%10;
    sum=sum+Math.pow(rem,c);
    orginal=Math.floor(orginal/10);
}
if(sum==num){
    console.log(num,"is an armstrong number");
}else{
    console.log(num,"is not an armstrong number");
}

