$card = $('.card')

$($card).mouseenter(function(event){
    $(event.target).children('.card-body').show();
  });

  $($card).mouseleave(function(event){
    $(event.target).children('.card-body').hide();
  });