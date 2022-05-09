

var boxtitle = document.createElement("div");
boxtitle.textContent = "CART"
boxtitle.style.marginLeft = "15px"
boxtitle.style.marginTop = "5px"
boxtitle.style.fontSize = "25px"
boxtitle.style.fontWeight = "600"

let icon = `<svg mlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>`
var closecart = document.createElement("div")
closecart.innerHTML = icon
closecart.setAttribute("id", "close-icon")
closecart.addEventListener("click", closeNav)
closecart.style.cursor = "pointer"

var divcc = document.createElement("div")

divcc.append(boxtitle, closecart)
divcc.style.display = "flex"
divcc.style.justifyContent = "space-between"
document.getElementById("inside").append(divcc)




const cart1 = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cart1);
let sum = 0;

cart1.map(function ({ image1, title, price, discount },index) {


  sum += Math.floor(Number(price.replace(/(\$|,)/g, "")))

  document.getElementById("count").innerText = `$${sum}`
  // console.log(sum)

  let finaldiv = document.createElement("div")

  let div = document.createElement("div")
  div.setAttribute("id", "insidecart")



  let image = document.createElement("img")
  image.src = image1

  let div2 = document.createElement("div")
  div2.setAttribute("id", "insidecart2")
  div2.append(image)

  let pric = document.createElement("p")
  pric.innerText = price
  let titl = document.createElement("p")
  titl.innerText = title
  let discoun = document.createElement("p")
  discoun.innerText = discount

  let btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.setAttribute("id","removebtn")
  btn.addEventListener("click", function () {
    removeitem(index);
  });


  div.append(titl, pric, discoun,btn)
  finaldiv.append(div2, div)

  document.getElementById("qwery").append(finaldiv)
})

function removeitem(index) {
  cart1.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart1));
  window.location.reload();
}






function openNav() {
  // document.querySelector(".nav").style.visibility="hidden"
  document.getElementById("cart11").style.display = "block";
  document.getElementById("cart11").style.width = "450px";
  document.getElementById("cart-icon").style.marginRight = "250px";
}



function closeNav() {
  location.reload()
  // document.querySelector(".nav").style.visibility="visible"
  document.getElementById("cart11").style.display = "none";
  document.getElementById("cart11").style.width = "0";
  document.getElementById("close-icons").style.marginLeft = "0";
}


