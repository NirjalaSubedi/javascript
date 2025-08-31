//program to input marks of five subjects,calculate the percentages and determine the division
let mark1=58,mark2=78,mark3=89,mark4=79,mark5=65;
console.log("Enter the marks of five subjects");
console.log("Enter the marks of subject 1:"+mark1);
console.log("Enter the marks of subject 2:"+mark2);
console.log("Enter the marks of subject 3:"+mark3);
console.log("Enter the marks of subject 4:"+mark4);
console.log("Enter the marks of subject 5:"+mark5);
let total=mark1+mark2+mark3+mark4+mark5;
let percentage=(total/500)*100;
console.log("The percentage is:"+percentage);
if(percentage>=80&&percentage<=100){
    console.log("distinction");
}else if(percentage>=60&&percentage<80){
    console.log("first division");
}else if(percentage>=50&&percentage<60){
    console.log("second division");
}else if(percentage>=40&&percentage<50){
    console.log("third division");
}else if(percentage<40){
    console.log("fail");
}