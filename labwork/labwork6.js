//Write a javascript program to create an array of numbers and use forEach()
//to print all the even numbers
const numbers = [12, 7, 9, 24, 18, 5, 30, 41];
numbers.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});