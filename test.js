//Write a javascript program to create an array of objects representing books,where each object has title and author
//property.use splice() to remove the second book from the array.Print Modified array

const books=[{
    title:"Scripiting Language",
    author:"Saroj Ojha"
},{
    title:"English",
    author:"Ram Shah"
},{
    title:"DSA",
    author:"Hari "
}]
const result=books.splice(1,1);
console.log(result)
console.log(books)