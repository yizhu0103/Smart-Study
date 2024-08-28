function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var btnLogin = document.getElementById("register_btn_login");
    var btnSignup = document.getElementById("register_btn_signup");
   
  
    if (login.style.display === "none") {
        login.style.display = "flex";  
        signup.style.display = "none";  
        signup.style.visibility="visible";
        btnSignup.style.display = "flex";  
        btnLogin.style.display = "none";  
        btnLogin.style.visibility="visible";
      
      
     
    } else {
        login.style.display = "none";  
        signup.style.display = "flex"; 
        signup.style.visibility="visible";
        btnSignup.style.display = "none";  
        btnLogin.style.display = "flex"; 
        btnLogin.style.visibility="visible";
   
     
    }
}