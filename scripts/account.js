import{nav} from '../components/nav.js'
import{bottom , lasthree} from '../components/bottom.js'
// import {lasthree} from './components/bottom.js'
document.getElementById("head").innerHTML=nav()
document.getElementById("foot").innerHTML=bottom()
document.getElementById("lasthree").innerHTML=lasthree()



var UserAccount = JSON.parse(localStorage.getItem("UserData"));
//console.log("UserAccount:",UserAccount)
// UserAccount.map(function(el){
//      console.log("el:",el.iscurrent)
// })
// let currentUser=UserAccount[UserAccount.length-1]
// console.log(currentUser.iscurrent)

document.getElementById("user_name").innerText=(UserAccount[UserAccount.length-1].firstname+" "
                                                +UserAccount[UserAccount.length-1].lastname);

document.getElementById("log_out").addEventListener("click", logingOut);

function logingOut() {
    event.preventDefault()
    document.getElementById("user_name").innerText=null;
    // localStorage.clear();
    window.location.href="index.html";
}

