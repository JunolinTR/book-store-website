const menu=document.getElementById("menu");
const nav=document.getElementById("navbar");
if(menu){
    menu.addEventListener('click',()=>{
        nav.classList.add('actve');
    })
}  
//Login Page
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
document.getElementsByClassName("btn").addEventListener("click",myFunction)
function myFunction(){ 
     if(email!==null && password!==null){
        alert("You have successfully logined.You are redirected to shop page.");
        window.location="shop.html";
}
}
//Sign Up page
    function ValidFunction(){
        var name=document.getElementById("name").value;
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        var cpassword=document.getElementById("cpassword").value;
         document.getElementById("btn").addEventListener("click",ValidFunction)
        if(password==cpassword){
        alert("You have successfully registered!");
        window.location="login.html";
        return false;
}
else{
    alert("Both the passwords are not matching");
}
}
//Contact page
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var subject=document.getElementById("subject").value;
var message=document.getElementsById("message").value;
    document.getElementById("btn").addEventListener("click",Validate)
    function Validate(){
    alert("Your message has been sent.You are redirected to Home page.");
    window.location="index.html";
    return false;
}



