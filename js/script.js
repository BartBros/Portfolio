const $card = $('.card');
const $cardBody = $('.cb-hidden');
const $projectInfo = $('.project-info');
const $projectColumn = $('.project-column');

$($cardBody).hide();
$($projectInfo).hide();

$(document).ready(function () {
  $($card).on('mouseenter', function (event) {
    $(this).children($cardBody).show();
  });
  $($card).on('mouseleave', function (event) {
    $cardBody.hide();
  });
  $($projectColumn).on('mouseenter', function (event) {
    $(this).children($projectInfo).show();
  });
  $($projectColumn).on('mouseleave', function (event) {
    $($projectInfo).hide();
  });
});



// $(document).on("click","#next",function(e){
//   e.preventDefault();
//   var id = $(this).attr("href"),
//       topSpace = 30;
// //alert(id);
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - topSpace
//   }, 800);
// });

$(document).on("click", "#next", function (e) {
  e.preventDefault();
  var id = $(this).attr("href")
  //alert(id);
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 800);
});