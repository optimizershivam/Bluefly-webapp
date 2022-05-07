// import shop from "../signincomponents/shop.js";

// document.getElementById("shop_Products").innerHTML = shop();



var UserAccount = JSON.parse(localStorage.getItem("UserData"));
console.log("UserAccount:",UserAccount)
// UserAccount.map(function(el){
//      console.log("el:",el.iscurrent)
// })
// let currentUser=UserAccount[UserAccount.length-1]
// console.log(currentUser.iscurrent)

document.getElementById("user_name").innerText=UserAccount[UserAccount.length-1].firstname+" "+UserAccount[UserAccount.length-1].lastname;

document.getElementById("log_out").addEventListener("click", logingOut);

function logingOut() {
    event.preventDefault()
    document.getElementById("user_name").innerText=null;
    // localStorage.clear();
    window.location.href="login.html";
}

