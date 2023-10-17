let username = document.forms['loginForm']['username'];
let password = document.forms['loginForm']['password'];

function validate() {
    console.log(username.value);
    console.log(password.value);
    if (username.value === "student" && password.value === "password") {
        window.location.href = "studHomepage.html";
        console.log("student account detected");
    }
    else if (username.value === "prof" && password.value === "password") {
        window.location.href = "profHomepage.html";
        console.log("prof account detected");
    }
    else {
        alert("Invalid username or password. Try again");
    }
    return false;

}
