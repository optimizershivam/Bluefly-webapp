// import shop from "../signincomponents/shop.js";

// document.getElementById("shop_Products").innerHTML = shop();


// var UserAccount = JSON.parse(localStorage.getItem("UserData"));
// console.log("UserAccount:",UserAccount)

let data =JSON.parse(localStorage.getItem("UserData"))
console.log("data:",data)
document.querySelector("form").addEventListener("submit", myfunction);

    // var btn =document.querySelector("#Submit1");
    // btn.addEventListener("Submit1",myfunction);

    function myfunction(){
        event.preventDefault()
        let email =document.querySelector("#Email1").value;
        let password =document.querySelector("#Password1").value;
        console.log(email,password)
        let count =0;
         data.map(function(el){
          if(el.email==email && el.password==password){
             count++;
             console.log("el",el);
             
             let stored=JSON.parse(localStorage.getItem("UserData"));
             let ele=el;
             stored.push(ele);
             localStorage.setItem("UserData",JSON.stringify(stored));
             let result=JSON.parse(localStorage.getItem("UserData"));
             console.log("result",result)
             //console.log("ele",ele)
             window.location.href="account.html"
          }
    
         })
         if(count>0){
             alert("Sign in Successfully =>");
            //  window.location.href="index.html"
         }
            
    }