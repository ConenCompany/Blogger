
const responsive ={
    0 : {
        items : 1
    },
    320 :{
        items : 1
    },
    560 :{
        items: 1
    },
    800 : {
        items: 2
    },
    1200 : {
        items: 3
    }
}
$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')


    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse')
    })
    // owl carousel for blog
    $('.owl-carousel').owlCarousel({
        margin:30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots:true,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive : responsive
    });
});