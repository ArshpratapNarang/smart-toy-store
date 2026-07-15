/* ================= PRODUCT DATABASE ================= */

const products = [

{
id:1,
name:"LEGO Classic Creative Brick Box",
category:"lego",
price:1499,
image:"https://m.media-amazon.com/images/I/91HNswR5tIL.jpg"
},

{
id:2,
name:"LEGO City Police Station",
category:"lego",
price:4999,
image:"https://m.media-amazon.com/images/I/91S7lqvujQL.jpg"
},

{
id:3,
name:"LEGO Technic Racing Car",
category:"cars",
price:3999,
image:"https://m.media-amazon.com/images/I/81JExJZOpoL._AC_UF1000,1000_QL80_.jpg"
},

{
id:4,
name:"Hot Wheels 20 Car Pack",
category:"cars",
price:1299,
image:"https://m.media-amazon.com/images/I/81Ykz9TAacL._AC_UF1000,1000_QL80_.jpg"
},

{
id:5,
name:"Remote Control Sports Car",
category:"cars",
price:2499,
image:"https://fliptoy.in/cdn/shop/files/fullblack.webp?v=1705522502"
},

{
id:6,
name:"Monster Truck RC",
category:"cars",
price:2999,
image:"https://ozzytoys.com/cdn/shop/files/da46f2_f0fcc745df1c44c8adbd11747ab0b5f3_mv2.webp?v=1741266515"
},

{
id:7,
name:"Barbie Dreamhouse Doll",
category:"dolls",
price:5999,
image:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/OMayKzBF6-product.jpeg"
},

{
id:8,
name:"Disney Princess Doll",
category:"dolls",
price:1499,
image:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/disney-princess/494514258/0/Cb9hf_vV4B-494514258-1_6183.webp"
},

{
id:9,
name:"Teddy Bear Soft Toy",
category:"dolls",
price:699,
image:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/9rPfYssbJ-product.png"
},

{
id:10,
name:"Superhero Action Figure",
category:"dolls",
price:1299,
image:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/Psr9hLKHr-product.jpeg"
},

{
id:11,
name:"UNO Card Game",
category:"games",
price:299,
image:"https://rukminim1.flixcart.com/image/480/640/ka9ytu80/card-game/a/y/f/uno-card-game-pack-of-2-richuzers-original-imafrvm87sqpnfv8.jpeg?q=90"
},

{
id:12,
name:"Monopoly Board Game",
category:"games",
price:999,
image:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000491668397/NjuKbNP_gF-491668397-5.jpg"
},

{
id:13,
name:"Chess Wooden Board",
category:"games",
price:799,
image:"https://tennex.in/cdn/shop/files/woodenchess.jpg?v=1703683035"
},

{
id:14,
name:"500 Piece Puzzle",
category:"games",
price:599,
image:"https://m.media-amazon.com/images/I/81HL5LI4vEL.jpg"
},

{
id:15,
name:"Science Experiment Kit",
category:"education",
price:1499,
image:"https://geniusbox.in/cdn/shop/products/SCIENCELAB.jpg?v=1605607258"
},

{
id:16,
name:"Remote Control Helicopter",
category:"rc",
price:2499,
image:"https://m.media-amazon.com/images/I/71yICFdhWjL._AC_UF1000,1000_QL80_.jpg"
},

{
id:17,
name:"Toy Train Set",
category:"cars",
price:1799,
image:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/ralleyz/492410187/0/iu_-sk9sen-492410187-1_3458.webp"
},

{
id:18,
name:"Kids Kitchen Playset",
category:"dolls",
price:1999,
image:"https://m.media-amazon.com/images/I/81lSlrKGJjL._AC_UF1000,1000_QL80_.jpg"
},

{
id:19,
name:"Doctor Play Kit",
category:"education",
price:899,
image:"https://m.media-amazon.com/images/I/81SajWvl1rL.jpg"
},

{
id:20,
name:"Building Blocks Set",
category:"lego",
price:1299,
image:"https://m.media-amazon.com/images/I/71jVEjU17nL.jpg"
},

{
id:21,
name:"Magnetic Drawing Board",
category:"education",
price:699,
image:"https://kuviyal.in/cdn/shop/files/7101pO9PQUL._SL1500__1.jpg?v=1715698168"
},

{
id:22,
name:"Kids Learning Tablet",
category:"education",
price:1499,
image:"https://5.imimg.com/data5/SELLER/Default/2022/6/PB/XC/MU/10641454/yhthtrhrr-500x500.jpeg"
},

{
id:23,
name:"Musical Keyboard Toy",
category:"education",
price:1999,
image:"https://rukminim2.flixcart.com/image/480/640/xif0q/musical-keyboard/d/z/n/37-0-6-37-keys-portable-piano-keyboard-piano-keyboard-toy-kids-original-imahgrxbf5ja7zfr.jpeg?q=90"
},

{
id:24,
name:"Art Craft Kit",
category:"education",
price:799,
image:"https://m.media-amazon.com/images/I/81CAUjqAPkL.jpg"
},

{
id:25,
name:"Wooden Puzzle",
category:"games",
price:599,
image:"https://m.media-amazon.com/images/I/71rJwGG3jDL._AC_UF1000,1000_QL80_.jpg"
},

{
id:26,
name:"Baby Walker Toy",
category:"education",
price:2499,
image:"https://storio.in/cdn/shop/files/612s3AjkXCL.jpg?v=1716550310"
},

{
id:27,
name:"Animal Plush Set",
category:"dolls",
price:999,
image:"https://m.media-amazon.com/images/I/71q8pTePLfL.jpg"
},

{
id:28,
name:"Mini Doll House",
category:"dolls",
price:2999,
image:"https://m.media-amazon.com/images/I/711NymWw1AL.jpg"
},

{
id:29,
name:"Princess Castle",
category:"dolls",
price:2499,
image:"https://m.media-amazon.com/images/I/81xfjyNEmQL._AC_UF1000,1000_QL80_.jpg"
},

{
id:30,
name:"Toy Airport Set",
category:"cars",
price:1499,
image:"https://ik.imagekit.io/wsflvn81wdp/toys/mn-Chad_Valley_Auto_Light_and_Sound_Airport_Playset_7857373.jpg"
},

{
id:31,
name:"Fire Truck Toy",
category:"cars",
price:999,
image:"https://m.media-amazon.com/images/I/71CyDYzE-FL.jpg"
},

{
id:32,
name:"Police Car Toy",
category:"cars",
price:799,
image:"https://duckduckbaby.in/cdn/shop/files/DDB11396_1_c8f37036-aad9-453a-bd73-3b5e5800023a.jpg?v=1722248974"
},

{
id:33,
name:"Construction Vehicle Set",
category:"cars",
price:1299,
image:"https://m.media-amazon.com/images/I/81McLX952WL.jpg"
},

{
id:34,
name:"Kids Bowling Set",
category:"games",
price:899,
image:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000491185769/1Dy0LZWlvy-491185769_3.jpg"
},

{
id:35,
name:"Car Racing Track",
category:"cars",
price:1999,
image:"https://m.media-amazon.com/images/I/71SE0siauwL._AC_UF1000,1000_QL80_.jpg"
},

{
id:36,
name:"RC Drift Car",
category:"rc",
price:2999,
image:"https://ozzytoys.com/cdn/shop/files/Turbo-Racing-C65-1_76-RTR-Desktop-Drift-RC-Car_with-Gyro_-Turbo-Racing-21033752.webp?v=1741265925"
},

{
id:37,
name:"Robot Toy",
category:"education",
price:1499,
image:"https://m.media-amazon.com/images/I/71j6OP1zHPL.jpg"
},

{
id:38,
name:"Talking Robot",
category:"education",
price:2499,
image:"https://m.media-amazon.com/images/I/61GXaZ+fvlL.jpg"
},

{
id:39,
name:"Magic Drawing Board",
category:"education",
price:599,
image:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000491232250/NKNZUxZfNx-491232250-1.jpg"
},

{
id:40,
name:"Memory Game",
category:"games",
price:499,
image:"https://m.media-amazon.com/images/I/71zDd0F7EqL.jpg"
},

{
id:41,
name:"Jenga Wooden Blocks",
category:"games",
price:799,
image:"https://m.media-amazon.com/images/I/815ZoU2clxL.jpg"
},

{
id:42,
name:"Rubik's Cube",
category:"games",
price:299,
image:"https://m.media-amazon.com/images/I/41sqsWBLnNL._AC_UF1000,1000_QL80_.jpg"
},

{
id:43,
name:"Basketball Hoop Toy",
category:"games",
price:1299,
image:"https://m.media-amazon.com/images/I/71-lcrbbq6L.jpg"
},

{
id:44,
name:"Football Training Set",
category:"games",
price:999,
image:"https://m.media-amazon.com/images/I/71DswqG8FpL.jpg"
},

{
id:45,
name:"Kids Guitar",
category:"education",
price:1499,
image:"https://m.media-amazon.com/images/I/71vsmKtgWYL.jpg"
},

{
id:46,
name:"Toy Camera",
category:"education",
price:799,
image:"https://5.imimg.com/data5/SELLER/Default/2022/12/KR/TY/RL/114458975/3mp-blue-digital-kids-toy-camera.jpg"
},

{
id:47,
name:"Makeup Kit For Kids",
category:"dolls",
price:999,
image:"https://m.media-amazon.com/images/I/81MWEMMjn2L.jpg"
},

{
id:48,
name:"Jewellery Making Kit",
category:"education",
price:699,
image:"https://m.media-amazon.com/images/I/71X-cEKsd6L.jpg"
},

{
id:49,
name:"Clay Modelling Kit",
category:"education",
price:499,
image:"https://m.media-amazon.com/images/I/81Y4vTaa-5L.jpg"
},

{
id:50,
name:"Water Gun Toy",
category:"games",
price:399,
image:"https://m.media-amazon.com/images/I/51PUryGU8GL.jpg"
},

{
id:51,
name:"Bubble Machine",
category:"games",
price:699,
image:"https://m.media-amazon.com/images/I/71MWu38en+L.jpg"
},

{
id:52,
name:"Remote Control Boat",
category:"rc",
price:3499,
image:"https://m.media-amazon.com/images/I/71Oqy9JWHIL.jpg"
}

];





