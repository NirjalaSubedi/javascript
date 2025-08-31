//check whether a given number is palindrome or not
let num=121;
let original=num;
let rev=0;
while(num>0) 
    {
        let digit=num%10;
        rev=rev*10+digit;
        num=Math.floor(num/10);
    }
if(original==rev){
    console.log(original,"is a palindrome number");
}else{
    console.log(original,"is not a palindrome number");
}   
