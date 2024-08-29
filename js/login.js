
function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var btnLogin = document.getElementById("register_btn_login");
    var btnSignup = document.getElementById("register_btn_signup");


    if (login.style.display === "none") {
        login.style.display = "flex";
        signup.style.display = "none";
        signup.style.visibility = "visible";
        btnSignup.style.display = "flex";
        btnLogin.style.display = "none";
        btnLogin.style.visibility = "visible";

    } else {
        login.style.display = "none";
        signup.style.display = "flex";
        signup.style.visibility = "visible";
        btnSignup.style.display = "none";
        btnLogin.style.display = "flex";
        btnLogin.style.visibility = "visible";
    }
}




function show() {
    var page1 = document.getElementById("forgetpsw-page1");
    var page2 = document.getElementById("forgetpsw-page2");
    var page3 = document.getElementById("forgetpsw-page3");
    infoModal.showModal();
    page1.style.display = "flex";
    page2.style.display = "none";
    page3.style.display = "none";
}
function closeDialog() {
    infoModal.close();
}

function page1() {
    var page1 = document.getElementById("forgetpsw-page1");
    var page2 = document.getElementById("forgetpsw-page2");
    page1.style.display = "none";
    page2.style.display = "flex";
    page2.style.visibility = "visible";
}

function page2() {
    var page2 = document.getElementById("forgetpsw-page2");
    var page3 = document.getElementById("forgetpsw-page3");
    page2.style.display = "none";
    page3.style.display = "flex";
    page3.style.visibility = "visible";
}


function gotopage1() {
    var page1 = document.getElementById("forgetpsw-page1");
    var page2 = document.getElementById("forgetpsw-page2");
    var page3 = document.getElementById("forgetpsw-page3");
    page1.style.display = "flex";
    page2.style.display = "none";
    page3.style.display = "none";
}
function gotopage2() {
    var page1 = document.getElementById("forgetpsw-page1");
    var page2 = document.getElementById("forgetpsw-page2");
    var page3 = document.getElementById("forgetpsw-page3");
    page1.style.display = "none";
    page2.style.display = "flex";
    page3.style.display = "none";
}