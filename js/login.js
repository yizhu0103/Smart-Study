document.addEventListener('DOMContentLoaded', function () {

    /* 切換註冊登入 */
    const registerBtn = document.querySelector(".register");
    registerBtn.addEventListener("click", () => {
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
    });

    /* 忘記密碼顯示 */
    var forget = document.getElementById("forget");
    var page1 = document.getElementById("forgetpsw-page1");
    var page2 = document.getElementById("forgetpsw-page2");
    var page3 = document.getElementById("forgetpsw-page3");
    var infoModal = document.getElementById("infoModal");
    forget.addEventListener("click", () => {
        infoModal.showModal();
        page1.style.display = "flex";
        page2.style.display = "none";
        page3.style.display = "none";
        bindCloseButton();  
    });
    
    function bindCloseButton() {
        var closeBtns = document.querySelectorAll(".close_btn"); // 選取所有 X 按鈕
        closeBtns.forEach(function(btn) {
            btn.removeEventListener("click", closeModal); // 確保不會重複綁定
            btn.addEventListener("click", closeModal);
        });
    }
    
    function closeModal() {
        infoModal.close();
        console.log('123');
    }


});



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