/* ================= VARIABLES ================= */


let cart=[];


let currentCategory="all";





/* ================= DOM ================= */


const productContainer=
document.getElementById("products");


const cartCount=
document.getElementById("cartCount");


const cartPanel=
document.getElementById("cartPanel");


const overlay=
document.getElementById("overlay");


const cartItems=
document.getElementById("cartItems");


const cartTotal=
document.getElementById("cartTotal");







/* ================= DISPLAY PRODUCTS ================= */


function displayProducts(list=products){


productContainer.innerHTML="";


list.forEach(product=>{


productContainer.innerHTML += `


<div class="card">


<img src="${product.image}">


<div class="card-content">


<h3>${product.name}</h3>


<p class="price">
₹${product.price}
</p>


<button onclick="addCart(${product.id})">

Add To Cart

</button>


</div>


</div>


`;

});


}

displayProducts();








/* ================= SEARCH ================= */


document
.getElementById("searchInput")
.addEventListener("input",(e)=>{


let value=e.target.value.toLowerCase();


let result=products.filter(product=>

product.name.toLowerCase()
.includes(value)

);


displayProducts(result);


});









/* ================= FILTER ================= */


function filterCategory(category){


currentCategory=category;


applyFilters();


}



document
.getElementById("categoryFilter")
.onchange=applyFilters;



