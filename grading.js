//simple grading system with remarks("Excellent","very Good","good","average","fail")
let percentage=89;
if(percentage>=90&&percentage<=100){
    console.log("Excellent");
}else if(percentage>=80&&percentage<=90){
    console.log("very Good");
}
else if(percentage>=60&&percentage<=80){
    console.log("good");
}
else if(percentage>=40&&percentage<=60){
    console.log("Average");
}else if(percentage>=0&&percentage<40){
    console.log("Fail");
}else{
    console.log("invalid percentage");
}