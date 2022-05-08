// cart
// const cartobj = JSON.parse(localStorage.getItem("cart"))||[]
// console.log(cartobj);
// let cartIcon = document.querySelector("#cart-icon");
// let cart = document.querySelector(".cart");
// let closeCart = document.querySelector("#close-cart");
// //Open cart
// cartIcon.onclick = () => {
//     cart.classList.add("active");
// };
// //close cart
// closeCart.onclick = () => {
//     cart.classList.remove("active");
// };

// // cart working
// if(document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoaded', ready);
// }
// else{
//     ready();
// }


// // // Function
// function ready(){
//     // remove item from cart

//     var removeCartButtons = document.getElementsByClassName('cart-remove')
//     console.log(removeCartButtons);

//     for( var i = 0 ; i < removeCartButtons.length; i++){
//         var button = removeCartButtons[i];
//         button.addEventListener("click", removeCartItem);
//     }
//     //Quantity change
//     var quantityInputs = document.getElementsByClassName('cart-quantity')
//     for(var i = 0; i< quantityInputs.length;i++){
//         var input = quantityInputs[i];
//         input.addEventListener("change",quantityChanged)
//     }
//     // Add to cart
//     var addCart = document.getElementsByClassName('add-cart')
//     for (var i=0; i< addCart.length; i++){
//         var button = addCart[i]
//         button.addEventListener("click", addCartClicked)
//     }

//     //Checkout Button working
//     document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
//  }
// // Checkout Button
// function buyButtonClicked(){
//     alert("Your Orde is Placed")
//     var cartContent = document.getElementsByClassName("cart-content")[0]
//     while (cartContent.hasChildNodes()) {
//         cartContent.removeChild(cartContent.firstChild)
//     }
//     updatetotal();
// }

//  //Remove Items From Cart

//  function removeCartItem(event) {
//      var buttonClicked =  event.target;
//      buttonClicked.parentElement.remove();
//      updatetotal();
//  }
// //quantity changes

// function quantityChanged(event){
//     var input = event.target;
//     if(isNaN(input.value) || input.value <= 0){
//         input.value = 1;
//     }
//     updatetotal();
// }
// //Add to Cart

// function addCartClicked(event){
//     var button= event.target
//     var shopProducts = button.parentElement
//     var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
//     var price = shopProducts.getElementsByClassName('price')[0].innerText;
//     var productImg = shopProducts.getElementsByClassName('product-img')[0].src;

//     addProductToCart(title,price,productImg);
//     updatetotal();
// }

// function addProductToCart(title,price,productImg){
//     var cartShopBox = document.createElement("div");
//     cartShopBox.classList.add('cart-box');
//     var cartItems = document.getElementsByClassName("cart-content")[0];
//     var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
//     for(var i =0; i< cartItemsNames.length; i++) {
//         if(cartItemsNames[i].innerText == title){
//         alert("You have already add this item to cart");
//         return;
//     }
  
// }
// var cartBoxContent = `
//                     <img src="${productImg}" alt="" class="cart-img">
//                     <div class="detail-box">
//                         <div class="cart-product-title">${title}</div>
//                         <div class="cart-price">${price}</div>
//                         <input type="number" value="1" class="cart-quantity">
//                     </div>
//                     <!-- Remove Cart -->
//                     <i class='bx bxs-trash-alt cart-remove'></i>`;
// cartShopBox.innerHTML = cartBoxContent;
// cartItems.append(cartShopBox);
// cartShopBox
//     .getElementsByClassName("cart-remove")[0]
//     .addEventListener("click", removeCartItem);
// cartShopBox
//     .getElementsByClassName("cart-quantity")[0]
//     .addEventListener("change", quantityChanged)

// }
// //  Update Total

//  function updatetotal(){
//      let cartContent = document.getElementsByClassName('cart-content')[0]
//      let cartBoxes = cartContent.getElementsByClassName('cart-box')
//      let total = 0;
//      for(let i =0; i<cartBoxes.length;i++){
//          let cartBox = cartBoxes[i]
//          let priceElement = cartBox.getElementsByClassName('cart-price')[0]
//          let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
//          let price = parseFloat(priceElement.innerText.replace("$",""));
//          let quantity = quantityElement.value
//          total = total + (price * quantity);
//         // If price contain some cent value
//         total = Math.round(total * 100) / 100;
//          document.getElementsByClassName('total-price')[0].innerText = "$" + total;

//      }
//  }

 

const cart1 = JSON.parse(localStorage.getItem("cart"))||[];
console.log(cart1);
cart1.innerHTML=null;
// import {nav,bottom,lasthree} from "./components/nav.js"
        let cartbox =document.createElement('div');
        cartbox.setAttribute("id","cartbox1")
        
        let mainimage = document.createElement('div');
        let title1 = document.createElement('div');
        let detailbox = document.createElement('div');
        detailbox.setAttribute("id","detailbox1")
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');

        cart1.map(function(elem,index){
        var box=document.createElement("div")
        // box.setAttribute("id","box")

        var boxtitle= document.createElement("div");
        boxtitle.textContent="CART"
        boxtitle.style.marginLeft="15px"
        boxtitle.style.marginTop="5px"
        boxtitle.style.fontSize="25px"
        boxtitle.style.fontWeight="600"

        var closecart=document.createElement("p")
        closecart.textContent = "close"
        closecart.style.cursor="pointer"
        
        var divcc=document.createElement("div")
       
        divcc.append(boxtitle,closecart)
        divcc.style.display="flex"
        divcc.style.justifyContent="space-between"
        
        
        var image = document.createElement("img");
        image.src= elem.image1;
        image.setAttribute("id","boximage")
        mainimage.append(image);

        var name=document.createElement("p")
        name.textContent= elem.brand;
        name.setAttribute("id","brandname")

        var name2= document.createElement("h2");
        name2.textContent=elem.title;
        name2.style.fontSize="1rem"
        name2.style.textTransform="uppercase"
        

        var price = document.createElement("p");
        price.textContent= elem.price;
   
        var quantity = document.createElement("p")
        quantity.textContent="1"
        for(var i = 0; i< quantity.length;i++){
                    var input = quantity[i];
                    input.addEventListener("change",quantityChanged)
                }

        var total = document.createElement("div");

        var subtotal = document.createElement("p");
        subtotal.innerText="SUBTOTAL";
        var price1 = document.createElement("p");
        price1.innerText=elem.price

        total.append(subtotal,price1)
        total.style.display="flex"
        total.style.justifyContent="space-around"

        var para = document.createElement("p")
        para.textContent= "Shipping, taxes, and discounts codes calculated at checkout."
        para.style.fontSize="smaller"
        para.style.marginTop="5px"
        
        detailbox.append(name2,price,quantity);
        cartbox.append(image,detailbox)
        
        var btn = document.createElement("button");
        btn.innerText="CHECKOUT";
        btn.setAttribute("id","btn")
        btn.addEventListener("click",function(){
           
            
        })
        box.append(divcc);
        document.querySelector("#cart11").append(box,cartbox,para,total,btn);
    })

      // //quantity changes

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}