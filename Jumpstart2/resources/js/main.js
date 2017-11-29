//carousel

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#slideshow');
}, 3500);


//hide navbar on scroll

var previousScroll = 0,
navbarOrgOffset = $('.navbar').offset().top;

$('.navbar').height($('.navbar').height());

$(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll + " and " + previousScroll + " and " + navbarOrgOffset);
    if(currentScroll > navbarOrgOffset) {
        if (currentScroll > previousScroll) {
            $('.navbar').fadeOut();
        } else {
            $('.navbar').fadeIn();
            $('.navbar').addClass('fixed');
        }
    } else {
         $('.navbar').removeClass('fixed');   
    }
    previousScroll = currentScroll;
});