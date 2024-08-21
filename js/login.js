function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var btnLogin = document.getElementById("register_btn_login");
    var btnSignup = document.getElementById("register_btn_signup");
   
  
    if (login.style.display === "none") {
        login.style.display = "flex";  //lonin出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        btnLogin.style.display = "none"; 
     
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "flex"; //signup出現
        signup.style.display = "flex"; //signup出現
        signup.style.visibility="visible";
      
     
        document.getElementById("fullname").value="";
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }
}