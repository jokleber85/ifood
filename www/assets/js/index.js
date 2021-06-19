$(document).ready(function(){
    $("#navToggler").css("display","none");
})

function fechar(botao){
    if (botao == "voucher"){
        const voucher = document.getElementById("voucher");
        voucher.style.display = "none";
    }
    else{
        const toggler = document.getElementById("navToggler");
        toggler.style.display = "none";
    }
}

function showToggler(){
    const toggler = document.getElementById("navToggler");
    if (toggler.style.display == "block"){
        toggler.style.display = "none";
    }else{
        toggler.style.display = "block";
    }
}

var scrollHeaderBottom = function() {
  if (window.scrollY >= 140) {
    $(".header").css("border-bottom", "1px solid #A6A29F");
    $(".header").css("border-opacity", "0.2");
    $(".header").css("transition", "all 0.4s");
} else {
    $(".header").css("border-bottom", "1px solid #F7F7F7");
  }
};

window.addEventListener("scroll", scrollHeaderBottom);