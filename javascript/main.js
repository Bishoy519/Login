"use strict"

// sign-up-window
const signUpWin = document.querySelector("#sign-up-w");
const userNameUp = document.querySelector("#first-name-up");
const emailUp = document.querySelector("#email-up");
const passUp = document.querySelector("#pass-up");
const btnUp = document.querySelector("#btn-up");
const btnUpIn = document.querySelector("#sign-in");
const userP = document.querySelector("#user-name-p")
const emailP = document.querySelector("#user-email-p")
const passP = document.querySelector("#user-pass-p")
const paraUp = document.querySelector("#signUp-s")
// sign-in-window
const signInWin = document.querySelector("#sign-in-w");
const userEmailIn = document.querySelector("#username-in");
const passIn = document.querySelector("#pass-in");
const btnIn = document.querySelector("#btn-in");
const btnInUp = document.querySelector("#sign-up");
const logP = document.querySelector("#login-p");
// Main Array 
let userData = [];

if (localStorage.getItem("usersData") !== null) {
    getUsers()
}

btnUp.addEventListener("click", function () { addUser() })

function addUser() {
    let user = {
        userName: userNameUp.value,
        userEmail: emailUp.value,
        userPassword: passUp.value
    }
    if (validateName() && validateEmail()) {
        if (checkSignup(user)) {
            userData.push(user);
            storeUser();
            clearUp();
            signinWindow()
        }

    }

}
function checkSignup(x) {
    for (let i = 0; i < userData.length; i++) {
        if (x.userEmail === userData[i].email) {
            paraUp.innerHTML = " Manta mawgoood :D "
            return false
        }
    }
    return true
}

function signupWindow() {
    signInWin.classList.add("d-none");
    signUpWin.classList.remove("d-none");
}
function signinWindow() {
    signUpWin.classList.add("d-none");
    signInWin.classList.remove("d-none");
}



function storeUser() {
    localStorage.setItem("usersData", JSON.stringify(userData));
}
function getUsers() {
    userData = JSON.parse(localStorage.getItem("usersData"));

}

function clearUp() {
    userNameUp.value = null;
    emailUp.value = null;
    passUp.value = null;
}
function clearIn() {
    userEmailIn.value = null;
    passIn.value = null;
}

btnUpIn.addEventListener("click", signinWindow)



btnInUp.addEventListener("click", signupWindow)


btnIn.addEventListener("click", function () { login() })

function login() {
    let logPerson = {
        uEmail: userEmailIn.value,
        uPassword: passIn.value
    }

    let y = checkLogin(logPerson);
    if (y) {
        setTimeout(() => {
            changePage()

        }, 2000);
    }
    clearIn()
}




function checkLogin(x) {
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].userEmail === x.uEmail && userData[i].userPassword === x.uPassword) {
            loggedInStor(userData[i].userName);
            logP.innerHTML = "saba7 elfol"
            return true
        } else {
            logP.innerHTML = "please sign up first"
        }
    }
    return false
}

function loggedInStor(x) {
    localStorage.setItem("currentUser", x);
}

function changePage() {
    window.location.href = "home.html";
}







function validateName() {
    let nameRgx = /^[a-z0-9_-]{3,15}$/;
    if (nameRgx.test(userNameUp.value)) {
        userP.innerHTML = "";
        return true;
    } else {
        userP.innerHTML =
            "please start with [A_Z]";
        return false;
    }
}

function validateEmail() {
    let emailRgx =
        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (emailRgx.test(emailUp.value)) {
        emailP.innerHTML = "";
        return true;
    } else {
        emailP.innerHTML =
            "please enter valid email ";
        return false;
    }
}









