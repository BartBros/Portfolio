const $card = $('.card');
const $cardBody = $('.cb-hidden');

$($cardBody).hide();

$(document).ready(function(){
  $($card).on('mouseenter', function(event){
    $(this).children( $cardBody ).show(2000);
  });
});
$($card).on('mouseleave', function(event){
  $cardBody.hide(2000);
});
