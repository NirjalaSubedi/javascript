//Write a javascript program to create array of strings and remove the first element
//from the array, then add a new string to the beginning of the array.
//using shift and Unshift

let str=["rita","sita","ram"]
str.unshift("hari")
console.log(str.toString())
str.shift()
console.log(str.toString())
