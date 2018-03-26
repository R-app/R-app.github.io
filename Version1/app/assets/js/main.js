$(document).ready(function() {
  console.log('jquery ready');
    if (($(window).width() >= 767) && ($(window).width() < 1200)){
    //  $('.drop-content').hide();
      $('.drop-content').hide();
    }
});

//window resize function every 150 px or so- to help with demonstrations
var toggle = 0;
$('.dropbtn').click( function () {

  if (($(window).width() >= 767) && ($(window).width()) < 1200) {

    if (toggle == 1) {
      $('.header').css('width', "100%");
      $('.drop-content').fadeOut(150);
      $('.header__medium').css('visibility', 'visible');
      toggle -= 1;

    } else if ( toggle == 0) {
        $('.header').css('width', "55%");
        $('.header__medium').css('visibility', 'hidden');
        $('.drop-content').css('position', 'absolute');
        $('.drop-content').fadeIn(150);
        $('.drop-content').css('position', 'absolute');
        $('.drop-content').css('top', '0px');
        $('.drop-content').css('right', '8.25rem');
        $('.drop-content').css('background', 'white');
        toggle += 1;
      }
  }
});
