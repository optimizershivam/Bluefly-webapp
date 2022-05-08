
const cart1 = JSON.parse(localStorage.getItem("cart"))||[];

const price11 = JSON.parse(localStorage.getItem("cart"))||[];
// console.log(price11);
let sum=0;
cart1.map(({image1,brand,title,price})=>{

    sum += Math.floor(Number(price.replace(/(\$|,)/g, "")))  

//   document.getElementById("").innerText = 
    let div= document.createElement("div")
    div.setAttribute("id","main")


    let divone= document.createElement("div")
    // divone.setAttribute("id","divone")

    let divtwo = document.createElement("div")
    // divone.setAttribute("id","divtwo")

    let divthree= document.createElement("div")
    // divone.setAttribute("id","divthree")
    divthree.append(price)
    divthree.setAttribute("id","price")

    let image = document.createElement("img")
    image.src=image1
    image.setAttribute("id","image")

    let tit = document.createElement("p")
    tit.innerText=brand
    tit.setAttribute("id","tit")
    // tit.innerText = 

    let bran= document.createElement("p")
    bran.innerText=title
    bran.setAttribute("id","bran")

    let subtotal=document.createElement("h1");
    subtotal.innerText=`$${sum}`;
    divone.append(image)
    divtwo.append(tit,bran)

    div.append(divone,divtwo,divthree)

    document.getElementById("one").append(div)

    document.getElementById("sub").innerText=`$${sum}`
    document.getElementById("tota").innerText=`$${sum}`
    
})
// console.log(cart1)


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