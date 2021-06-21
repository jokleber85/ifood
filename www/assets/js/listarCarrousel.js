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

$.get("https://ef2273e445b5.ngrok.io/lojas", function(data){

    for(i=0; i <= 5; i++){
        $('#topRestaurantes').trigger('add.owl.carousel', [$(`<div class="item item__carrousel"><a class="item__container"><div class="item__medalha"></div><span><img src="${data[i].image_loja}"></span><div class="item__texto"><p>${data[i].nome_loja}</p><p>${data[i].info_loja}</p></div></a></div>`), i]).trigger('refresh.owl.carousel');
    }
});

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