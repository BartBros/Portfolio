const $card = $('.card');
const $cardBody = $('.cb-hidden');

$($cardBody).hide();

$(document).ready(function(){
  $($card).on('mouseenter', function(event){
    $(this).children( $cardBody ).show();
  });
});
$($card).on('mouseleave', function(event){
  $cardBody.hide(1000);
});
