let UserAccount = JSON.parse(localStorage.getItem("UserData"));
//console.log("UserAccount:",UserAccount)

document.getElementById("email").innerText=UserAccount[UserAccount.length-1].email;
let userandmail= document.getElementById("email").innerText;
//console.log("userandmail:", userandmail)


let Address = JSON.parse(localStorage.getItem("UserAddress"));
//console.log("Address:",Address)

document.getElementById("address").innerText=
                                        (Address[Address.length-1].optional+" "+
                                         Address[Address.length-1].city+", "+
                                         Address[Address.length-1].state+", "+
                                         Address[Address.length-1].zipCode+", "+
                                         Address[Address.length-1].region);


let useraddr= document.getElementById("address").innerText;
//console.log("useraddr:", useraddr)

let method=document.getElementById("free").innerText
//console.log(method)
localStorage.setItem("UserandMail",JSON.stringify(userandmail))
localStorage.setItem("ShippinADDress",JSON.stringify(useraddr))
localStorage.setItem("Method",JSON.stringify(method))