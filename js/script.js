const $card = $('.card');
const $cardBody = $('.cb-hidden');

$($cardBody).hide();

$(document).ready(function(){
  $($card).on('mouseenter', function(event){
    $(this).children( $cardBody ).show();
  });
});
$($card).on('mouseleave', function(event){
  $cardBody.hide();
});


$('.carousel').carousel({
  interval: false
})

$(document).on("click","#next",function(e){
  e.preventDefault();
  var id = $(this).attr("href"),
      topSpace = 30;
//alert(id);
  $('html, body').animate({
    scrollTop: $(id).offset().top - topSpace
  }, 800);
});