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
    const checkboxError = document.getElementById('checkboxError');

// Perfom Validations

//username
if(username.value.trim()=== ''){
    usernameError.textContent = 'Username is required';
    username.style.borderColor = 'red';
    isValid = false;
}

//email

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

if(email.value.trim()=== ''){
    emailError.textContent = 'Email address is required'
    email.style.borderColor = 'red'
    isValid = false;
}else if (!emailRegex.test(email.value.trim())){
    emailError.textContent = 'Please enter a valid email address'
    inValid = false
}

//password

if(password.valu.trim() === ''){
    passwordError.textContent ='Password is required';
    isValid = false
}

})

