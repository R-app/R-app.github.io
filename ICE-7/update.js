$(document).ready(function() {
  $(".preview").bind('focus mouseover', function() {
    $('#image').text($(this).attr("alt")); // in .text of #image, store attr "alt" for THIS
    $('#image').css('backgroundImage', 'url("' + $(this).attr("src") + '")');
  })

  $(".preview").bind('focus mouseleave', function() {
    $('#image').text("Hover over an image below"); // in .text of #image, store attr "alt" for THIS
    $('#image').css('backgroundImage', 'url()');
  })
});
