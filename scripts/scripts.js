let arr=[]
import{nav} from '../components/nav.js'
import{bottom , lasthree} from '../components/bottom.js'
// import {lasthree} from './components/bottom.js'
document.getElementById("head").innerHTML=nav()
document.getElementById("foot").innerHTML=bottom()
document.getElementById("lasthree").innerHTML=lasthree()
function obj(a,b){
    this.source=a,
    this.text=b
}

let one=  new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2227080_large.jpg?v=1649703475","DRESSES")
let two = new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313201861_RLLZ_2_large.jpg?v=1651370370","PUMPS & HEELS")
let three= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/DiorByDior-2-00086-1_large.jpg?v=1609777367","SUNGLASSES")
let four= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313122420_RLLZ_1_large.jpg?v=1649157447","MEN SNEAKERS")
let five= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312134872_RLLZ_1_large.jpg?v=1651124960","WOMEN SNEAKERS")
let six= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1881083_large.jpg?v=1637943584","MEN SNEAKERS")
let seven= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/b3becc07-657c-48a6-8373-8d3d3d9cc31a_large.jpg?v=1644496612","MEN TSHIRT")
let eight= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/MIknqmmliBqlojVFQ5Vkrxaj3kuvD7Z4-25_c432c99f-30f1-45a7-803c-efae45c59a4f_large.jpg?v=1651327676","WOMEN TOP")
let nine= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/tb8040rose-11_b26d5a1c-9f7e-45b8-ae93-8f8f17aeb59f_large.jpg?v=1634340453","JEWELERY")
let ten= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1161192845_RLLZ_2_large.jpg?v=1651354997","WOMEN DENIM")

console.log(arr)
arr.push(one,two,ten,three,four,five,six,seven,eight,nine)

arr.map(({source,text})=>{

    let div = document.createElement("div")
   let image= document.createElement("img")
   image.src=source
   let hii =  document.createElement("h6")
   hii.innerText=text

   div.append(image,hii)


   document.getElementById("items").append(div)
})
                                        //   new arrival  
let newarr=[]
                                                                   
function newdata(a,b,c,d,e){
   this.source=a,
   this.text=b,
   this.money=c,
   this.original=d,
   this.percent = e                                                                    
}

                                                                                               


// Sale
// Quick view
// 
// Regular priceSale price from  
// Sale
// Quick view
// 
// Regular priceSale price 
// Sale
// Quick view
// 
// Regular priceSale price from  
// Sale
// Quick view
// 
// Regular priceSale price 
let aone = new newdata("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1631786_1080x.jpg?v=1651239390","'A' LEATHER HANDBAG","$1,426", "$1,116.36" ,"Save 22%")
let tone = new newdata("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1566289_1080x.png?v=1635615949","'DIVA!' T-SHIRT","$694","$420.60","Save 39%")
let thone = new newdata("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2246722_1080x.jpg?v=1649684335","'LA MEDUSA RUBBER MULES'","$492","$385.29","Save 22%")
let foone = new newdata("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2087946_1080x.jpg?v=1638291787","'FOR RIDING' RAINBOOTS","$473","$347.65","Save 27%")
let fione = new newdata("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2149730_76cf6aa7-502b-4b5b-bd8e-31e1af9ed2bb_1080x.jpg?v=1646588764","'KIKI' STRAW CANOTIER HAT","$669","$505.65","Save 24%")

newarr.push(aone,tone,thone,foone,fione)

newarr.map(({source,text,money,original,percent})=>{

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


   document.getElementById("new-arrival").append(div)
})

                            //  ............trending now ......... 
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
let tfive = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010994296_RLLZ_1_447156e9-6d32-41e7-b8c0-18bf5a4996a7_900x.jpg?v=1651012809","STUART WEITZMAN LOWLAND SUEDE OVER-THE-KNEE BOOT","$998","$264.99","Save 75%")
let tsix = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311784215_RLLZ_1_900x.jpg?v=1651348609","GUCCI DOUBLE G LEATHER BELT","$449","$230","Save 49%")
let tseven = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/8d21d1b4-11d7-4354-9fde-fd28589989ea_900x.jpg?v=1628207566","STUART WEITZMAN LAINE SUEDE COMBAT BOOT","$679","$279","Save 66%")
let teight = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/DQ0171-26X-1_900x.jpg?v=1603923722","OFF WHITE C/O VIRGIL ABLOH WHITE ARROWS CARRY ON SUITCASE","$489","$210","Save 54%")
let tnine = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/CatStyleDior-2-KB72K-1_900x.jpg?v=1609777428","DIOR RECTANGULAR SUNGLASSES CATSTYLEDIOR 2 KB72K GRAY/RUTHENIUM 54MM","$852","$423","Save 67%")
let tten = new hut("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/9f8823b8-195e-4999-9b82-440c7c81bc9d_900x.jpg?v=1627405619","DSQUARED2 RECTANGULAR SUNGLASSES DQ0171 26X CRYSTAL 52MM 171","$951","$333","Save 88%")

sub.push(ttone,ttwo,tthree,tfour,tfive,tsix,tseven,teight,tnine,tten)

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


   document.getElementById("trending-now").append(div)
})

// https://www2.hm.com/en_us/women/products/dresses/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36


let black= document.getElementById("black")


    setInterval(() => {
        black.innerHTML="<p>WELCOME TO BLUEFLY : luxury brand at discounted price</p>"
    }, 2000);
    
    
    setInterval(() => {
        black.innerHTML="<p>FREE SHIPPING On Order Over $99</p>"
    }, 3000);
    

  



