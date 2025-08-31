//calculating electricity bill condition first 50 units 5per unit, next 100 units 7per unit, above 150 units 10per unit
let units=180;
let bill=0;
if(units<=50){
    bill=units*5;
    console.log("Your electricity bill is "+bill);
}else if(units>50&&units<=150){
    bill=50*5+(units-50)*7;
    console.log("Your electricity bill is "+bill);
}else{
    bill=50*5+100*7+(units-150)*10;
    console.log("Your electricity bill is "+bill);
}