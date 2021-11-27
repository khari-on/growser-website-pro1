
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-box').onclick = () =>{
    searchForm.classList.toggle('active');
    userlogin.classList.remove("active");
    shoppingcart.classList.remove("active");

}

let shoppingcart= document.querySelector(".shop-box");

document.querySelector("#shopping-box").onclick= () =>{
    shoppingcart.classList.toggle("active");
    userlogin.classList.remove("active");
    
    searchForm.classList.remove('active');
}

let userlogin=document.querySelector(".login");

 document.querySelector("#login-btn").onclick= () =>{
     userlogin.classList.toggle("active");
    
     shoppingcart.classList.remove("active");
     searchForm.classList.remove('active');
 }

 window.onscroll= () =>{
    userlogin.classList.remove("active");
    shoppingcart.classList.remove("active");
    searchForm.classList.remove('active');
 }