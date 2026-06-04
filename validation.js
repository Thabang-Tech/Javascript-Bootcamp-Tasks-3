document.getElementById('signUpForm').addEventListener('submit', function(event){

    event.preventDefault();

    let isValid = true

    //get elements by Ids
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const checkboxError = document.getElementById('checkboxError')

// Perfom Validations

//username
if(username.value.trim()=== ''){
    usernameError.textContent = 'Username is required';
    username.style.borderColor = 'red';
    isValid = false
}

//email

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(email.value.trim()=== ''){
    emailError.textContent = 'Email address is required'
    email.style.borderColor = 'red'
    isValid = false;
}else if (!emailRegex.test(email.value.trim())){
    emailError.textContent = 'Please enter a valid email address'
    isValid = false
}

//password

if(password.value.trim() === ''){
    passwordError.textContent ='Password is required';
    password.style.borderColor = 'red'
    isValid = false
}else if (password.value.length <8){
    passwordError.textContent = 'Password must be atleast 8 characters long';
    isValid = false
}

//checkbox

if(!checkbox.checked){
    checkboxError.textContent = 'You must accept term and conditons'
    isValid =false
}

if(isValid){
    console.log('all the inputs from user are valid');
}else{
    console.log('Failed to submit, some of the fields are invalid')
}

});

