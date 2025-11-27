const usernameinput=document.getElementById('username');
const emailinput=document.getElementById('email');
const form=document.getElementById('validate');
const result=document.querySelectorAll('.result');

//regular expression
const usernameRegex=/^[a-zA-Z0-9]{5,20}$/;
const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit',function(e){
    e.preventDefault();
   if( usernameRegex.test(usernameinput.value)){
    result[0].textContent="Valid Username";
    result[0].style.color="green";
    usernameinput.style.borderColor="green";
    usernameinput.style.color="green";
   }else{
    result[0].textContent="Invalid Username";
    result[0].style.color="red";
    usernameinput.style.borderColor="red";
    usernameinput.style.color="red";

   }

    if( emailRegex.test(emailinput.value)){
    result[1].textContent="Valid Email";
    result[1].style.color="green";
    emailinput.style.borderColor="green";
    emailinput.style.color="green";
   }else{
    result[1].textContent="Invalid Email";
    result[1].style.color="red";
    emailinput.style.borderColor="red";
    emailinput.style.color="red";
    }
   console.log("submitted")
})