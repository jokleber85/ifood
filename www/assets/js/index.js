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