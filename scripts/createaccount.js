import{nav} from '../components/nav.js'
import{bottom , lasthree} from '../components/bottom.js'
// import {lasthree} from './components/bottom.js'
document.getElementById("head").innerHTML=nav()
document.getElementById("foot").innerHTML=bottom()
document.getElementById("lasthree").innerHTML=lasthree()

// let register = async (e) => {
//     e.preventDefault();

//     let form_data = {
//       lastname: document.getElementById("FirstName").value,
//       first: document.getElementById("LastName").value,
//       email: document.getElementById("Email").value,
//       password: document.getElementById("Password").value,
//     };

//     form_data = JSON.stringify(form_data);

//     let res = await fetch(
//       "https://masai-api-mocker.herokuapp.com/auth/register",
//       {
//         method: "POST",
//         body: form_data,
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     let data = await res.json();
//     console.log(data);
//   };

 // document.getElementById("submit").addEventListener("click", register);
// https://github.com/masai-school/api-mocker.wiki.git

document.querySelector("form").addEventListener("submit", sigiinfunction);

function sigiinfunction() {
    event.preventDefault()
        let firstname=document.querySelector("#FirstName").value;
        let lastname=document.querySelector("#LastName").value;
        let email=document.querySelector("#Email").value;
        let password=document.querySelector("#Password").value;

    let userData=JSON.parse(localStorage.getItem("UserData")) || [];
    console.log("userData:",userData)

    if(firstname!='' && lastname!='' && email!='' && password!=''){
        let userObj = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password,
            iscurrent:true,
        }
        userData.push(userObj);
        localStorage.setItem("UserData",JSON.stringify(userData))
        
        console.log(userData)
    }
    window.location.href="account.html";
    document.getElementById("Create_Account").reset();
}
