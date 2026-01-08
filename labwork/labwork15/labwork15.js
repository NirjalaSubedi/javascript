const form=document.getElementById('registerform');
const emailInput=document.getElementById('email');
const ageInput=document.getElementById('age');
const passwordInput=document.getElementById('password');
const confirmPasswordInput=document.getElementById('confirmPassword');
const zipcodeInput=document.getElementById('ZipCode');
const termsCheckbox=document.getElementById('terms');
const urlInput=document.getElementById('url');
const DateInput=document.getElementById('date');
const fileuploadInput=document.getElementById('fileupload');
const countrySelect=document.getElementById('country');
const result=document.querySelectorAll('.error');

//regular Expressiuons
const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const ageRegex=/^(?:1[01][0-9]|120|[1-9][0-9]?)$/;
const PasswordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const zipCodeRegex=/^\d{5}(-\d{4})?$/;
const urlRegex=/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
const dateRegex=/^\d{4}-\d{2}-\d{2}$/;
const fileUploadRegex=/^[\w,\s-]+\.[A-Za-z]{3,4}$/;


form.addEventListener('submit',function(e){
    e.preventDefault();
    if(emailRegex.test(emailInput.value)){
        result[0].textContent="";
    }else{
        result[0].textContent="Invalid Email";
        result[0].style.color="red";
    }
    if(ageRegex.test(ageInput.value)){
        result[1].textContent="";
    }else{
        result[1].textContent="Invalid Age";
        result[1].style.color="red";
    }
    if(PasswordRegex.test(passwordInput.value)){
        result[2].textContent="";
    }else{
        result[2].textContent="Invalid Password";
        result[2].style.color="red";
    }
    if(passwordInput.value===confirmPasswordInput.value && confirmPasswordInput.value!==""){
        result[3].textContent="";
    }else{
        result[3].textContent="Passwords Do Not Match";
        result[3].style.color="red";
    }
    if(zipCodeRegex.test(zipcodeInput.value)){
        result[4].textContent="";
    }else{
        result[4].textContent="Invalid Zipcode";
        result[4].style.color="red";
    }
    if(termsCheckbox.checked){
        result[5].textContent="";
    }else{
        result[5].textContent="You must accept the terms";
        result[5].style.color="red";
    }
    if(urlRegex.test(urlInput.value)){
        result[6].textContent="";
        
    }else{
        result[6].textContent="Invalid URL";
        result[6].style.color="red";
    }
    if(dateRegex.test(DateInput.value)){
        const enteredDate=new Date(DateInput.value);
        const currentDate=new Date();
        if(enteredDate<=currentDate){
            result[7].textContent="";
            
        }else{
            result[7].textContent="Date cannot be in the future";
            result[7].style.color="red";
        }
    }else{
        result[7].textContent="Invalid Date Format";
        result[7].style.color="red";
    }
    if(fileUploadRegex.test(fileuploadInput.value)){
        result[8].textContent="";
    }else{
        result[8].textContent="Invalid File Name";
        result[8].style.color="red";
    }
    if(countrySelect.value){
        result[9].textContent="";
    }else{
        result[9].textContent="Please select a country";
        result[9].style.color="red";
    }

})