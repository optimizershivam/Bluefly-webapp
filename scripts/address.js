import{nav} from '../components/nav.js'
import{bottom , lasthree} from '../components/bottom.js'
// import {lasthree} from './components/bottom.js'
document.getElementById("head").innerHTML=nav()
document.getElementById("foot").innerHTML=bottom()
document.getElementById("lasthree").innerHTML=lasthree()


document.querySelector("form").addEventListener("submit", sigiinfunction);



function sigiinfunction() {
    event.preventDefault()
        let firstname=document.querySelector("#UserFirstName").value;
        let lastname=document.querySelector("#UserLastName").value;
        let company=document.querySelector("#Company").value;
        let Address1=document.querySelector("#Address1").value;
        let Address2=document.querySelector("#Address2").value;
        let city=document.querySelector("#city").value;
        let state=document.querySelector("#state").value;
        let zipCode=document.querySelector("#zipCode").value;
        let phoneno=document.querySelector("#PhoneNo").value;

        let Address= [];

    if(firstname==='' || lastname==='' || company==='' || Address1===''  || city==='' || zipCode==='' || phoneno===''){
        alert("please fill information")
    }

    else{
        let AdressObj = {
            firstname:firstname,
            lastname:lastname,
            company:company,
            Address1:Address1,
            Address2:Address2,
            city:city,
            zipCode:zipCode,
            state:state,
            phoneno:phoneno

        }
        Address.push(AdressObj);
        localStorage.setItem("ADDRESS",JSON.stringify(Address))
        
        console.log("Address:",Address)
        window.location.href="account.html";

        document.getElementById("ShippingAddress").reset();
    }
}