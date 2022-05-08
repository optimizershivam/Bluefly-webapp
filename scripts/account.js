import{nav} from '../components/nav.js'
import{bottom , lasthree} from '../components/bottom.js'
// import {lasthree} from './components/bottom.js'
document.getElementById("head").innerHTML=nav()
document.getElementById("foot").innerHTML=bottom()
document.getElementById("lasthree").innerHTML=lasthree()



var UserAccount = JSON.parse(localStorage.getItem("UserData"));


document.getElementById("user_name").innerText=(UserAccount[UserAccount.length-1].firstname+" "
                                                +UserAccount[UserAccount.length-1].lastname);



// function logingOut() {
//     event.preventDefault()
//     document.getElementById("user_name").innerText=null;
//     // localStorage.clear();
//     window.location.href="index.html";
// }



var AddedAddress = JSON.parse(localStorage.getItem("ADDRESS"));
console.log(AddedAddress)

AddedAddress.map(function (elem){
    var div = document.createElement("div")
    div.style.fontSize="12px"

    var user = document.createElement("p");
    user.innerText=elem.firstname+" "+elem.lastname

    var address = document.createElement("p");
    address.innerText=elem.Address1+" "+elem.Address2;
    
    var city = document.createElement("p");
    city.innerText=elem.city+" "+elem.zipCode+" "+elem.state;

    div.append(user,address,city)

    document.querySelector("#div").append(div)

})


document.getElementById("log_out").addEventListener("click", logingOut);

function logingOut() {
    event.preventDefault()
    document.getElementById("user_name").innerText=null;
    document.getElementById("div").innerText=null
    // localStorage.clear();
    window.location.href="index.html";
}