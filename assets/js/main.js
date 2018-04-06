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
      //$('.header').css('width', "100%");
      $('.drop-content').fadeOut(150);
      toggle -= 1;

    } else if ( toggle == 0) {
        $('.drop-content').fadeIn(150);
        $('.drop-content').css('position', 'absolute');
        $('.drop-content').css('top', '98px');
        $('.drop-content').css('right', '0');
        $('.drop-content').css('background', 'white');
        $('.nav__ul').css({
          'width': '112px',
          'border-bottom-left-radius' : '20px',
          'background-color': '#2f5572'});
        $('.drop-content').children().css({
          'display': 'block',
          'z-index':'2',
          'background-color': '#2f5572',
          'border-bottom-left-radius' : '20px',
          'opacity': '0.7'});
        $('.dropped-list').css({
          'filter': 'invert(100%)',
          'padding': '0.5rem 0',
          'padding-left': '0.9375rem'});
        toggle += 1;
      }
  }
});
