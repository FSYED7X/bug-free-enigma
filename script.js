const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    if (usernameValue === "") {
        console.log("ASdasd")
        setErrorfor(username, "Username cannot be blank");
    }
    else {
        //add success
        
        setSuccessfor(username);
    }
    
    if (emailValue === '') {
        
        setErrorfor(email, "email cannot be blank");
    }
    
    else {
        console.log("aa")
        //add success
        setSuccessfor(email);
    }

    if (passwordValue === '') {

        setErrorfor(password, "password cannot be blank");
    }
    else {
        //add success
        setSuccessfor(password);
    }
    if (password2Value === '') {

        setErrorfor(password2, " confirm password");
    }
    else if (passwordValue == password2Value) {
        setErrorfor(password2, "password does not match");
    }
    else {
        //add success
        setSuccessfor(password2);
    }


}

function setErrorfor(input, message) {
    const formitem = input.parentNode;
    console.log(input.parentNode,formitem)
    const small = formitem.querySelector('small');


    small.innerHTML = message;

    formitem.className = "form-item error";
}

function setSuccessfor(i) {
    console.log(i)
    const formitem = i.parentNode;
    console.log(formitem)
    formitem.className = "form-item success";
}