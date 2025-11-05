//value, index number,array itself
let arr=[1,2,3,4];
arr.forEach(i=>{
    console.log(i);
})
arr.push(20);
console.log(arr);

arr.unshift(30);
console.log(arr);

//mapping
//value index array
 const arr1=[22,33,44];
 let map=arr1.map((value,index,a)=>{
        console.log(value,index,a);
    return value+index;
 })

 let filter=arr1.filter((num)=>{
    return (num%2==0)
 })
 console.log(filter)

 
