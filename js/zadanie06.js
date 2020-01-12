var button_1 = document.getElementById("button-1");
let button_2 = document.getElementById("button-2");
let button_3 = document.getElementById("button-3");
let productList = document.getElementById("shopping-list");
let new_lm = document.createElement("li");

button_1.addEventListener("click", function(){ 
    new_lm.innerHTML = "Chleb"
    productList.appendChild(new_lm);

});