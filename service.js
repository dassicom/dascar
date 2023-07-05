let nav = document.querySelector("nav");

//select the open element
let open = document.querySelector("#menuIcon");

//select the close element
let close = document.querySelector("#timeIcon")
//Open button
open.addEventListener("click", function(){
    nav.style.left = "0.1px"
})

//Close button
close.addEventListener("click",function(){
    nav.style.left ="-850px"
})