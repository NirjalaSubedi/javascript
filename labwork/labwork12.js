//WAP to create an array of strings and use filter()methods to filter out the strings that start with the letter 'A
//print the filtered array
const strArray=["Apple","Banana","Grapes","Orange"];
const filteredArray=strArray.filter((value)=>{
    return value.startsWith('A');
});
console.log(filteredArray);