//Write a javascript program to create an array of strings and use numeric sorting to sort the strings 
//in alphabetical order.Print the sorted array

const strArray=["apple","cat","call","fish","ant"]
const numericSorted=strArray.sort((a,b)=>{
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
});
console.log(numericSorted);