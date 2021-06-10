$('.owl-carousel').owlCarousel({
    loop:true,
    margin:35,
    nav: true,
    navText: [""],
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