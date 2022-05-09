

import{nav,time} from "./components/nav.js"

import { bottom, lasthree } from './components/bottom.js'




document.getElementById("head").innerHTML=nav()

time()

// document.getElementById("head").innerHTML = nav()
document.getElementById("foot").innerHTML = bottom()
document.getElementById("lasthree").innerHTML = lasthree()


const container = JSON.parse(localStorage.getItem("item"))
// console.log(container)
// console.log(container);
// import {nav,bottom,lasthree} from "./components/nav.js"
let cartData=JSON.parse(localStorage.getItem("cart")) || []

    let image = document.createElement('div');
    let main_div = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');

    image.setAttribute("id","image")
    main_div.setAttribute("id","main_div")

    div2.setAttribute("id","div2")
    div3.setAttribute("id","div3")
    div4.setAttribute("id","div4")

    
    let imag = document.createElement('img')
    imag.src = container.image1;
    imag.setAttribute("id","image-main")
    image.append(imag);

    let br = document.createElement('h3');
    br.innerText = container.brand;
    br.style.color = "#7c768a"
    
    let tl = document.createElement('h2');
    tl.innerText = container.title;

    div2.append(br, tl); 

    let pr = document.createElement('p');
    pr.innerText = container.price;

    let str = document.createElement('s');
    str.innerText = container.str_price;

    

    let dis = document.createElement('p');
    dis.innerText = container.discount;
    dis.style.color = "#ff6e6e"
    div3.append(pr, str,dis);
    let div10 = document.createElement("div");
    div10.innerText= "FREE SHIPPING ON ORDERS OVER $99";
    div10.setAttribute("id","free");
    let div5 = document.createElement('div');
    div5.innerText = 34;
    let div6 = document.createElement('div');
    div6.innerText = 35;
    let div7 = document.createElement('div');
    div7.innerText = 36;
    let div8 = document.createElement('div');
    div8.innerText = 37;
    let div9 = document.createElement('div');
    div9.innerText = 38;
    div4.append(div5,div6,div7,div8,div9);
 
    let div11= document.createElement('p');
    div11.innerText="Only 1 left in stock!";
    div11.setAttribute("id","div11")
    let atcbtn= document.createElement("button");
    atcbtn.innerText="Add to Cart"
    atcbtn.setAttribute("id","atcbtn");
    atcbtn.addEventListener("click",function(){

        addToCart(container);
    });
    let paradiv= document.createElement("p")
    paradiv.innerText = "Please note that this item ships internationally and expedited shipping is not available. Delivery may be delayed."
    paradiv.setAttribute("id","para1")

    let paradiv2= document.createElement("p")
    paradiv2.textContent = "Usually ships in 1 to 2 business days ";
    paradiv2.setAttribute("id","para2")
    main_div.append(div2, div3,div10,div4,div11,atcbtn,paradiv,paradiv2)

    
    // let div12= document.createElement("img")
    // div12.src="https://i.ibb.co/znKrR95/Screenshot-719.png" 
    // div12.setAttribute("id","likes");
    document.querySelector("#box").append( image,main_div)
    // document.querySelector("#box1").append( div12);


    function addToCart( container){
        // console.log(container)
        cartData.push(container);
        localStorage.setItem("cart",JSON.stringify(cartData));
        window.location.href="index.html"
        // window.open("cart.html");
    }
    
    // five images
    let sub=[]

function hut(a,b,c,d,e){
    this.source=a,
    this.text=b,
    this.money=c,
    this.original=d,
    this.percent = e                                                                    
 }
let ttone = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/8f593ac8-3f8b-43c7-a514-44cceecabe50_900x.jpg?v=1644499879","BURBERRY YELLOW BURBERRY VINTAGE CHECK HIGH-TOP SNEAKERS","$580","$369.75","Save 40%")
let ttwo = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/wtlliMyyv3hcuS7RGVS0VZojPouPYfsw-25_900x.jpg?v=1607399172","ROXY WOMENS DOWN WINTER PUFFER COAT","$500","$248.98","Save 50%")
let tthree = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Monsieur-1-XWY1I-1_900x.jpg?v=1628917488","DIOR PILOT SUNGLASSES MONSIEUR 1 XWY1I GOLD/BLACK/HAVANA 63MM","$968","$495.00","save 47%")
let tfour = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1885891_900x.jpg?v=1637852340","JACQUEMUS BROWN 'LE BAMBINO' LEATHER CROSSBODY PURSE","$585","$245","Save 54%")
let tfive = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311784215_RLLZ_1_900x.jpg?v=1651348609","GUCCI DOUBLE G LEATHER BELT","$449","$230","Save 49%")

sub.push(ttone,ttwo,tthree,tfour,tfive)

sub.map(({source,text,money,original,percent})=>{

    let div = document.createElement("div")
   let image= document.createElement("img")
   image.src=source
   let hii =  document.createElement("h6")
   hii.innerText=text
   let mny= document.createElement("p")
   mny.innerText=money
   mny.style.textDecoration="line-through"
   let org = document.createElement("p")
   org.innerText=original
   let per = document.createElement("p")
   per.innerText=percent
   per.style.color="pink"
   let div1= document.createElement("p")
   div1.style.display="flex"
   div1.style.justifyContent="space-around"
   div1.append(mny,org,per)

   div.append(image,hii,div1)


   document.getElementById("trendingnow").append(div)

})