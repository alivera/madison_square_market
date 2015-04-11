var  main = function() {
    
    $('.dropdown').click(function() {
        
    $(this).children('.dropdown-menu').toggle();
    $(this).siblings().children('.dropdown-menu').hide();
    
    /* Long version
    
        $('.banner').unslider();
    
    $('.banner').not('.dropdown').click(function() {
        $('.dropdown-menu').hide();
    });
    
    $('.cart').click(function() {
        $('.cart .dropdown-menu').toggle();
        $('.account .dropdown-menu').hide();
        $('.help .dropdown-menu').hide();
    });
    
    $('.account h3').click(function() {
        $('.cart .dropdown-menu').hide();
        $('.account .dropdown-menu').toggle();
        $('.help .dropdown-menu').hide();
    });
    
    $('.help h3').click(function() {
        $('.cart .dropdown-menu').hide();
        $('.account .dropdown-menu').hide();
        $('.help .dropdown-menu').toggle();
    });
    
    End of long version*/
        
    });
    
    $('.banner').unslider();
};

$(document).ready(main);