// const loginForm = document.getElementById("login-form");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const loginButton = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// function onLoginBtnClick() {
//     // console.log("hello", loginInput.value);
//     const username = loginInput.value;
//     if(username === "") {
//         alert("Please write your name");
//     } else if (username.length > 15) {
//         alert("Your name is too long.");

//     }
// }

// loginButton.addEventListener("click", onLoginBtnClick);

function onLoginSubmit(event) {
    event.preventDefault();
    // console.log(loginInput.value);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    paintGreetings(username);

}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    // alert("clicked!");
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    return;
}


// show the greetings
paintGreetings(savedUsername);

