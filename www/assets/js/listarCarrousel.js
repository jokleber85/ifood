$('#topRestaurantes').owlCarousel({
    loop:true,
    margin:35,
    nav: true,
    navText: ['<span class="icone"><i class="small material-icons">chevron_left</i></span>','<span class="icone"><i class="small material-icons">chevron_right</i></span>'],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('#topMercados').owlCarousel({
    loop:true,
    margin:35,
    nav: true,
    navText: ['<span class="icone"><i class="small material-icons">chevron_left</i></span>','<span class="icone"><i class="small material-icons">chevron_right</i></span>'],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$.get("https://d7f8b56e2b97.ngrok.io/lojas", function(data){
    console.log(data);
});

/* $(document).ready(function(){
    $.get("https://d7f8b56e2b97.ngrok.io/lojas", function(data){
        console.log(data);
        let item = "";
        for(i=0; i <= data.lenght; i++){
            item = $("#topRestaurantes").append(`<div class="item item__carrousel"><a class="item__container"><div class="item__medalha"></div><span><img src=""></span><div class="item__texto"><p>${data[i].nome_loja}</p><p>Lanches</p></div></a></div>`);
        }
    });
    owl.data('#topRestaurantes').addItem(item); 
    owl.reinit(); 

}); */

/* $(document).ready(function(){
    $.get("https://d7f8b56e2b97.ngrok.io/lojas", function(data){
        console.log(data);
        for(i=0; i <= 7; i++){
            $("#topRestaurantes").append(`<div class="item item__carrousel"><a class="item__container"><div class="item__medalha"></div><span><img src=""></span><div class="item__texto"><p>${data[i].nome_loja}</p><p>Lanches</p></div></a></div>`);
        }
    });
});  */