const usernameinput=document.getElementById('username');
const emailinput=document.getElementById('email');
const form=document.getElementById('validate');
const result=document.querySelectorAll('.result');


//regular expression
const usernameRegex=/^[a-zA-Z0-9]{5,20}$/;
const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const numberRegex=/^\d{10}$/;
const zipCodeRegex=/^\d{5}(-\d{4})?$/;
const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

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

    if( numberRegex.test(phonenumber.value)){
    result[2].textContent="Valid phoneNumber";
    result[2].style.color="green";
    phonenumber.style.borderColor="green";
    phonenumber.style.color="green";
   }else{
    result[2].textContent="Invalid phoneNumber";
    result[2].style.color="red";
    phonenumber.style.borderColor="red";
    phonenumber.style.color="red";
    }
    if( zipCodeRegex.test(ZipCode.value)){
    result[3].textContent="Valid ZipCode";
    result[3].style.color="green";
    ZipCode.style.borderColor="green";
    ZipCode.style.color="green";
   }else{
    result[3].textContent="Invalid ZipCode";
    result[3].style.color="red";
    ZipCode.style.borderColor="red";
    ZipCode.style.color="red";
    }
    if( passwordRegex.test(password.value)){
    result[4].textContent="Valid password";
    result[4].style.color="green";
    password.style.borderColor="green";
    password.style.color="green";
   }else{
    result[4].textContent="Invalid password";
    result[4].style.color="red";
    password.style.borderColor="red";
    password.style.color="red";
    }



   console.log("submitted")
})