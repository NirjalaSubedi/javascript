//wap to reverse a string using do-while loop
let name="nirjala";
let i=name.length-1, rev="";
do{
    rev=rev+name[i];
    i--;
}while(i>=0){
    console.log(rev);
}
