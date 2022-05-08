const cart1 = JSON.parse(localStorage.getItem("cart")) || [];

console.log(cart1);
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







let UserAccount = JSON.parse(localStorage.getItem("UserData"));

console.log("UserAccount:", UserAccount)

document.getElementById("email").innerText = UserAccount[UserAccount.length - 1].email;


let Address = JSON.parse(localStorage.getItem("UserAddress"));
console.log("Address:", Address)

document.getElementById("address").innerText =
    (Address[Address.length - 1].optional + " " +
        Address[Address.length - 1].city + ", " +
        Address[Address.length - 1].state + ", " +
        Address[Address.length - 1].zipCode + ", " +
        Address[Address.length - 1].region)


        // new added 




