//write a javascript program to create an array of strings and use map()to create a new array 
// where each string is capitalized.print the new array

const strArray=["nirjala","samikshya","rukshan","ishan","bipin"];
const usingmap=strArray.map((value)=>{
    return(value.toLocaleUpperCase())
})
console.log(usingmap)