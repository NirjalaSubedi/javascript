//Write a javascript program to create an array of objects representing books,where each object has title and author
//property.use splice() to remove the second book from the array.Print Modified array

const books=[{
    title:"Scripting Language",
    author:"Saroj Ojha"
},{
    title:"DSA",
    author:"Ram Rai"
},{
    title:"English",
    author:"Sita Regmi"
}]
const result=books.splice(1,1);
console.log(books);
