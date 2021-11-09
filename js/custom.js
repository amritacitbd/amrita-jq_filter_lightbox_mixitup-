$(document).ready(function(){
    
    
    $('.banner-slider').slick({
        // autoplay:true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev  left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next right-arrow"></i>',
    
    });

    // scroll function
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 30){
            $('nav').addClass('nav-fix');
        }else{
            $('nav').removeClass('nav-fix');  
        }

    });



    // product filter
    var mixer =  mixitup('.product-main');


    //product category active
    $('.product-category ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        });

    
    // product pop-up
    $('.venobox').venobox({
        arrowsColor:'#709dca',
        closeBackground:'#ffc155',
        closeColor: 'firebrick',
        spinner: 'three-bounce',
    }); 

    // popup show
    $(window).load(function(){
        $(this).addClass('sale-popup');
    });
  
});






