//WAP to create an array of objects representing students with properties where each object has name and age properties
//Use map() method to create a new array containing only the ages of the students
//print the new array

const students=[
    {
        name:"Nirjala",
        age:20
    },
    {
        name:"Sita",
        age:22
    },
    {
        name:"Gita",
        age:19
    }
]

const agesArray=students.map((student)=>{
    return student.age;
})
console.log(agesArray);
