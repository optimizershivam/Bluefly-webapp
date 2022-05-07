let UserAccount = JSON.parse(localStorage.getItem("UserData"));
//console.log("UserAccount:",UserAccount)

document.getElementById("user").innerText=((UserAccount[UserAccount.length-1].firstname+" "+UserAccount[UserAccount.length-1].lastname)+" "+UserAccount[UserAccount.length-1].email);


document.querySelector("form").addEventListener("submit", sigiinfunction);



function sigiinfunction() {
    event.preventDefault()
        let firstname=document.querySelector("#UserFirstName").value;
        let lastname=document.querySelector("#UserLastName").value;
        let address=document.querySelector("#addresss").value;
        let optional=document.querySelector("#optional").value;
        let city=document.querySelector("#city").value;
        let region=document.querySelector("#region").value;
        let state=document.querySelector("#state").value;
        let zipCode=document.querySelector("#zipCode").value;
        let phoneno=document.querySelector("#PhoneNo").value;

    let Address=JSON.parse(localStorage.getItem("UserAddress")) || [];
    console.log("Address:",Address)

    if(firstname==='' || lastname==='' || address==='' || city==='' || region==='' || state==='' || zipCode==='' || phoneno===''){
        alert("insert total information")
    }

    else{
        let AdressObj = {
            firstname:firstname,
            lastname:lastname,
            address:address,
            optional:optional,
            city:city,
            region:region,
                    zipCode:zipCode,
            state:state,
    phoneno:phoneno

        }
        Address.push(AdressObj);
        localStorage.setItem("UserAddress",JSON.stringify(Address))
        
        //console.log("Address:",Address)
        window.location.href="shipping.html";
    }
    
    // document.getElementById("ShippingAddress").reset();
}