document
.getElementById("priceRange")
.oninput=function(){


document.getElementById("priceValue")
.innerText=this.value;


applyFilters();


};



function applyFilters(){


let max=
document.getElementById("priceRange").value;



let result=
products.filter(product=>{


return (

(currentCategory==="all" ||
product.category===currentCategory)

&&

product.price<=max

);


});


displayProducts(result);


}








/* ================= CART ================= */


function addCart(id){


let item=
products.find(product=>product.id===id);


let existing=
cart.find(product=>product.id===id);


if(existing){

existing.qty++;

}

else{

cart.push({

...item,

qty:1

});


}


updateCart();

showToast("Added to cart");


}





function updateCart(){


cartItems.innerHTML="";


let total=0;


cart.forEach(item=>{


total += item.price*item.qty;



cartItems.innerHTML+=`

<div class="cart-item">


<div>

${item.name}

<br>

₹${item.price}

</div>


<div>


<button onclick="changeQty(${item.id},-1)">
-
</button>


${item.qty}


<button onclick="changeQty(${item.id},1)">
+
</button>


</div>


</div>

`;



});


cartTotal.innerHTML=total;


cartCount.innerHTML=
cart.reduce((sum,item)=>sum+item.qty,0);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


}





function changeQty(id,value){


let item=
cart.find(product=>product.id===id);


item.qty+=value;



if(item.qty<=0){

cart=
cart.filter(product=>product.id!==id);

}


updateCart();


}





/* ================= CART OPEN CLOSE ================= */


function toggleCart(){


cartPanel.classList.add("open");

overlay.classList.add("show");


}



function closeCart(){


cartPanel.classList.remove("open");

overlay.classList.remove("show");


}







/* ================= CHECKOUT ================= */


function openCheckout(){


document
.getElementById("checkoutModal")
.classList.add("active");


}



function closeCheckout(){


document
.getElementById("checkoutModal")
.classList.remove("active");


}



function placeOrder(){


showToast(
"Payment Successful 🎉"
);


cart=[];

updateCart();


closeCheckout();

closeCart();


}









/* ================= AUTH ================= */


let users=
JSON.parse(localStorage.getItem("users"))
|| [];





function signupUser(){


let email=
document.getElementById("signupEmail").value;


let password=
document.getElementById("signupPassword").value;



users.push({

email,

password

});


localStorage.setItem(
"users",
JSON.stringify(users)

);


showToast(
"Account Created"
);


closeAuth();


}






function loginUser(){


let email=
document.getElementById("loginEmail").value;


let password=
document.getElementById("loginPassword").value;



let user=
users.find(
u=>
u.email===email
&&
u.password===password
);



if(user){


localStorage.setItem(
"currentUser",
email
);


showToast(
"Login Successful"
);


closeAuth();


}

else{


showToast(
"Invalid Login"
);


}



}





function closeAuth(){


document
.querySelectorAll(".modal")
.forEach(
modal=>
modal.classList.remove("active")
);


}




document
.querySelectorAll(".close-modal")
.forEach(btn=>{


btn.onclick=closeAuth;


});



document
.getElementById("loginOpen")
.onclick=()=>{


document
.getElementById("loginModal")
.classList.add("active");


};



document
.getElementById("signupOpen")
.onclick=()=>{


document
.getElementById("signupModal")
.classList.add("active");


};










/* ================= TOAST ================= */


function showToast(message){


let toast=
document.getElementById("toast");


toast.innerHTML=message;


toast.classList.add("show");



setTimeout(()=>{


toast.classList.remove("show");


},2000);



}






/* ================= LOAD CART ================= */


cart=
JSON.parse(localStorage.getItem("cart"))
|| [];


updateCart();
