
const cart1 = JSON.parse(localStorage.getItem("cart")) || [];

// console.log(cart1);
let sum = 0;
cart1.map(({ image1, brand, title, price }) => {

    sum += Math.floor(Number(price.replace(/(\$|,)/g, "")))

    //   document.getElementById("").innerText = 
    let div = document.createElement("div")
    div.setAttribute("id", "main")


    let divone = document.createElement("div")
    // divone.setAttribute("id","divone")

    let divtwo = document.createElement("div")
    // divone.setAttribute("id","divtwo")

    let divthree = document.createElement("div")
    // divone.setAttribute("id","divthree")
    divthree.append(price)
    divthree.setAttribute("id", "price")

    let image = document.createElement("img")
    image.src = image1
    image.setAttribute("id", "image")

    let tit = document.createElement("p")
    tit.innerText = brand
    tit.setAttribute("id", "tit")
    // tit.innerText = 

    let bran = document.createElement("p")
    bran.innerText = title
    bran.setAttribute("id", "bran")

    let subtotal = document.createElement("h1");
    subtotal.innerText = `$${sum}`;
    divone.append(image)
    divtwo.append(tit, bran)

    div.append(divone, divtwo, divthree)

    document.getElementById("one").append(div)

    document.getElementById("sub").innerText = `$${sum}`
    document.getElementById("tota").innerText = `$${sum}`

})


document.querySelector("#textValue").innerText = `Your Cart Total is (${cart1.length} items) $ ${Math.ceil(sum)}`;







let data = JSON.parse(localStorage.getItem("UserAddress"))

let last = data[data.length - 1]



console.log(last)


document.getElementById("email").innerText = last.phoneno;

// console.log(JSON.parse(localStorage.getItem("UserandMail")))


document.getElementById("address").innerText = last.address;


// document.getElementById("methodfree").innerText=JSON.parse(localStorage.getItem("Method"));


document.querySelector("#promo").addEventListener("click", discount);

var count = 0;
function discount() {
    var input = document.querySelector("#promoInput").value;

    if (input == "masai30" && count == 0) {
        sum = sum * 0.7;
        document.querySelector("#textValue").innerText = `Your Cart Total is (${cart1.length} items) $ ${Math.ceil(sum).toFixed(2)}`;
        document.getElementById("sub").innerText = `$${Math.ceil(sum).toFixed(2)
            }`
        document.getElementById("tota").innerText = `$${Math.ceil(sum).toFixed(2)
            }`
        alert("Promo applied");
        count++;
    }
    else if (input == "masai30" && count > 0) {
        alert("Promo Code already in use");
    }
    else {
        alert("Enter valid promo code !");
    }

}

console.log(sum)