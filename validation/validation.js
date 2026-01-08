const form=document.getElementById('registerform');
const emailInput=document.getElementById('email');
const passwordInput=document.getElementById('password');
const result=document.querySelectorAll('.error')

//regular Expressiuons
const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PasswordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(emailRegex.test(emailInput.value)){
        result[0].textContent="";
    }else{
        result[0].textContent="Invalid Email";
        result[0].style.color="red";
    }
    if(PasswordRegex.test(passwordInput.value)){
        result[2].textContent="";
    }else{
        result[2].textContent="Invalid Password";
        result[2].style.color="red";
    }
    
})